const transpose = function(matrix) {
  const result = [];

  for (let x = 0; x < matrix[0].length; x++) {
    const colArr = [];
    for (let y = 0; y < matrix.length; y++) {
      colArr.push(matrix[y][x]);
    }
    result.push(colArr);
  }

  return result;
};

const wordSearch = (letters, word) => {
  
  if (!Array.isArray(letters)) {
    return false;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalTranposedArray = transpose(letters);
  const verticalJoin = verticalTranposedArray.map((ls) => ls.join(""));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  
  return false;
};

module.exports = wordSearch;
