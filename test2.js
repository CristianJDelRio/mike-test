const getAllCharacters = (initialAsciiCode, lastAsciiCode) => {
  const asciiCharacters = [];

  for (let i = initialAsciiCode; i <= lastAsciiCode; i++) {
    asciiCharacters.push(String.fromCharCode(i));
  }

  return asciiCharacters;
};

function getAllCharacterCombinations(
  characters,
  wordSoFar,
  counter,
  currentIndex
) {
  if (currentIndex == 0) {
    return console.log(wordSoFar);
  }

  for (let i = 0; i < counter; i++) {
    let updatedWord = wordSoFar + characters[i];

    getAllCharacterCombinations(
      characters,
      updatedWord,
      counter,
      currentIndex - 1
    );
  }
}

(function () {
  const consoleArgs = process.argv.slice(2);
  const [
    STRING_LENGTH = 3,
    INITIAL_ASCII_CODE = 97,
    LAST_ASCII_CODE = 122,
  ] = consoleArgs;

  const allCharacters = getAllCharacters(INITIAL_ASCII_CODE, LAST_ASCII_CODE);
  const counter = allCharacters.length;
  const wordSoFar = '';

  getAllCharacterCombinations(allCharacters, wordSoFar, counter, STRING_LENGTH);
})();
