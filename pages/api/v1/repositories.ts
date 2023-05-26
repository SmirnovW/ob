import { GITHUB_API_URL, SEARCH_REPOSITORIES_URL } from 'constants/github';

export default async function handler(req, res) {
	const secret = req.headers.authorization.replace('Bearer', '');

	let data = {};
	let status = 200;

	try {
		const response = await fetch(
			`${GITHUB_API_URL}${SEARCH_REPOSITORIES_URL}?q=${encodeURIComponent(
				req.query.q
			)}`,
			{
				headers: {
					Authorization: secret,
					'Content-Type': 'application/json',
				},
			}
		);
		if (response.ok) {
			data = await response.json();
		} else {
			status = response.status;
			data = await response.json();
		}
	} catch (error) {
		// Handle the error
		console.error(error);
	}
	res.status(status).json({ data });
}
