import { addDocument, getDocuments, calculateDocuments, lastUpdatedAt } from "../controllers/document.controller.js";
import { Router } from "express";

const router = Router();

router.route("/add").post(addDocument);
router.route("/get").get(getDocuments);
router.route("/calculate").get(calculateDocuments);
router.route("/lastupdated").get(lastUpdatedAt);

export default router;