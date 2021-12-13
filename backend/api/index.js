const app = require('./app');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
=======
app.use(express.json());
app.use(cors());

>>>>>>> 44f9cf130f6f15955d7fcc22c9cfbdee5d4b202a
app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));
