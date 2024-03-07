import mongoose from 'mongoose'

mongoose.set("returnOriginal", false)

const MONGODB_URI = process.env.MONGODB_PROD || 'mongodb://localhost:27017/hogwarts'

mongoose.connect(MONGODB_URI)

mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error", error))

export default mongoose.connection