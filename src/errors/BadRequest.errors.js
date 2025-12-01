import statusCode from 'http-status-codes';
import customApiError from './CustomeApi.errors.js';

export default class BadRequest extends customApiError {
    constructor(message) {
        super(message, statusCode.BAD_REQUEST);
    }
}