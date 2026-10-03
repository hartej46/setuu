import express from 'express';
import cors from 'cors';
import prisma from './lib/prisma.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS not allowed'));
  },
  credentials: true,
}));
app.use(express.json());

// ─── Health Check ───
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Applications (Recruitment Form) ───
app.post('/api/applications', async (req, res) => {
  try {
    const { fullName, email, rollNo, year, domain, secondaryDomain, portfolio, motivation } = req.body;

    if (!fullName || !email || !rollNo || !year || !domain || !motivation) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const application = await prisma.application.create({
      data: {
        fullName,
        email,
        rollNo,
        year,
        domain,
        secondaryDomain: secondaryDomain || null,
        portfolio: portfolio || null,
        motivation,
      },
    });

    res.status(201).json({ success: true, data: application });
  } catch (error) {
    console.error('Application error:', error);
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Duplicate entry detected' });
    }
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

app.get('/api/applications', async (_req, res) => {
  try {
    const applications = await prisma.application.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ data: applications });
  } catch (error) {
    console.error('Fetch applications error:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// ─── Event Registrations ───
app.post('/api/event-registrations', async (req, res) => {
  try {
    const { fullName, email, rollNo, year, eventName, domain, secondaryDomain, portfolio, message } = req.body;

    if (!fullName || !email || !rollNo || !year || !eventName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const registration = await prisma.eventRegistration.create({
      data: {
        fullName,
        email,
        rollNo,
        year,
        eventName,
        domain: domain || null,
        secondaryDomain: secondaryDomain || null,
        portfolio: portfolio || null,
        message: message || null,
      },
    });

    res.status(201).json({ success: true, data: registration });
  } catch (error) {
    console.error('Event registration error:', error);
    res.status(500).json({ error: 'Failed to register for event' });
  }
});

app.get('/api/event-registrations', async (_req, res) => {
  try {
    const registrations = await prisma.eventRegistration.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ data: registrations });
  } catch (error) {
    console.error('Fetch registrations error:', error);
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

// ─── Contact Submissions ───
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const submission = await prisma.contactSubmission.create({
      data: { name, email, subject: subject || null, message },
    });

    res.status(201).json({ success: true, data: submission });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// ─── Start Server ───
app.listen(PORT, () => {
  console.log(`🌉 SETU API server running at http://localhost:${PORT}`);
});
