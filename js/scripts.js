var userArray;
var answer;
var words;
var translate = function(word){

  for (var i = 0; i < word.length; i++) {
     words = word[i].split("");
    if(!words[i].match(/[A-Z|a-z| ]/i))
      {
        answer = 0;
        break;
      }
    else if(words.length === 1 && word[0].match(/[A|E|I|O|U|a|e|i|o|u]/i))
    {
      answer = 1;
      break;
    }

    else if (words.length>1 && word[0].match(/[A|E|I|O|U|a|e|i|o|u]/i))
    {
      answer = 2;
      break;
    }
    else
    {
      answer = 3;
      flipper(words);
      break;
      // console.log (flipper(word));
      // //goes through one extra time here
      // return flipper(word);
      // break;

    }
  }
}
var flipper = function(input){
  for (var j = 0; j < input.length; j++) {
    if(input[0].match(/[A|E|I|O|U|a|e|i|o|u]/i))
    {
      return input;
    }
    else {
      input.push(input[0]);
      input.shift();
    }
  }
}


$(document).ready(function() {
  $("form#mainForm").submit(function(event)
  {
    event.preventDefault();
    var userInput = $("input#input").val();
    userArray = userInput.split(" ");
    userArray.forEach(translate(userArray));

    if (answer===0)
      $("#noWord").show();
    else if(answer===1)
      userArray.push("ay");
    else if (answer===2)
      userArray.push("way");
    else if(answer===3)
    {
      flipper(userArray);
      userArray.push("ay");
    }
    var result= userArray.join("");
    console.log(result);
  });
});
