const getAllPlanets = require("../../utils/get_all_planets");
module.exports = async (namePlanet) => {
    const allPlanets = await getAllPlanets();
    const planet = allPlanets.planets.filter(({ name }) => namePlanet.toLowerCase() == name.toLowerCase());
    return planet[0].films;
}