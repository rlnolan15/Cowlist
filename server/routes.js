var controller = require("./controllers");
var router = require("express").Router();

router.get("/cows", controller.cows.get);
router.post("/cows", controller.cows.post);

router.put("/cows", controller.cows.put);
router.delete("/cows", controller.cows.delete);

module.exports = router;
