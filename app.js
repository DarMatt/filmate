const cors = require('cors');
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/movie', require('./routes/movie.routes'));
app.use('/api/watch-later', require('./routes/movie.watch-later.routes'));
app.use('/api/favorite', require('./routes/movie.favorite.routes'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

const PORT = config.get('port') || 3000;

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, './client/src/index.html'), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`App hass been started on port ${PORT}...`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
