import type { NextApiRequest, NextApiResponse } from 'next';

// Sample eco-friendly products data
const products = [
    { id: 1, name: 'Eco-friendly Water Bottle', journeyPath: 'mountains', ecoFriendly: true },
    { id: 2, name: 'Recycled Backpack', journeyPath: 'city', ecoFriendly: true },
    { id: 3, name: 'Biodegradable Soap', journeyPath: 'beach', ecoFriendly: true },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { path } = req.query;
    if (Array.isArray(path)) {
        return res.status(400).json({ error: 'Path must be a single value' });
    }

    const filteredProducts = products.filter(product => 
        product.ecoFriendly && product.journeyPath === path
    );

    res.status(200).json(filteredProducts);
}