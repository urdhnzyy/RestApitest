// 1. Impor "mesin" Express
const express = require('express');

// 2. Buat aplikasi dari mesin itu
const app = express();

// 3. Definisikan Rute halaman utama ("/")
// Ini untuk manusia yang iseng buka URL-mu
app.get('/', (req, res) => {
  // req = Request (Data permintaan yang masuk)
  // res = Response (Data balasan yang kita kirim)
  res.send('Halo Dhnzyy! Dapurnya sudah buka! (Vercel)');
});

// 4. Definisikan Rute API ("/api")
// Ini untuk Bot WhatsApp-mu nanti
app.get('/api', (req, res) => {
  res.json({
    message: "Ini adalah API pertamaku",
    status: 200,
    creator: "Dhnzyy"
  });
});

// 5. Ekspor aplikasi agar Vercel bisa menggunakannya
// Ini adalah bagian WAJIB untuk Vercel (model Serverless)
module.exports = app;
