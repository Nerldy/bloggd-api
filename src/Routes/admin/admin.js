
// This file will handle all admin routes
import express from 'express';

const adminRoutes = express.Router();

// all admin routes
adminRoutes.route('/')
  .get((req, res) => res.json({ message: 'NOT IMPLEMENTED: admin will get all blogs' }))
  .post((req, res) => res.json({ message: 'NOT IMPLEMENTED: admin will post a blog' }));


// all admin single routes
adminRoutes.route('/:id')
  .get((req, res) => res.json({ message: `NOT IMPLEMENTED: admin will get ${req.params.id} blog` }))
  .put((req, res) => res.json({ message: `NOT IMPLEMENTED: admin will update ${req.params.id} blog` }))
  .delete((req, res) => res.json({ message: `NOT IMPLEMENTED: admin will delete ${req.params.id} blog` }));

// admin will delete all user blogs
adminRoutes.route('/all')
  .delete((req, res) => res.json({ message: 'NOT IMPLEMENTED: admin will delete all user blogs' }));


export default adminRoutes;
