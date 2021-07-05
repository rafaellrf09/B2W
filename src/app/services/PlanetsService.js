const dtFilms = require("../../app/data-transformation/dt-planets-films");

class PlanetsService {
    constructor() {
        this.planet = require('../../database/schemas/planetSchema');
    }
    async index() {
        try {
            console.log("service");
            return await getAllPlanets();
        } catch (error) {
            return error;
        }
    }
    async create({ name, weather, terrain }) {
        try {
            if (!name) return { error: "Name is required." }
            const numberOfFilms = await dtFilms(name);

            if (!numberOfFilms) numberOfFilms = 0;

            return await this.planet.create({
                name, weather, terrain,
                films: numberOfFilms.length
            })

        } catch (error) {
            return error;
        }

    }
}

module.exports = new PlanetsService();
