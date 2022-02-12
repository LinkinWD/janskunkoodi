import cookie from 'cookie';

const handler = (req, res) => {
	if (req.method === 'POST') {
		const { username, password } = req.body;
		if (username === process.env.KAYTTAJA && password === process.env.SALASANA) {
			res.setHeader(
				'Set-Cookie',
				cookie.serialize('token', process.env.TOKEN, {
					maxAge: 60 * 60 * 3,
					sameSite: 'strict',
					path: '/'
				})
			);
			res.status(200).json('Onnistu');
		} else {
			res.status(400).json('Väärin');
		}
	}
};
export default handler;
