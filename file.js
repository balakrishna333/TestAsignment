// Name : Balakrishna
// Collage : IIIT RGUKT, RK Valley, Kadapa
// Year : 2021
// phone No : 9347937061
// email: thaletibalakrishna@gmail.com

class SolorSystem {
    constructor() {
        this.planets = [
            {
                name: "Mercury",
                atmospiricGases: [],
                moons: 0,
                rings : false
            },
            {
                name: "Venus",
                atmospiricGases: ["Carbon Dioxide","Nitrogen"],
                moons: 0,
                rings: false
            },
            {
                name: "Earth",
                atmospiricGases: ["Nitrogen","Oxygen"],
                moons: 1,
                rings: false
            },
            {
                name: "Jupitor",
                atmospiricGases: ["Hidrogen","Helium"],
                moons: 79,
                rings: true
            },
            {
                name: "Saturn",
                atmospiricGases: ["Hidrogen", "Helium"],
                moons: 83,
                rings: true
            },
            {
                name: "Uranus",
                atmospiricGases: ["Hidrogen", "Helium","Methane"],
                moons: 27,
                rings: true
            }
        ]
    }
    get moonWithRings() {
        let count = 0;
        this.planets.forEach((planet) => {
            if (planet.rings) {
                count += planet.moons;
            }
        });
        return count;
    }
    get gasInMaxPlanets() {
        const gases = {};
        let maxPlanetGas = "";
        let maxPlanets = -Infinity;
        this.planets.forEach((planet) => {
            for(const gas of planet.atmospiricGases){
            if (gas in gases) {
                gases[gas] += 1;
            } else {
                gases[gas] = 1;
            }
            if (gases[gas] > maxPlanets) {
                maxPlanets = gases[gas];
                maxPlanetGas = gas;
            }
        }});
        return maxPlanetGas;
    }
}

const solar = new SolorSystem();
console.log(solar.moonWithRings);
console.log(solar.gasInMaxPlanets);

