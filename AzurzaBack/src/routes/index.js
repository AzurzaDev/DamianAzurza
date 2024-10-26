const { Router } = require('express');

const router = Router();

router.use("/admin", require("./admin"));
router.use("/auth", require("./auth"))
router.use("/contacts", require("./contact"));
router.use('/shows', require('./showsRouter'))
router.use("/carousel", require("./carouselRoutes"))
router.use("/fotos", require('./fotosRoutes'))
router.use("/videos", require('./videosRoutes'))

module.exports = router;