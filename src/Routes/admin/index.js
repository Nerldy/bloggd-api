import express from 'express';

const adminRoutes = express();

adminRoutes.route('/admin')
  .get((req, res) => res.json({ message: 'admin will get all blogs' }));


export default adminRoutes;
