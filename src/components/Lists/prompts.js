// prompts.js
const PROFILE_PROMPTS_KEY = 'profilePrompts';
const MESSAGE_PROMPTS_KEY = 'messagePrompts';

export const saveProfilePromptsToLocalStorage = (profilePrompts) => {
  localStorage.setItem(PROFILE_PROMPTS_KEY, JSON.stringify(profilePrompts));
};

export const getProfilePromptsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(PROFILE_PROMPTS_KEY)) || [];
};

export const saveMessagePromptsToLocalStorage = (messagePrompts) => {
  localStorage.setItem(MESSAGE_PROMPTS_KEY, JSON.stringify(messagePrompts));
};

export const getMessagePromptsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(MESSAGE_PROMPTS_KEY)) || [];
};
