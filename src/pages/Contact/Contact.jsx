import './Contact.css'

import { useState } from 'react';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {

        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "6576775f-817c-4801-9b23-e29fa6485177");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

  return  (
    <div className='contact pages' >
          <div className='contact-header' >
              <h1>Email Me!</h1>
              <h2>Always ready to discuss possible opportunities!</h2>
              <h4>joshjones200285@gmail.com</h4>
          </div>

          <form onSubmit={onSubmit}>
              <input type="text" name="name" required placeholder='Name' />
              <input type="email" name="email" required placeholder='Email' />
              <textarea name="message" required placeholder='Message...'></textarea>
              <button type="submit">Submit</button>
              <p>{result}</p>
          </form>
    </div>
  )
}

export default Contact
