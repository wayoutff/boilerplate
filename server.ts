import express from 'express';
import path from 'path';

const APP_PORT = 3000;

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(APP_PORT, () => {
  console.log(`\n\n[SERVER]: running on http://localhost:${APP_PORT}`);
});