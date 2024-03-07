import { Router } from "express"
import cjRoutes from "./codingjobs.js"

let router = Router()

router.get("/", (req, res) => res.send("This is the api root!"))

router.use("/codingjobs", cjRoutes)

export default router