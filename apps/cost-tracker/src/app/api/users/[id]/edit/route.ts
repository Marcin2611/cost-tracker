import { NextApiRequest } from 'next';

export const PUT = async (
  request: NextApiRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const updatedData = request.body;

  return Response.json({ message: `User ${id} updated` });
};
