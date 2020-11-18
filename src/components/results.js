import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../App";
import { Button } from "./button";

function formatAnswer(answer) {
  if (typeof answer === "boolean") {
    return answer ? "Yes" : "No";
  }

  return answer;
}

export function Results() {
  const history = useHistory();
  const { answers, dispatchAnswers } = useContext(AppContext);

  const handleReset = () => {
    dispatchAnswers({ type: "reset" });
    history.push("/");
  };

  return (
    <>
      <h1>Here are your results&hellip;</h1>

      {answers.map((page, index) => (
        <div key={`q-${index}`}>
          <h4>{page.title}</h4>
          {page.questions.map(question => (
            <div key={question.label}>
              {question.answer && (
                <>
                  <h5>{question.label}</h5>
                  <p>{formatAnswer(question.answer)}</p>
                </>
              )}
            </div>
          ))}
        </div>
      ))}

      <Button onClick={handleReset}>Reset</Button>
    </>
  );
}
