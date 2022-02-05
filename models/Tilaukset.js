import mongoose from 'mongoose';

const TilauksetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			maxlength: 60,
			required: true
		},
		address: {
			type: String,
			maxlength: 40,
			required: true
		},
		postalcode: {
			type: String,
			required: true,
			maxlength: 40
		},
		city: {
			type: String,
			required: true,
			maxlength: 40
		},
		email: {
			type: String,
			maxlength: 40
		},
		phone: {
			type: String,
			required: true,
			maxlength: 15
		}
	},
	{ timestamps: true }
);
export default mongoose.models.Tilaukset || mongoose.model('Tilaukset', TilauksetSchema);
