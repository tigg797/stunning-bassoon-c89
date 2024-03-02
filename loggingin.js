function lockUsernames() {
    var player1Input = document.getElementById("player1_nameinp").value;
    var player2Input = document.getElementById("player2_nameinp").value;
    var lockButton = document.getElementById("player1login");

    lockButton.disabled = true;

    var quizButton = document.getElementById("bigbtn");
    quizButton.style.opacity = "1";
}

function makefull() {
    document.getElementById("player1_nameinp").style.opacity = "0.4";
    document.getElementById("player2_nameinp").style.opacity = "0.4";
    document.getElementById("bigbtn").style.opacity = "1";
    document.getElementById("bigbtn").style.backgroundColor = "red";
}