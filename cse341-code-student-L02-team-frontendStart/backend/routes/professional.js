const { index } = require('../controllers/professional');

const routes = (router) => {
    router.use("/professional", index)

    return router;
}

module.exports = routes;