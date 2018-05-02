 // WRITE A FUNCTION TELLING THE USER A "STORY" AND PROMPT THE USER
 // ASKING FOR 1 OF 3 CHOICES
 // EACH CHOICE CONTINUES TO THEIR OWN FUNCTION
 // REPEAT 3 TIMES
 // USE ALERTS, PROMPTS AND CONFIRMS
 // USE IF ELSEIF AND ELSE
 // COMPLEX VERSION:
 // USE LOOPS AND ARRAYS

 var questionSquirrel = 
 var travelChoices = ["ground", "tree"];
 var snakeChoices = ["sneakAround", "wait", "climbTree"];
 var birdChoices = ["climbDown", "stayStill", "climbFaster"];
 var finalStory = "Once upon a time, there was a squirrel. It had spent the day " +
 "gathering acorns for the winter and had waundered a little too far from home.";
 
 var travelEntry = document.getElementById("travel"); // Text box for method of travel
 var btnName = document.getElementById("btnName"); // SUBMIT BUTTON FOR NAME
 var pStory = document.getElementById("story"); // P element to put variable into HTML
 var startBtn = document.getElementById("start");
 var travelMethod = getTravelChoices();
 var story = "";
 var squirrelName = "";
 var gender;
 var gender2;
 var winner = "You Win!";
 var loser = "You were eaten...";


 btnName.addEventListener("click", getName)
 startBtn.addEventListener("click", storyPt1);
 var storyArray = [];
 
 
 function storyPt1() {
     document.getElementById("intro").style.display = "none";

        //TRAVEL BY GROUND
        if(getTravelChoices() == travelChoices[0]) {
            story = (storyArray[0].story);
            console.log('final '+finalStory, squirrelName);
            finalStory += storyArray[0].storyFinal;
            console.log('final '+finalStory);
            pStory.innerHTML = story;
            var snakeOpt1 = document.getElementById("snakeOpt1"); // SUBMIT BUTTON TO GO INTO PART 2
            snakeOpt1.addEventListener("click", storyPt2);
        //TRAVEL BY TREE
         }else {
             story = (storyArray[1].story);
             finalStory += storyArray[1].storyFinal;
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
             //SNEAK AROUND
             case snakeChoices[0]:
                story = storyArray[2].story;
                finalStory += storyArray[2].storyFinal;
                pStory.innerHTML = story;
                nameAndGender();
                alert(loser);
                pStory.innerHTML = finalStory;
             break;
             //WAIT
             case snakeChoices[1]:
                story = storyArray[3].story;
                finalStory += storyArray[3].storyFinal;
                pStory.innerHTML = story;
                alert(winner);
                pStory.innerHTML = finalStory;
                nameAndGender();
             break;
             //CLIMB TREE
             case snakeChoices[2]:
                story = storyArray[4].story;
                finalStory += storyArray[4].storyFinal;
                pStory.innerHTML = story;
                nameAndGender();
                var groundClimb = document.getElementById("groundClimb");
                groundClimb.addEventListener("click", storyPt3);
         }

    }else { // called by tree button
        var treechoice = getBirdChoices(2);
        console.log(treechoice);
        switch(treechoice) {
            //CLIMB DOWN
            case birdChoices[0]:
               story = storyArray[5].story;
               finalStory += storyArray[5].storyFinal;
               pStory.innerHTML = story;
               var treeDown = document.getElementById("treeDown");
               treeDown.addEventListener("click", storyPt3);
            break;
            //STAY STILL
            case birdChoices[1]:
               story = storyArray[6].story;
               finalStory += storyArray[6].storyFinal;
               alert(winner);
               pStory.innerHTML = finalStory;

            break;
            //CLIMB FASTER
            case birdChoices[2]:
               story = storyArray[7].story;
               finalStory += storyArray[7].storyFinal;
               alert(loser);
               pStory.innerHTML = finalStory;
              
        }
        nameAndGender();
    }
     

 };
         
 function storyPt3() {
     if(this.id == "groundClimb") {
         var treechoice = getBirdChoices(3);
        switch(treechoice) {
            //CLIMB DOWN
            case birdChoices[0]:
            story = storyArray[8].story;
            finalStory += storyArray[8].storyFinal;
            alert(loser);
            break;
            //WAIT
            case birdChoices[1]:
            story = storyArray[6].story;
            finalStory += storyArray[6].storyFinal;
            alert(winner);            
            break;
            //CLIMB FASTER
            case birdChoices[2]: 
            story = storyArray[7].story;
            finalStory += storyArray[7].storyFinal;
            alert(loser);        
        }
        pStory.innerHTML = finalStory;
        nameAndGender();
     }else if( this.id = "treeDown") {
       
        var snakechoice = getSnakeChoices(3);
    
        switch(snakechoice) {
            //SNEAK AROUND
            case snakeChoices[0]:
            story = storyArray[2].story;
            finalStory += storyArray[2].storyFinal;
            alert(loser);
            break;
            // WAIT
            case snakeChoices[1]:
            story = storyArray[3].story;
            finalStory = storyArray[3].storyFinal;
            alert(winner);
            break;
            // CLIMB TREE
            case snakeChoices[2]: 
            story = storyArray[9].story;
            finalStory += storyArray[9].storyFinal;
            alert(loser);
        }
        nameAndGender();
        pStory.innerHTML = finalStory;

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


 function getName() {
     squirrelName = document.getElementById('name').value;
     gender = document.getElementById('gender').value;
     gender2 = (gender == 'male') ? "he" : "she";
     document.querySelector(".textBoxes").style.display = "none";
     document.getElementById("instructions").style.display = "none";
     document.getElementById("beginning").style.display = "block";
     createStoryArray(squirrelName, gender2);
}
 function createStoryArray(n, g) {
    storyArray = [
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
            </form>`,
            storyFinal: `So ${n} decided to travel home on the ground.
            After about a mile, ${g} runs into a snake!`
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
            </form>`,
            storyFinal: `So ${n} decided to travel home in the trees.
            After almost making it home, ${g} runs into a bird!`
         },
         {
            name: "groundSneak",
            story: `<p> So <span class='squirrelName'></span> decided to try to sneak around the snake. Scaling the bushes, 
            <span class='gender'></span> slowly crawled around the snake. However, while watching the snakes movements, <span class='gender'></span> 
            forgot to watch where <span class='gender'></span> was going and stepped on a twig, which broke with a noisy 'Crack!'. </p>`,
            storyFinal: `In order to avoid the snake, ${n} tries to sneak around it. 
            However ${g} accidentally steps on a twig and alerted the snake. ${n}
            was eaten... \n<img>`
         },
         {
             name: "groundWait",
             story: `<p> So <span class='squirrelName'></span> decided to jump into the nearest hole that <span class='gender'></span> 
             could find. <span class='gender'></span> waited for about 20 minutes and poked <span class='gender'></span> head out to see if the 
             snake was gone. Hurray! the snake is gone! So <span class='squirrelName'></span> continues home with no more obstacles.</p>`,
             storyFinal: `In order to avoid an encounter with the snake, ${n} tries to hide and wait it out. 
            ${g} waited about 20 minutes and then continued on ${g} way. Horray! ${n} 
            made it home!`
         },
         {
             name: "groundClimb",
             story: `<p> So <span class='squirrelName'></span> decided to climb a tree to try to escape from the snake. It worked! The snake did not 
             follow. However, now there is a new problem... A bird has spotted you! What should <span class='name'></span> do? </p> 
             <select name='bird' id='part3'> 
                <option value='climbDown'>Hide On the Ground</option> 
                <option value='stayStill'>Stay Still</option> <option value='climbFaster'>Climb Faster to Escape</option>
             </select> <button input type="button" id="groundClimb">Submit</button>`,
             storyFinal: `In order to avoid the snake, ${n} escapes by climbing up a tree. 
             That took care of the snake problem, but now there is a bird in the way!`
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
            <button input type='button' id='treeDown'>Submit</button>`,
            storyFinal: `So ${n} tries to escape from the bird by climbing down to the 
            ground. ${g} has escaped the bird, but now there is a snake in the way!`
         },
         {
            name: "treeWait",
            story: `<p>So <span class='squirrelName'></span> decided to stay still and hope that the bird didn't see <span class='gender'></span>. 
            And it worked! The bird flew away. So, <span class='squirrelName'></span> continued to climb along the branches to his home. </p><br /><h1>Winner!</h1>`,
            storyFinal: `So ${n} tries to stay still and hope the bird hasn't spotted
            ${g} yet. And it worked! The bird flew away! ${n} has made it home!`
         },
         {
             name: "treeRun",
             story: `<p>So <span class='squirrelName'></span> decided to run as fast as <span class='gender'></span> 
             along the trees to try to escape the bird. Oh no! The bird has spotted <span class='gender'></span> and is gaining fast!</p><br /><h1>EATEN</h1>`,
             storyFinal: `So ${n} runs as fast as ${g} can, hoping ${g} can 
             make it home before the bird catches ${g}. Unfortunately, the bird was too fast. 
             ${n} was eaten.`
         },
         {
             name: "groundTreeGround",
             story: `<p>So <span class='squirrelName'></span> decided to escape back to the ground. Oh No! The snake was waiting! 
             <br /><h1>EATEN</h1>`,
             storyFinal: `So in order to escape the bird, ${n} tries to go back down 
             to the ground. The snake was waiting. ${n} was eaten`
         },
         {
             name: "treeGroundTree",
             story: `<p>So <span class='squirrelName'></span> decided to escape back into the trees. Oh No! The bird was waiting!</p>
             <br /><h1>EATEN</h1>`,
             storyFinal: `So ${n} decides to escape from the snake by going back into 
             the trees. However the bird was waiting. ${n} was eaten...`
         }
        
    ];
 }
    


