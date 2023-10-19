const BlogService = require('../Services/BlogServices');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.json({ data: blogs, status: 'success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await BlogService.createBlog(req.body);
    res.json({ data: blog, status: 'success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await BlogService.updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: 'success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await BlogService.deleteBlog(req.param.id);
    res.json({ data: blog, status: 'success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await BlogService.getBlogById(req.params.id);
    res.json({ data: blog, status: 'success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
