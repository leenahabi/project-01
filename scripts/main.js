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
    $('.winner').fadeIn(1500)
    $('.xo').slideUp(1400);
    $('.players').slideUp(1400);
    }
    else if (winner == 'o') {
    $('.winner h1').text(name2+' '+"won")
    totalTwo+=1
    $('.winner').fadeIn(1500)
    $('.xo').slideUp(1400);
    $('.players').slideUp(1400);
    }
}

// function to check the positions of the x or o and see if it matches
let checkWin = function () {
if ((winn.c0 == winn.c1) && (winn.c0==winn.c2)) {
    if (winn.c0 ==='x'){
        winStatment('x') }
else if (winn.c0 ==='o'){
    winStatment('o') } 
}

else if ((winn.c0 == winn.c3) && (winn.c0 == winn.c6)){
    if (winn.c0 =='x'){
        winStatment('x') }
else if (winn.c0 =='o'){
    winStatment('o')} 
}


else if ((winn.c0 == winn.c4)&& (winn.c0 == winn.c8)) {
    if (winn.c0 =='x'){
        winStatment('x') }
else if (winn.c0 =='o'){
    winStatment('o')} 
 }


else if ((winn.c1 == winn.c4) && (winn.c1==winn.c7)) {
        if (winn.c1 =='x'){
            winStatment('x') }
else if (winn.c1 =='o'){
    winStatment('o')} 
 }

else if ((winn.c2 == winn.c4)&& (winn.c2==winn.c6)) {
    if (winn.c2 =='x'){
        winStatment('x') }
else if (winn.c2 =='o'){
    winStatment('o');} 
}                   
                     
else if ((winn.c2 == winn.c5)&& (winn.c8 == winn.c2)) {
    if (winn.c2 =='x'){
        winStatment('x') }
    else if (winn.c2 =='o'){
        winStatment('o')} 
    }    
    
    
    else if ((winn.c3 == winn.c4)&& (winn.c5 == winn.c3)) {
    if (winn.c3 =='x'){
        winStatment('x') }
    else if (winn.c3 =='o'){
        winStatment('o')} 
    }    
                             
    else if ((winn.c6 == winn.c7)&& (winn.c8 == winn.c6)) {
    if (winn.c6 =='x'){
        winStatment('x') }
    else if (winn.c6 =='o'){
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


$('td').on('click', match);
// a function that prints x and o on the table saves it in an object and turn off the clicking 
function match (event) {
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
  $('.replay').click(function(event) {
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
     $('td').on('click', match);
    $('.winner').hide();
    $('.xo').show();
    $('.players').show();
    $('#total1').text(` ${totalOne}`);
    $('#total2').text(` ${totalTwo}`);
    $('#p2').css("textDecoration",'none')
    $('#p1').css("textDecoration",'underline')
    $('#p1').css("color",'#930300');
    $('#p2').css("color",'#fff');

    $('.xo td').html('');
   
  });


// $("#c0").click(function() {
//     let i = xo.pop();
//     $('#c0').html(i);
//     if (i==='x') {
//     winn.c1 = 1 }
//     if (i === 'o') {
//     winn.c1 = 2 
//     }
//     console.log(winn.c0)
//     checkwin()
//     $('#c0').off('click');
//   });

//   $("#c2").click(function() {
//     let i = xo.pop()
//     $('#c2').html(i);
//     if (i==='x') {
//         winn.c2 = 1 }
//         if (i === 'o') {
//         winn.c2 = 2 
//         }
//     console.log(winn.c2)
//     checkwin()
//     $('#c2').off('click');
//   });

//   $("#c3").click(function() {
//     let i = xo.pop()
//     $('#c3').html(i);
//     if (i==='x') {
//         winn.c3 = 1 }
//         if (i === 'o') {
//         winn.c3 = 2 
//         }
//     console.log(winn.c3)
//     checkwin()
//     $('#c3').off('click');
//   });

//   $("#c4").click(function() {
//     let i = xo.pop();
//     $('#c4').html(i);
//     if (i==='x') {
//         winn.c4 = 1 }
//         if (i === 'o') {
//         winn.c4 = 2 
//         }
//     console.log(winn.c4)
//     checkwin()
//     $('#c4').off('click');
//   });
// //   
// $("#c5").click(function() {
//     let i = xo.pop()
//     $('#c5').html(i);
//     if (i==='x') {
//         winn.c5 = 1 }
//         if (i === 'o') {
//         winn.c5 = 2 
//         }
//     console.log(winn.c5)
//     checkwin()
//     $('#c5').off('click');
//   });

//   $("#c6").click(function() {
//     let i = xo.pop()
//     $('#c6').html(i);
//     if (i==='x') {
//         winn.c6 = 1 }
//         if (i === 'o') {
//         winn.c6 = 2 
//         }
//     console.log(winn.c6)
//     checkwin()
//     $('#c6').off('click');
//   });

//   $("#c7").click(function() {
//     let i = xo.pop()
//     $('#c7').html(i);
//     if (i==='x') {
//         winn.c7 = 1 }
//         if (i === 'o') {
//         winn.c7 = 2 
//         }
//     console.log(winn.c7)
//     checkwin()
//     $('#c7').off('click');
//   });

//   $("#c8").click(function() {
//     let i = xo.pop();
//     $('#c8').html(i);
//     if (i==='x') {
//         winn.c8 = 1 }
//         if (i === 'o') {
//         winn.c8 = 2 
//         }
//     console.log(winn.c8)
//     checkwin()
//     $('#c8').off('click');
//   });


 


