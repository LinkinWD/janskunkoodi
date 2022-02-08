import dbConnect from '../../../utils/mongo';
import Langat from '../../../models/Langat';

export default async function handler(req, res) {
	dbConnect();

	const { method } = req;

	if (method === 'GET') {
		try {
			const langat = await Langat.find();
			res.status(201).json(langat);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	}
	if (method === 'POST') {
		try {
			const lanka = await Langat.create(req.body);
			res.status(201).json(lanka);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
