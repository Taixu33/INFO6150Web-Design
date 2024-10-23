import React, { useRef } from 'react';
import Button from './Button'; 
import './Home.css';  

function Home() {
  const dialogRef = useRef();

  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const confirmEmail = event.target.confirmEmail.value;

    if (email !== confirmEmail) {
      alert('Emails do not match!');
      return;
    }

    console.log('Form submitted with email:', email);
    dialogRef.current.close(); 
  }

  return (
    <div>
      <section>
        <h2>Welcome to Our Website</h2>
        <p>We are committed to delivering the best experience to our users. Our team is dedicated to providing quality service and support.</p>
      </section>
      <Button onClick={() => dialogRef.current.showModal()} visual="button">Subscribe</Button>
      <dialog ref={dialogRef} className="modal">
        <h2>Subscribe to the Latest News!</h2>
        <form onSubmit={handleSubscribe}>
          <div className="form-group">
            <label htmlFor="email">Email: <span className="required">*</span></label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmEmail">Confirm Email: <span className="required">*</span></label>
            <input type="email" id="confirmEmail" name="confirmEmail" required />
          </div>
          <div className="form-actions">
            <Button type="submit" visual="link">Subscribe</Button>
            <Button type="button" visual="button" onClick={() => dialogRef.current.close()}>Cancel</Button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Home;
