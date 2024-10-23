"use strict";
(function(){
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navigation-links');
    const modal = document.getElementById('subscription-modal');
    const cancelModalButton = modal.querySelector('.final-cancel-button');
    const subscribeButtons = document.querySelectorAll('.subscribe-button');
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirm-email');
    const emailError = document.getElementById('email-error');
    const confirmError = document.getElementById('confirm-error');

    // Toggle navigation links on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); 
    });

    // Open modal on subscribe button click
    subscribeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        });
    });

    // Close modal on cancel button click
    cancelModalButton.addEventListener('click', () => {
        closeModal();
        resetForm(); // Reset form fields
    });

    // Close modal when clicking outside modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
            resetForm(); // Reset form fields
        }
    });

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            resetForm(); // Reset form fields
        }
    });

    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            form.submit(); 
        }
    });

    function validateForm() {
        let isValid = true;
        clearFormErrors(); 

        if (!emailInput.value || !emailInput.value.includes('@')) {
            emailError.textContent = 'Email is required and must include "@"';
            emailInput.classList.add('error');
            isValid = false;
        }

        if (emailInput.value !== confirmEmailInput.value) {
            confirmError.textContent = 'This field must match the provided email address';
            confirmEmailInput.classList.add('error');
            isValid = false;
        }

        return isValid;
    }

    function clearFormErrors() {
        emailError.textContent = '';
        confirmError.textContent = '';
        emailInput.classList.remove('error');
        confirmEmailInput.classList.remove('error');
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        clearFormErrors(); 
    }

    function resetForm() {
        emailInput.value = ''; // Clear email input
        confirmEmailInput.value = ''; // Clear confirm email input
    }
})();
