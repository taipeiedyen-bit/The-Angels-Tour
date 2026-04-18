import type { NextApiRequest, NextApiResponse } from 'next';

// Mock data: This can be replaced with actual data fetching logic
const publicFundCommitteeData = [
  { id: 1, name: 'Budget Allocation', allocatedAmount: 1000000, usedAmount: 500000 },
  { id: 2, name: 'Fund Transparency', allocatedAmount: 500000, usedAmount: 250000 }
];

// API endpoint for public fund committee data and allocation tracking
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Return the committee data
        res.status(200).json({ data: publicFundCommitteeData });
    } else {
        // Method Not Allowed
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}