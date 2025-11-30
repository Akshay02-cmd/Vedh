import {statusCode} from 'http-status-code';
import customApiError from './CustomeApi.errors';

export default class InternalServerError extends customApiError {
    constructor(message) {
        super(message, statusCode.INTERNAL_SERVER_ERROR);
    }
}