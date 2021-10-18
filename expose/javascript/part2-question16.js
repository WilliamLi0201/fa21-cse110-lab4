let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (var mem in statistics) {
    if (mem[0] === "r" || statistics[mem] % 2 == 1) {
        console.log(statistics[mem]);
    }
}
