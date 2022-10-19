# Crud with MongoDB
A node.js application for CRUD operation using MongoDB. 

## Route

```
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");
 
const router = express.Router();
 
router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
```
