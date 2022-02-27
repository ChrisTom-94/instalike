import React from "react";

const UserInfo = ({
  biography,
  fullname,
}: {
  biography?: string | null;
  fullname: string;
}) => (
  <div>
    <h2 className="font-bold">
      <p>Hello <span className="text-2xl">👋</span></p>
      <p>
        <span className="text-acquamarine">i&apos;m</span>{" "}
        <span className="text-paradise-pink">{fullname}</span>
      </p>
    </h2>
    {biography ?
      <div>
        <h3>About me 😎</h3>
        <p className="text-md">{biography}</p>
      </div> : 
      <div>
        ...
      </div>
    }
  </div>
);

UserInfo.defaultProps = {
  biography: null,
};

export default UserInfo;
