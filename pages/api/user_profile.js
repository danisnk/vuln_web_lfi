// pages/api/user_profile.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { userId, filewho } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  let filePath;
  if (filewho) {
    // VULNERABLE: This allows path traversal
    filePath = path.join(process.cwd(), 'data', 'users', filewho);
  } else {
    filePath = path.join(process.cwd(), 'data', 'users', `${userId}.json`);
  }
  console.log(filePath)

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    try {
      const jsonContent = JSON.parse(content);
      res.status(200).json(jsonContent);
    } catch (jsonError) {
      res.status(200).send(content);
    }
  } catch (error) {
    res.status(404).json({ error: 'User profile not found' });
  }
}