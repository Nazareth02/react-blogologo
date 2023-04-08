import { imageNotFound } from "assets";
import { ReactEventHandler } from "react";

export const setImageNotFound = (e: ReactEventHandler<HTMLImageElement> | any) => {
  e.currentTarget.src = imageNotFound;
};
