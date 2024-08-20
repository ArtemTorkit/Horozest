import express from 'express';
import fetch from 'node-fetch';
import FormData from 'form-data';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.post('/horoscope', async (req, res) => {
  const { zodiacSign, date, endpoint } = req.body;
  console.log('RECEIVED DATA:', zodiacSign, date, endpoint);
  console.log('RECEIVED DATA:', zodiacSign, date, endpoint);
  console.log('RECEIVED DATA:', zodiacSign, date, endpoint);

  if (!zodiacSign || !date) {
    return res.status(400).json({ error: 'zodiacSign and date are required' });
  }
  console.log('FORM DATA:', zodiacSign, process.env.DIVINE_API_KEY, date);
  console.log('FORM DATA:', zodiacSign, process.env.DIVINE_API_KEY, date);
  console.log('FORM DATA:', zodiacSign, process.env.DIVINE_API_KEY, date);

  const formData = new FormData();
  formData.append('sign', zodiacSign.toUpperCase());
  formData.append('api_key', process.env.DIVINE_API_KEY);
  formData.append('date', date);

  if (!endpoint) {
    formData.append('timezone', '1');
  }

  let apiEndpoint = endpoint || 'https://divineapi.com/api/1.0/get_daily_horoscope.php';

  if (endpoint === 'https://divineapi.com/api/1.0/get_weekly_horoscope.php') {
    formData.append('week', 'current');
  } else if (endpoint === 'https://divineapi.com/api/1.0/get_monthly_horoscope.php') {
    formData.append('month', 'current');
  }

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders(), // Це важливо для коректної передачі FormData
    });

    const data = await response.json();
    console.log('RESPONSE DATA: ', data)
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Failed to fetch horoscope' });
    }

    return res.json({ horoscope: data.data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.post('/coffee-cup-reading', async (req, res) => {
  const formData = new FormData();
  formData.append('api_key', process.env.DIVINE_API_KEY);

  try {
    const response = await fetch('https://divineapi.com/api/1.0/get_coffee_cup_reading.php', {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders()
    });

    const data = await response.json();
    console.log('RESPONSE DATA: ', data)
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Failed to fetch horoscope' });
    }
    console.log('DATA RESPONS: ', data)
    return res.json({ data: data.data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.post('/monthly-summary', async (req, res) => {
  const { zodiacSign } = req.body;

  console.log(zodiacSign)
  console.log(zodiacSign)
  console.log(zodiacSign)

  const formData = new FormData();
  formData.append("sign", zodiacSign.toUpperCase());
  formData.append('api_key', process.env.DIVINE_API_KEY);
  formData.append("month", "current");

  try {
    const response = await fetch('https://divineapi.com/api/1.0/get_monthly_horoscope.php', {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders()
    });

    const data = await response.json();
    console.log('RESPONSE DATA: ', data)
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Failed to fetch horoscope' });
    }
    console.log('DATA RESPONS: ', data)
    return res.json({ data: data.data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
