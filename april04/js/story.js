 // WRITE A FUNCTION TELLING THE USER A "STORY" AND PROMPT THE USER
 // ASKING FOR 1 OF 3 CHOICES
 // EACH CHOICE CONTINUES TO THEIR OWN FUNCTION
 // REPEAT 3 TIMES
 // USE ALERTS, PROMPTS AND CONFIRMS
 // USE IF ELSEIF AND ELSE
 // COMPLEX VERSION:
 // USE LOOPS AND ARRAYS

 function myStory() {
    var charName = prompt("Please type in the name for your character");
    document.write("<p id='part1'>Hello, my name is " + 
    charName + ". I'm trying to find my way home. Please help me!</p>");
    getTravelMethod();
 }

 function getTravelMethod() {
     var travelMethod = parseInt(prompt("How should I travel? 1: In the trees, 2: On the ground, 3: On an animal"));
     switch(travelMethod) {
         case 1: 
            
         case 2: 
         case 3:
     }

 }
//  myStory();
 
 
