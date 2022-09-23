const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.post("/directUrl", async (req, res) => {
  try {
    // const url = "https://lite.invoicemate.net/lite/wellcome";
    // const response = await axios.post(url);
    // return res.status(200).send(response);
    const pp_ResponseMessage = req.body.pp_ResponseMessage;
    return res.redirect("http://localhost:3000/");
  } catch (err) {
    console.log("REDIRECT ERROR => ", err);
    return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
});
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
