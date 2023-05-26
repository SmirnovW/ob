import jwt from 'jsonwebtoken';

export default function handler(req, res) {
	const privateKey = process.env.GITHUB_PRIVATE_KEY.replace(/_BREAK/g, '\n');
	const appId = '336888';
	const now = Math.floor(Date.now() / 1000);
	const expiration = now + 60 * 10;

	const payload = {
		iat: now,
		exp: expiration,
		iss: appId,
	};

	const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
	res.status(200).json({ token });
}
