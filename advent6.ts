const races1 = [{ time: 71530, distance: 940200 }];
const races2 = [
  { time: 7, distance: 9 },
  { time: 15, distance: 40 },
  { time: 30, distance: 200 },
];

const races3 = [
  { time: 50, distance: 242 },
  { time: 74, distance: 1017 },
  { time: 86, distance: 1691 },
  { time: 85, distance: 1252 },
];
const races = [{ time: 50748685, distance: 242101716911252 }];

export const solve = () => {
  let accum = 1;
  races.forEach((race) => {
    let waysOfWinning = 0;

    for (let i = 1; i < race.time; i++) {
      const timeLeft = race.time - i;

      if (i * timeLeft > race.distance) {
        waysOfWinning++;
      }
    }

    accum *= waysOfWinning;
  });

  return accum;
};
