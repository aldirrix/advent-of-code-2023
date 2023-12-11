const universe1 = [
  "...#......",
  ".......#..",
  "#.........",
  "..........",
  "......#...",
  ".#........",
  ".........#",
  "..........",
  ".......#..",
  "#...#.....",
];

const universe = [
  ".......#...........................................................................#........................................................",
  ".............#...........#..................#.............................................................#..............#.......#..........",
  "..................................................................#.........#......................................#........................",
  ".................#...........................................................................................................#..............",
  ".............................................................#..............................................................................",
  "......................#.....................................................................#............................................#..",
  ".....#...........................................#..........................................................................................",
  "............................#..........................................#...............................#....................................",
  "...........#......................................................................................#......................#..................",
  "....................................................#.....#................................................#......................#.........",
  "#..................................................................#.............#...........................................#..............",
  "......................................#..................................................#...............................................#..",
  ".................................#..........................................................................................................",
  "...............#........#..............................................#...............................................#....................",
  ".......#....................................................................................................................................",
  "............................................................................#...................#..................#.......#.........#......",
  "...................#......................#......#.......#.......#..........................................................................",
  "............#...........................................................................#................#..................................",
  ".....................................................#..................#................................................................#..",
  ".............................#.....#..........................................................................#...................#.........",
  "...#.......................................................#...............................#................................................",
  "............................................#........................................................#......................................",
  "...................................................................#..................................................................#.....",
  "..........................................................................................................................#.................",
  "#.......................#............................#.......................................#..............................................",
  "..........................................#.................#.....................................#................................#........",
  "..................#............................................................#........................#..............#....................",
  "............................................................................................................................................",
  "......#........................................................................................#.............................#..............",
  "...............#........................#.........#.....#......#...................#..............................#.........................",
  ".........................#.....#..........................................#.................................................................",
  ".................................................................................................................................#..........",
  "...........................................................#..................................................#..........#............#.....",
  ".............#.................................................................#............................................................",
  ".....................#............#..............#.......................................#..................................................",
  "#..........................#...........................#..................................................#.................................",
  ".............................................................#....................................................................#.......#.",
  "......................................................................................................................#.....................",
  "............#..................#...........#........#...............................#..............#...........#............................",
  ".......#..............................#.....................................................................................................",
  "........................#...............................................................#..............#.................#.............#....",
  ".#..........................................................................................................#...............................",
  ".........................................................#.....................#.................................................#..........",
  "..........................................#..........................................#...........................#.........................#",
  ".....#..........................#.................#..........#........#.....................................................................",
  "..........#...........#.................................................................................#...................................",
  ".............................................................................................................................#.......#......",
  "..........................................................#.................#............#..................................................",
  ".....................................................#..........................................#...........#...............................",
  ".......................................#...............................#.............................#......................................",
  "..................................#...............................................#........................................#.............#..",
  ".......#.......#.......#..........................................#.........................................................................",
  ".............................................#...............#..............................................................................",
  "............................#................................................................#..............................................",
  "........................................................#..................#.............................#........................#.........",
  "...................................................................................................#..........#.............................",
  "......#............................................................................#....................................#..................#",
  "..................#.....#...............#.....#......#...................................#.....................................#............",
  "..................................................................#...........#.............................................................",
  "#.............#..........................................#...............#...................#.........#....................................",
  "........#.............................................................................................................#.............#.......",
  "......................#......................................#............................................................................#.",
  "..............................#....................................................#........................................................",
  "............................................................................................................................................",
  "...............#.............................................................................................#..............................",
  "........................#............#............................#................................................................#........",
  "...#.....................................................#................#..............#...................................#..............",
  ".............................................#..............................................................................................",
  "...........................#................................................................................................................",
  ".....................................................#......#....................................................#.....#....................",
  ".....#....................................#.....#...........................#...................#...........................................",
  "..............#.....................#...................................................................#...................................",
  "#........................................................................................#..................................................",
  ".....................#........................................................................................#.............................",
  "..........................#.......................#..................................................................................#......",
  ".........#................................................#.........#.......................................................#...............",
  "...............................#................................................................#.....#.....................................",
  "...................#..........................#.................#..................#..............................................#.........",
  "......#......#..............................................................................................................................",
  "............................#......................................................................#........#...............................",
  "....................................................................................................................#.......................",
  "................................................#...........#.................#........................#....................................",
  ".................#..........................................................................................................................",
  "..........................#......................................................................................#..........#..........#....",
  "#...............................................................................................#.....................#.....................",
  "............#......................#...................#.................................#.........................................#........",
  "............................................................................................................................................",
  "....................................................................#.......................................................................",
  ".....#........................................#...........................................................#...................#.............",
  "..........................................................#..................................#..............................................",
  ".............................#............................................#.................................................................",
  "......................#............................................................................................................#........",
  "..#.....................................................................................................................................#...",
  "...........#..........................#............................................................................#........................",
  "..............................................#.................#....................#...............#........#.............................",
  "...........................#...........................#......................................#...........................#.....#...........",
  ".........................................................................................................#..................................",
  ".........#......#................................................................................................#........................#.",
  "...#.....................................................................#..............#...................................................",
  ".............................#......#...............................#................................................#......................",
  ".........................................#............................................................................................#.....",
  ".....................#............................#............#.................#...........................#...............#..............",
  ".............#..........................................#...................................#...............................................",
  "..#.............................#...........................................#.....................#................#........................",
  "...........................................#...........................#.................................................#..............#...",
  "........#...........................#.......................#.......................#.......................................................",
  "...........................#.............................................................................#.......................#..........",
  "............................................................................................................................................",
  "...............#...............................................................................#..........................................#.",
  "............................................................................................................................................",
  "#...............................................#......#.......#...............#............................................................",
  ".........#.................................#...........................................................#....................................",
  "......................................#............................#...............................................#........................",
  "......................#.........#.............................................................................#.............................",
  "....................................................................................#............#..........................................",
  "..........................................................................#...............#.................................................",
  "...........#.....#................................#.........................................................................#...............",
  "..................................................................#.......................................#.........................#.......",
  ".........................#................................#........................................................#........................",
  "........#...................................................................................#......#....................................#...",
  "...............................................................#...............#............................................................",
  ".............................................#.........................#.....................................#..............................",
  "...................#...............#........................................................................................................",
  "..........................#..............................#....................................#..................................#..........",
  "...........#.....................................................................#.....#....................................................",
  "...#.................................................#...............................................#...........#...........#..............",
  "...............#........................#................................................................................................#..",
  "....................#..............................................#.....................................#..................................",
  "..................................#.....................#................................#..................................................",
  "............................................#...................................................#.............#.............................",
  "........................................................................................................................#.....#......#.....#",
  "...........................................................#..................#......................#......................................",
  "...................#.........#....................................#.........................#...............................................",
  "....................................................#...............................................................#.......................",
  ".............#........................#....................................................................................#................",
  "....................................................................................#...................................................#...",
  ".......#................................................#................#..................................................................",
  ".#.................................................................#..............................................................#.........",
  "...................#.....#...................................................................#.........#.........#..........................",
  "............................................#.....#............#..................................#.........#................#..............",
];

const EXPANSION_VALUE = 1000000;

const transpose = (arr: string[][]) => arr[0].map((x, i) => arr.map((x) => x[i]));

const expand = (universe: string[]) => {
  let expandedUniverse: string[] = [];

  universe.forEach((row) => {
    if (row.replaceAll(/\.|I/g, "") === "") {
      expandedUniverse.push(row.replaceAll(".", "I"));
    } else {
      expandedUniverse.push(row);
    }
  });

  return expandedUniverse;
};

const countExpansionsBetween = (
  coordsGalaxy1: [number, number],
  coordsGalaxy2: [number, number],
  expansionsInX: number[],
  expansionsInY: number[]
) => {
  let passedExpansions = 0;

  expansionsInX.forEach((expansion) => {
    if (coordsGalaxy1[0] < expansion && coordsGalaxy2[0] > expansion) {
      passedExpansions++;
    }
  });
  expansionsInY.forEach((expansion) => {
    if (coordsGalaxy1[1] < expansion && coordsGalaxy2[1] > expansion) {
      passedExpansions++;
    }
  });

  expansionsInX.forEach((expansion) => {
    if (coordsGalaxy2[0] < expansion && coordsGalaxy1[0] > expansion) {
      passedExpansions++;
    }
  });
  expansionsInY.forEach((expansion) => {
    if (coordsGalaxy2[1] < expansion && coordsGalaxy1[1] > expansion) {
      passedExpansions++;
    }
  });

  return passedExpansions;
};

export const solve = () => {
  let accum = 0;

  const horizontalExpandedUniverse = expand(universe);
  const trasposedUniverse = transpose(horizontalExpandedUniverse.map((row) => row.split("")));
  const expandedUniverseHori = expand(trasposedUniverse.map((row) => row.join("")));
  const expandedUniverse = transpose(expandedUniverseHori.map((row) => row.split(""))).map((row) => row.join(""));

  let expansionsInX;
  const expansionsInY = [];

  expandedUniverse.forEach((row, i) => {
    if (row.replaceAll("I", "") === "") {
      expansionsInY.push(i);
    } else if (expansionsInX === undefined) {
      expansionsInX = row
        .split("")
        .map((val, i) => (val === "I" ? i : false))
        .filter((val) => val !== false);
    }
  });

  const galaxyToGalaxyMap: Record<string, number> = {};
  const galaxyCoords: Record<number, [number, number]> = {};

  let galaxyNumber = 0;
  expandedUniverse.forEach((row, rowIdx) => {
    return row.replace(/#/g, (_, columnIdx) => {
      galaxyCoords[galaxyNumber + 1] = [columnIdx, rowIdx];

      return (++galaxyNumber).toString();
    });
  });

  for (let i = 1; i <= galaxyNumber; i++) {
    for (let j = 1; j <= galaxyNumber; j++) {
      if (i !== j) {
        if (galaxyToGalaxyMap[`${j}-${i}`] === undefined) {
          const expansions = countExpansionsBetween(galaxyCoords[i], galaxyCoords[j], expansionsInX, expansionsInY);
          const diffX = Math.abs(galaxyCoords[i][0] - galaxyCoords[j][0]);
          const diffY = Math.abs(galaxyCoords[i][1] - galaxyCoords[j][1]);
          const absoluteDistance = diffX + diffY + expansions * EXPANSION_VALUE - expansions;

          console.log(
            `between galaxy ${i} and galaxy ${j} there are ${expansions} expansions and ${
              diffX + diffY - expansions
            } normal tiles making it ${absoluteDistance} distance`
          );

          galaxyToGalaxyMap[`${i}-${j}`] = absoluteDistance;
          accum += absoluteDistance;
        }
      }
    }
  }
  return accum;
};
