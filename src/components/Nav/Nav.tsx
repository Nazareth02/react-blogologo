import { Link } from "react-router-dom";
import { ROUTES } from "routes/routes";

export const Nav = () => {
  return (
    <nav>
      <Link to={ROUTES.FAVORITES}>Favorites</Link>
      <Link to={ROUTES.SIGN_IN}>Sign in</Link>
      {/* <Link to={ROUTES.CONTENT}>Content</Link> */}
    </nav>
  );
};
