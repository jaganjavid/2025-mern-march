import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";




const FeedbackList = ({ handleDelete }) => {


  const { feedBack, isLoading } = useContext(FeedbackContext);

  if(isLoading) return <h3>Loading...</h3>

  if(feedBack.length === 0)return <h3>There is no item added yet</h3>

    
  return (
    feedBack.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    ))
  )
}

export default FeedbackList