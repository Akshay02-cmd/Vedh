import {statusCode} from 'http-status-code';
import customApiError from './CustomeApi.errors';

export default class NotFound extends customApiError {
    constructor(message) {
        super(message, statusCode.NOT_FOUND);
    }
}