import mongoose from 'mongoose';

const TapahtuneetSchema = new mongoose.Schema(
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
export default mongoose.models.Tapahtuneet || mongoose.model('Tapahtuneet', TapahtuneetSchema);
