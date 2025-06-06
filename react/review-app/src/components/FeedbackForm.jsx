import React, { useContext, useEffect, useState } from 'react'
import Card from './sharder/Card'
import Button from './sharder/Button'
import FeedbackContext from '../context/FeedbackContext'




const FeedbackForm = () => {

  const {addFeedback,feedBackEdit,updateFeedback} = useContext(FeedbackContext);

  // console.log(feedBackEdit);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const [inc, setInc] = useState(0);

  const handleTextChange = (e) => {
    
    const trimmedText = e.target.value.trimStart();
    let textError = "";

    if(trimmedText.length < 10){
      textError = "Feedback must me at 10 char";
      setMessage(textError);
      setBtnDisabled(true)
    }else{
      setMessage("");
      setBtnDisabled(false);
    }

    setText(trimmedText);


  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newFeedback = {
      text
    }

    

    if(feedBackEdit.edit === true){
      updateFeedback(feedBackEdit.item.id, newFeedback);
    } else{
      addFeedback(newFeedback)
    }
  
    setText("");
    setBtnDisabled(true);
  }

  useEffect(() => {

   if(feedBackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedBackEdit.item.text);
   }
    
  }, [feedBackEdit]); 
 
  return (
    <>
      <Card>
         <h3>Add your feedback</h3>

         <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <input type="text" placeholder='Enter your ideas' value={text} onChange={handleTextChange}/>
                <Button type="submit" version="primary" isDisabled={btnDisabled}>Send</Button>
            </div>

            <p className='message'>{message ? message : null}</p>
         </form>
    </Card>

    {/* <button onClick={() => setInc((prev) => prev + 1)}>Click</button>

    {inc} */}
    
    </>
  )
}

export default FeedbackForm