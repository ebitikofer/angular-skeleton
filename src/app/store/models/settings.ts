export class Settings {

    theme: number;
    darkMode: string;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

}