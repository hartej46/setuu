let inMemoryContact = [];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const { name, email, subject, message } = body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      let submission = null;
      if (process.env.DATABASE_URL) {
        try {
          const { PrismaClient } = await import('@prisma/client');
          const prisma = new PrismaClient();
          submission = await prisma.contactSubmission.create({
            data: { name, email, subject: subject || null, message },
          });
          await prisma.$disconnect();
        } catch (dbErr) {
          console.warn('Database save warning (using fallback memory store):', dbErr.message);
        }
      }

      if (!submission) {
        submission = {
          id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
          name,
          email,
          subject: subject || null,
          message,
          createdAt: new Date().toISOString(),
        };
        inMemoryContact.unshift(submission);
      }

      return res.status(201).json({ success: true, data: submission });
    } catch (err) {
      console.error('Contact handler error:', err);
      return res.status(500).json({ error: 'Failed to submit contact form' });
    }
  }

  return res.status(405).json({ error: `Method ${req.method} not allowed` });
}
