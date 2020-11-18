import { createInitialAnswers } from "./createInitialAnswers";
import { pages } from "./data";

export function answersReducer(state, action) {
  switch (action.type) {
    case "update":
      const newState = [...state];
      newState[action.page].questions[action.question].answer = action.answer;
      return newState;
    case "reset":
      return createInitialAnswers(pages);
    default:
      return state;
  }
}
