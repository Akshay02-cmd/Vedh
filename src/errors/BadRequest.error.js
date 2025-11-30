import {statusCode} from 'http-status-code';
import customApiError from './CustomeApi.errors';

export default class BadRequest extends customApiError {
    constructor(message) {
        super(message, statusCode.BAD_REQUEST);
    }
}