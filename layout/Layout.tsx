import React, { ReactNode } from "react";
import { View } from "react-native";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <View>{children}</View>;
};

export default Layout;
