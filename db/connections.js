import mongoose from 'mongoose'

mongoose.set("returnOriginal", false)

const connectionString = process.env.DB_URL || 'mongodb://localhost:27017/CodingJobs'

mongoose.connect(connectionString)

mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error", error))

export default mongoose.connection