import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
	{
		customer: {
			type: String,
			required: true
		},
		address: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		postal: {
			type: String,
			required: true
		},
		total: {
			type: Number,
			required: true
		},
		products: [
			{
				productName: { type: String, required: true },
				name: { type: String, required: true },
				quantity: { type: Number, required: true },
				price: { type: Number, required: true }
			}
		]
	},
	{ timestamps: true }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
