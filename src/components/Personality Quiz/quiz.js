import React, { useState, useEffect } from "react";
import './styles/quiz.css'

const questions = [
  "I am the life of the party and can talk to strangers easily",
  "I dont mind when all the attention is on me",
  "I make an effort to be popular",
  "Socialising with people gives me lots of energy",
  "Meeting new people has never really been a problem",
  "I sympathise with the homeless",
  "I am helpful to the people around me",
  "I dont like being totally objective when making decisions",
  "I enjoy being there for people when they are feeling sad",
  "I am concerned about the welfare of elderly people",
  "I question the wisdom of my elders",
  "I am ambitious",
  "I dont like to do things as they were done in the past, I look to the future",
  "It is not important for me to follow traditions",
  "I am determined to achieve success in this life",
  "I make sure my work is finished on time",
  "I prefer to follow a schedule",
  "I dont like to “go with flow”, what is that?",
  "When I start projects, I tend to always finish them",
  "I like to plan ahead and avoid last minute stress",
];

const PersonalityQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
  
    useEffect(() => {
      const progressIndicator = document.querySelector('.progress-indicator.dynamic-width');
      if (progressIndicator) {
        progressIndicator.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
      }
    }, [currentQuestion]);
  
    const handleNextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Handle quiz completion (e.g., navigate to the next page or finish the quiz)
        console.log('Quiz completed!');
        // You can add logic to navigate to the next page or finish the quiz here
      }
    };

    return (
        <div className="quiz-container">
          <h1 className="quiz-title">Personality Quiz</h1>
          <div className="progress-bar">
            <div className="progress-indicator dynamic-width"></div>
          </div>
          <div className="question">
            <p style={{ fontSize: '36px' }}>{questions[currentQuestion]}</p>
          </div>
          <div className="button-container">
            <button className="agree-button" onClick={handleNextQuestion}>
              Agree
            </button>
            <button className="disagree-button" onClick={handleNextQuestion}>
              Disagree
            </button>
          </div>
        </div>
      );
    };
  
  export default PersonalityQuiz;