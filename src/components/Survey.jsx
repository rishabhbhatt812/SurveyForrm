import React, { useState  } from 'react';
import Question from './Questions';
import ProgressBar from './ProgressBar';
import "./Survey.css"
import { useNavigate } from 'react-router-dom';
import { FaFaceSmileWink } from "react-icons/fa6";
// Sample Questions
const defaultQuestions = [
  { id: 1, text: 'How satisfied are you with our products?', type: 'rating', scale: 5 },
  { id: 2, text: 'How fair are the prices compared to similar retailers?', type: 'rating', scale: 5 },
  { id: 3, text: 'How satisfied are you with the value for money of your purchase?', type: 'rating', scale: 5 },
  { id: 4, text: 'On a scale of 1-10 how would you recommend us to your friends and family?', type: 'rating10', scale: 10 },
  { id: 5, text: 'What could we do to improve our service?', type: 'text' },
];

const Survey = () => {

  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submit , setsubmit] = useState(false);

  

  const handleAnswer = (question, answer) => {
    setAnswers(
      { ...answers,[question]:answer}
    );
    
    localStorage.setItem('Rating', JSON.stringify({ ...answers, [question]: answer}));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < defaultQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
   
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const SubmitSurvey=()=>{
    setsubmit(true);
    setTimeout(()=>{
     navigate("/");
    },2000)
  }

 

  return (<div className='main'>
    {submit ? (<div className='message move'>
       <div>
       <span><FaFaceSmileWink size={32} /></span>
        <h2>Thanku For Your Response!</h2>
        <button onClick={()=>{navigate("/")}} >Ok</button>
       </div>
    </div>) : (<>
    <ProgressBar
        current={currentQuestionIndex + 1}
        total={defaultQuestions.length}
      />
    <div className="survey">
   
      <Question
        question={defaultQuestions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        />
      <div className="navigation-buttons">
        {currentQuestionIndex > 0 && <button className='prev' onClick={prevQuestion}>←</button>}
        {currentQuestionIndex !== defaultQuestions.length - 1 ? 
        <button className='next' onClick={nextQuestion}>→</button>:
        <button className='submit' onClick={SubmitSurvey}>Submit</button>}
      </div>
    </div>
     </> )}
    </div>
  );
};

export default Survey;
