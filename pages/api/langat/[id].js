import dbConnect from '../../../utils/mongo';
import Langat from '../../../models/Langat';

export default async function handler(req, res) {
	await dbConnect();

	const { method, query: { id } } = req;

	if (method === 'GET') {
		try {
			const lanka = await Langat.findById(id);
			res.status(201).json(lanka);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	if (method === 'PUT') {
		try {
			const lanka = await Langat.create(req.body);
			res.status(201).json(lanka);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	if (method === 'DELETE') {
		try {
			await Langat.findByIdAndDelete(id);
			res.status(200).json('deleted');
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
