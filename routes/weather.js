const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

// 取得臺中天氣預報
router.get("/taichung", weatherController.getTaichungWeather);

module.exports = router;
