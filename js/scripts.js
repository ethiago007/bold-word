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

function filterSentence2(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  return sentence;
}
function numberOfOccurrencesInText(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return 0;
  }
  let wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (wordMatch(element,word)) {
      wordCount++;
    }
  });
  return wordCount;
}
$(document).ready(function () {
  $("#BOLDEN").submit(function (event) {
    event.preventDefault();
    let passage = $("#text-passage").val();
    let name = $("#input1").val();
    let wordOccurence = topThreeWords(passage);
   
    $("#output").html(wordOccurence);

  });
});

function topThreeWords(text) {
  if (errorCheck(text)) {
    return 0;
  }
  // let text = filterSentence(text);
  let textArray = text.split(" ");
  let topmost = 0;
  let topmostWord = "";
  let secondMost = 0;
  let secondWord = "";
  let thirdMost = 0;
  let thirdWord = "";
  let result = "";
  textArray.forEach(function (element) {
    let numberOfTimes = numberOfOccurrencesInText(element, text);
    if (numberOfTimes > topmost) {
      topmost = numberOfTimes;
      topmostWord = element;
    } else if (numberOfTimes > secondMost) {
      secondMost = numberOfTimes;
      secondWord = element;
    } else if (numberOfTimes > thirdMost) {
      thirdMost = numberOfTimes;
      thirdWord = element;
    }
    result = topmostWord + " " + topmost + "<br>" + secondWord + " " + secondMost + "<br>" + thirdWord + " " + thirdMost;
  });
  return result;
}

