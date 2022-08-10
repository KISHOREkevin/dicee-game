function relod(){
	var randomnumber1=Math.floor(Math.random()*6);
	var randomnumber2=Math.floor(Math.random()*6);
	var imgArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
	var player1_random_img=imgArray[randomnumber1];
	var player2_random_img=imgArray[randomnumber2];
	document.querySelector(".img1").setAttribute("src",player1_random_img);
	document.querySelector(".img2").setAttribute("src",player2_random_img);
	if(randomnumber1>randomnumber2){
		document.querySelector("h1").textContent="🚩Player 1 wins!"
	}else if(randomnumber2>randomnumber1){
		document.querySelector("h1").textContent="Player 2 wins🚩";
	}else{
		document.querySelector("h1").textContent="Draw!"
	}
}
