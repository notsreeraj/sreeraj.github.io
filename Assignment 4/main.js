//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');// this would store the value from the users input
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

 const storyText =" It was 94 fahrenheit outside, so :insertx: went for a walk.When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised —:insertx: weighs 300 pounds, and it was a hot day.";

const insertx =["Willy the Goblin","Big Daddy","Father Christmas",] 
const inserty =["the soup kitchen","Disneyland","the White House",]
const insertz = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away",]
 
//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

// when the button with the id randomize is clicked the result function would be run.
randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  
  const xItem = randomValueFromArray(insertx);
  const yItem = randomValueFromArray(inserty);
  const zItem = randomValueFromArray(insertz);
    
  // replace the rest of the insert items in the story
     newStory = newStory.replaceAll(":insertx:",xItem);
     newStory = newStory.replaceAll(":inserty:",yItem);
     newStory = newStory.replaceAll(":insertz:",zItem);
 

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    const weight = ` ${Math.round(300 * 0.45359237)} kg`;// convert these into kg and celsius
    const temperature = ` ${ Math.round(((94 - 32) * 5) / 9)} centigrade`;

    newStory = newStory.replaceAll("300 pounds",weight);
    // newStory = newStory/replaceAll("94 fahrenheit",temperature);
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}