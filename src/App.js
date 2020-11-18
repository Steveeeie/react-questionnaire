import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { pages } from "./data";
import { answersReducer } from "./answersReducer";
import { createInitialAnswers } from "./createInitialAnswers";
import { GlobalStyles } from "./components/global-styles";
import { Container } from "./components/container";
import { Welcome } from "./components/welcome";
import { Results } from "./components/results";
import { Page } from "./components/page";

export const AppContext = createContext();

export default function App() {
  const [answers, dispatchAnswers] = useReducer(
    answersReducer,
    createInitialAnswers(pages)
  );

  return (
    <AppContext.Provider value={{ answers, dispatchAnswers, pages }}>
      <GlobalStyles />
      <Container>
        <BrowserRouter>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/p/:pageindex" component={Page} />
          <Route exact path="/results" component={Results} />
        </BrowserRouter>
      </Container>
    </AppContext.Provider>
  );
}
