 // WRITE A FUNCTION TELLING THE USER A "STORY" AND PROMPT THE USER
 // ASKING FOR 1 OF 3 CHOICES
 // EACH CHOICE CONTINUES TO THEIR OWN FUNCTION
 // REPEAT 3 TIMES
 // USE ALERTS, PROMPTS AND CONFIRMS
 // USE IF ELSEIF AND ELSE
 // COMPLEX VERSION:
 // USE LOOPS AND ARRAYS

 function myStory() {
    var characters = ["Pikachu", "Charizard", "Bulbasaur"];
    var charIndex = parseInt(prompt("Please pick a character: " + characters.join(" ") + " (1, 2, or 3)"));
    charIndex--;
    var activities = ["walk up a mountain", "find some food", "go for a swim"];
    var story = "One beautiful afternoon, ";
    var activityChoice = parseInt(prompt("Please enter an activity"))
    while(!characters[charIndex]) {
        charIndex = parseInt(prompt("Please enter a number 1 to 3"));
        charIndex--;
    }
    while(!activities[activityChoice]) {
        activityChoice = parseInt(prompt("Please enter a number 1 to 3"));
        activityChoice--;
    }
    
    if(characters[charIndex] == "Pikachu") {
        story = story.concat(characters[carIndex], "decided to ");
        if(activities[activityChoice] == "walk up a mountain") {
            story = story.concat(activities[activityChoice], ". ");
        }else if(activities[activityChoice] == "find some food") {

        }else {

        }
    }else if(characters[charIndex] == "Charizard") {
        if(activities[activityChoice] == "walk up a mountain") {

        }else if(activities[activityChoice] == "find some food") {

        }else {

        }
    }else if(characters[charIndex] == "Bulbasaur") {
        if(activities[activityChoice] == "walk up a mountain") {

        }else if(activities[activityChoice] == "find some food") {

        }else {

        }
    }
 }
 myStory();