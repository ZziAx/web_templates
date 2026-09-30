import express from "express";
const router = express.Router();
router.post("/get", (req, res) => {
    console.log(console.log(req.body.message));
    res.json({});
});
export default router;
//# sourceMappingURL=ui.logger.routes.js.map