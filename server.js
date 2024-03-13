import connections from "./db/connections.js"
import routes from "./routes/index.js"
import express from "express"
import cors from "cors"
import logger from "morgan"


let app = express()

let PORT = process.env.PORT || 3000 

app.use(express.json())

app.use(cors())

app.use(logger("dev"))

app.use("/api", routes)

connections.on("connected", () => {
    console.clear()
    console.log("Connected to MongoDB!")

    app.listen(PORT, () => {
        process.env.NODE_ENV === "production"
            ? console.log(`Express server running in production on port ${PORT}`)
            : console.log(`Express server running in development on port ${PORT}`)
    })
})