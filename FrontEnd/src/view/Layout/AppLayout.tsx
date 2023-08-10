import React from "react";
import { styled } from "styled-components";
import GlobalStyles from "../../styles/global";

import store from "../../redux/store";
import { handleOpen } from "../../redux/reducers/menuOpen";

import { NavigationMenu } from "./NavigationMenu";
import { ContactMenu } from "./ContactMenu";

const AppContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  function handleClick() {
    store.dispatch(handleOpen());
  }

  return (
    <LayoutContainer>
      <GlobalStyles />

      <NavigationMenu />
      {children}
      <ContactMenu />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
`;

export default AppLayout;
