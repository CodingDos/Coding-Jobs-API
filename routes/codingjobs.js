import * as controllers from "../controllers/codingjobs.js"
import { Router } from "express"

let router = Router()

router.get("/", controllers.getCodingJobs)
router.get("/:id", controllers.getCodingJob)
router.post("/", controllers.createCodingJob)
router.put("/:id", controllers.updateCodingJob)
router.delete("/:id", controllers.deleteCodingJob)

export default router