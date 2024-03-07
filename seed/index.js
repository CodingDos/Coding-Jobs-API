import axios from "axios";
import { promises as fsPromises } from "fs"
import { config } from 'dotenv';

config();


let host = "data.usajobs.gov"
let userAgent = "sgvillacis@gmail.com"
const apiKey = process.env.API_KEY;

async function importData(){
    let headers = {
        "host": host,
        "user-agent": userAgent,
        "authorization-key": authKey
    }

    let res = await axios.get("https://data.usajobs.gov/api/search?Page=1&ResultsPerPage=600&JobCategoryCode=2200", { headers })

    await fsPromises.writeFile("./seed/data.json", JSON.stringify(res.data.SearchResult.SearchResultItems))

    console.log("Data seeded successfully!")
}

importData()