import React from 'react'
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedback, handleDelete}) => {   

  if(feedback.length === 0) return <h3>There is no items</h3>


  return (
    
    feedback.map((item) => (
      <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    ))

  )
}

export default FeedbackList