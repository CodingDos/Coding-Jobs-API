import Codingjobs from "../models/Codingjobs.js"


export let getCodingJobs = async (req, res) => {
    try{
        let codingJobs = await Codingjobs.find()
        res.json(codingJobs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message }) 
    }
}

export let getCodingJob = async (req, res) => {
    try{
        let { id } = req.params
        let codingJob = await Codingjobs.findById(id)
        if(codingJob){
            return res.json(codingJob)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message }) 
    }
}

export let createCodingJob = async (req, res) => {
    try{
        let codingJob = new Codingjobs(req.body)
        await codingJob.save()
        res.status(201).json(character)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message }) 
    }
}

export let updateCodingJob = async (req, res) => {
    try{
        let { id } = req.params
        let codingJob = Codingjobs.findByIdAndUpdate(id, req.body)
        res.status(201).json(codingJob)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message }) 
    }
}

export let deleteCodingJob = async (req, res) => {
    try{
        let { id } = req.params
        let codingJob = Codingjobs.findByIdAndDelete(id, req.body)
        res.status(201).json(codingJob)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message }) 
    }
}