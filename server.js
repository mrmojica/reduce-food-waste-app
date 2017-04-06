require('babel-polyfill');

const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');
const morgan = require('morgan');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const user = require('./server/routes/user.js');
const api = require('./server/routes/api.js');


const app = module.exports = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// logging
app.use(morgan('common'));

// set static folder
app.use('/public', express.static('public'));


// routes
app.use('/', user);
app.use('/api', api)
app.use('*', function(req, res) {
  return res.status(404).json({message: 'Not Found'});
});


// set up server
// app.set('port', process.env.PORT || 3000);

// const server = app.listen(app.get('port'), () => {
// 	console.log(`Server listening on port ${server.address().port}`);
// })


// /* Server Function */

// let server;

// function runServer(databaseUrl=DATABASE_URL, port=PORT) {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(databaseUrl, err => {
//       if (err) {
//         return reject(err);
//       }
//       server = app.listen(port, () => {
//         console.log(`Your app is listening on port ${port}`);
//         resolve();
//       })
//       .on('error', err => {
//         mongoose.disconnect();
//         reject(err);
//       });
//     });
//   });
// }

// function closeServer() {
//   return mongoose.disconnect().then(() => {
//      return new Promise((resolve, reject) => {
//        console.log('Closing server');
//        server.close(err => {
//            if (err) {
//                return reject(err);
//            }
//            resolve();
//        });
//      });
//   });
// }

// if (require.main === module) {
//   runServer().catch(err => console.error(err));
// };

// module.exports = {app, runServer, closeServer};

app.listen(3000, () => { console.log('Listening on Port 3000')});
