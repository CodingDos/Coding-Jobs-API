import mongoose from "mongoose"


let codingJobSchema = mongoose.Schema({
    "positionTitle": { "type": String },
    "applyUrl": [{ "type": String }],
    "benefitsUrl": { "type": String },
    "promotionPotential": { "type": String },
    "relocation": { "type": Boolean },
    "education": { "type": String },
    "securityClearance": { "type": String },
    "drugTestRequired": { "type": Boolean },
    "minimumPay": { "type": Number },
    "maximumPay": { "type": Number },
    "description": { "type": String },
    "publicationStartDate": { "type": String },
    "applicationClosedDate": { "type": String }
})

export default mongoose.model("codingjobs", codingJobSchema)