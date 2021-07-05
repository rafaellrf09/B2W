const planetsService = require('../services/PlanetsService');
class PlanetsController {
    async index(_, res) {
        try {
            const results = await planetsService.index();
            return res.json(results);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error })

        }
    }
    async store(req, res) {
        try {
            const results = await planetsService.create(req.body);
            if(results.error) return res.status(400).json( results )
            return res.json(results);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error })

        }
    }
}

module.exports = new PlanetsController;