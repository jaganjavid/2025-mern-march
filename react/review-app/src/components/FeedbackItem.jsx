import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Card from "./sharder/Card"
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";


const FeedbackItem = ({item}) => {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
    
  return (
    <Card>
        
        <div className='card-wrapper'>
          <h4>{item.text}</h4>

          <div>
            <div className="edit">
              <MdEdit size="20px" onClick={() => editFeedback(item)}/>
            </div>

            <div className="delete">
              <MdDelete size="20px" onClick={() => deleteFeedback(item.id)}/>
            </div>
          </div>
        </div>
        
    </Card>
  )
}

export default FeedbackItem