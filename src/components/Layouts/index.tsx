// components/Layouts/index.tsx
import React, {ReactNode} from "react";
import Sidebar from "../Sidebar";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
