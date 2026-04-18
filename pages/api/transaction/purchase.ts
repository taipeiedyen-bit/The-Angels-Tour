import { NextApiRequest, NextApiResponse } from 'next';

// Simulate purchase and generate an impact story
export default async function purchaseHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { item, quantity, user } = req.body;

        // Validate input
        if (!item || !quantity || !user) {
            return res.status(400).json({ message: 'Item, quantity, and user are required.' });
        }

        // Simulate purchase confirmation
        const purchaseConfirmation = {
            id: Math.floor(Math.random() * 10000),
            item,
            quantity,
            user,
            date: new Date().toISOString(),
            message: 'Thank you for your purchase!',
        };

        // Generate impact story
        const impactStory = generateImpactStory(item, quantity);

        return res.status(200).json({ purchaseConfirmation, impactStory });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function generateImpactStory(item: string, quantity: number) {
    return `Your purchase of ${quantity} ${item}(s) helps provide resources to those in need. Thank you for making a difference!`;
}