import { ReactNode, memo } from "react";
import ReactDOM from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
}

interface PortalProps {
  children: ReactNode;
  target: PortalTarget;
}

export const Portal = memo(({ children, target }: PortalProps) => {
  const root = document.getElementById(target) as HTMLElement;
  return ReactDOM.createPortal(children, root);
});
