"use strict";
(function() {
    // Get error display elements and input fields
    const usernameErrorEl = document.querySelector('.register__error-name');
    const emailErrorEl = document.querySelector('.register__error-email');
    const confirmErrorEl = document.querySelector('.register__error-confirm');
    const usernameEl = document.querySelector('.register__name');
    const emailEl = document.querySelector('.register__email');
    const confirmEl = document.querySelector('.register__confirm');
    const registerEl = document.querySelector('.register');

    // Initialize state
    const state = {
        hasUsernameError: false,
        hasEmailError: false,
        hasConfirmError: false,
    };

    // Check username error
    function checkForUsernameError() {
        state.hasUsernameError = !usernameEl.value;
    }

    // Check email error
    function checkForEmailError() {
        state.hasEmailError = !emailEl.value;
    }

    // Check confirm email error
    function checkForConfirmError() {
        state.hasConfirmError = emailEl.value !== confirmEl.value;
    }

    // Form validity check
    function isFormValid() {
        return !state.hasUsernameError && !state.hasEmailError && !state.hasConfirmError;
    }

    usernameEl.addEventListener('input', function() {
        checkForUsernameError();
        render();
    });

    registerEl.addEventListener('submit', function(e) {
        // Execute all checks when submitting the form
        checkForUsernameError();
        checkForEmailError();
        checkForConfirmError();
        if (!isFormValid()) {
            e.preventDefault(); 
            render();
        }
    });

    // Render function for displaying error messages.
    function render() {
        showUsernameError();
        showEmailError();
        showConfirmError();
    }

    function showUsernameError() {
        usernameErrorEl.textContent = state.hasUsernameError ? "Name is required." : "";
    }

    function showEmailError() {
        emailErrorEl.textContent = state.hasEmailError ? "Email is required." : "";
    }

    function showConfirmError() {
        confirmErrorEl.textContent = state.hasConfirmError ? "Confirm Email must match Email." : "";
    }
})();
