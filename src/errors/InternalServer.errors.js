import statusCode from 'http-status-codes';
import customApiError from './CustomeApi.errors.js';

export default class InternalServerError extends customApiError {
    constructor(message) {
        super(message, statusCode.INTERNAL_SERVER_ERROR);
    }
}