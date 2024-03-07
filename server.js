import connections from "./db/connections.js"
import routes from "./routes/index.js"
import express from "express"
import cors from "cors"
import logger from "morgan"


let app = express()

let port = 3222

app.use(express.json())

app.use(cors())

app.use(logger("dev"))

app.use("/api", routes)

connections.on("connected", () => {
    console.clear()
    console.log("Connected to MongoDB!")

    app.listen(port, () => {
        console.log("Express server running on port")
    })
})