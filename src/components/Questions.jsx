import React , {useEffect, useState} from 'react';

const Question = ({ question, onAnswer , ratingStar  }) => {
   
  const emojiList = ['😡', '😞', '😐', '😊', '😍'];
  const rating = ['1','2','3','4','5','6','7','8','9','10'];
  const [selectedRating, setSelectedRating] = useState();
  const [Improvement , setImprovement] = useState();
  

  const handleInputChange = (e ) => {
    setImprovement(e.target.value);
    onAnswer(question.text, e.target.value);
    
  };

  const handleRating = (index) => {

    setSelectedRating(index-1);
     onAnswer(question.text , index);

  };

 

  useEffect(()=>{
    setTimeout(()=>{

    
    setSelectedRating();
    },2000)
  })


  return (
    <div className="question">
      <h2>{question.text}</h2>
      {question.type === 'rating' && (
       <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
      {emojiList.map((emoji,index) => (
        <li
          key={index+1}
          
          onClick={() => handleRating(index+1)}
          style={{
            fontSize: '2rem',
            cursor: 'pointer',
            margin: '0 10px',
            opacity: selectedRating === index ? 1.08 : 0.7,
          }}
        >
          {emoji}
        </li>
      ))}
    </ul>
      )}
      {question.type ==='rating10'&& (
       rating.map((rating , index)=>{
        return(
          <div key={rating} style={{display:"inline-block"}}>
            <button className='rating' style={{backgroundColor: selectedRating === index ? 'rgb(12, 247, 12)' : 'blue'}} type="radio" name="rating" value={rating} onClick={()=>handleRating(index+1)} placeholder={rating}> {rating} </button>
           </div>
        )
       })
      )}
      {question.type === 'text' && (
        <textarea
          value={Improvement} 
          placeholder='Enter Your Suggestion..'
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default Question;
