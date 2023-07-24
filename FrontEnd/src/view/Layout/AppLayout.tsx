import React from "react";

import GlobalStyles from "../../styles/global";

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <GlobalStyles />
      <p>Menu</p>
      {children}
      <p>Menu2</p>
    </div>
  );
}

export default AppLayout;
