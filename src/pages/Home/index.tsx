import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Contacts } from "../../containers/Contacts";
import { Relatories } from "../../containers/Relatories";
import { SendMessage } from "../../containers/SendMessage";

import { Container, Main } from "./styles";

export function Home() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  function handleOpenSideNav() {
    setIsSideNavOpen(true);
  }
  function handleCloseSideNav() {
    setIsSideNavOpen(false);
  }
  return (
    <>
      <Header openSideNav={handleOpenSideNav} />
      <Router>
        <Container>
          <SideBar isOpen={isSideNavOpen} closeSideNav={handleCloseSideNav} />
          <Main>
            <Switch>
              <Route path="/" component={Contacts} exact />
              <Route path="/message" component={SendMessage} />
              <Route path="/relatories" component={Relatories} />
            </Switch>
          </Main>
        </Container>
      </Router>
    </>
  );
}
