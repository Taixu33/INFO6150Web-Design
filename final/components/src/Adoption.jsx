import React, { useState, useRef } from 'react';
import Button from './Button';
import './Adoption.css';
import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';

function Adoption() {
    const dialogRef = useRef(null);
    const [catPreference, setCatPreference] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubscribe = (event) => {
        event.preventDefault();
        const email = event.target.email.value.trim();
        const confirmEmail = event.target.confirmEmail.value.trim();
        const address = event.target.address.value.trim();
        const breed = event.target.catPreference.value;
        let newErrors = {};

        const validateEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };

        if (!email) {
            newErrors.email = 'Email is required.';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!confirmEmail) {
            newErrors.confirmEmail = 'Confirm email is required.';
        } else if (email !== confirmEmail) {
            newErrors.confirmEmail = 'Email and Confirm Email must match!';
        }

        if (!address) {
            newErrors.address = 'Address is required.';
        }

        if (breed === "") {
          newErrors.catPreference = 'Please select a breed.';
      }
  

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setMessage('We will contact you soon!');
        setTimeout(() => {
            dialogRef.current.close();
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }, 1000);
    };

    return (
        <main id="main-content">
            <a href="#modal-form" className="skip-link">Skip to main content</a>
            <section className="section">
                <img src={cat1} alt="silver tabby cat" className="image-right" />
                <h1>Seeking a Forever Home</h1>
                <p>Every cat deserves a chance at a loving, forever home. These magnificent creatures thrive on attention and affection, and each has its own unique personality waiting to be cherished. As rescuers and caregivers, our goal is to match each cat with a family that can provide the love and care they need. Whether you’re looking for a playful kitten or a calm companion, there’s a cat waiting to become part of your family. Let’s make a difference together and give these cats the happy homes they deserve.</p>
            </section>
            <section className="section">
                <img src={cat2} alt="a cat sleeping on top of a white chair" className="image-left" />
                <h1>Companions of Joy</h1>
                <p>Cats are more than just pets; they are family members who bring endless joy and comfort to our lives. They have the extraordinary ability to sense our moods and provide companionship through all of life’s ups and downs. Adopting a cat means inviting a bundle of joy into your life, one that will offer you loyalty and affection for years to come. Imagine coming home to a purring cat that eagerly awaits your return every day — the warmth and happiness this brings can truly make a house a home. Experience the joy of cat companionship and let your new furry friend fill your home with love and laughter.</p>
            </section>
            <Button onClick={() => dialogRef.current.showModal()} visual="button" className="adopt-button">Adopt Now</Button>
            <dialog ref={dialogRef} className="modal" id="modal-form">
                <div className="form-header">
                    <h2>Adopt Your Dream Cat</h2>
                </div>
                <form onSubmit={handleSubscribe}>
                    <p className="form-note">Fields marked with <span className="required">*</span> are required.</p>
                    <div className="form-group">
                        <label htmlFor="email">Email:<span className="required">*</span></label>
                        <input type="text" id="email" name="email" />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmEmail">Confirm Email:<span className="required">*</span></label>
                        <input type="text" id="confirmEmail" name="confirmEmail" />
                        {errors.confirmEmail && <div className="error-message">{errors.confirmEmail}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:<span className="required">*</span></label>
                        <input type="text" id="address" name="address" />
                        {errors.address && <div className="error-message">{errors.address}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="catPreference">Cat Preference:</label>
                        <select id="catPreference" name="catPreference" value={catPreference} onChange={(e) => setCatPreference(e.target.value)}>
                            <option value="" disabled>Select a breed</option>
                            <option value="Siamese">Siamese</option>
                            <option value="Persian">Persian</option>
                            <option value="Maine Coon">Maine Coon</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.catPreference && <div className="error-message">{errors.catPreference}</div>}
                        {catPreference === 'other' && (
                            <input type="text" placeholder="Please specify" name="otherCatPreference" className="other-cat-specify" />
                        )}
                    </div>
                    <div className="form-actions">
                        <Button type="submit" visual="button">Subscribe</Button>
                        <Button type="button" visual="button" onClick={() => dialogRef.current.close()}>Cancel</Button>
                    </div>
                </form>
                {message && <div className="notification">{message}</div>}
            </dialog>
        </main>
    );
}

export default Adoption;
