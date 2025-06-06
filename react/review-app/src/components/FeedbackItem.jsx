import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Card from "./sharder/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";




const FeedbackItem = ({item}) => {

  const { deleteFeedback , editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
        <div className="card-wrapper">
        <h4>{item.text}</h4>
       
       <div> 
            
            <div className="edit">
                <FaEdit color="#283606" size="20px" onClick={() => editFeedback(item)}/>
            </div>
            <div className="delete">
                <MdDelete color="#cd1e1e" size="20px" onClick={() => deleteFeedback(item.id)}/>
            </div>
       </div>
    </div>
    </Card>
  )
}

export default FeedbackItem