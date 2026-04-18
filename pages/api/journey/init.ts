import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Generate a session ID
        const sessionId = generateSessionId();
        const initialDialogue = "Welcome to The Angels Tour! How can I assist you today?";

        res.status(200).json({ sessionId, initialDialogue });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function generateSessionId() {
    return 'session-' + Math.random().toString(36).substr(2, 9);
}