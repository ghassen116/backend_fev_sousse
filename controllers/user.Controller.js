module.exports.esm= async (req, res) =>{
    try {
        res.status(200).json('esm')
    } catch (error) {
        res.status(500).json({ error : error.message })
        
    }
}