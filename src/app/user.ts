export class User {

    id: number;
    email: string;
    password: {
        pwd: string;
        confrimPwd: string;
    };
    gender: string;
    terms: boolean;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

}
