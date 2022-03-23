player_1 = document.getElementById("player1_name").value;
player_2 = document.getElementById("player2_name").value;

function addUser(){
    localStorage.setItem("Player1");
    localStorage.setItem("Player2");
}