console.log("ASAP Frontend"[12])
//in let you can change the value of declare but in const you can't 
let egg = 200;
 egg = 300;
console.log(egg)
//'5'==5 they are equal value don't need the data type
let a = '5'==5;
console.log(a) 
//'5'===5 they are not equal because they need in the same data type just check you're console
let b ='5'===5;
console.log(b)

let hasmembership = false;
let signnedin = true;

if (hasmembership ===true){
    console.log('show users the video')
}else if (signnedin ===true){
    console.log('tell them user to upgrade the account')
}
else{
    console.log('you need sign in to show the video')
}
//Ternary opreator
let israining = true;
israining? console.log("take you're umbrela") : console.log("you don'nt need umbrela");
let count = 1;
while(count<=3){
    console.log(count);
    count=count+1;
}
/*write a for loopo that loops 1 to 15.
if the number is odd print "SURAFEL"
if the number is even print "MULUGETA"
if the number is divisible by 5 ,print "SURAFEL MULUGETA"*/
for (i=1;i<=15;i++){
    if (i%5===0){
        console.log(`${i} - SURAFEL MULUGETA`);
    }else if(i%2!==0){
    console.log(`${i} - SURAFEL`);
    }else if(i%2===0){
        console.log(`${i} - MULUGETA`);
    }
}
let strings = "SURAFEL";
for(i=0;i<=strings.length;++i){
    console.log(strings[i]);
}
// function declaration
function greetuser(name, time){
    console.log(`Good ${time}, ${name} `);
}

//call the function
greetuser('alex,','morning');
greetuser('sura', 'afternoon');
greetuser('iman', 'night');
// in the return value you need to use console.log to call the function
function sum(USD){
    return AUD = USD * 1.5;
    console.log("the sum is = 10")
}
console.log(sum(1000));
//array
let array = ["mango", "apple", "orange"]
console.log(array[0])
console.log(array[array.length -1])
//array push
array.push("banana")
console.log(array)
let sura = [20,10,15,25]
// array filter
let filteredsura = sura.filter((sura) => sura <= 15);
console.log(filteredsura);
                               
// exercise
let club = [18,20,16,15,21]

for (i=0;i<=club.length;i++){
    if (club[i] >= 18){
    console.log(club[i])
    }
}
// array map
let usdollars = [ 10,20,30,40]

for (i=0;i<=usdollars.length;i++){
    
    console.log(usdollars[i]) * 1.5;
}
// object 
let user= {
    name: "surafel mulugeta",
    password: "sura@123",
    email: "sura@gmail.com",
    dicord:"sura mulu",
    lessonscomplited: [1,2,3,4],
}
console.log(user.name);
// DOM in this dom I had change the title suuuura7 in to sura mulu check it out
document.querySelector('h1').innerHTML += " ASAP Front-end";
//change css by js in dom
function change(){
    document.querySelector('button').style.color = "green"

}
function togglesidebar(){
    document.querySelector('body').classList.toggle("open")
}
//var tweet = prompt("enter the comment bellow pls");
//alert("you entered " + tweet.length + "characters, " + (150-tweet.length) + " remainning");
var tweet = prompt("enter the comment bellow pls");
alert("you entered " + tweet.slice(0,15));




