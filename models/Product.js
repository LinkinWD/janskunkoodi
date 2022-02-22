import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		malf: {
			type: String,
			required: true
		},
		info: {
			type: [ String ],
			required: true
		},
		selection: {
			type: [
				{
					name: { type: String, required: true },
					image: { type: String, required: true },
					stock: { type: Number, required: true }
				}
			]
		}
	},
	{ timestamps: true }
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
