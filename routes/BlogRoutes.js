const express = require('express');

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/BlogController');

const router = express.Router();

router.route('/').get(getAllBlogs).post(createBlog);
router.route('/:id').get(getBlogById).delete(deleteBlog).put(updateBlog);

module.exports = router;
