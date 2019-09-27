export class Product {

    id: number;
    name: string;
    barcode: number;
    price: number;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

}
