export class Auth {

    uid: string;
    email: string;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

}