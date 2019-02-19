// This file will handle all comment routes
import express from 'express';

const bloggdUserComment = express.Router();

// get all comments
bloggdUserComment.route('/')
  .get((req, res) => res.json({ message: 'NOT IMPLEMENTED: user will get all comments' }));


// interact with single blogs with id
bloggdUserComment.route('/:id')
  .get((req, res) => res.json({ message: `NOT IMPLEMENTED: user ${req.param.id}  can post a comment` }))
  .post((req, res) => res.json({ message: `NOT IMPLEMENTED: user will ${req.param.id} post a blog` }))
  .put((req, res) => res.json({ message: `NOT IMPLEMENTED: user will ${req.param.id} update blog` }))
  .delete((req, res) => res.json({ message: `NOT IMPLEMENTED: user will ${req.param.id} delete blog` }));


export default bloggdUserComment;
