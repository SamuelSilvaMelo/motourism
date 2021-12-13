const app = require('./app');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
=======
app.use(express.json());
app.use(cors());

>>>>>>> frontend-login
app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));
