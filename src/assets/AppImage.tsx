import React, { ReactNode } from "react";
import "./Global.css";
import { observer } from "mobx-react";

interface AppImageProps {
  children: ReactNode;
}
const AppImage: React.FC<AppImageProps> = ({ children }) => {
  return <div className="image">{children}</div>;
};

export default observer(AppImage);
