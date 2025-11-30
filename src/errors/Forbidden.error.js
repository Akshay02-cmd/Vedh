import {statusCode} from 'http-status-code';
import customApiError from './CustomeApi.errors';

export default class Forbidden extends customApiError {
    constructor(message) {
        super(message, statusCode.FORBIDDEN);
    }
}