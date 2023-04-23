import React, { memo } from "react";
import { getUser, useAppSelector } from "store";

export const AccountPage = memo(() => {
  const { isAuth, email, creationTime } = useAppSelector(getUser);

  return (
    <div>
      {isAuth ? (
        <>
          <span>Your email:{email}</span>
          <span>Creation time:{creationTime}</span>
        </>
      ) : (
        <span>Please, sign in</span>
      )}
    </div>
  );
});
