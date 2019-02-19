import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './Routes/admin/admin';
import bloggdUser from './Routes/user/user';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/admin', adminRoutes);
app.use('/user', bloggdUser);


// home route
app.get('/', (req, res) => res.json({ message: 'welcome to Bloggd' }));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
