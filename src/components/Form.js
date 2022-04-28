import React from 'react'

const Form = () => {
  return (
    <form action="https://formsubmit.co/hardikarora826@gmail.com" method="POST" className="form">
      <input type="hidden" name="_next" value="https://hardikarora.netlify.app/thanks"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="hidden" name="_template" value="table"></input>
        <label for="name" class="labels">Your Name</label>
        <input class="inputs" type="text" name="name" id="name" required/>

        <label for="email" class="labels">Email</label>
		<input class="inputs" type="text" name="email" id='email' required/>

        <label for="message" className='labels'>Project Summary</label>
		<textarea class="message inputs" placeholder='Tell me about your website' name="message"  id='message' required></textarea>

		<button type="submit" class="submit-btn">Send Message</button>
    </form>
  )
}

export default Form