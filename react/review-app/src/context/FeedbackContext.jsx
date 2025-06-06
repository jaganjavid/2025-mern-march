import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [feedBack, setFeedback] = useState([]);

  const [feedBackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
  });

  useEffect(() => {
    fetchFeedback();
  }, []);


  // Fetch Feedback

  const fetchFeedback = async () => {

    const response = await fetch("http://localhost:3000/posts");

    const data = await response.json();

    setFeedback(data);

    setIsLoading(false);
  }


  // const [feedBack, setFeedback] = useState([
  //   {
  //     id:1,
  //     text:"sample text 1 from context"
  //   },
  //   {
  //     id:2,
  //     text:"sample text 2 from context"
  //   },
  //   {
  //     id:3,
  //     text:"sample text 3 from context"
  //   },
  //   {
  //     id:4,
  //     text:"sample text 4 from context"
  //   }
  // ])



  const addFeedback = async (newFeedback) => {
    // newFeedback.id = uuidv4();

    const response = await fetch("http://localhost:3000/posts", {
       method:"POST",
       headers: {
        "Content-type":"application/json"
       },
       body: JSON.stringify(newFeedback)
    })

    const data = await response.json();

    setFeedback([data, ...feedBack]);
  }

  const updateFeedback = async(id, updItem) => {

    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method:"PUT",
      headers: {
       "Content-type":"application/json"
      },
      body: JSON.stringify(updItem)
   })

    const data = await response.json();
    
    setFeedback(feedBack.map((item) => item.id === id ? {...item, ...data} : item));

  }


  const deleteFeedback = async(id) => {

    if(window.confirm("Are you sure?")){

      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method:"DELETE",
     })

      setFeedback(feedBack.filter((item) => item.id !== id));
    }
   
  }

  

  const editFeedback = (item) => {
    setFeedbackEdit({
      item:item,
      edit:true
    })
  };

  return (
    <FeedbackContext.Provider value={{
      feedBack,
      feedBackEdit,
      isLoading,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext