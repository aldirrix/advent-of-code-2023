const hands1 = [
  { cards: "32T3K", bid: 765 },
  { cards: "T55J5", bid: 684 },
  { cards: "KK677", bid: 28 },
  { cards: "KTJJT", bid: 220 },
  { cards: "QQQJA", bid: 483 },
];

const hands = [
  { cards: "88223", bid: 818 },
  { cards: "66JQ9", bid: 398 },
  { cards: "6T9AT", bid: 311 },
  { cards: "53TT3", bid: 43 },
  { cards: "J6266", bid: 762 },
  { cards: "5TTAA", bid: 647 },
  { cards: "44JTT", bid: 779 },
  { cards: "T4T66", bid: 496 },
  { cards: "6AAA3", bid: 383 },
  { cards: "69K4Q", bid: 232 },
  { cards: "55KA5", bid: 436 },
  { cards: "666JJ", bid: 479 },
  { cards: "75J85", bid: 835 },
  { cards: "27379", bid: 323 },
  { cards: "592Q3", bid: 565 },
  { cards: "33777", bid: 438 },
  { cards: "75224", bid: 136 },
  { cards: "2QQK2", bid: 116 },
  { cards: "JJQK9", bid: 219 },
  { cards: "9Q77J", bid: 46 },
  { cards: "68686", bid: 177 },
  { cards: "7A7AA", bid: 336 },
  { cards: "J4K3A", bid: 582 },
  { cards: "46QA9", bid: 11 },
  { cards: "5AJ85", bid: 712 },
  { cards: "AJAJ4", bid: 264 },
  { cards: "AK2AA", bid: 756 },
  { cards: "K49KK", bid: 597 },
  { cards: "9J882", bid: 678 },
  { cards: "28QQ8", bid: 405 },
  { cards: "93333", bid: 401 },
  { cards: "KJTQJ", bid: 281 },
  { cards: "K78Q4", bid: 941 },
  { cards: "T8J56", bid: 377 },
  { cards: "Q6TQT", bid: 440 },
  { cards: "T44T4", bid: 792 },
  { cards: "6KK66", bid: 7 },
  { cards: "2JT22", bid: 144 },
  { cards: "K6656", bid: 665 },
  { cards: "6JQ4K", bid: 87 },
  { cards: "5J4JA", bid: 419 },
  { cards: "3A2J4", bid: 325 },
  { cards: "47T47", bid: 291 },
  { cards: "3J7Q3", bid: 190 },
  { cards: "4A527", bid: 234 },
  { cards: "223K2", bid: 917 },
  { cards: "233J3", bid: 912 },
  { cards: "844QQ", bid: 268 },
  { cards: "TKTJK", bid: 125 },
  { cards: "22298", bid: 62 },
  { cards: "T6J59", bid: 258 },
  { cards: "99K69", bid: 896 },
  { cards: "8J878", bid: 834 },
  { cards: "J5655", bid: 757 },
  { cards: "4J26T", bid: 255 },
  { cards: "4K3K5", bid: 448 },
  { cards: "229J9", bid: 889 },
  { cards: "22372", bid: 702 },
  { cards: "6Q73T", bid: 832 },
  { cards: "Q9892", bid: 919 },
  { cards: "QJQ7Q", bid: 898 },
  { cards: "JTTT5", bid: 173 },
  { cards: "959J9", bid: 543 },
  { cards: "AAAA5", bid: 858 },
  { cards: "3Q5Q6", bid: 159 },
  { cards: "23372", bid: 39 },
  { cards: "453AK", bid: 572 },
  { cards: "A6A82", bid: 410 },
  { cards: "Q88Q8", bid: 241 },
  { cards: "J675A", bid: 348 },
  { cards: "KQQ2Q", bid: 643 },
  { cards: "KJK52", bid: 981 },
  { cards: "A9989", bid: 631 },
  { cards: "33633", bid: 64 },
  { cards: "44TJA", bid: 274 },
  { cards: "A49A4", bid: 59 },
  { cards: "AKAKA", bid: 864 },
  { cards: "4333K", bid: 184 },
  { cards: "8T843", bid: 238 },
  { cards: "54594", bid: 429 },
  { cards: "J222J", bid: 78 },
  { cards: "5Q655", bid: 374 },
  { cards: "5Q8KA", bid: 147 },
  { cards: "J8Q2J", bid: 278 },
  { cards: "29293", bid: 387 },
  { cards: "T8TT4", bid: 15 },
  { cards: "T7K36", bid: 481 },
  { cards: "43776", bid: 782 },
  { cards: "24292", bid: 369 },
  { cards: "7K3Q2", bid: 551 },
  { cards: "42T2T", bid: 495 },
  { cards: "5Q5QQ", bid: 761 },
  { cards: "QKKKK", bid: 312 },
  { cards: "22J9A", bid: 948 },
  { cards: "T552T", bid: 657 },
  { cards: "75Q77", bid: 45 },
  { cards: "35296", bid: 931 },
  { cards: "46266", bid: 157 },
  { cards: "9J4KK", bid: 973 },
  { cards: "A4A77", bid: 269 },
  { cards: "36T6T", bid: 235 },
  { cards: "44483", bid: 386 },
  { cards: "29452", bid: 924 },
  { cards: "66Q66", bid: 723 },
  { cards: "4TT86", bid: 717 },
  { cards: "544AK", bid: 956 },
  { cards: "QQQ9Q", bid: 75 },
  { cards: "JJ989", bid: 708 },
  { cards: "AKKA9", bid: 842 },
  { cards: "2777K", bid: 519 },
  { cards: "Q569A", bid: 831 },
  { cards: "65838", bid: 996 },
  { cards: "9AAA9", bid: 128 },
  { cards: "Q722Q", bid: 95 },
  { cards: "KJ2KK", bid: 807 },
  { cards: "8TTKK", bid: 989 },
  { cards: "393J9", bid: 306 },
  { cards: "44J44", bid: 263 },
  { cards: "85335", bid: 70 },
  { cards: "54499", bid: 500 },
  { cards: "KKJ44", bid: 462 },
  { cards: "Q44K4", bid: 636 },
  { cards: "Q3392", bid: 870 },
  { cards: "8J896", bid: 540 },
  { cards: "8QQ63", bid: 485 },
  { cards: "37955", bid: 209 },
  { cards: "6K5K8", bid: 35 },
  { cards: "58JKT", bid: 307 },
  { cards: "66QQ7", bid: 993 },
  { cards: "Q4K98", bid: 937 },
  { cards: "K2J42", bid: 583 },
  { cards: "45333", bid: 965 },
  { cards: "TAJ75", bid: 74 },
  { cards: "T548J", bid: 114 },
  { cards: "J5599", bid: 111 },
  { cards: "9J557", bid: 79 },
  { cards: "49JK3", bid: 669 },
  { cards: "T9T9T", bid: 613 },
  { cards: "J5TK6", bid: 69 },
  { cards: "TQTJT", bid: 223 },
  { cards: "98746", bid: 560 },
  { cards: "3QQ33", bid: 271 },
  { cards: "7A3QK", bid: 692 },
  { cards: "AQ347", bid: 32 },
  { cards: "653J9", bid: 638 },
  { cards: "J8J48", bid: 635 },
  { cards: "94449", bid: 873 },
  { cards: "44449", bid: 957 },
  { cards: "T4TTT", bid: 224 },
  { cards: "949T4", bid: 695 },
  { cards: "Q8Q4Q", bid: 376 },
  { cards: "75QJ5", bid: 130 },
  { cards: "K8K68", bid: 988 },
  { cards: "84J45", bid: 441 },
  { cards: "82577", bid: 443 },
  { cards: "T4383", bid: 812 },
  { cards: "973T2", bid: 1000 },
  { cards: "TKK4J", bid: 781 },
  { cards: "K6J77", bid: 911 },
  { cards: "8Q383", bid: 491 },
  { cards: "333AJ", bid: 230 },
  { cards: "53555", bid: 492 },
  { cards: "68666", bid: 183 },
  { cards: "666Q5", bid: 178 },
  { cards: "26KKK", bid: 379 },
  { cards: "77TTQ", bid: 978 },
  { cards: "92992", bid: 907 },
  { cards: "T2562", bid: 65 },
  { cards: "K7J3K", bid: 324 },
  { cards: "67365", bid: 400 },
  { cards: "2222J", bid: 331 },
  { cards: "AA2AA", bid: 933 },
  { cards: "8AAAJ", bid: 790 },
  { cards: "47474", bid: 105 },
  { cards: "48T43", bid: 203 },
  { cards: "A5AJT", bid: 736 },
  { cards: "9J6TQ", bid: 162 },
  { cards: "TTTT6", bid: 700 },
  { cards: "97987", bid: 851 },
  { cards: "K5788", bid: 439 },
  { cards: "Q9399", bid: 591 },
  { cards: "34976", bid: 406 },
  { cards: "3434T", bid: 486 },
  { cards: "6A66J", bid: 22 },
  { cards: "9J9TA", bid: 822 },
  { cards: "QQ66J", bid: 632 },
  { cards: "77755", bid: 590 },
  { cards: "5564A", bid: 345 },
  { cards: "J5A75", bid: 186 },
  { cards: "29785", bid: 828 },
  { cards: "88844", bid: 882 },
  { cards: "38KK6", bid: 955 },
  { cards: "66TTT", bid: 349 },
  { cards: "78TKK", bid: 969 },
  { cards: "46344", bid: 881 },
  { cards: "7TT77", bid: 561 },
  { cards: "6JTTQ", bid: 997 },
  { cards: "QA8QA", bid: 921 },
  { cards: "8Q2T4", bid: 625 },
  { cards: "67T4A", bid: 403 },
  { cards: "436K5", bid: 214 },
  { cards: "6K7T8", bid: 26 },
  { cards: "8A98K", bid: 197 },
  { cards: "T3K84", bid: 141 },
  { cards: "5J454", bid: 344 },
  { cards: "74Q69", bid: 642 },
  { cards: "KJ555", bid: 20 },
  { cards: "5A4A8", bid: 129 },
  { cards: "Q4A5J", bid: 510 },
  { cards: "K2KK5", bid: 126 },
  { cards: "T6686", bid: 853 },
  { cards: "7Q774", bid: 867 },
  { cards: "99696", bid: 459 },
  { cards: "7Q3TA", bid: 770 },
  { cards: "9J966", bid: 117 },
  { cards: "T4T5T", bid: 494 },
  { cards: "828K2", bid: 236 },
  { cards: "54726", bid: 38 },
  { cards: "88T82", bid: 704 },
  { cards: "73977", bid: 502 },
  { cards: "535A5", bid: 294 },
  { cards: "K9K5K", bid: 418 },
  { cards: "8TT9J", bid: 115 },
  { cards: "Q2376", bid: 480 },
  { cards: "5A9T7", bid: 257 },
  { cards: "KK9KK", bid: 673 },
  { cards: "33KK3", bid: 427 },
  { cards: "4A575", bid: 974 },
  { cards: "JT94J", bid: 515 },
  { cards: "999A9", bid: 83 },
  { cards: "Q342A", bid: 938 },
  { cards: "8JKAJ", bid: 574 },
  { cards: "5664J", bid: 775 },
  { cards: "642A4", bid: 101 },
  { cards: "33K28", bid: 916 },
  { cards: "K28JK", bid: 176 },
  { cards: "QQQQK", bid: 967 },
  { cards: "4A4Q4", bid: 616 },
  { cards: "T578T", bid: 552 },
  { cards: "46474", bid: 174 },
  { cards: "QQ83J", bid: 837 },
  { cards: "22287", bid: 23 },
  { cards: "JJJJJ", bid: 725 },
  { cards: "KK55K", bid: 120 },
  { cards: "AAQA5", bid: 555 },
  { cards: "72737", bid: 37 },
  { cards: "Q82JQ", bid: 518 },
  { cards: "77667", bid: 464 },
  { cards: "QJAQA", bid: 367 },
  { cards: "K323K", bid: 52 },
  { cards: "777T4", bid: 751 },
  { cards: "74777", bid: 452 },
  { cards: "839QJ", bid: 124 },
  { cards: "8Q989", bid: 326 },
  { cards: "5K5JA", bid: 711 },
  { cards: "777J7", bid: 396 },
  { cards: "46AJT", bid: 767 },
  { cards: "88669", bid: 637 },
  { cards: "JTTKQ", bid: 34 },
  { cards: "JKK9K", bid: 251 },
  { cards: "66226", bid: 163 },
  { cards: "J3343", bid: 605 },
  { cards: "998J5", bid: 534 },
  { cards: "AT72K", bid: 950 },
  { cards: "7J757", bid: 608 },
  { cards: "84TT4", bid: 460 },
  { cards: "99955", bid: 315 },
  { cards: "TK5KA", bid: 60 },
  { cards: "T82JQ", bid: 991 },
  { cards: "46866", bid: 661 },
  { cards: "T8TTT", bid: 19 },
  { cards: "25K65", bid: 577 },
  { cards: "QK3J6", bid: 284 },
  { cards: "7A977", bid: 390 },
  { cards: "KKKK2", bid: 774 },
  { cards: "J97A7", bid: 143 },
  { cards: "QK545", bid: 655 },
  { cards: "AK4T3", bid: 454 },
  { cards: "374K9", bid: 300 },
  { cards: "AJATT", bid: 614 },
  { cards: "96KA7", bid: 819 },
  { cards: "5525A", bid: 253 },
  { cards: "A995A", bid: 61 },
  { cards: "66Q6Q", bid: 36 },
  { cards: "4J253", bid: 282 },
  { cards: "3JK9Q", bid: 385 },
  { cards: "44JJ4", bid: 196 },
  { cards: "KKKKJ", bid: 166 },
  { cards: "K8KK8", bid: 299 },
  { cards: "J9979", bid: 179 },
  { cards: "93999", bid: 738 },
  { cards: "47T3K", bid: 726 },
  { cards: "A6J45", bid: 182 },
  { cards: "JT322", bid: 421 },
  { cards: "35J36", bid: 545 },
  { cards: "838TK", bid: 434 },
  { cards: "6AK6A", bid: 838 },
  { cards: "4JT44", bid: 929 },
  { cards: "J5955", bid: 473 },
  { cards: "K4A47", bid: 611 },
  { cards: "QK472", bid: 40 },
  { cards: "AJTTJ", bid: 106 },
  { cards: "4J9TT", bid: 82 },
  { cards: "4QQ4Q", bid: 316 },
  { cards: "38KA8", bid: 836 },
  { cards: "96K8A", bid: 586 },
  { cards: "J286T", bid: 318 },
  { cards: "2JJ77", bid: 778 },
  { cards: "4344K", bid: 528 },
  { cards: "866AA", bid: 215 },
  { cards: "68676", bid: 56 },
  { cards: "934J3", bid: 563 },
  { cards: "44J45", bid: 355 },
  { cards: "4J443", bid: 804 },
  { cards: "5QQ58", bid: 185 },
  { cards: "844AK", bid: 53 },
  { cards: "3T333", bid: 909 },
  { cards: "TJ2K5", bid: 860 },
  { cards: "AAQ3A", bid: 395 },
  { cards: "66646", bid: 272 },
  { cards: "54T8K", bid: 676 },
  { cards: "A4Q25", bid: 67 },
  { cards: "94J49", bid: 696 },
  { cards: "42KK2", bid: 267 },
  { cards: "KQK8T", bid: 985 },
  { cards: "4QJ29", bid: 559 },
  { cards: "83686", bid: 244 },
  { cards: "53292", bid: 940 },
  { cards: "QK6KK", bid: 503 },
  { cards: "78777", bid: 660 },
  { cards: "J4424", bid: 194 },
  { cards: "8Q46Q", bid: 699 },
  { cards: "72776", bid: 368 },
  { cards: "KA553", bid: 926 },
  { cards: "44454", bid: 627 },
  { cards: "52599", bid: 86 },
  { cards: "242A2", bid: 337 },
  { cards: "49955", bid: 467 },
  { cards: "QJAQK", bid: 847 },
  { cards: "J22AJ", bid: 259 },
  { cards: "2QQ2Q", bid: 228 },
  { cards: "K33KK", bid: 833 },
  { cards: "95559", bid: 900 },
  { cards: "262AJ", bid: 250 },
  { cards: "9AQ34", bid: 604 },
  { cards: "8Q99Q", bid: 788 },
  { cards: "JAQT9", bid: 908 },
  { cards: "Q9432", bid: 47 },
  { cards: "T3346", bid: 619 },
  { cards: "8K97T", bid: 30 },
  { cards: "J62J6", bid: 240 },
  { cards: "28888", bid: 302 },
  { cards: "K96K9", bid: 320 },
  { cards: "9TQAT", bid: 960 },
  { cards: "J9877", bid: 612 },
  { cards: "88878", bid: 556 },
  { cards: "6QQ5T", bid: 732 },
  { cards: "6JA89", bid: 681 },
  { cards: "3JJ5T", bid: 435 },
  { cards: "QQ2K7", bid: 77 },
  { cards: "ATTTT", bid: 283 },
  { cards: "QKJQ8", bid: 629 },
  { cards: "53353", bid: 276 },
  { cards: "A2A33", bid: 805 },
  { cards: "383AJ", bid: 797 },
  { cards: "J684K", bid: 169 },
  { cards: "44J4A", bid: 164 },
  { cards: "KKK5K", bid: 392 },
  { cards: "7988J", bid: 24 },
  { cards: "Q5446", bid: 885 },
  { cards: "7777A", bid: 713 },
  { cards: "24386", bid: 839 },
  { cards: "J77A7", bid: 537 },
  { cards: "KTA7Q", bid: 16 },
  { cards: "6TTJJ", bid: 677 },
  { cards: "9Q93Q", bid: 523 },
  { cards: "22322", bid: 280 },
  { cards: "2QK58", bid: 984 },
  { cards: "65795", bid: 6 },
  { cards: "T9TTT", bid: 763 },
  { cards: "66A67", bid: 58 },
  { cards: "KJ994", bid: 743 },
  { cards: "Q7KQQ", bid: 222 },
  { cards: "4A424", bid: 270 },
  { cards: "KQKQK", bid: 694 },
  { cards: "843Q4", bid: 287 },
  { cards: "5QQAQ", bid: 330 },
  { cards: "Q4449", bid: 593 },
  { cards: "QQQ4J", bid: 131 },
  { cards: "2222K", bid: 132 },
  { cards: "28287", bid: 402 },
  { cards: "J46A4", bid: 707 },
  { cards: "24242", bid: 982 },
  { cards: "6686J", bid: 733 },
  { cards: "8T9Q8", bid: 175 },
  { cards: "45J3Q", bid: 442 },
  { cards: "6Q48J", bid: 444 },
  { cards: "3TTQ3", bid: 737 },
  { cards: "4TT4T", bid: 127 },
  { cards: "5555A", bid: 399 },
  { cards: "AKT29", bid: 872 },
  { cards: "TTT7J", bid: 340 },
  { cards: "J44QQ", bid: 89 },
  { cards: "57A3Q", bid: 453 },
  { cards: "QJAJQ", bid: 682 },
  { cards: "7JQ74", bid: 450 },
  { cards: "J55Q2", bid: 342 },
  { cards: "59267", bid: 773 },
  { cards: "8J884", bid: 652 },
  { cards: "33383", bid: 456 },
  { cards: "K68JJ", bid: 600 },
  { cards: "6JJA4", bid: 156 },
  { cards: "T8T8J", bid: 771 },
  { cards: "62222", bid: 942 },
  { cards: "92999", bid: 947 },
  { cards: "55886", bid: 946 },
  { cards: "75A77", bid: 601 },
  { cards: "3QK54", bid: 945 },
  { cards: "A2686", bid: 531 },
  { cards: "39Q38", bid: 687 },
  { cards: "TKKTT", bid: 360 },
  { cards: "8886K", bid: 339 },
  { cards: "7774A", bid: 202 },
  { cards: "T2222", bid: 798 },
  { cards: "3786T", bid: 171 },
  { cards: "547A6", bid: 623 },
  { cards: "22T2T", bid: 170 },
  { cards: "T2688", bid: 201 },
  { cards: "KJ7A4", bid: 902 },
  { cards: "9322T", bid: 922 },
  { cards: "74Q6A", bid: 666 },
  { cards: "J72T7", bid: 511 },
  { cards: "44A44", bid: 72 },
  { cards: "Q776Q", bid: 411 },
  { cards: "4K4K8", bid: 588 },
  { cards: "K43JJ", bid: 760 },
  { cards: "AAAA6", bid: 714 },
  { cards: "52J55", bid: 8 },
  { cards: "3K94A", bid: 976 },
  { cards: "AKJTQ", bid: 729 },
  { cards: "65J66", bid: 94 },
  { cards: "9KKK3", bid: 445 },
  { cards: "6ATJT", bid: 876 },
  { cards: "T2529", bid: 432 },
  { cards: "68A79", bid: 397 },
  { cards: "82J4Q", bid: 566 },
  { cards: "53557", bid: 472 },
  { cards: "83383", bid: 356 },
  { cards: "AAAQA", bid: 380 },
  { cards: "KTKK5", bid: 357 },
  { cards: "5T24J", bid: 746 },
  { cards: "6777J", bid: 289 },
  { cards: "TK9K9", bid: 843 },
  { cards: "44744", bid: 213 },
  { cards: "3KTKT", bid: 728 },
  { cards: "J739A", bid: 659 },
  { cards: "T33JJ", bid: 928 },
  { cards: "84QJQ", bid: 952 },
  { cards: "KKK67", bid: 378 },
  { cards: "97979", bid: 954 },
  { cards: "K52T4", bid: 332 },
  { cards: "75QA6", bid: 863 },
  { cards: "ATTK2", bid: 603 },
  { cards: "33Q33", bid: 207 },
  { cards: "4AJ24", bid: 9 },
  { cards: "5TTK5", bid: 949 },
  { cards: "TTJ9T", bid: 663 },
  { cards: "77277", bid: 645 },
  { cards: "434QQ", bid: 364 },
  { cards: "JJJ8J", bid: 527 },
  { cards: "T479Q", bid: 706 },
  { cards: "7A77K", bid: 413 },
  { cards: "TK486", bid: 640 },
  { cards: "KKJ59", bid: 17 },
  { cards: "799Q9", bid: 97 },
  { cards: "33646", bid: 447 },
  { cards: "2323J", bid: 477 },
  { cards: "K2758", bid: 986 },
  { cards: "T5TT5", bid: 547 },
  { cards: "9956Q", bid: 609 },
  { cards: "TK753", bid: 149 },
  { cards: "87Q79", bid: 193 },
  { cards: "JQQQQ", bid: 512 },
  { cards: "44988", bid: 871 },
  { cards: "AA4AA", bid: 789 },
  { cards: "J2564", bid: 347 },
  { cards: "23J68", bid: 890 },
  { cards: "KAAAT", bid: 684 },
  { cards: "K9KTK", bid: 334 },
  { cards: "TTTT3", bid: 857 },
  { cards: "99899", bid: 783 },
  { cards: "426J3", bid: 865 },
  { cards: "8J288", bid: 689 },
  { cards: "7QT8J", bid: 122 },
  { cards: "73679", bid: 649 },
  { cards: "653AQ", bid: 899 },
  { cards: "9992T", bid: 544 },
  { cards: "66TJ6", bid: 416 },
  { cards: "382A9", bid: 252 },
  { cards: "52J54", bid: 273 },
  { cards: "J665T", bid: 630 },
  { cards: "82222", bid: 221 },
  { cards: "TT3T3", bid: 262 },
  { cards: "44748", bid: 927 },
  { cards: "T75KQ", bid: 85 },
  { cards: "44554", bid: 587 },
  { cards: "4866J", bid: 754 },
  { cards: "47T6T", bid: 92 },
  { cards: "899TT", bid: 4 },
  { cards: "999JJ", bid: 576 },
  { cards: "87898", bid: 868 },
  { cards: "45T32", bid: 217 },
  { cards: "J54T4", bid: 977 },
  { cards: "JAAJA", bid: 721 },
  { cards: "43KJ3", bid: 883 },
  { cards: "4888K", bid: 110 },
  { cards: "5A544", bid: 546 },
  { cards: "J6783", bid: 220 },
  { cards: "85956", bid: 63 },
  { cards: "54334", bid: 137 },
  { cards: "J9384", bid: 688 },
  { cards: "94429", bid: 249 },
  { cards: "QQJA3", bid: 803 },
  { cards: "AA66A", bid: 180 },
  { cards: "99K9T", bid: 28 },
  { cards: "535J5", bid: 607 },
  { cards: "8AA88", bid: 341 },
  { cards: "862K2", bid: 382 },
  { cards: "8J888", bid: 314 },
  { cards: "25282", bid: 796 },
  { cards: "8J8J8", bid: 488 },
  { cards: "88Q35", bid: 188 },
  { cards: "J99Q9", bid: 840 },
  { cards: "5K832", bid: 475 },
  { cards: "3333A", bid: 653 },
  { cards: "A4A4J", bid: 539 },
  { cards: "999T9", bid: 370 },
  { cards: "77J73", bid: 310 },
  { cards: "JJKKJ", bid: 964 },
  { cards: "J9856", bid: 584 },
  { cards: "54J9K", bid: 727 },
  { cards: "22777", bid: 231 },
  { cards: "6Q274", bid: 469 },
  { cards: "TTTTJ", bid: 408 },
  { cards: "6J2Q2", bid: 33 },
  { cards: "AJ867", bid: 484 },
  { cards: "55J55", bid: 892 },
  { cards: "K7593", bid: 971 },
  { cards: "5AT5T", bid: 474 },
  { cards: "A2KKA", bid: 113 },
  { cards: "24222", bid: 906 },
  { cards: "93J33", bid: 875 },
  { cards: "Q43AJ", bid: 972 },
  { cards: "88JT7", bid: 569 },
  { cards: "5Q8K8", bid: 888 },
  { cards: "J7T53", bid: 747 },
  { cards: "99986", bid: 29 },
  { cards: "5JAA5", bid: 968 },
  { cards: "97A75", bid: 468 },
  { cards: "A5A58", bid: 449 },
  { cards: "77455", bid: 44 },
  { cards: "88T8A", bid: 820 },
  { cards: "42732", bid: 455 },
  { cards: "6A66A", bid: 575 },
  { cards: "888KK", bid: 358 },
  { cards: "TT966", bid: 780 },
  { cards: "2KKTT", bid: 150 },
  { cards: "Q5J5Q", bid: 718 },
  { cards: "53J37", bid: 827 },
  { cards: "A8J42", bid: 461 },
  { cards: "K2863", bid: 548 },
  { cards: "9TT99", bid: 216 },
  { cards: "33343", bid: 802 },
  { cards: "TTAAT", bid: 995 },
  { cards: "K4T9J", bid: 786 },
  { cards: "TKA39", bid: 785 },
  { cards: "QQQQ3", bid: 766 },
  { cards: "97Q7Q", bid: 903 },
  { cards: "QJQ57", bid: 821 },
  { cards: "92699", bid: 598 },
  { cards: "49273", bid: 529 },
  { cards: "2245J", bid: 731 },
  { cards: "J7826", bid: 701 },
  { cards: "2K724", bid: 983 },
  { cards: "88KJK", bid: 769 },
  { cards: "55592", bid: 815 },
  { cards: "QK72J", bid: 920 },
  { cards: "3QQ29", bid: 446 },
  { cards: "ATTJT", bid: 650 },
  { cards: "K93AA", bid: 303 },
  { cards: "T63TT", bid: 507 },
  { cards: "93993", bid: 810 },
  { cards: "858J8", bid: 852 },
  { cards: "2T5K9", bid: 165 },
  { cards: "3TJ33", bid: 1 },
  { cards: "93JTK", bid: 683 },
  { cards: "999K9", bid: 672 },
  { cards: "J6663", bid: 628 },
  { cards: "443T4", bid: 42 },
  { cards: "QQKT7", bid: 407 },
  { cards: "AA3AA", bid: 242 },
  { cards: "K9223", bid: 624 },
  { cards: "QAQTA", bid: 570 },
  { cards: "39TJ3", bid: 490 },
  { cards: "22332", bid: 54 },
  { cards: "82274", bid: 848 },
  { cards: "2549T", bid: 210 },
  { cards: "K7J55", bid: 466 },
  { cards: "JK3AT", bid: 285 },
  { cards: "Q42AQ", bid: 50 },
  { cards: "2KQTK", bid: 730 },
  { cards: "T5A8T", bid: 71 },
  { cards: "523JT", bid: 470 },
  { cards: "8T4AQ", bid: 433 },
  { cards: "TT3A6", bid: 664 },
  { cards: "555Q5", bid: 793 },
  { cards: "62227", bid: 932 },
  { cards: "TT8J2", bid: 777 },
  { cards: "5Q5TT", bid: 91 },
  { cards: "83A33", bid: 388 },
  { cards: "666J6", bid: 963 },
  { cards: "2J68Q", bid: 415 },
  { cards: "5TQ37", bid: 12 },
  { cards: "J8428", bid: 246 },
  { cards: "JT7T9", bid: 953 },
  { cards: "8K269", bid: 133 },
  { cards: "755Q7", bid: 530 },
  { cards: "8777A", bid: 962 },
  { cards: "K55K5", bid: 394 },
  { cards: "84828", bid: 195 },
  { cards: "37246", bid: 679 },
  { cards: "6796K", bid: 724 },
  { cards: "QAA2A", bid: 844 },
  { cards: "AT47Q", bid: 951 },
  { cards: "57T5K", bid: 121 },
  { cards: "35T85", bid: 227 },
  { cards: "94TJ6", bid: 809 },
  { cards: "4J6J6", bid: 685 },
  { cards: "J5545", bid: 138 },
  { cards: "K653T", bid: 646 },
  { cards: "T267Q", bid: 414 },
  { cards: "JJ559", bid: 535 },
  { cards: "3K59K", bid: 25 },
  { cards: "5AA23", bid: 412 },
  { cards: "AJAAK", bid: 465 },
  { cards: "Q7Q77", bid: 595 },
  { cards: "9A99J", bid: 722 },
  { cards: "7QQQQ", bid: 3 },
  { cards: "KTKKQ", bid: 536 },
  { cards: "TTJJT", bid: 393 },
  { cards: "T2K26", bid: 905 },
  { cards: "4AQ4Q", bid: 894 },
  { cards: "88885", bid: 740 },
  { cards: "QAQ8Q", bid: 96 },
  { cards: "AQQQA", bid: 516 },
  { cards: "78877", bid: 748 },
  { cards: "447AA", bid: 200 },
  { cards: "42JQQ", bid: 617 },
  { cards: "33J33", bid: 776 },
  { cards: "88787", bid: 155 },
  { cards: "2K688", bid: 734 },
  { cards: "J5K53", bid: 886 },
  { cards: "Q88QQ", bid: 850 },
  { cards: "266Q6", bid: 167 },
  { cards: "8QQ84", bid: 644 },
  { cards: "TTTJK", bid: 610 },
  { cards: "K4936", bid: 958 },
  { cards: "24K3A", bid: 698 },
  { cards: "55T55", bid: 697 },
  { cards: "Q5353", bid: 146 },
  { cards: "339QQ", bid: 752 },
  { cards: "9Q584", bid: 84 },
  { cards: "2J822", bid: 497 },
  { cards: "Q7T25", bid: 365 },
  { cards: "57JTQ", bid: 140 },
  { cards: "A847T", bid: 458 },
  { cards: "82Q7T", bid: 80 },
  { cards: "97779", bid: 293 },
  { cards: "66K88", bid: 675 },
  { cards: "66446", bid: 633 },
  { cards: "T6KTT", bid: 934 },
  { cards: "966J6", bid: 849 },
  { cards: "22T53", bid: 854 },
  { cards: "88AKK", bid: 514 },
  { cards: "K5J58", bid: 305 },
  { cards: "88222", bid: 298 },
  { cards: "88K6J", bid: 526 },
  { cards: "528Q8", bid: 936 },
  { cards: "A2A3A", bid: 208 },
  { cards: "K49A9", bid: 191 },
  { cards: "4JJ47", bid: 319 },
  { cards: "5J858", bid: 108 },
  { cards: "JA345", bid: 425 },
  { cards: "8T2Q6", bid: 715 },
  { cards: "AA999", bid: 990 },
  { cards: "Q96J9", bid: 879 },
  { cards: "84J44", bid: 742 },
  { cards: "A3A3J", bid: 806 },
  { cards: "AATA8", bid: 557 },
  { cards: "AJ77A", bid: 504 },
  { cards: "36753", bid: 27 },
  { cards: "65686", bid: 66 },
  { cards: "J76A9", bid: 279 },
  { cards: "3T63T", bid: 913 },
  { cards: "9ATJJ", bid: 568 },
  { cards: "K64K4", bid: 580 },
  { cards: "8888K", bid: 668 },
  { cards: "6K9J6", bid: 134 },
  { cards: "23533", bid: 431 },
  { cards: "65656", bid: 705 },
  { cards: "T3T43", bid: 979 },
  { cards: "79899", bid: 48 },
  { cards: "QQQKK", bid: 795 },
  { cards: "7TA7T", bid: 709 },
  { cards: "KQ627", bid: 409 },
  { cards: "66669", bid: 265 },
  { cards: "K8732", bid: 404 },
  { cards: "K6663", bid: 992 },
  { cards: "QJQJQ", bid: 765 },
  { cards: "88383", bid: 855 },
  { cards: "JT4TJ", bid: 944 },
  { cards: "26QQ6", bid: 874 },
  { cards: "KK6KK", bid: 501 },
  { cards: "6K7K2", bid: 451 },
  { cards: "3TAK7", bid: 772 },
  { cards: "TTJ55", bid: 328 },
  { cards: "6QJ66", bid: 424 },
  { cards: "56577", bid: 428 },
  { cards: "6T6T6", bid: 816 },
  { cards: "J9J2T", bid: 375 },
  { cards: "J66TT", bid: 923 },
  { cards: "TK2JQ", bid: 602 },
  { cards: "QT7T8", bid: 233 },
  { cards: "QQ9Q9", bid: 381 },
  { cards: "447KK", bid: 959 },
  { cards: "AJ6AA", bid: 107 },
  { cards: "679T5", bid: 895 },
  { cards: "2J559", bid: 533 },
  { cards: "9JKAQ", bid: 489 },
  { cards: "84Q92", bid: 521 },
  { cards: "KQT83", bid: 884 },
  { cards: "66946", bid: 648 },
  { cards: "329KT", bid: 198 },
  { cards: "5588T", bid: 925 },
  { cards: "TTTT5", bid: 99 },
  { cards: "637JT", bid: 218 },
  { cards: "9K4AJ", bid: 918 },
  { cards: "7JT5T", bid: 914 },
  { cards: "24966", bid: 513 },
  { cards: "76J3Q", bid: 13 },
  { cards: "74994", bid: 260 },
  { cards: "QQQQ5", bid: 585 },
  { cards: "777TJ", bid: 112 },
  { cards: "24JJ2", bid: 286 },
  { cards: "Q4Q77", bid: 88 },
  { cards: "9A559", bid: 626 },
  { cards: "A63JK", bid: 987 },
  { cards: "7T776", bid: 719 },
  { cards: "24A34", bid: 618 },
  { cards: "J2722", bid: 878 },
  { cards: "T2TTT", bid: 327 },
  { cards: "664QK", bid: 904 },
  { cards: "A5663", bid: 160 },
  { cards: "J9Q65", bid: 187 },
  { cards: "J333K", bid: 457 },
  { cards: "35355", bid: 476 },
  { cards: "55757", bid: 558 },
  { cards: "T3A48", bid: 856 },
  { cards: "QQ445", bid: 261 },
  { cards: "2JKK2", bid: 296 },
  { cards: "Q74Q3", bid: 758 },
  { cards: "5KJ5K", bid: 353 },
  { cards: "22J24", bid: 651 },
  { cards: "99366", bid: 256 },
  { cards: "Q7Q59", bid: 172 },
  { cards: "AA9JJ", bid: 2 },
  { cards: "9999J", bid: 288 },
  { cards: "77779", bid: 313 },
  { cards: "394TA", bid: 247 },
  { cards: "J55Q5", bid: 532 },
  { cards: "TTTTK", bid: 384 },
  { cards: "68868", bid: 749 },
  { cards: "56TJT", bid: 389 },
  { cards: "J555J", bid: 5 },
  { cards: "T577J", bid: 304 },
  { cards: "A7T96", bid: 290 },
  { cards: "7T99A", bid: 391 },
  { cards: "K7KK7", bid: 621 },
  { cards: "KQT72", bid: 483 },
  { cards: "JAAA2", bid: 846 },
  { cards: "9QK26", bid: 710 },
  { cards: "23233", bid: 750 },
  { cards: "T33T2", bid: 352 },
  { cards: "42444", bid: 351 },
  { cards: "4224J", bid: 841 },
  { cards: "574J5", bid: 31 },
  { cards: "A744J", bid: 525 },
  { cards: "484KJ", bid: 371 },
  { cards: "44242", bid: 68 },
  { cards: "97J26", bid: 482 },
  { cards: "KK882", bid: 153 },
  { cards: "32689", bid: 139 },
  { cards: "429AK", bid: 755 },
  { cards: "Q5382", bid: 102 },
  { cards: "84Q88", bid: 487 },
  { cards: "5J645", bid: 622 },
  { cards: "99J34", bid: 361 },
  { cards: "759QA", bid: 581 },
  { cards: "88585", bid: 10 },
  { cards: "4JT94", bid: 338 },
  { cards: "75A44", bid: 14 },
  { cards: "5557J", bid: 363 },
  { cards: "KK244", bid: 522 },
  { cards: "66636", bid: 277 },
  { cards: "799T9", bid: 509 },
  { cards: "37J93", bid: 142 },
  { cards: "J6522", bid: 359 },
  { cards: "573KJ", bid: 98 },
  { cards: "63TA3", bid: 90 },
  { cards: "QQQ8Q", bid: 825 },
  { cards: "549QQ", bid: 538 },
  { cards: "99T39", bid: 498 },
  { cards: "AA37A", bid: 830 },
  { cards: "JJ9JQ", bid: 211 },
  { cards: "Q2T88", bid: 799 },
  { cards: "JA58K", bid: 346 },
  { cards: "6TQ3T", bid: 297 },
  { cards: "85385", bid: 720 },
  { cards: "A5AA6", bid: 123 },
  { cards: "75588", bid: 794 },
  { cards: "Q7979", bid: 768 },
  { cards: "57KQQ", bid: 366 },
  { cards: "882J2", bid: 554 },
  { cards: "T9K65", bid: 735 },
  { cards: "8T787", bid: 550 },
  { cards: "T5JJT", bid: 615 },
  { cards: "22832", bid: 564 },
  { cards: "96JT9", bid: 859 },
  { cards: "QT22J", bid: 716 },
  { cards: "8T6T6", bid: 335 },
  { cards: "J2474", bid: 541 },
  { cards: "AT8AQ", bid: 578 },
  { cards: "Q7QQ4", bid: 573 },
  { cards: "56J7K", bid: 869 },
  { cards: "46477", bid: 109 },
  { cards: "68858", bid: 579 },
  { cards: "74J78", bid: 961 },
  { cards: "A8A8Q", bid: 641 },
  { cards: "4AA44", bid: 662 },
  { cards: "TTT56", bid: 791 },
  { cards: "94292", bid: 229 },
  { cards: "AAJ87", bid: 703 },
  { cards: "4A6K6", bid: 901 },
  { cards: "487T2", bid: 656 },
  { cards: "JK626", bid: 800 },
  { cards: "99996", bid: 998 },
  { cards: "84448", bid: 520 },
  { cards: "3QKT5", bid: 845 },
  { cards: "QA4TA", bid: 517 },
  { cards: "QQTTK", bid: 226 },
  { cards: "K995K", bid: 596 },
  { cards: "77393", bid: 76 },
  { cards: "99JAA", bid: 437 },
  { cards: "79K59", bid: 205 },
  { cards: "9K22K", bid: 824 },
  { cards: "8389A", bid: 741 },
  { cards: "755TT", bid: 18 },
  { cards: "77757", bid: 970 },
  { cards: "A2777", bid: 634 },
  { cards: "J795Q", bid: 148 },
  { cards: "24425", bid: 690 },
  { cards: "7Q7Q3", bid: 81 },
  { cards: "5TT89", bid: 471 },
  { cards: "4Q223", bid: 243 },
  { cards: "AAAK6", bid: 248 },
  { cards: "Q6443", bid: 620 },
  { cards: "58668", bid: 478 },
  { cards: "5K26T", bid: 493 },
  { cards: "66J46", bid: 999 },
  { cards: "46348", bid: 745 },
  { cards: "62KTK", bid: 930 },
  { cards: "JK377", bid: 893 },
  { cards: "Q6K98", bid: 119 },
  { cards: "5T83K", bid: 542 },
  { cards: "77332", bid: 658 },
  { cards: "44K44", bid: 422 },
  { cards: "K6K6J", bid: 606 },
  { cards: "75357", bid: 199 },
  { cards: "99946", bid: 980 },
  { cards: "89989", bid: 372 },
  { cards: "22J25", bid: 103 },
  { cards: "47J47", bid: 814 },
  { cards: "K7K77", bid: 667 },
  { cards: "93883", bid: 670 },
  { cards: "2QTT2", bid: 135 },
  { cards: "Q693K", bid: 753 },
  { cards: "A5JT9", bid: 237 },
  { cards: "38KKJ", bid: 571 },
  { cards: "66AAT", bid: 254 },
  { cards: "36636", bid: 354 },
  { cards: "9AT3J", bid: 417 },
  { cards: "88899", bid: 212 },
  { cards: "QQ3Q3", bid: 599 },
  { cards: "J265J", bid: 100 },
  { cards: "55KAK", bid: 866 },
  { cards: "57Q2A", bid: 654 },
  { cards: "6T266", bid: 292 },
  { cards: "954J2", bid: 245 },
  { cards: "5TT65", bid: 671 },
  { cards: "3T693", bid: 21 },
  { cards: "ATAT7", bid: 994 },
  { cards: "K8777", bid: 51 },
  { cards: "5JQ92", bid: 808 },
  { cards: "95A75", bid: 343 },
  { cards: "42K6Q", bid: 813 },
  { cards: "4J4TK", bid: 880 },
  { cards: "77768", bid: 266 },
  { cards: "9J929", bid: 549 },
  { cards: "653J5", bid: 592 },
  { cards: "AAQKQ", bid: 275 },
  { cards: "59956", bid: 877 },
  { cards: "5A2J6", bid: 317 },
  { cards: "J9QT3", bid: 784 },
  { cards: "QAQQQ", bid: 887 },
  { cards: "KKK4K", bid: 301 },
  { cards: "J777J", bid: 499 },
  { cards: "QQQ6Q", bid: 910 },
  { cards: "88898", bid: 154 },
  { cards: "4Q553", bid: 151 },
  { cards: "88J98", bid: 189 },
  { cards: "95J66", bid: 161 },
  { cards: "87785", bid: 589 },
  { cards: "628J4", bid: 935 },
  { cards: "58Q67", bid: 362 },
  { cards: "55522", bid: 430 },
  { cards: "44555", bid: 817 },
  { cards: "QT792", bid: 939 },
  { cards: "85754", bid: 158 },
  { cards: "TKKKK", bid: 861 },
  { cards: "AAKK3", bid: 966 },
  { cards: "56JT5", bid: 686 },
  { cards: "77776", bid: 181 },
  { cards: "K5553", bid: 49 },
  { cards: "85855", bid: 508 },
  { cards: "64444", bid: 862 },
  { cards: "5TAQ8", bid: 739 },
  { cards: "97KK7", bid: 118 },
  { cards: "7J566", bid: 321 },
  { cards: "99944", bid: 505 },
  { cards: "TQTTQ", bid: 463 },
  { cards: "K4528", bid: 680 },
  { cards: "298K2", bid: 329 },
  { cards: "66656", bid: 691 },
  { cards: "55222", bid: 152 },
  { cards: "9QTTT", bid: 891 },
  { cards: "64KJ9", bid: 801 },
  { cards: "Q7737", bid: 639 },
  { cards: "73533", bid: 57 },
  { cards: "55524", bid: 204 },
  { cards: "95999", bid: 322 },
  { cards: "TA7QT", bid: 423 },
  { cards: "AAAKA", bid: 829 },
  { cards: "66QJ7", bid: 55 },
  { cards: "77353", bid: 897 },
  { cards: "47A38", bid: 333 },
  { cards: "88A77", bid: 192 },
  { cards: "88T8Q", bid: 567 },
  { cards: "74A68", bid: 308 },
  { cards: "55556", bid: 811 },
  { cards: "9AJ6K", bid: 975 },
  { cards: "QQQ4Q", bid: 239 },
  { cards: "37Q33", bid: 506 },
  { cards: "737AJ", bid: 915 },
  { cards: "222J9", bid: 420 },
  { cards: "7755K", bid: 562 },
  { cards: "4T7J4", bid: 93 },
  { cards: "KJA84", bid: 168 },
  { cards: "66463", bid: 693 },
  { cards: "KATTT", bid: 674 },
  { cards: "KT555", bid: 295 },
  { cards: "8J459", bid: 206 },
  { cards: "28882", bid: 426 },
  { cards: "Q27K9", bid: 73 },
  { cards: "53442", bid: 943 },
  { cards: "96678", bid: 553 },
  { cards: "K34T2", bid: 309 },
  { cards: "A555A", bid: 104 },
  { cards: "A7AK2", bid: 764 },
  { cards: "J8Q7Q", bid: 225 },
  { cards: "TATT3", bid: 373 },
  { cards: "63T48", bid: 594 },
  { cards: "93933", bid: 759 },
  { cards: "6Q78K", bid: 145 },
  { cards: "KA29A", bid: 823 },
  { cards: "AAJAA", bid: 744 },
  { cards: "85A26", bid: 524 },
  { cards: "7777K", bid: 350 },
  { cards: "T6363", bid: 826 },
  { cards: "J333J", bid: 41 },
  { cards: "55AA6", bid: 787 },
];

const getCardAmounts = (cards: string[]) => {
  const cardAmounts = cards.reduce<Record<string, number>>((amounts, current) => {
    if (!amounts[current]) {
      amounts[current] = 1;
    } else {
      amounts[current] += 1;
    }

    return amounts;
  }, {});

  return cardAmounts;
};

const hasJoker = (cards: string[]) => {
  return cards.some((value) => value === "1");
};
const isFiveOfAKind = (uniqueCards: string[]) => {
  if (uniqueCards.length === 1) return true;
  if (hasJoker(uniqueCards)) {
    return uniqueCards.length === 2;
  }

  return false;
};

const isFourOfAKind = (uniqueCards: string[], cards: string[]) => {
  const amounts = getCardAmounts(cards);
  const jokerAmount = amounts["1"] ?? 0;
  let hasFourOfAKind = false;

  if (jokerAmount === 0) {
    if (uniqueCards.length !== 2) return false;
    return amounts[uniqueCards[0]] === 1 || amounts[uniqueCards[0]] === 4;
  }

  Object.entries(amounts).forEach(([key, value]) => {
    if (key === "1") return;
    if (value + jokerAmount === 4) hasFourOfAKind = true;
  });

  return hasFourOfAKind;
};

const isFullHouse = (uniqueCards: string[], cards: string[]) => {
  const amounts = getCardAmounts(cards);
  const jokerAmount = amounts["1"] ?? 0;

  if (jokerAmount === 0) {
    if (uniqueCards.length !== 2) return false;
    return amounts[uniqueCards[0]] === 2 || amounts[uniqueCards[0]] === 3;
  }

  return uniqueCards.length === 3;
};

const isThreeOfAKind = (cards: string[]) => {
  const amounts = getCardAmounts(cards);
  const jokerAmount = amounts["1"] ?? 0;
  const match = Object.values(amounts).find((amount) => amount + jokerAmount === 3);

  return !!match;
};

const isTwoPair = (cards: string[]) => {
  const amounts = getCardAmounts(cards);
  const matches = Object.values(amounts).filter((amount) => amount === 2);

  return matches.length === 2;
};

const isOnePair = (cards: string[]) => {
  const amounts = getCardAmounts(cards);
  const jokerAmount = amounts["1"] ?? 0;

  const matches = Object.values(amounts).filter((amount) => amount === 2);

  if (jokerAmount === 1) return true;

  return matches.length === 1;
};

const isHighCard = (uniqueCards: string[]) => {
  return uniqueCards.length === 5;
};

const handToNum = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 1,
  Q: 12,
  K: 13,
  A: 14,
};

const transformHandToBase16 = (cards: string): string[] => {
  return cards.split("").map((value) => handToNum[value].toString(16));
};

const cardRanking: Record<string, string[]> = {
  fiveOfAKind: [],
  fourOfAKind: [],
  fullHouse: [],
  threeOfAKind: [],
  twoPair: [],
  onePair: [],
  highCard: [],
};

export const solve = () => {
  let accum = 0;
  hands.forEach((hand) => {
    const numCards = transformHandToBase16(hand.cards);
    const uniqueCards = [...new Set(numCards)];

    if (isFiveOfAKind(uniqueCards)) {
      cardRanking.fiveOfAKind.push(`${numCards.join("")}-${hand.bid}`);
    } else if (isFourOfAKind(uniqueCards, numCards)) {
      cardRanking.fourOfAKind.push(`${numCards.join("")}-${hand.bid}`);
    } else if (isFullHouse(uniqueCards, numCards)) {
      cardRanking.fullHouse.push(`${numCards.join("")}-${hand.bid}`);
    } else if (isThreeOfAKind(numCards)) {
      cardRanking.threeOfAKind.push(`${numCards.join("")}-${hand.bid}`);
    } else if (isTwoPair(numCards)) {
      cardRanking.twoPair.push(`${numCards.join("")}-${hand.bid}`);
    } else if (isOnePair(numCards)) {
      cardRanking.onePair.push(`${numCards.join("")}-${hand.bid}`);
    } else if (isHighCard(uniqueCards)) {
      cardRanking.highCard.push(`${numCards.join("")}-${hand.bid}`);
    }
  });

  console.log(cardRanking);

  const allSorted = [
    ...cardRanking.highCard.sort(),
    ...cardRanking.onePair.sort(),
    ...cardRanking.twoPair.sort(),
    ...cardRanking.threeOfAKind.sort(),
    ...cardRanking.fullHouse.sort(),
    ...cardRanking.fourOfAKind.sort(),
    ...cardRanking.fiveOfAKind.sort(),
  ];

  console.log(allSorted);
  allSorted.forEach((handAndBid, index) => {
    accum += parseInt(handAndBid.split("-")[1], 10) * (index + 1);
  });

  return accum;
};
