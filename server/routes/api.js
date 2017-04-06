require('babel-polyfill');

const express = require('express');
const router = express.Router();


router.get('/data', (req, res) => {
	res.send('Data is returned');
});


module.exports = router;