const app = require('./app');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));
