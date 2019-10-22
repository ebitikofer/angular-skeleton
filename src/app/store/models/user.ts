export class User {

    uid: string;
    email: string;
    fname: string;
    lname: string;
    lastOpenChat: string;
    lastOpenList: string;
    currentTask: string;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

}