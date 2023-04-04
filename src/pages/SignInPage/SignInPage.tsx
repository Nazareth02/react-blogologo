import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "routes";
import { SignInText } from "./styles";

export const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <span>
        <Link to={ROUTES.HOME}>Back to home</Link>
      </span>
      <SignInText>Sign In</SignInText>
      <span>
        Don't have an account?
        <Link to={ROUTES.HOME + ROUTES.SIGN_UP}> Sign Up</Link>
      </span>
    </div>
  );
};
