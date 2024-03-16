const express = require('express');
const bodyParser = require('body-parser');
const equipmentRoutes = require('./api/routes/equipmentRoutes');
const userRoutes = require('./api/routes/userRoutes');
const app = express();
app.use(bodyParser.json());
// Use the API routes
app.use('/api', equipmentRoutes);
app.use('/api', userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});