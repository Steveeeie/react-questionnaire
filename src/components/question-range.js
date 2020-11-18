import React from "react";
import styled from "styled-components";
import { Field } from "./field";
import { Label } from "./label";
import { Required } from "./required";

const Wrapper = styled.div`
  background-color: #eaeaea;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  padding: 8px;
`;

const Max = styled.div`
  flex: none;
  padding: 8px;
`;

const Min = styled.div`
  flex: none;
  padding: 8px;
`;

const Input = styled.input`
  flex: 1 1 auto;
`;

const Value = styled.div`
  background-color: #222;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #fff;
  padding: 8px;
  text-align: center;
`;

export function QuestionRange({ index, question, answer, onChange }) {
  const handleChange = event => {
    onChange({ questionIndex: index, answer: event.target.value });
  };

  return (
    <Field>
      <Label htmlFor={`q-${index}`}>
        {question.label} {question.required && <Required />}
      </Label>

      <Wrapper>
        <Min>{question.range.min}</Min>

        <Input
          id={`q-${index}`}
          type="range"
          min={question.range.min}
          max={question.range.max}
          step={question.range.step}
          value={answer}
          required={question.required}
          onChange={handleChange}
        />

        <Max>{question.range.max}</Max>
      </Wrapper>

      <Value>{answer}</Value>
    </Field>
  );
}
