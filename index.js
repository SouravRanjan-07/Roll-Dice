var randomno=Math.floor(Math.random()*6)+1;
var randomno2=Math.floor(Math.random()*6)+1;
var randomImage="images/"+"dice"+randomno+".png";
var randomImage2="images/"+"dice"+randomno2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
if(randomno>randomno2){
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomno<randomno2){
document.querySelector("h1").innerHTML="player 2 wins";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}