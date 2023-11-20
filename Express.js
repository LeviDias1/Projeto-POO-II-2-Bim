const express = require('express');
const userRoutes = require('./src/Controllers/Routes/UserRoutes');
const leilaoRoutes = require('./leilaoRoutes');
const lanceRoutes = require('./lanceRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/leiloes', leilaoRoutes);
router.use('/lances', lanceRoutes);

module.exports = router;
