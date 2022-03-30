function errorCheck(sentence) {
  return (sentence.trim().length === 0);
}
function errorCheck2(word, passage) {
  return ((passage.trim().length === 0) || (word.trim().length === 0));
}

function wordMatch(wordOne, wordTwo) {
  wordOne = filterSentence(wordOne)
  wordTwo = filterSentence(wordTwo)
  return wordOne.toLowerCase().includes(wordTwo.toLowerCase()) && wordOne.toLowerCase() === wordTwo.toLowerCase();
}

function filterSentence(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[^a-z0-9]+/g, "");
  return sentence;
}

function boldPassage(word, passage) {
  if (errorCheck2(word, passage)) {
    return "";
  }

}


