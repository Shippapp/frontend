// personalityquiz.js
const PERSONALITY_QUIZ_QUESTIONS_KEY = 'personalityQuizQuestions';

export const savePersonalityQuizQuestionsToLocalStorage = (quizQuestions) => {
  localStorage.setItem(PERSONALITY_QUIZ_QUESTIONS_KEY, JSON.stringify(quizQuestions));
};

export const getPersonalityQuizQuestionsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(PERSONALITY_QUIZ_QUESTIONS_KEY)) || [];
};
