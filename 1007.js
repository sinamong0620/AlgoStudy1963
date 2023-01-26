var minDominoRotations = function (tops, bottoms) {
  console.log(tops, bottoms);
  const targetTop = tops[0],
    targetBottom = bottoms[0];
  for (const target of [targetTop, targetBottom]) {
    console.log(target);
  }
};

minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]);
