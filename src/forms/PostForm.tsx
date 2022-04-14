import UploadFile from "components/forms/UploadFile";
import React, {
  FormEvent,
  useCallback,
  useRef,
  useState,
  useReducer,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingPostSelector, postErrorsSelector } from "redux/api/selectors";
import { ReactComponent as PlusIcon } from "assets/images/plus.svg";
import { ReactComponent as MinusIcon } from "assets/images/minus.svg";
import { PostWithRequired } from "redux/posts/type";
import Input from "components/forms/Input";
import { addPostAsync } from "redux/posts/thunks";
import Submit from "components/forms/Submit";
import { useNavigate } from "react-router-dom";

type PostRequiredWithoutMedias = Omit<PostWithRequired, "resources">;

const ADD = "ADD";
const REMOVE = "REMOVE";

type MediasState = {
  medias: string[];
  length: number;
};

type MediasAction = {
  type: typeof ADD | typeof REMOVE;
  src?: string;
};

const mediasReducer = (state: MediasState, action: MediasAction) => {
  switch (action.type) {
    case ADD:
      return {
        medias: [...state.medias, ""],
        length: state.length + 1,
      };
    case REMOVE:
      return {
        medias: state.medias.filter((media, i) => i !== state.length - 1),
        length: state.length - 1,
      };
    default:
      return state;
  }
};
const initialState = () => ({
  medias: [],
  length: 0,
});

const PostForm = () => {
  const [state, mediasDispatch] = useReducer(mediasReducer, initialState());
  const form = useRef<HTMLFormElement>(null!);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { caption: captionError, location: locationError } =
    useSelector(postErrorsSelector);
  const isLoading = useSelector(isLoadingPostSelector);
  const [textFields, setTextFields] = useState<PostRequiredWithoutMedias>({
    location: "",
    caption: "",
  });

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(form.current);
      await dispatch(addPostAsync(formData));
      navigate("/profile/me");
    },
    [dispatch, navigate]
  );

  const change = useCallback(
    (key: string, target: EventTarget & HTMLInputElement) => {
      setTextFields((fields: PostRequiredWithoutMedias) => ({
        ...fields,
        [key]: target.value,
      }));
    },
    [setTextFields]
  );

  return (
    <section className="my-20 p-3">
      <h2 className="subtitle">Create post</h2>
      <form ref={form} onSubmit={onSubmit} className="flex flex-col gap-2 mt-8">
        <div>
          <p className="apitalize font-bold text-paradise-pink mb-2">Medias</p>
          <div className="flex flex-col gap-4">
            {state.medias.map((media, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <UploadFile key={i} file={media} error={undefined} />
            ))}
          </div>
          <button
            type="button"
            className="mr-2"
            onClick={() => mediasDispatch({ type: ADD })}
          >
            <PlusIcon />
          </button>
          <button
            type="button"
            onClick={() => mediasDispatch({ type: REMOVE })}
          >
            <MinusIcon />
          </button>
        </div>
        <Input
          error={locationError}
          isRequired
          type="text"
          name="location"
          value={textFields.location}
          onChange={change}
          ref={undefined}
        />
        <Input
          error={captionError}
          isRequired
          type="text"
          name="caption"
          value={textFields.caption}
          onChange={change}
          ref={undefined}
        />
        <Submit text="Add" disabled={isLoading} />
      </form>
    </section>
  );
};

PostForm.defaultProps = {
  id: undefined,
};

export default PostForm;
