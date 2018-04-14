 // WRITE A FUNCTION TELLING THE USER A "STORY" AND PROMPT THE USER
 // ASKING FOR 1 OF 3 CHOICES
 // EACH CHOICE CONTINUES TO THEIR OWN FUNCTION
 // REPEAT 3 TIMES
 // USE ALERTS, PROMPTS AND CONFIRMS
 // USE IF ELSEIF AND ELSE
 // COMPLEX VERSION:
 // USE LOOPS AND ARRAYS
 var travelChoices = ["ground", "tree"];
 var snakeChoices = ["sneakAround", "wait", "climbTree"];
 var birdChoices = ["climbDown", "stayStill", "climbFaster"];
 

 var storyArray = [
     {
        name: "ground",
        story: `<p> So <span class='squirrelName'></span> crawls for about a mile. 
        Suddenly, <span class='gender'></span> runs into a snake! 
        Oh No! What should <span class='gender'></span> do!?</p> 
        <form class="textBoxes"> 
            <select name='snake' id='part2'> 
                <option value='sneakAround'>Sneak Around It</option> 
                <option value='wait'>Hide and Wait</option>
                <option value='climbTree'>Climb up a Tree</option> 
            </select> 
            <button input type='button' id='snakeOpt1'>Submit</button>
        </form>`
     }, 
     {
        name: "tree",
        story: `<p>So <span class='squirrelName'></span> decided to travel by tree. <span class='gender'></span> hops from branch to branch 
        and almost makes it home when <span class='gender'></span> runs into a bird! Oh No! What should I do!?</p> 
        <form class="textBoxes">
            <select name='bird' id='part2'> 
                <option value='climbDown'>Hide On the Ground</option>
                <option value='stayStill'>Stay Still</option> 
                <option value='climbFaster'>Climb Faster to Escape</option>
            </select> 
            <button input type='button' id='birdOpt1'>Submit</button>
        </form>`
     },
     {
        name: "groundSneak",
        story: `<p> So <span class='squirrelName'></span> decided to try to sneak around the snake. Scaling the bushes, 
        <span class='gender'></span> slowly crawled around the snake. However, while watching the snakes movements, <span class='gender'></span> 
        forgot to watch where <span class='gender'></span> was going and stepped on a twig, which broke with a noisy 'Crack!'. </p>`
     },
     {
         name: "groundWait",
         story: `<p> So <span class='squirrelName'></span> decided to jump into the nearest hole that <span class='gender'></span> 
         could find. <span class='gender'></span> waited for about 20 minutes and poked <span class='gender'></span> head out to see if the 
         snake was gone. Hurray! the snake is gone! So <span class='squirrelName'></span> continues home with no more obstacles.</p>`
     },
     {
         name: "groundClimb",
         story: `<p> So <span class='squirrelName'></span> decided to climb a tree to try to escape from the snake. It worked! The snake did not 
         follow. However, now there is a new problem... A bird has spotted you! What should <span class='name'></span> do? </p> 
         <select name='bird' id='part3'> 
            <option value='climbDown'>Hide On the Ground</option> 
            <option value='stayStill'>Stay Still</option> <option value='climbFaster'>Climb Faster to Escape</option>
         </select> <button input type="button" id="groundClimb">Submit</button>`
     },
     {
         name: "treeDown",
        story: `<p> So <span class='squirrelName'></span> retreats for the ground and runs for about a miles. Suddenly, 
        <span class='gender'></span> runs into a snake! Oh No! What should <span id='gender'></span> do!?</p> 
        <select name='snake' id='part3'> 
            <option value='sneakAround'>Sneak Around It</option> 
            <option value='wait'>Hide and Wait</option> 
            <option value='climbTree'>Climb up a Tree</option> 
        </select> 
        <button input type='button' id='treeDown'>Submit</button>`
     },
     {
        name: "treeWait",
        story: `<p>So <span class='squirrelName'></span> decided to stay still and hope that the bird didn't see <span class='gender'></span>. 
        And it worked! The bird flew away. So, <span class='squirrelName'></span> continued to climb along the branches to his home. </p>`
     },
     {
         name: "treeRun",
         story: `<p>So <span class='squirrelName'></span> decided to run as fast as <span class='gender'></span> 
         along the trees to try to escape the bird. Oh no! The bird has spotted <span class='gender'></span> and is gaining fast!</p>`
     },
     {
         name: "groundTreeGround",
         story: `<p>So <span class='squirrelName'></span> decided to escape back to the ground. Oh No! The snake was waiting! 
         <span class='squirrelName'</span> has been eaten!`
     },
     {
         name: "treeGroundTree",
         story: `<p>So <span class='squirrelName'></span> decided to escape back into the trees. Oh No! The bird was waiting!
         <span class='squirrelName'</span> has been eaten!`
     }
 ];
 
 var travelEntry = document.getElementById("travel"); // Text box for method of travel
 var btnName = document.getElementById("btnName"); // SUBMIT BUTTON FOR NAME
 var pStory = document.getElementById("story"); // P element to put variable into HTML
 var travelMethod = getTravelChoices();
 var story = "";
 var squirrelName;
 var gender;

 btnName.addEventListener("click", storyPt1);
 
 function storyPt1() {
     document.getElementById("intro").style.display = "none";
     squirrelName = document.getElementById("name").value;
    gender = document.getElementById("gender").value;
        if(getTravelChoices() == travelChoices[0]) {
            story = (storyArray[0].story);
            pStory.innerHTML = story;
            var snakeOpt1 = document.getElementById("snakeOpt1"); // SUBMIT BUTTON TO GO INTO PART 2
            snakeOpt1.addEventListener("click", storyPt2);
         }else {
             story = (storyArray[1].story);
             pStory.innerHTML = story;
             var birdOpt1 = document.getElementById("birdOpt1");
             birdOpt1.addEventListener("click", storyPt2);
         }     
         nameAndGender();
 };
 
 function storyPt2() {
     // called by ground button
     if(this.id == "snakeOpt1") {
         var snake = getSnakeChoices(2);
         switch(snake) {
             case snakeChoices[0]:
                story = storyArray[2].story;
                pStory.innerHTML = story;
                nameAndGender();
             break;
             case snakeChoices[1]:
                story = storyArray[3].story;
                pStory.innerHTML = story;
                nameAndGender();
             break;
             case snakeChoices[2]:
                story = storyArray[4].story;
                pStory.innerHTML = story;
                nameAndGender();
                var groundClimb = document.getElementById("groundClimb");
                groundClimb.addEventListener("click", storyPt3);
         }
    }else { // called by tree button
        var treechoice = getBirdChoices(2);
        console.log(treechoice);
        switch(treechoice) {
            case birdChoices[0]:
               story = storyArray[5].story;
               pStory.innerHTML = story;
               var treeDown = document.getElementById("treeDown");
               treeDown.addEventListener("click", storyPt3);
            break;
            case birdChoices[1]:
               story = storyArray[6].story;
               pStory.innerHTML = story;
              
            break;
            case birdChoices[2]:
               story = storyArray[7].story;
               pStory.innerHTML = story;
              
        }
        nameAndGender();
    }
 };
         
 function storyPt3() {
     if(this.id == "groundClimb") {
         var treechoice = getBirdChoices(3);
        switch(treechoice) {
            case birdChoices[0]:
            story = storyArray[8].story;
            pStory.innerHTML = story;
            
            break;
            case birdChoices[1]:
            story = storyArray[6].story;
            pStory.innerHTML = story;
            
            break;
            case birdChoices[2]: 
            story = storyArray[7].story;
            pStory.innerHTML = story;
        
        }
        nameAndGender();
     }else if( this.id = "treeDown") {
       
        var snakechoice = getSnakeChoices(3);
        switch(snakechoice) {
            case snakeChoices[0]:
            story = storyArray[2].story;
            pStory.innerHTML = story;
            break;
            case snakeChoices[1]:
            story = storyArray[3].story;
            pStory.innerHTML = story;
            break;
            case snakeChoices[2]: 
            story = storyArray[9].story;
            pStory.innerHTML = story;
        }
        nameAndGender();
     }
         
 };

 // Return value of user's travel method decision
 function getTravelChoices() {
     for(var i = 0; i < travelChoices.length; i++) {
         if(travelEntry.value == travelChoices[i]) {
             return travelChoices[i];
         }
     }
     
 };
 
 // RETURN INDEX NUMBER OF USER'S SNAKE CHOICE
 function getSnakeChoices(partNo) {
     if(partNo == 2) {
        for(var i = 0; i < snakeChoices.length; i++) {
            if(document.getElementById("part2").value == snakeChoices[i]) {
                return snakeChoices[i]; 
            }
        }
    }else if(partNo == 3) { 
        for(var i = 0; i < snakeChoices.length; i++) {
            if(document.getElementById("part3").value == snakeChoices[i]) {
                return snakeChoices[i]; 
            }
        }
    }
 };
 
 // RETURN INDEX NUMBER OF USER'S BIRD CHOICE
 function getBirdChoices(partNo) {
     if(partNo == 3) {
        for(var i = 0; i < birdChoices.length; i++) {
            console.log(document.getElementById("part3").value);
            if(document.getElementById("part3").value == birdChoices[i]) {
                return birdChoices[i]; 
            }
        }
     }else if(partNo == 2) {
        for(var i = 0; i < birdChoices.length; i++) {
            if(document.getElementById("part2").value == birdChoices[i]) {
                return birdChoices[i]; 
            }
        }
     }
 };

 function nameAndGender(){
     var names = document.querySelectorAll(".squirrelName");
     console.log(names);
     var genders = document.querySelectorAll(".gender");
     
     for(var i = 0; i < names.length; i++) {
        names[i].innerHTML = squirrelName;
     }
     for(var j = 0; j < genders.length; j++) {
         if(gender == "male"){
            genders[j].innerHTML = "he";
         }else {
             genders[j].innerHTML = "she";
         }
     }
 }