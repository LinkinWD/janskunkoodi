import mongoose from 'mongoose';

const LankaSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			maxlength: 40,
			required: true
		},
		malf: {
			type: String,
			maxlength: 40,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		img: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		},
		supply: {
			type: [
				{
					color: { type: String, required: true },
					stock: { type: Number, required: true },
					img: { type: String, required: true }
				}
			]
		},
		explanation: {
			type: [ String ],
			required: true
		}
	},
	{ timestamps: true }
);
export default mongoose.models.Lanka || mongoose.model('Lanka', LankaSchema);
