import mongoose, { Document, Schema } from 'mongoose';

interface Installment {
    value: number;
    period: number;
}

interface Price {
    value: number;
    currency: string;
    installment: Installment;
    validFrom: Date;
    validTo: Date;
}

interface Product extends Document {
    image: string;
    code: string;
    name: string;
    color: string;
    capacity: number;
    dimensions: string;
    features: string[];
    energyClass: string;
    price: Price;
}

const InstallmentSchema: Schema = new Schema({
    value: { type: Number, required: true },
    period: { type: Number, required: true },
}, { _id : false, __v: false});

const PriceSchema: Schema = new Schema({
    value: { type: Number, required: true },
    currency: { type: String, required: true },
    installment: { type: InstallmentSchema, required: true },
    validFrom: { type: Date, required: true },
    validTo: { type: Date, required: true },
}, { _id : false, __v: false});

const ProductSchema: Schema = new Schema({
    image: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    color: { type: String, required: true },
    capacity: { type: Number, required: true },
    dimensions: { type: String, required: true },
    features: { type: [String], required: true },
    energyClass: { type: String, required: true },
    price: { type: PriceSchema, required: true },
});

const ProductModel = mongoose.model<Product>('Product', ProductSchema);

export default ProductModel;
