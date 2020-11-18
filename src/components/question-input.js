import React from "react";
import { Field } from "./field";
import { Label } from "./label";
import { Input } from "./input";
import { Required } from "./required";

export function QuestionInput({ index, question, answer, onChange }) {
  const handleChange = event => {
    onChange({ questionIndex: index, answer: event.target.value });
  };

  return (
    <Field>
      <Label htmlFor={`q-${index}`}>
        {question.label} {question.required && <Required />}
      </Label>

      <Input
        id={`q-${index}`}
        type={question.htmlType}
        value={answer}
        onChange={handleChange}
        required={question.required}
      />
    </Field>
  );
}
