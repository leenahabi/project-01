let xo = ['x','o','x','o','x','o','x','o','x'] //array to show x or o
let clickCount = 0; //counter 
let totalOne = 0
let totalTwo = 0
let name1;
let name2;
let winn = {
    c0:'',
    c1:'',
    c2:'',
    c3:'',
    c4:'',
    c5:'',
    c6:'',
    c7:'',
    c8:''
} // object to fill in if i want to check the winner

$('.winner').hide()
$('.enter').show()
$('.players').hide()
$('.xo').hide() 


//function to get the names fo the players
function game(){
name1 = $("#p1Name").val();
name2 = $("#p2Name").val();

$('#p1').text(name1);
$('#p2').text(name2);
$('#p1').css("textDecoration",'underline')
$('#p1').css("color",'#930300');
$('#total1').text(` ${totalOne}`);
$('#total2').text(` ${totalTwo}`);
$('.winner').slideUp()
$('.enter').slideUp()
$('.players').fadeIn()
$('.xo').fadeIn()
}

//function go change the backround color
$(function(){
    let changeBg = function(color){
        let body = $('body')
        body.css({
            backgroundColor:color
        })
    }
    let cbtn = $('#coral')
    cbtn.on('click',function(){ 
        changeBg('#E4593C')

})
let nbtn = $('#navy') 
nbtn.on('click',function (){
    changeBg('#16373D')
})
let gbtn = $('#green')
gbtn.on('click',function(){
    changeBg('#00A57E')
})
})

 //function to show the winning statment
let winStatment = function (winner) { 
    $("td").off('click');
    if (winner == 'x') { 
    totalOne += 1
    $('.winner h1').text(name1+' '+"won")
    $('.winner').fadeIn(2000)
    $('.xo').slideUp(1800);
    $('.players').slideUp(1800);
    }
    else if (winner == 'o') {
    $('.winner h1').text(name2+' '+"won")
    totalTwo+=1
    $('.winner').fadeIn(2000)
    $('.xo').slideUp(1800);
    $('.players').slideUp(1800);
    }
}
function winningSequence(winOne , winTwo , winThree) {
    $(winOne).css('textShadow','0 0 3px #fff')
    $(winTwo).css('textShadow','0 0 3px #fff')
    $(winThree).css('textShadow','0 0 3px #fff')
}

// function to check the positions of the x or o and see if it matches
let checkWin = function () {
if ((winn.c0 == winn.c1) && (winn.c0==winn.c2)) {
    if (winn.c0 ==='x'){
        winningSequence('#c1','#c0','#c2');
        winStatment('x') }
else if (winn.c0 ==='o'){
    winningSequence('#c1','#c0','#c2');
    winStatment('o') } 
}

else if ((winn.c0 == winn.c3) && (winn.c0 == winn.c6)){
    if (winn.c0 =='x'){
        winningSequence('#c0','#c3','#c6');
        winStatment('x') }
else if (winn.c0 =='o'){
    winningSequence('#c0','#c3','#c6');
    winStatment('o')} 
}


else if ((winn.c0 == winn.c4)&& (winn.c0 == winn.c8)) {
    
    if (winn.c0 =='x'){
        winningSequence('#c0','#c4','#c8');
        winStatment('x') }
else if (winn.c0 =='o'){
    winningSequence('#c0','#c4','#c8');
    winStatment('o')} 
 }


else if ((winn.c1 == winn.c4) && (winn.c1==winn.c7)) {  
    if (winn.c1 =='x'){
        winningSequence('#c1','#c4','#c7'); 
            winStatment('x') }
else if (winn.c1 =='o'){
    winningSequence('#c1','#c4','#c7'); 
    winStatment('o')} 
 }

else if ((winn.c2 == winn.c4)&& (winn.c2==winn.c6)) {
    if (winn.c2 =='x'){
        winningSequence('#c2','#c4','#c6');
        winStatment('x') }
else if (winn.c2 =='o'){
    winningSequence('#c2','#c4','#c6');
    winStatment('o');} 
}                   
   
else if ((winn.c3 == winn.c4)&& (winn.c5 == winn.c3)) {     
    if (winn.c3 =='x'){
        winningSequence('#c3','#c4','#c5');
        winStatment('x') }
    else if (winn.c3 =='o'){
        winningSequence('#c3','#c4','#c5');
        winStatment('o')} 
    }   

    else if ((winn.c2 == winn.c5)&& (winn.c5 === winn.c8)) {     
        if (winn.c2 =='x'){
            winningSequence('#c2','#c5','#c8');
            winStatment('x') }
        else if (winn.c2 =='o'){
            winningSequence('#c2','#c8','#c8');
            winStatment('o')} 
        }   
     
                             
    else if ((winn.c6 == winn.c7)&& (winn.c8 == winn.c6)) {
        if (winn.c6 =='x'){
        winningSequence('#c6','#c7','#c8');
        winStatment('x') }
    else if (winn.c6 =='o'){
        winningSequence('#c6','#c7','#c8');
        winStatment('o')}  
    }  
    else { if (xo.length ==0)
    { $('.winner h1').text("it is a Tie .. !")
    $('.winner').fadeIn(1500)
    $('.xo').slideUp(1400);
    $('.players').slideUp(1400)
}
}
}


$('td').on('click', displayXo);
// a function that prints x and o on the table saves it in an object and turn off the clicking 
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

// once the replay button is clicked this function will reset the values and let them play again
  $('.replay').click(function() {
    $("td").off('click');
    xo = ['x','o','x','o','x','o','x','o','x']
    clickCount = 0;
     winn['c0'] = '';
     winn['c1'] = '';
     winn['c2'] = '';
     winn['c3'] = '';
     winn['c4'] = '';
     winn['c5'] = '';
     winn['c6'] = '';
     winn['c7'] = '';
     winn['c8'] = '';
     $('td').on('click', displayXo);
     $('.xo td').html('');
     $('.xo td').css('textShadow', 'none');
    $('.winner').hide();
    $('.xo').show();
    $('.players').show();
    $('#total1').text(` ${totalOne}`);
    $('#total2').text(` ${totalTwo}`);
    $('#p2').css("textDecoration",'none')
    $('#p1').css("textDecoration",'underline')
    $('#p1').css("color",'#930300');
    $('#p2').css("color",'#fff');
  });

 


