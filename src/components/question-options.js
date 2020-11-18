import React from "react";
import { Field } from "./field";
import { Label } from "./label";
import { Required } from "./required";

export function QuestionOptions({ index, question, answer, onChange }) {
  const handleChange = event => {
    onChange({ questionIndex: index, answer: event.target.value });
  };

  return (
    <Field as="fieldset">
      <Label as="legend">
        {question.label} {question.required && <Required />}
      </Label>

      {question.options.map(option => {
        return (
          <label key={option}>
            <input
              name={`q-${index}`}
              type="radio"
              value={option}
              checked={answer === option}
              onChange={handleChange}
              required={question.required}
            />
            {option}
          </label>
        );
      })}
    </Field>
  );
}
