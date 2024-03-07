import db from "../db/connections.js"
import Codingjobs from "../models/Codingjobs.js"
import jobData from "./data.json" assert { type: "json" }


function parseBoolean(str) {
    return str.toLowerCase() === 'true';
}

let sortedData = jobData.map(item => {
    let hash = {}
    hash.positionTitle = item.MatchedObjectDescriptor.PositionTitle
    hash.applyUrl = item.MatchedObjectDescriptor.ApplyURI
    hash.benefitsUrl = item.MatchedObjectDescriptor.UserArea.Details.BenefitsUrl
    hash.promotionPotential = item.MatchedObjectDescriptor.UserArea.Details.PromotionPotential
    hash.relocation = parseBoolean(item.MatchedObjectDescriptor.UserArea.Details.Relocation)
    hash.securityClearance = item.MatchedObjectDescriptor.UserArea.Details.SecurityClearance
    hash.drugTestRequired = parseBoolean(item.MatchedObjectDescriptor.UserArea.Details.DrugTestRequired)
    hash.minimumPay = item.MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange
    hash.maximumPay = item.MatchedObjectDescriptor.PositionRemuneration[0].MaximumRange
    hash.description = item.MatchedObjectDescriptor.PositionRemuneration[0].Description
    hash.publicationStartDay = item.MatchedObjectDescriptor.PositionStartDate
    hash.applicationClosedDay = item.MatchedObjectDescriptor.ApplicationCloseDate
    console.log(hash)
    return hash
})



let seedData = async () => {

    await db.dropDatabase()
    await Codingjobs.create(sortedData)
    console.log("Jobs Created!")
    await db.close
}

seedData()
