import React from 'react'
import { Link } from 'react-router-dom'


const Blog = () => {
  return (
    <div>
        <h1>This is my blog page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde officiis eos nostrum? Aperiam reprehenderit saepe commodi dolorum deleniti asperiores deserunt.</p>
        <Link to="/">
         Back to home
        </Link>
    </div>
  )
}

export default Blog