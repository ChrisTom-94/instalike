import Submit from "components/forms/Submit";
import Textarea from "components/forms/Textarea";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  commentErrorsSelector,
  isLoadingCommentSelector,
} from "redux/api/selectors";
import { ApiResourceID } from "redux/api/types";
import {
  addPostCommentAsync,
  updatePostCommentAsync,
} from "redux/posts/thunks";

const CommentForm = ({
  comment = "",
  idPost,
  idComment = undefined,
}: {
  comment: string;
  idPost: ApiResourceID;
  idComment?: ApiResourceID;
}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>(comment);
  const { text: textError } = useSelector(commentErrorsSelector);
  const isLoading = useSelector(isLoadingCommentSelector);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (idComment) dispatch(updatePostCommentAsync(idComment, idPost, text));
      else dispatch(addPostCommentAsync(idPost, text));
    },
    [idComment, idPost, dispatch, text]
  );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <Textarea
        error={textError}
        name="text"
        value={text}
        onChange={(key, target) => setText(target.value)}
        isRequired={false}
      />
      <Submit text="Comment" disabled={isLoading} />
    </form>
  );
};

CommentForm.defaultProps = {
  idComment: undefined,
};

export default CommentForm;
