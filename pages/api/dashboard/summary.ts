import { NextApiRequest, NextApiResponse } from 'next';

export default async function summary(req: NextApiRequest, res: NextApiResponse) {
  // Replace the following data with the actual logic to fetch user ecological dashboard data.
  const userEcologicalData = {
    carbonFootprint: '5.2 tons of CO2',
    treesPlanted: 150,
    waterUsed: '1200 liters',
    sustainableActions: [
      'Recycling waste materials',
      'Using public transport',
      'Reducing plastic usage'
    ],
  };

  const story = `On your ecological journey, you have impacted the planet significantly. \n \n With a carbon footprint of ${userEcologicalData.carbonFootprint}, you've set a benchmark for sustainability. Keep up the great work! \n \n Additionally, you have successfully planted ${userEcologicalData.treesPlanted} trees, contributing to reforestation efforts. \n \n Moreover, you have utilized ${userEcologicalData.waterUsed}, saving precious water resources in your daily life. \n \n Your efforts in taking sustainable actions, such as ${userEcologicalData.sustainableActions.join(', ')}, are commendable and inspire others to follow your path!`;

  res.status(200).json({ story });
}