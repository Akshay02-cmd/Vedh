import statusCode from 'http-status-codes';
import customApiError from './CustomeApi.errors.js';

export default class UnauthenticateError extends customApiError {
    constructor(message) {
        super(message, statusCode.UNAUTHORIZED);
    }
}