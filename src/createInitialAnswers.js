function getInitialAnswerValue(question) {
  switch (question.type) {
    case "range":
      return question.range.min;
    case "input":
      return "";
    default:
      return null;
  }
}

export function createInitialAnswers(pages) {
  return pages.map(page => {
    const questions = page.questions.map(question => {
      return {
        label: question.label,
        answer: getInitialAnswerValue(question)
      };
    });

    return {
      title: page.title,
      questions
    };
  });
}
