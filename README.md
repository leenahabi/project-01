
# Project Tic tac toe


This is a basic tic tac toe game that is played by two users.the first player is x and the second player o.

--- 
## My Project Deployment 
This is a link to the game
[Tic tac toe](https://leenahabi.github.io/project-01/)
## Technologies used in the project
1. javascript
2. jquery
3. HTML
4. CSS
--- 
## wireframes and user stories.
1. first both users enter their names 
2. clicking on the play button will start the game 
3. the tic tac toe table will appear 
4. first user will play x and the second will play with o
5. if one player wins the game will stop and a winning statement will slide up.
6. a replay button will show, if clicked the players will be able to replay the game.
7. a counter of the score will appear showing how many times each player won.
--- 
## Planning and Development Process

#### Day 1 
1. design the wireframe and write my pseudocode
2. write the basic html and css
3. start with basic javascript functions such as printing eather x or o on the table.

#### Day 2 
1. write the functions that check the winners 
2. write the function that switch between the players turn 
3. write  the function that allows the players to have a rematch

#### Day 3
1. improve my page's layout using css
2. make my page responsive to mobile users.
3. add a change theme feature.

#### Day 4
1. keep improving the css layout and responsive design on mobile
2. add scores to the player matches
3. let the players to add there name to the game and display it on each side.
--- 
## Describe any lines or function in the code 

```js
function displayXo (event) {
    if (clickCount%2===0) {
        $('#p1').css("textDecoration",'none')
        $('#p2').css("textDecoration",'underline')
        $('#p2').css("color",'#930300');
        $('#p1').css("color",'#fff');
    }
    else if (clickCount%2 !== 0) {
        $('#p2').css("textDecoration",'none')
        $('#p1').css("textDecoration",'underline')
        $('#p1').css("color",'#930300');
        $('#p2').css("color",'#fff');
    }
    let i = xo.pop();
    $(event.target).html(i)
    $(event.target).off('click');
    winn[event.target.id] = i;
    checkWin()
    clickCount++; 
}
```
This is my displayXo function. 
It's a function that uses a counter to display each players turn. if the counter is even it's the first players turn to play else it's the second player turn. 
this function also gets the x and o from the array and print it in the table.
if the player clicks on a table cell the (x/o) will be printed in the clicked area.
the clicked target will be closed off from future clicks.
also the (x/o) we got form the array will be added to an object called winn so we can compare it with the others and see if they match. 


## Challenges 

The biggest challenge i faced while doing this project is figuring out the logic behind this game. 
making the game responsive to mobile phones was a bit difficult and time consuming also. but it was a great opportunity to learn.


## Unsolved problems which would be fixed in future iterations. 

In the future I'd like to improve this game to contain more animation and audio features.
I'd also like to add some AI elements to make the game more challenging.
