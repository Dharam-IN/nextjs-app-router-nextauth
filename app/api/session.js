import { getServerSession } from 'next-auth/next';
import { authOptions } from './[...nextauth]/route';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  res.status(200).json(session || null);
}
