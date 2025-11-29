import axios from 'axios';
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerForm = document.getElementById('registerForm');
const registerButton = document.getElementById('register-btn');
const messageContainerId = 'register-message-container';

axios.defaults.withCredentials = true;

const showMessage = (text, isError = false) => {
    let container = document.getElementById(messageContainerId);
    if (!container) {
        container = document.createElement('div');
        container.id = messageContainerId;
        container.style.marginTop = '8px';
        container.style.fontFamily = 'sans-serif';
        (registerForm || document.body).appendChild(container);
    }
    container.textContent = text;
    container.style.color = isError ? '#b00020' : '#0a7a00';
}
    
const setControlsDisabled = (disabled) => {
    if (fullnameInput) fullnameInput.disabled = disabled;
    if (emailInput) emailInput.disabled = disabled;
    if (usernameInput) usernameInput.disabled = disabled;
    if (passwordInput) passwordInput.disabled = disabled;
    if (confirmPasswordInput) confirmPasswordInput.disabled = disabled;
    if (registerButton) registerButton.disabled = disabled;
}

const performRegistration = async () => {
    const fullname = fullnameInput?.value?.trim() || '';
    const email = emailInput?.value?.trim() || '';
    const username = usernameInput?.value?.trim() || '';
    const password = passwordInput?.value || '';
    const confirmPassword = confirmPasswordInput?.value || '';
    if (!fullname || !email || !username || !password || !confirmPassword) {
        showMessage('Please fill in all fields.', true);
        return;
    }
    if (password !== confirmPassword) {
        showMessage('Passwords do not match.', true);
        return;
    }
    setControlsDisabled(true);
    showMessage('Registering...');

    try {
        const response = await axios.post('/register', { fullname, email, username, password });
        const redirectTo = response.data?.redirect || '/';
        window.location.href = redirectTo;
    } catch (err) {
        const serverMessage =
            err?.response?.data?.message ||
            err?.response?.data ||
            err?.message ||
            'Registration failed';
        showMessage(String(serverMessage), true);
        setControlsDisabled(false);
    }
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        performRegistration();
    });
}

if (registerButton) {
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        performRegistration();
    });
}

if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performRegistration();
        }
    });
}   
if (passwordInput) {
    passwordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performRegistration();
        }
    });
}

