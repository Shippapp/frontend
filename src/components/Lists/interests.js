

const INTERESTS_KEY = 'interests';

export const saveInterestsToLocalStorage = (interests) => {
  localStorage.setItem(INTERESTS_KEY, JSON.stringify(interests));
};

export const getInterestsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(INTERESTS_KEY)) || [];
};