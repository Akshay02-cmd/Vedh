import { StatusCodes } from 'http-status-codes';

const register = async (req, res) => {
    // Registration logic here
    res.status(StatusCodes.OK).send();
}

const login = async (req, res) => {
    // Login logic here
    res.status(StatusCodes.OK).send('Login endpoint');
}

export { login, register };