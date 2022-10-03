import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
export default function Contact() {
  const { theme } = useContext(ThemeContext)
  return (
    <div>
    <div className="contactBox" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div><h3 className="cutitle">Contact Form</h3></div>
        <br></br>
        <form action="contact">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <button onClick={()=>{alert('Thanks for submitting'); }}>Submit</button>
        </form>
    </div>
    </div>
  )
}