import React, { Children, FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="h-full overflow-hidden py-6 px-4">{children}</div>;
};

export default Layout;
