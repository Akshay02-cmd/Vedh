axios.defaults.withCredentials = true;
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-btn');
const messageContainerId = 'login-message-container';

const showMessage = (text, isError = false) => {
    let container = document.getElementById(messageContainerId);
    if (!container) {
        container = document.createElement('div');
        container.id = messageContainerId;
        container.style.marginTop = '8px';
        container.style.fontFamily = 'sans-serif';
        (loginForm || document.body).appendChild(container);
    }
    container.textContent = text;
    container.style.color = isError ? '#b00020' : '#0a7a00';
}

const setControlsDisabled = (disabled) => {
    if (emailInput) emailInput.disabled = disabled;
    if (passwordInput) passwordInput.disabled = disabled;
    if (loginButton) loginButton.disabled = disabled;
}

loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput?.value?.trim() || '';
    const password = passwordInput?.value || '';

    if (!email || !password) {
        showMessage('Please enter both email and password.', true);
        return;
    }

    setControlsDisabled(true);
    showMessage('Signing in...');

    try {
        const response = await axios.post('/api/v1/auth/login', { email, password });
        // success: redirect if server provided location, otherwise reload
        const redirectTo = response.data?.redirect || '/';
        window.location.href = redirectTo;
    } catch (err) {
        const serverMessage =
            err?.response?.data?.message ||
            err?.response?.data ||
            err?.message ||
            'Login failed';
        showMessage(String(serverMessage), true);
        setControlsDisabled(false);
    }
});