var players=[];

var values=['X','O'];

var scores=[0,0];
players[0]="player1";
players[1]="player2";
var gameover=false;
var winvalues=[7,56,73,84,146,273,292,448];
var turn=0;
var store=0;
var arr=new Array(9);
var grid_no=0;
var modal = document.getElementById('myModal');
//var btn = document.getElementById("myBtn");
function play(clickedBut,clickval)
{
    grid_no=0;
    store=clickval;
    butpress=clickedBut;
    while(clickval>=2)
    {
        clickval=clickval/2;
        grid_no++;
    }
    if(arr[grid_no]==undefined)
        {
            arr[grid_no]=1;
            if(! gameover)
            {
                scores[turn]+=store;

		
      		
              	  clickedBut.innerHTML="<span><h1>"+ values[turn] +"</h1></span>";

                win();
                if(! gameover)
                    switchplayers(); 
            }
        }
}
function switchplayers()
{
    if(turn == 0)
        turn = 1;
    else
        turn = 0;
    document.getElementById("Tic-Tac-Toe").innerText= players[turn] + "'s turn";
}
function win(){

		
    for(var i=0;i<winvalues.length;i++)
    {
        if((scores[turn] & winvalues[i])==winvalues[i]){
		var playerText;

		if(players[turn]=="player1"){
		  playerText="Player 1";
		}
		else{
		 playerText="Player 2";
		}
		
   		modal.style.display = "block";

		document.getElementById('msg').innerHTML=playerText+ "Wins!";
		
            //document.getElementById("Tic-Tac-Toe").innerText=players[turn] + "Wins!";
            gameover=true;
        }
    }
    if(((scores[0] + scores[1]) == 511) && !gameover){

	modal.style.display = "block";
	
	
	document.getElementById('msg').innerHTML="Game Over";
	
        document.getElementById("Tic-Tac-Toe").innerText="TIE!!!"
        gameover=true;
    }
}
function undo()
{
    if(!gameover)
    {
        switchplayers();
        scores[turn]-=store;
        butpress.innerHTML="";
        arr[grid_no]=undefined;
    }
}
function reset()
{
    scores=[0,0];
    gameover=false;
    turn=0;
    document.getElementById("Tic-Tac-Toe").innerText="Tic-Tac-Toe";
    var buttons=document.getElementsByClassName("btn-group");
    for(var i=0;i<9;i++)
    {
            buttons[i].innerHTML=" ";
            arr[i]=undefined;
    }
 modal.style.display = "none";
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






