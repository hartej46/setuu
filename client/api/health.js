export default function handler(_req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  return res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
}
