import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppContext } from "../App";
import { Button } from "./button";
import { QuestionInput } from "./question-input";
import { QuestionOption } from "./question-option";
import { QuestionOptions } from "./question-options";
import { QuestionRange } from "./question-range";

export function Page() {
  const { answers, dispatchAnswers, pages } = useContext(AppContext);
  const { pageindex: pageIndexString } = useParams();
  const history = useHistory();
  const pageIndex = parseInt(pageIndexString, 10);
  const page = pages[pageIndex];
  const pageAnswers = answers[pageIndex];
  const isLastPage = pageIndex === pages.length - 1;

  const handleSubmit = event => {
    event.preventDefault();
    history.push(isLastPage ? "/results" : `/p/${pageIndex + 1}`);
  };

  const handleChange = ({ questionIndex, answer }) => {
    dispatchAnswers({
      type: "update",
      page: pageIndex,
      question: questionIndex,
      answer
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{page.title}</h1>

      {page.questions.map((question, index) => {
        if (question.type === "input") {
          return (
            <QuestionInput
              key={index}
              index={index}
              question={question}
              answer={pageAnswers.questions[index].answer}
              onChange={handleChange}
            />
          );
        }

        if (question.type === "option") {
          return (
            <QuestionOption
              key={index}
              index={index}
              question={question}
              answer={pageAnswers.questions[index].answer}
              onChange={handleChange}
            />
          );
        }

        if (question.type === "options") {
          return (
            <QuestionOptions
              key={index}
              index={index}
              question={question}
              answer={pageAnswers.questions[index].answer}
              onChange={handleChange}
            />
          );
        }

        if (question.type === "range") {
          return (
            <QuestionRange
              key={index}
              index={index}
              question={question}
              answer={pageAnswers.questions[index].answer}
              onChange={handleChange}
            />
          );
        }

        return null;
      })}

      <Button type="submit">{isLastPage ? "See Results" : "Next Page"}</Button>
    </form>
  );
}
