import { createContext, useState } from "react";

const FeedbackContext = createContext();


console.log(FeedbackContext);


export const FeedbackProvider = ({children}) => {


    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:"This is a sample 1 from context"
        },
        {
            id:2,
            text:"This is a sample 2 from context"
        },
        {
            id:3,
            text:"This is a sample 3 from context"
        },
      ]);


    return (
        <FeedbackContext.Provider value={{
            feedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )

}