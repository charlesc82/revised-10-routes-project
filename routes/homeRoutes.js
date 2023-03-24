const express = require("express");

const router = express.Router();

const homeController = require("../controllers/homeController");

router.get("/", homeController.index);

router.get("/:index", homeController.show);

module.exports = router;
