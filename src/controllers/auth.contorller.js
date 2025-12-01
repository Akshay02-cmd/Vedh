import { StatusCodes } from 'http-status-codes';
import User from '../models/user.models.js';

const register = async (req, res) => {
    const user =  await User.create({ ...req.body });
    const token = user.createJWT();
    res.cookie('token', token, {
        httpOnly: true,
    }); 
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}

const login = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please provide name and password' });
    }
    const user = await User.findOne({ name });
    if (!user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials' });
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials' });
    }
    const token = user.createJWT();
    res.cookie('token', token, {
        httpOnly: true,
    });
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
}

export { login, register };