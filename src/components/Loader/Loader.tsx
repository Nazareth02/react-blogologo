import { override } from "config";
import { CircleLoader } from "react-spinners";
import { Color } from "ui";

export const Loader = () => {
  return <CircleLoader cssOverride={override} color={Color.PRIMARY_SECOND} speedMultiplier={3} />;
};
