// Import libraries
const express = require('express');
const axios = require('axios');

// Inisialisasi Express
const app = express();

// Middleware
app.use(express.json());

// CORS untuk akses dari mana aja
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ===== ROUTES =====

// Homepage / Testing
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: '🚀 API Download by Dhnzyy',
    version: '1.0.0',
    endpoints: {
      download: '/api/download (POST)',
      info: '/api/info (GET)'
    }
  });
});

// Info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    developer: 'Dhnzyy (Hikigaya Hachiman)',
    platform: 'Vercel Serverless',
    features: ['TikTok', 'YouTube', 'Instagram'],
    status: 'Development'
  });
});

// Download endpoint (masih dummy)
app.post('/api/download', async (req, res) => {
  try {
    const { url } = req.body;
    
    // Validasi input
    if (!url) {
      return res.status(400).json({
        status: 'error',
        message: 'Parameter "url" is required!'
      });
    }
    
    // Validasi format URL
    if (!url.startsWith('http')) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid URL format!'
      });
    }
    
    // Deteksi platform (sederhana)
    let platform = 'unknown';
    if (url.includes('tiktok.com')) platform = 'tiktok';
    else if (url.includes('youtube.com') || url.includes('youtu.be')) platform = 'youtube';
    else if (url.includes('instagram.com')) platform = 'instagram';
    
    // Response (masih dummy, nanti kita implementasi real download)
    res.json({
      status: 'success',
      data: {
        url: url,
        platform: platform,
        message: `Platform detected: ${platform}. Download logic coming soon!`
      }
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint not found',
    requested: req.url
  });
});

// Export untuk Vercel Serverless
module.exports = app;
