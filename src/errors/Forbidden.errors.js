import Statuscode from 'http-status-codes';
import customApiError from './CustomeApi.errors.js';

export default class Forbidden extends customApiError {
    constructor(message) {
        super(message, Statuscode.FORBIDDEN);
    }
}