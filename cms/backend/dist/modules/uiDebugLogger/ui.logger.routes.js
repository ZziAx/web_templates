import express from "express";
const router = express.Router();
router.post("/send", (req, res) => {
    console.log(console.log(req.body.message));
});
export default router;
//# sourceMappingURL=ui.logger.routes.js.map