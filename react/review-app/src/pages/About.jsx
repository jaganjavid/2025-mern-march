import { Link } from "react-router-dom"



const About = () => {
  return (
    <div>
        <h1>About us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, ipsum dolore? Iure, voluptates labore. Cum voluptas reprehenderit laudantium culpa, unde accusamus! Qui aperiam architecto molestias error dignissimos commodi necessitatibus eligendi exercitationem. Vel expedita molestiae quae repudiandae aliquam ex similique ad, quas aut fugit voluptas eveniet repellat in deserunt exercitationem accusamus.</p>
        <Link className='link' to="/">Back to home</Link>
    </div>
  )
}

export default About