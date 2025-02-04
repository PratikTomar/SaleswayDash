const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*\d).{8,14}$/.test(password);

export { isValidEmail, isValidPassword };