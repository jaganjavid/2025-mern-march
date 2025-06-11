import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {


  const [feedback, setFeedback] = useState([
    // {
    //     id:1,
    //     text:"This is a sample 1 from context"
    // },
    // {
    //     id:2,
    //     text:"This is a sample 2 from context"
    // },
    // {
    //     id:3,
    //     text:"This is a sample 3 from context"
    // },
  ]);


  useEffect(() => {
    console.log("Started");

    fecthFeedback();
  }, []);

  // Fetch Feedback

  const fecthFeedback = async () => {

    try {
      const response = await axios.get("http://localhost:3000/tasks");
      setFeedback(response.data);
    } catch (error) {
      console.log("ERROR Fetching Feedback", error.message)
    }

  }

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = async (newFeedback) => {
    try {

      const response = await axios.post("http://localhost:3000/tasks", newFeedback, {
        headers: {
          "Content-type": "application/json",
        },
      })

      setFeedback([response.data, ...feedback]);


    } catch (error) {
      console.log("Error adding feedback", error);
    }

  }

  const updateFeedback = async (id, updItem) => {

    try {
      const response = await axios.put(`http://localhost:3000/tasks/${id}`, updItem, {
        headers: {
          "Content-type": "application/json",
        },
      })

      setFeedback(feedback.map((item) =>
        item.id === id ? { ...item, ...response.data } : item
      ));
    } catch (error) {
      console.log("Error updating feeback", error);
    }



    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  const deleteFeedback = async (id) => {
    if (window.confirm("Are your sure?")) {

      try {

        await axios.delete(`http://localhost:3000/tasks/${id}`);
        setFeedback(feedback.filter(item => item.id !== id));

      } catch (error) {
        console.log("Error deleting feeback", error);
      }


    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true
    })
  }


  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      addFeedback,
      deleteFeedback,
      editFeedback,
      updateFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  )

}

export default FeedbackContext;