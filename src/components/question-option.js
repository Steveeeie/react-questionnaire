import React from "react";
import { Field } from "./field";
import { Required } from "./required";

export function QuestionOption({ index, question, answer, onChange }) {
  const handleChange = event => {
    onChange({ questionIndex: index, answer: !answer });
  };

  return (
    <Field>
      <label>
        <input
          type="checkbox"
          selected={answer}
          onChange={handleChange}
          required={question.required}
        />
        {question.label} {question.required && <Required />}
      </label>
    </Field>
  );
}
