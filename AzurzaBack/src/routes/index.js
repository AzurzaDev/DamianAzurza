const { Router } = require('express');

const router = Router();

router.use("/admin", require("./admin"));
router.use("/auth", require("./auth"))
router.use("/contacts", require("./contact"));
router.use('/shows', require('./showsRouter'))



module.exports = router;