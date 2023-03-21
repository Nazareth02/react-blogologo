import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "routes";

export const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <span>
        <Link to={ROUTES.HOME}>Back to home</Link>
      </span>
      <h2>Sign In</h2>
      <span>
        Don’t have an account?
        <Link to={ROUTES.HOME + ROUTES.SIGN_UP}> Sign Up</Link>
      </span>
    </div>
  );
};
