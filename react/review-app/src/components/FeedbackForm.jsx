import { useContext, useState, useEffect } from "react"
import Button from "./sharder/Button"
import Card from "./sharder/Card"
import FeedbackContext from "../context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid';




const FeedbackForm = () => {


  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);


  const [text, setText] = useState("");
  const [btnDisable, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    const trimmedText = e.target.value.trimStart();

    let textError = "";

    if(trimmedText.length < 10){
      textError = "Character must be at leat 10"
      setMessage(textError);
      setBtnDisabled(true);
    }else{
      setMessage("");
      setBtnDisabled(false);
    }



    setText(trimmedText);
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     
     const newFeedback = {
      //  id:uuidv4(),
       text:text
     };

    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback);
    }else {
      addFeedback(newFeedback);
    }

    setText("");
    setBtnDisabled(true);
  }


  useEffect(() => {
      // console.log("Hello");
      if(feedbackEdit.edit === true){
        setBtnDisabled(false);
        setText(feedbackEdit.item.text)
      }

      // console.log("Hello");

  }, [feedbackEdit]);

  return (
    <Card>
       <h3>Add your Reviews</h3>

       <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <input type="text" placeholder='Enter yout ideas' value={text}
            onChange={handleTextChange}/>
            <Button version={feedbackEdit.edit ? "secondary" :"primary"} type="submit" isDisbled={btnDisable}>
               {feedbackEdit.edit ? "Update" : "Send"}
            </Button>
          </div>


          <p className="message">{message && message}</p>
       </form>
    </Card>
  )
}

export default FeedbackForm