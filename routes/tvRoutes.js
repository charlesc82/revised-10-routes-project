const express = require("express");

const router = express.Router();

const tvController = require("../controllers/tvController");

router.get("/", tvController.index);

router.get("/:index", tvController.show);

module.exports = router;
