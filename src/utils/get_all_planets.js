const axios = require('axios');
module.exports = async () => {
    console.log("planets");
    try {
        let count = 1;
        arrayPlanets = [];
        let next;
        do {
            const { data: response } = await axios.get(`${process.env.STAR_WARS_API}/planets/?page=${count}`);
            arrayPlanets.push(...response.results);
            count++;
            next = response.next;
        } while (next);

        return { length: arrayPlanets.length, planets: arrayPlanets };
    } catch (error) {
        throw new Error(error);
    }
}
