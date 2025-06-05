import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Card from "./sharder/Card"

const FeedbackItem = ({item, handleDelete}) => {


    
  return (
    <Card>
        
        <div className='card-wrapper'>
          <h4>{item.text}</h4>

          <div>
            <div className="edit">
              <MdEdit size="20px"/>
            </div>

            <div className="delete">
              <MdDelete size="20px" onClick={() => handleDelete(item.id)}/>
            </div>
          </div>
        </div>
        
    </Card>
  )
}

export default FeedbackItem