type GameSet = { blue?: number; red?: number; green?: number };
const games: Record<number, GameSet[]> = {
  1: [
    { blue: 7, red: 5 },
    { red: 10, blue: 7 },
    { blue: 5, green: 4, red: 15 },
    { green: 4, red: 6, blue: 7 },
    { green: 5, blue: 8, red: 4 },
    { red: 5, blue: 4, green: 3 },
  ],
  2: [
    { green: 8, red: 3 },
    { blue: 7, red: 6, green: 8 },
    { blue: 7, green: 3, red: 6 },
    { green: 8, blue: 6, red: 11 },
    { blue: 6, green: 3, red: 12 },
  ],
  3: [
    { blue: 6, red: 3, green: 7 },
    { red: 3, green: 3, blue: 8 },
    { blue: 8, red: 11, green: 4 },
    { blue: 5, red: 7, green: 6 },
    { blue: 9, green: 7, red: 1 },
  ],
  4: [{ red: 3, green: 4 }, { red: 5, blue: 1 }, { green: 2 }, { green: 3, blue: 1 }, { green: 2, blue: 1, red: 1 }],
  5: [
    { red: 17, blue: 5, green: 3 },
    { green: 8, red: 9, blue: 10 },
    { green: 2, blue: 9, red: 4 },
  ],
  6: [
    { blue: 5, green: 6, red: 3 },
    { green: 1, blue: 8, red: 12 },
    { blue: 2, red: 13, green: 6 },
  ],
  7: [
    { green: 1, blue: 1, red: 6 },
    { red: 1, green: 8 },
    { red: 3, green: 8, blue: 2 },
    { green: 14, blue: 4, red: 4 },
    { green: 4, blue: 5 },
    { green: 7, blue: 2, red: 1 },
  ],
  8: [
    { blue: 6, red: 9, green: 3 },
    { red: 2, blue: 6 },
    { green: 2, red: 1, blue: 2 },
    { green: 2, blue: 9, red: 6 },
  ],
  9: [
    { green: 5, blue: 8, red: 8 },
    { blue: 2, green: 6, red: 8 },
    { red: 6, green: 9 },
  ],
  10: [
    { red: 2, blue: 2, green: 12 },
    { green: 8, red: 3 },
    { blue: 5, red: 11, green: 6 },
    { red: 14, green: 1 },
  ],
  11: [
    { green: 2, red: 1, blue: 1 },
    { blue: 4, red: 7 },
    { red: 7, green: 7, blue: 5 },
    { blue: 2, red: 3, green: 6 },
    { blue: 3, red: 9, green: 7 },
  ],
  12: [
    { green: 9, red: 7, blue: 7 },
    { green: 6, blue: 4, red: 1 },
    { blue: 3, red: 5, green: 7 },
    { green: 9, red: 10, blue: 12 },
    { green: 11, red: 5 },
    { blue: 9, green: 12, red: 3 },
  ],
  13: [
    { blue: 7, red: 7, green: 2 },
    { blue: 5, green: 5, red: 7 },
    { blue: 1, red: 10 },
    { red: 11, blue: 2, green: 1 },
    { green: 1, blue: 1, red: 4 },
  ],
  14: [
    { blue: 2, red: 10 },
    { blue: 3, green: 6, red: 17 },
    { green: 3, blue: 4, red: 14 },
  ],
  15: [
    { blue: 7, green: 2, red: 4 },
    { blue: 7, red: 3, green: 3 },
    { red: 4, green: 2, blue: 1 },
    { red: 2, green: 9, blue: 5 },
    { red: 2, green: 4, blue: 5 },
  ],
  16: [
    { blue: 5, red: 1 },
    { blue: 8, green: 1 },
    { green: 5, blue: 3, red: 2 },
    { blue: 8, green: 2 },
    { red: 2, blue: 2, green: 5 },
  ],
  17: [
    { blue: 2, red: 5 },
    { red: 7, blue: 1 },
    { blue: 2, green: 2, red: 3 },
    { blue: 3, red: 2, green: 1 },
    { green: 5, red: 7 },
    { red: 6, green: 3 },
  ],
  18: [
    { blue: 4, red: 1, green: 14 },
    { red: 8, blue: 4, green: 14 },
    { red: 6, blue: 11, green: 10 },
    { blue: 5, green: 2, red: 3 },
    { green: 16, blue: 10, red: 2 },
    { red: 6, blue: 4, green: 12 },
  ],
  19: [
    { green: 10, red: 12, blue: 12 },
    { blue: 5, red: 12, green: 7 },
    { red: 15, blue: 8, green: 6 },
    { green: 13, red: 1, blue: 10 },
    { blue: 4, red: 8, green: 9 },
    { red: 16, green: 7, blue: 3 },
  ],
  20: [{ blue: 10, green: 9 }, { blue: 9, red: 1, green: 3 }, { blue: 11 }, { blue: 6 }, { blue: 8, green: 10 }],
  21: [
    { blue: 4, red: 4 },
    { green: 1, red: 3, blue: 3 },
    { blue: 4, green: 1, red: 2 },
  ],
  22: [
    { blue: 5, green: 4, red: 1 },
    { green: 14, blue: 4, red: 1 },
    { blue: 4, red: 4, green: 13 },
  ],
  23: [
    { red: 6, green: 8 },
    { green: 4, blue: 1, red: 7 },
    { green: 10, red: 5 },
    { red: 2, green: 9 },
  ],
  24: [
    { blue: 1, green: 10 },
    { green: 12, blue: 5 },
    { red: 1, green: 3 },
    { red: 2, blue: 4 },
  ],
  25: [
    { blue: 2, red: 3, green: 13 },
    { blue: 7, green: 15, red: 1 },
    { blue: 7, green: 2 },
  ],
  26: [
    { red: 20, blue: 5, green: 4 },
    { green: 1, blue: 8, red: 11 },
    { blue: 7, red: 6, green: 2 },
    { green: 4, blue: 7, red: 4 },
    { red: 5, blue: 8 },
  ],
  27: [
    { red: 3, green: 3, blue: 1 },
    { red: 3, blue: 1, green: 8 },
    { blue: 3, red: 4 },
  ],
  28: [{ blue: 1, red: 15, green: 2 }, { red: 15 }, { red: 3, green: 2 }, { red: 3, green: 1 }],
  29: [
    { blue: 4, green: 7, red: 1 },
    { green: 5, red: 9 },
    { green: 8, red: 1, blue: 10 },
    { blue: 2, green: 1 },
  ],
  30: [
    { blue: 9, red: 5, green: 6 },
    { red: 15, blue: 6, green: 3 },
    { red: 13, blue: 2, green: 4 },
    { green: 2, blue: 3 },
    { red: 13, blue: 8 },
    { green: 5, blue: 6, red: 17 },
  ],
  31: [
    { green: 1, blue: 9, red: 9 },
    { green: 4, red: 8, blue: 1 },
    { blue: 10, green: 2 },
    { red: 1, blue: 1 },
    { red: 1, blue: 1 },
    { blue: 6, red: 9, green: 5 },
  ],
  32: [
    { red: 7, green: 7, blue: 3 },
    { green: 14, red: 11, blue: 11 },
    { green: 10, red: 7, blue: 2 },
    { green: 1, blue: 4, red: 4 },
    { blue: 9, green: 10, red: 5 },
  ],
  33: [
    { red: 12, green: 4, blue: 11 },
    { blue: 4, red: 10, green: 1 },
    { green: 7, red: 10, blue: 16 },
    { red: 15, blue: 5 },
    { green: 10, red: 4 },
    { green: 8, blue: 5, red: 6 },
  ],
  34: [
    { blue: 8, red: 1, green: 2 },
    { green: 3, blue: 3, red: 4 },
    { red: 6, green: 3 },
    { red: 6 },
    { blue: 9, red: 4, green: 3 },
  ],
  35: [
    { green: 6, blue: 6, red: 1 },
    { green: 3, blue: 3 },
    { red: 1, blue: 5, green: 2 },
    { red: 1, green: 13, blue: 1 },
    { green: 3, red: 1, blue: 10 },
    { green: 5, blue: 4 },
  ],
  36: [
    { blue: 15, red: 1 },
    { red: 2, green: 3, blue: 17 },
    { blue: 6, red: 7, green: 8 },
    { red: 12, green: 7, blue: 14 },
    { blue: 4, red: 2 },
    { green: 8, blue: 12, red: 10 },
  ],
  37: [
    { green: 2, blue: 2 },
    { red: 6, blue: 3, green: 1 },
    { green: 2, blue: 3, red: 1 },
  ],
  38: [
    { blue: 2, red: 7, green: 9 },
    { red: 3, green: 18, blue: 6 },
    { red: 6, green: 19, blue: 2 },
    { blue: 2, green: 13, red: 7 },
  ],
  39: [
    { blue: 12, green: 7, red: 3 },
    { green: 16, blue: 6 },
    { red: 1, green: 4, blue: 2 },
    { blue: 15, red: 2, green: 2 },
  ],
  40: [
    { blue: 18, red: 1 },
    { green: 4, blue: 15 },
    { green: 5, blue: 17, red: 3 },
    { red: 4, blue: 16, green: 2 },
  ],
  41: [
    { blue: 3, green: 14 },
    { green: 11, blue: 8 },
    { blue: 14, red: 4, green: 1 },
    { blue: 5, red: 2, green: 15 },
  ],
  42: [
    { red: 7, green: 9 },
    { red: 10, green: 19, blue: 10 },
    { blue: 16, green: 8, red: 7 },
    { blue: 6, green: 11, red: 7 },
  ],
  43: [
    { blue: 1, red: 5 },
    { red: 8, green: 2, blue: 1 },
    { red: 4, green: 3 },
    { green: 2, red: 1 },
  ],
  44: [
    { green: 5, blue: 13, red: 12 },
    { blue: 18, green: 3, red: 8 },
    { green: 2, blue: 3, red: 11 },
  ],
  45: [
    { blue: 3, red: 1, green: 4 },
    { blue: 2, red: 1 },
    { blue: 1, green: 4 },
    { red: 3, green: 16 },
  ],
  46: [
    { red: 10, green: 1, blue: 4 },
    { green: 4, blue: 14, red: 2 },
    { red: 12, blue: 3, green: 2 },
    { green: 4, red: 2, blue: 2 },
    { red: 2, green: 1, blue: 11 },
    { green: 2, blue: 19 },
  ],
  47: [
    { blue: 10, green: 10, red: 3 },
    { red: 3, blue: 11, green: 9 },
    { blue: 4, green: 10 },
  ],
  48: [
    { green: 5, blue: 1 },
    { red: 4, green: 8, blue: 8 },
    { red: 17, blue: 5, green: 2 },
    { green: 12, red: 18, blue: 7 },
    { green: 15, red: 14, blue: 8 },
    { green: 11, blue: 1, red: 16 },
  ],
  49: [
    { red: 2, green: 4, blue: 1 },
    { green: 1, blue: 5, red: 2 },
    { green: 8, blue: 3, red: 1 },
    { blue: 4, red: 3, green: 9 },
  ],
  50: [
    { blue: 2 },
    { green: 7, red: 5 },
    { red: 3, blue: 3 },
    { green: 5, blue: 1, red: 2 },
    { blue: 5, green: 3 },
    { green: 4, blue: 3, red: 1 },
  ],
  51: [
    { green: 6, blue: 13, red: 3 },
    { blue: 7, green: 7, red: 1 },
    { green: 15, red: 2, blue: 13 },
    { red: 1, blue: 7, green: 3 },
    { blue: 11, green: 16, red: 1 },
  ],
  52: [
    { blue: 5, green: 2, red: 14 },
    { blue: 4, red: 3 },
    { green: 10, red: 7 },
    { blue: 1, green: 10, red: 10 },
    { blue: 9, green: 5, red: 12 },
  ],
  53: [{ green: 1, red: 2, blue: 1 }, { green: 4 }, { green: 1 }, { green: 2 }, { green: 2, red: 1 }],
  54: [{ green: 3, blue: 11 }, { blue: 12 }, { red: 1, blue: 3 }, { blue: 7, red: 1 }],
  55: [
    { green: 7, red: 7 },
    { blue: 1, green: 7, red: 14 },
    { red: 17, blue: 2, green: 5 },
    { blue: 1, red: 7 },
    { blue: 2, green: 3, red: 14 },
  ],
  56: [{ blue: 3, red: 2, green: 1 }, { red: 1, blue: 4, green: 2 }, { green: 5, red: 1, blue: 2 }, { blue: 7 }],
  57: [
    { blue: 1, red: 14, green: 7 },
    { red: 2, green: 1 },
    { blue: 1, red: 6, green: 6 },
  ],
  58: [
    { red: 11, green: 2 },
    { green: 3, red: 8, blue: 8 },
    { red: 10, green: 1, blue: 13 },
  ],
  59: [
    { green: 11, blue: 5, red: 11 },
    { red: 13, blue: 6, green: 11 },
    { red: 6, blue: 7, green: 12 },
    { blue: 9, red: 9, green: 1 },
  ],
  60: [
    { red: 3, blue: 8, green: 4 },
    { blue: 5, red: 2, green: 3 },
    { green: 7, red: 3 },
    { blue: 8, red: 2, green: 7 },
  ],
  61: [
    { red: 17, blue: 12, green: 9 },
    { green: 20, red: 5, blue: 14 },
    { blue: 9, green: 11, red: 15 },
    { green: 14, blue: 6, red: 14 },
    { green: 16, red: 7, blue: 4 },
  ],
  62: [
    { red: 3, blue: 11, green: 16 },
    { green: 1, red: 6, blue: 6 },
    { green: 7, red: 6, blue: 9 },
  ],
  63: [
    { blue: 3, red: 20, green: 1 },
    { red: 11, green: 5 },
    { red: 13, green: 2 },
    { red: 15, blue: 1, green: 6 },
  ],
  64: [
    { blue: 8, red: 1, green: 11 },
    { red: 1, blue: 11, green: 4 },
    { red: 5, green: 7, blue: 1 },
  ],
  65: [
    { blue: 3, green: 13, red: 2 },
    { blue: 2, red: 3 },
    { green: 10, blue: 8, red: 2 },
    { red: 2, blue: 6, green: 8 },
    { blue: 10, green: 12 },
  ],
  66: [
    { blue: 4, red: 3, green: 8 },
    { red: 1, green: 9 },
    { blue: 7, red: 6, green: 6 },
    { blue: 1, red: 1, green: 11 },
  ],
  67: [
    { blue: 10, green: 15 },
    { red: 3, blue: 2, green: 1 },
    { blue: 4, green: 12, red: 2 },
    { green: 8, blue: 11, red: 8 },
    { blue: 9, green: 5, red: 6 },
    { green: 10, red: 4, blue: 14 },
  ],
  68: [
    { green: 4, blue: 3, red: 4 },
    { green: 9, blue: 2 },
    { blue: 6, red: 6, green: 10 },
    { blue: 5, green: 4, red: 5 },
    { blue: 3, green: 10 },
    { blue: 5, red: 5 },
  ],
  69: [
    { blue: 6, red: 1, green: 1 },
    { red: 4, green: 3, blue: 2 },
    { green: 5, red: 3, blue: 5 },
    { red: 5, blue: 5 },
  ],
  70: [
    { green: 2, red: 1 },
    { green: 12, red: 1, blue: 11 },
    { green: 7, blue: 12 },
    { blue: 13, green: 10 },
  ],
  71: [
    { red: 9, green: 9, blue: 4 },
    { red: 10, blue: 1, green: 12 },
    { blue: 3, red: 13, green: 3 },
  ],
  72: [
    { red: 2, blue: 8, green: 5 },
    { green: 2 },
    { red: 1, green: 5, blue: 6 },
    { blue: 1, red: 3, green: 12 },
    { green: 5, blue: 14, red: 1 },
    { blue: 8, green: 13 },
  ],
  73: [
    { blue: 19, red: 11, green: 8 },
    { blue: 18, red: 9, green: 11 },
    { green: 6, blue: 19, red: 6 },
  ],
  74: [
    { green: 2, red: 4, blue: 2 },
    { green: 1, red: 1, blue: 4 },
    { red: 2, green: 4, blue: 2 },
    { red: 3, blue: 2, green: 6 },
  ],
  75: [{ blue: 2 }, { red: 1, blue: 1, green: 1 }, { blue: 1 }, { blue: 5, green: 2 }, { green: 1, red: 1, blue: 3 }],
  76: [
    { blue: 9, red: 4, green: 3 },
    { blue: 8, green: 8, red: 3 },
    { red: 3, green: 2, blue: 8 },
    { green: 8, blue: 6, red: 5 },
  ],
  77: [
    { blue: 7, green: 17 },
    { blue: 1, red: 2, green: 18 },
    { green: 18, blue: 1, red: 2 },
  ],
  78: [
    { red: 2, green: 2, blue: 1 },
    { green: 5, blue: 3 },
    { green: 1, blue: 2 },
    { blue: 2, red: 6, green: 5 },
  ],
  79: [
    { red: 4, green: 6, blue: 17 },
    { blue: 2, red: 3, green: 8 },
    { red: 8, blue: 19, green: 12 },
    { red: 5, green: 8, blue: 12 },
    { blue: 16, red: 1, green: 12 },
    { green: 5, blue: 18, red: 8 },
  ],
  80: [{ blue: 1, red: 4, green: 10 }, { green: 6 }, { red: 6, green: 3, blue: 2 }],
  81: [
    { green: 2, blue: 5, red: 4 },
    { red: 3, green: 1, blue: 14 },
    { red: 3, blue: 10, green: 2 },
  ],
  82: [
    { red: 12, blue: 5, green: 2 },
    { blue: 12, red: 6, green: 5 },
    { blue: 13, green: 1, red: 3 },
    { red: 11, blue: 3 },
    { red: 4, green: 3 },
  ],
  83: [
    { blue: 10, red: 16, green: 4 },
    { red: 6, blue: 2, green: 14 },
    { blue: 9, green: 14 },
    { blue: 7, red: 1 },
    { green: 4, red: 2, blue: 8 },
    { red: 5, green: 7 },
  ],
  84: [
    { red: 3, blue: 3, green: 6 },
    { red: 9, green: 17, blue: 16 },
    { blue: 13, red: 7 },
    { green: 14, red: 2, blue: 14 },
  ],
  85: [{ blue: 7 }, { red: 8, blue: 10, green: 1 }, { blue: 6, red: 9 }],
  86: [
    { red: 9, green: 6, blue: 9 },
    { blue: 1, red: 5 },
    { red: 11, green: 1, blue: 11 },
    { green: 3, blue: 8 },
    { red: 8, green: 5, blue: 4 },
    { blue: 15, green: 4, red: 2 },
  ],
  87: [{ red: 2, green: 2 }, { red: 5, blue: 2 }, { red: 6 }],
  88: [
    { green: 2, red: 5 },
    { blue: 9, red: 7, green: 3 },
    { blue: 1, green: 2, red: 3 },
    { green: 3, blue: 6, red: 1 },
    { red: 1, green: 3, blue: 6 },
  ],
  89: [
    { blue: 10, red: 13 },
    { red: 15, blue: 6, green: 2 },
    { green: 2, red: 10, blue: 18 },
    { green: 1, red: 18, blue: 8 },
  ],
  90: [
    { red: 2, blue: 2, green: 9 },
    { red: 1, green: 9 },
    { green: 7, blue: 3, red: 2 },
    { blue: 4, red: 2, green: 4 },
  ],
  91: [
    { green: 6, red: 4, blue: 9 },
    { green: 4, red: 4, blue: 17 },
    { blue: 6, red: 2, green: 4 },
    { green: 7, red: 2, blue: 13 },
    { green: 1, blue: 13, red: 1 },
  ],
  92: [
    { green: 4, blue: 1, red: 8 },
    { green: 7, red: 6 },
    { red: 13 },
    { green: 9 },
    { red: 6, blue: 1, green: 4 },
    { red: 2, blue: 1, green: 15 },
  ],
  93: [
    { green: 8, red: 8, blue: 13 },
    { red: 4, green: 10 },
    { blue: 15, red: 11 },
    { green: 14, red: 5, blue: 6 },
    { red: 12, blue: 3, green: 13 },
    { red: 9, green: 10, blue: 6 },
  ],
  94: [
    { red: 14, green: 10 },
    { red: 15 },
    { red: 4 },
    { green: 4, red: 7, blue: 1 },
    { red: 6, green: 5 },
    { red: 1, green: 2 },
  ],
  95: [
    { blue: 1, red: 11 },
    { red: 15, blue: 1, green: 3 },
    { red: 13, blue: 2, green: 3 },
    { green: 1, blue: 1 },
  ],
  96: [
    { red: 4, blue: 4, green: 4 },
    { blue: 5, green: 5, red: 4 },
    { red: 2, blue: 8 },
    { red: 16, green: 5, blue: 13 },
  ],
  97: [
    { red: 6, green: 13, blue: 3 },
    { green: 10, blue: 4 },
    { red: 3, green: 12, blue: 4 },
    { red: 3, blue: 5, green: 16 },
    { red: 3, green: 9, blue: 1 },
  ],
  98: [
    { red: 8, green: 12, blue: 2 },
    { green: 7, red: 8, blue: 1 },
    { blue: 2, red: 6, green: 3 },
    { red: 9, blue: 1, green: 4 },
  ],
  99: [
    { blue: 6, red: 11, green: 7 },
    { red: 9, green: 6, blue: 1 },
    { red: 9, blue: 2 },
  ],
  100: [
    { red: 1, blue: 4, green: 2 },
    { red: 6, green: 2, blue: 11 },
    { red: 1, blue: 1, green: 2 },
    { red: 1, blue: 7 },
  ],
};

const limit = {
  red: 12,
  green: 13,
  blue: 14,
};

const isSetValid = (set: GameSet) => {
  let isValid = true;
  if ((set.blue ?? 0) > limit.blue) isValid = false;
  if ((set.red ?? 0) > limit.red) isValid = false;
  if ((set.green ?? 0) > limit.green) isValid = false;

  return isValid;
};

const calculate = () => {
  let accum = 0;

  Object.entries(games).forEach(([_, gameSets]) => {
    const minimum = {
      red: 0,
      green: 0,
      blue: 0,
    };

    gameSets.forEach((set) => {
      if ((set.blue ?? 0) > minimum.blue) minimum.blue = set.blue ?? 0;
      if ((set.red ?? 0) > minimum.red) minimum.red = set.red ?? 0;
      if ((set.green ?? 0) > minimum.green) minimum.green = set.green ?? 0;
    });

    if (minimum.blue * minimum.red * minimum.green === 0) {
      console.log('zero');
    }

    accum += minimum.blue * minimum.red * minimum.green;
  });

  return accum;
};

console.log(calculate());

