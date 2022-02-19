import dbConnect from '../../../utils/mongo';
import Tilaukset from '../../../models/Langat';

export default async function handler(req, res) {
	await dbConnect();

	const { method } = req;

	if (method === 'GET') {
		try {
			const tilaukset = await Tilaukset.find();
			res.status(201).json(tilaukset);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	if (method === 'POST') {
		try {
			const tilaus = await Tilaukset.create(req.body);
			res.status(201).json(tilaus);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
