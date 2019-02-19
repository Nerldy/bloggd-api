import express from 'express';
import adminRoutes from './Routes/admin';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.json({ message: 'welcome to Bloggd' }));
adminRoutes();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
