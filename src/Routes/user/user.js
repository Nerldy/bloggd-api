// This file will handle all admin routes
import express from 'express';

const bloggdUser = express.Router();

// get all blogs
bloggdUser.route('/')
  .get((req, res) => res.json({ message: 'NOT IMPLEMENTED: user will get all blogs' }));


// interact with single blogs with id
bloggdUser.route('/:blogId/:userId')
  .get((req, res) => res.json({ message: `NOT IMPLEMENTED: user ${req.params.userId} read ${req.params.blogId}` }));

export default bloggdUser;
