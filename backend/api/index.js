require('dotenv').config();
const cors = require('cors');

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));
