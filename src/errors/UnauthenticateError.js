import {statusCode} from 'http-status-code';
import customApiError from './CustomeApi.errors';

export default class UnauthenticateError extends customApiError {
    constructor(message) {
        super(message, statusCode.UNAUTHORIZED);
    }
}