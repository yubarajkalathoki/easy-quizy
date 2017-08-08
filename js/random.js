var cl=parseFloat(getCookie("num1"));
var fl=parseFloat(getCookie("num2"));

var n1=0;
var n2=0;
var n3=0;
var count=0;
var op="";
var input=0;
var cp=0;
var value1=0;
var value2=0;
var ans1=0;
var ans2=0;
var ans3=0;
var ans4=0;
var correct=0;
var check=0;
var wrong=0;
var mth_opn = 0;
var noOfQuestionSolved=0;
var arr=[];
var json_str;
function number1(){
    
    n1=parseInt((Math.random()*(fl-cl)), 10)+(cl);
    
    value1=n1;
    console.log("Hello n1: "+value1);
    
}

function number2(){
    
    n2=parseInt((Math.random()*(fl-cl)), 10)+(cl);
    
    value2=n2;
    console.log("Hello n2: "+value2);
    
}
function opn_btn(){
switch(mth_opn){
    case 1: //add
            op="+";
            add();
            break;
    case 2: //subtract
            op="-";
            subtract();
            break;
    case 3: //multiply
            op="x";
            multiply();
            break;
    case 4: 
            //divide
            op="/";
            divide();
            break;
    default: alert("Invalid");
}
}

function add(){
    generateRandom();
    n3 = value1 + value2;
    generateAnswer();
}

function subtract(){
    generateRandom();
    n3 = value1 - value2;
    generateAnswer();
}

function multiply(){
    generateRandom();
    range();
    n3 = value1 * value2;
    generateAnswer();
}
function divide(){
    if(fl<=3){
        randomOperator();
        opn_btn();
    }
    var divideCount=0;
    divideRandom();
    ran=Math.floor(Math.random()*fl+2);
    console.log(ran);
    if(value2 * ran<=fl){
    value1 = value2 * ran;
    n3= value1/value2;
    generateAnswer();
    }else{
        divideCount++;
        if(divideCount==3){
            console.log("Hello Iam inside Divcount =3");
           randomOperator();
           opn_btn();
        }
        divide();
    }
}
function divideRandom(){
    value2 = parseInt((Math.random()*(fl-2)), 10)+(2);
    if(value2.toString().length > 3){
        divideRandom();
    }
}
function randomOperator(){
    mth_opn=Math.floor(Math.random()*4+1);
    if(fl<=3 && mth_opn == 4){
        randomOperator();
        }
}
function range(){
    console.log("Value of cl: " + cl);
    if(cl<=999){
        if(fl>999){
        fl=999;
        generateRandom();
    }
        
        /*if(value1.toString().length > 3 || value2.toString().length > 3){
            
            generateRandom();
            console.log("I am inside range condition because of value: " + value1 + " " + value2);
            range();
        }*/
    }
}

function generateRandom(){
    number1();
    number2();
}
/*function opn_btn(){
    var mth_opn=0;
mth_opn=Math.floor(Math.random()*4+1);
switch(mth_opn){
    case 1: n3=value1+value2;
            op="+";
            break;
    case 2: n3=value1-value2;
            op="-";
            break;
    case 3: n3=value1*value2;
            op="x";
            break;
    case 4: forDivide();
            op="/";
            break;
    default: alert("Invalid");
}
return op;
}
function forDivide(){
   divideRandom();
   var ran=Math.floor(Math.random()*50+2);
   value1 = value2 * ran;
   n3= value1/value2;
   generateAnswer();
}
function divideRandom(){
   value2 = parseInt((Math.random()*(fl-cl)), 10)+(cl);
   if(value2.toString().length > 2){
       divideRandom();
   }
}*/
/*function forDivide(){
    console.log("I am inside forDivide");
    while(1){
        number1();
        number2();
        if(value1>value2){
            if(value1%value2==0&&value2!=1){
            console.log(value1);
            console.log(value2);
            
            var anns = value1/value2;
            console.log(anns);
            document.getElementById('val1').innerText = value1;
            return (anns);
            break;
            }
        }
        
    }
}*/


function r() {  

    if(document.form.userInput1.value=="" || isNaN(document.form.userInput1.value) || document.form.userInput2.value=="" || isNaN(document.form.userInput2.value)){
        alert("Field is empty. Please fix the range!");
        homepage();
    }
    else if(document.form.userInput1.value==document.form.userInput2.value){
        alert("Invalid Input");
        homepage();
    }
    else {
        r1();
        r2();
        refresh();
    }

 }


function r2() {
    console.log("contents of r2");
    if (document.getElementById('userInput2') != null) {
    var input1 = parseFloat(document.getElementById("userInput2").value);
        setCookie("num2",input1,40);
        //var a=parseFloat(getCookie("num2"));
        //return a;
}
}
function r1() {
    
    if (document.getElementById('userInput1') != null) {
        
    input = parseFloat(document.getElementById("userInput1").value);
    setCookie("num1",input,40);
        }
}
function setCookie(cname, cvalue, exdays) {
    
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    
    var name = cname + "=";
    var ca = document.cookie.split(';');
    
    
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        
        
        if (c.indexOf(name) == 0) {
            var finalOutput = c.substring(name.length, c.length);
            
            return finalOutput;
        }
    }
    return "";
}
function chk(click ,btn,btn1,btn2,btn3) {
    // display popup dialog
    document.getElementById(btn).disabled=true;
    document.getElementById(btn1).disabled=true;
    document.getElementById(btn2).disabled=true;
    document.getElementById(btn3).disabled=true;
    document.getElementById('myModal1');
    check = click;
    var property = document.getElementById(btn);
    if(check==n3){ 
            count=parseFloat(getCookie("cnt"));
            correct=parseFloat(getCookie("crt"));
            correct++;
            console.log(count);
            count++;
            property.style.backgroundColor = "#31ad7a";
            property.style.color="#FFFFFF";
            setCookie("crt",correct,40);
            setCookie("cnt",count,40);
            console.log(getCookie("crt"));
            toggler();
            console.log(getCookie("crt"));
            if(parseFloat(getCookie("cnt"))==3){
                            console.log(count);
            cl=parseFloat(getCookie("num1"));
            fl=parseFloat(getCookie("num2"))*3;
            setCookie("num1",cl,40);
            setCookie("num2",fl,40);
            count=0;
            setCookie("cnt",count,40);
            }
        }
        
        
    else{
        wrong=parseFloat(getCookie("wrng"));
        wrong++;
        property.style.backgroundColor = "#c73232";
        property.style.color="#FFFFFF";
        toggler();
        setCookie("wrng",wrong,40);
        count--;
        setCookie("cnt",count,40);
         
    }   
}

function coccount() {
    setCookie("cnt",count,40);
    json_str = JSON.stringify(arr);
    setCookie("mycookie",json_str,-1);
    arr.push(0);
    json_str = JSON.stringify(arr);
    setCookie("mycookie",json_str,40);
    
}
function cokrw(){
    setCookie("wrng",wrong,40);
    setCookie("crt",correct,40);
    setCookie("noOfQS",noOfQuestionSolved,40);
}
function generateAnswer() {
            while(1){
                ans1;
                ans2;
                ans3;
                ans4;
            var opt1=n3;
            if(opt1<40 || opt1<-40){
                var opt2=parseInt((Math.random()*((opt1+5)-(opt1-5)+1)), 10)+(opt1-5);
                var opt3=parseInt((Math.random()*((opt1+5)-(opt1-5)+1)), 10)+(opt1-5);
                var opt4=parseInt((Math.random()*((opt1+5)-(opt1-5)+1)), 10)+(opt1-5);
                if(opt1!=opt2 && opt1!=opt3 && opt1!=opt4 && opt2!=opt3 && opt2!=opt4 && opt3!=opt4){
                    var num1=(parseInt((Math.random()*(100-1+1)), 10)+(1))%4;
                    if(num1===0){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt3;
                        ans4=opt4;
                        break;
                    }
                    else if(num1===1){
                        ans1=opt2;
                        ans2=opt3;
                        ans3=opt4;
                        ans4=opt1;
                        break;
                    }
                    else if(num1===2){
                        ans1=opt3;
                        ans2=opt4;
                        ans3=opt1;                            
                        ans4=opt2;
                        break;
                    }
                    else{
                        ans1=opt4;
                        ans2=opt1;
                        ans3=opt2;
                        ans4=opt3;
                        break;                            
                    }
                }
            }
            else{
                var opt2=opt1-10;
                var opt3=opt1+10;
                var opt4=opt1+20;
                var opt5=opt1-20;                   
                var num1=(parseInt((Math.random()*(1000000-1+1)), 10)+(1))%72;
                    if(num1===0){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt3;
                        ans4=opt4;
                        break;
                    }
                    else if(num1===1){
                        ans1=opt1;
                        ans2=opt3;
                        ans3=opt2;                          
                        ans4=opt4;
                        break;
                    }
                    else if(num1===2){
                        ans1=opt1;
                        ans2=opt3;
                        ans3=opt4;                            
                        ans4=opt2;
                        break;
                    }
                    else if(num1===3){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt4;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===4){
                        ans1=opt1;
                        ans2=opt4;
                        ans3=opt2;                            
                        ans4=opt3;
                        break;
                    }////from here
                    else if(num1===5){
                        ans1=opt1;
                        ans2=opt4;
                        ans3=opt3;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===6){
                        ans1=opt2;
                        ans2=opt1;
                        ans3=opt3;                            
                        ans4=opt4;
                        break;
                    }
                    else if(num1===7){
                        ans1=opt2;
                        ans2=opt1;
                        ans3=opt4;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===8){
                        ans1=opt3;
                        ans2=opt1;
                        ans3=opt2;                            
                        ans4=opt4;
                        break;
                    }else if(num1===9){
                        ans1=opt3;
                        ans2=opt1;
                        ans3=opt4;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===10){
                        ans1=opt4;
                        ans2=opt1;
                        ans3=opt2;                            
                        ans4=opt3;
                        break;
                    }
                    else if(num1===11){
                        ans1=opt4;
                        ans2=opt1;
                        ans3=opt3;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===12){
                        ans1=opt2;
                        ans2=opt3;
                        ans3=opt1;                            
                        ans4=opt4;
                        break;
                    }else if(num1===13){
                        ans1=opt3;
                        ans2=opt2;
                        ans3=opt1;                          
                        ans4=opt4;
                        break;
                    }
                    else if(num1===14){
                        ans1=opt4;
                        ans2=opt3;
                        ans3=opt1;                            
                        ans4=opt2;
                        break;
                    }
                    else if(num1===15){
                        ans1=opt3;
                        ans2=opt4;
                        ans3=opt1;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===16){
                        ans1=opt4;
                        ans2=opt2;
                        ans3=opt1;                            
                        ans4=opt3;
                        break;
                    }else if(num1===17){
                        ans1=opt2;
                        ans2=opt4;
                        ans3=opt1;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===18){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt5;                            
                        ans4=opt4;
                        break;
                    }
                    else if(num1===19){
                        ans1=opt1;
                        ans2=opt5;
                        ans3=opt2;                          
                        ans4=opt4;
                        break;
                    }
                    else if(num1===20){
                        ans1=opt1;
                        ans2=opt5;
                        ans3=opt4;                            
                        ans4=opt2;
                        break;
                    }else if(num1===21){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt4;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===22){
                        ans1=opt1;
                        ans2=opt4;
                        ans3=opt2;                            
                        ans4=opt5;
                        break;
                    }
                    else if(num1===23){
                        ans1=opt1;
                        ans2=opt4;
                        ans3=opt5;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===24){
                        ans1=opt2;
                        ans2=opt1;
                        ans3=opt5;                            
                        ans4=opt4;
                        break;
                    }else if(num1===25){
                        ans1=opt2;
                        ans2=opt1;
                        ans3=opt4;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===26){
                        ans1=opt5;
                        ans2=opt1;
                        ans3=opt2;                            
                        ans4=opt4;
                        break;
                    }
                    else if(num1===27){
                        ans1=opt5;
                        ans2=opt1;
                        ans3=opt4;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===28){
                        ans1=opt5;
                        ans2=opt1;
                        ans3=opt2;                            
                        ans4=opt3;
                        break;
                    }else if(num1===29){
                        ans1=opt5;
                        ans2=opt1;
                        ans3=opt3;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===30){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt3;                            
                        ans4=opt5;
                        break;
                    }
                    else if(num1===31){
                        ans1=opt1;
                        ans2=opt3;
                        ans3=opt2;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===32){
                        ans1=opt1;
                        ans2=opt3;
                        ans3=opt5;                            
                        ans4=opt2;
                        break;
                    }else if(num1===33){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt5;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===34){
                        ans1=opt1;
                        ans2=opt5;
                        ans3=opt2;                            
                        ans4=opt3;
                        break;
                    }
                    else if(num1===35){
                        ans1=opt1;
                        ans2=opt5;
                        ans3=opt3;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===36){
                        ans1=opt2;
                        ans2=opt1;
                        ans3=opt3;                            
                        ans4=opt5;
                        break;
                    }else if(num1===37){
                        ans1=opt2;
                        ans2=opt1;
                        ans3=opt5;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===38){
                        ans1=opt3;
                        ans2=opt1;
                        ans3=opt2;                            
                        ans4=opt5;
                        break;
                    }
                    else if(num1===39){
                        ans1=opt3;
                        ans2=opt1;
                        ans3=opt5;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===40){
                        ans1=opt5;
                        ans2=opt1;
                        ans3=opt2;                            
                        ans4=opt3;
                        break;
                    }else if(num1===41){
                        ans1=opt5;
                        ans2=opt1;
                        ans3=opt3;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===42){
                        ans1=opt2;
                        ans2=opt3;
                        ans3=opt1;                            
                        ans4=opt5;
                        break;
                    }
                    else if(num1===43){
                        ans1=opt3;
                        ans2=opt2;
                        ans3=opt1;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===44){
                        ans1=opt5;
                        ans2=opt3;
                        ans3=opt1;                            
                        ans4=opt2;
                        break;
                    }else if(num1===45){
                        ans1=opt3;
                        ans2=opt5;
                        ans3=opt1;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===46){
                        ans1=opt5;
                        ans2=opt2;
                        ans3=opt1;                            
                        ans4=opt3;
                        break;
                    }
                    else if(num1===47){
                        ans1=opt2;
                        ans2=opt5;
                        ans3=opt1;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===48){
                        ans1=opt2;
                        ans2=opt5;
                        ans3=opt1;                            
                        ans4=opt4;
                        break;
                    }else if(num1===49){
                        ans1=opt5;
                        ans2=opt2;
                        ans3=opt1;                          
                        ans4=opt4;
                        break;
                    }
                    else if(num1===50){
                        ans1=opt4;
                        ans2=opt5;
                        ans3=opt1;                            
                        ans4=opt2;
                        break;
                    }
                    else if(num1===51){
                        ans1=opt5;
                        ans2=opt4;
                        ans3=opt1;                          
                        ans4=opt2;
                        break;
                    }
                    else if(num1===52){
                        ans1=opt4;
                        ans2=opt2;
                        ans3=opt1;                            
                        ans4=opt5;
                        break;
                    }else if(num1===53){
                        ans1=opt2;
                        ans2=opt4;
                        ans3=opt1;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===54){
                        ans1=opt1;
                        ans2=opt5;
                        ans3=opt3;                            
                        ans4=opt4;
                        break;
                    }
                    else if(num1===55){
                        ans1=opt1;
                        ans2=opt3;
                        ans3=opt5;                          
                        ans4=opt4;
                        break;
                    }
                    else if(num1===56){
                        ans1=opt1;
                        ans2=opt3;
                        ans3=opt4;                            
                        ans4=opt5;
                        break;
                    }else if(num1==57){
                        ans1=opt1;
                        ans2=opt5;
                        ans3=opt4;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===58){
                        ans1=opt1;
                        ans2=opt4;
                        ans3=opt5;                            
                        ans4=opt3;
                        break;
                    }
                    else if(num1===59){
                        ans1=opt1;
                        ans2=opt4;
                        ans3=opt3;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===60){
                        ans1=opt5;
                        ans2=opt1;
                        ans3=opt3;                            
                        ans4=opt4;
                        break;
                    }else if(num1===61){
                        ans1=opt5;
                        ans2=opt1;
                        ans3=opt4;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===62){
                        ans1=opt3;
                        ans2=opt1;
                        ans3=opt5;                            
                        ans4=opt4;
                        break;
                    }
                    else if(num1===63){
                        ans1=opt3;
                        ans2=opt1;
                        ans3=opt4;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===64){
                        ans1=opt4;
                        ans2=opt1;
                        ans3=opt5;                            
                        ans4=opt3;
                        break;
                    }else if(num1===65){
                        ans1=opt4;
                        ans2=opt1;
                        ans3=opt3;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===66){
                        ans1=opt5;
                        ans2=opt3;
                        ans3=opt1;                            
                        ans4=opt4;
                        break;
                    }
                    else if(num1===67){
                        ans1=opt3;
                        ans2=opt5;
                        ans3=opt1;                          
                        ans4=opt4;
                        break;
                    }
                    else if(num1===68){
                        ans1=opt4;
                        ans2=opt3;
                        ans3=opt1;                            
                        ans4=opt5;
                        break;
                    }
                    else if(num1===69){
                        ans1=opt3;
                        ans2=opt4;
                        ans3=opt1;                          
                        ans4=opt5;
                        break;
                    }
                    else if(num1===70){
                        ans1=opt4;
                        ans2=opt5;
                        ans3=opt1;                            
                        ans4=opt3;
                        break;
                    }
                    else{
                        ans1=opt5;
                        ans2=opt4;
                        ans3=opt1;
                        ans4=opt3;
                        break;                                                      
                    }
            } 
            }         
    }
function lastDigit(lastDigit){
    while(lastDigit>=10 || lastDigit<=-10){
        lastDigit%=10;
    }
    return lastDigit;
}
function toggler() {
	noOfQuestionSolved=parseFloat(getCookie("noOfQS"));
	noOfQuestionSolved++;
	setCookie("noOfQS",noOfQuestionSolved,40);
    if(check==n3){
    	newhide.style.backgroundColor = "#31ad7a";
        newhide.style.color="#FFFFFF";
    	$("#" + "newhide").toggle();
    	/*$("#testload").load(location.href+" #testload>*","");
    	$("#testload").load(location.href+" #testload>");*/
/*    	         if(correct==2){
    	         	fireMeUp();
     			  }*/
         	/*alert("Hi");
          	$('body').addClass('modal-open');
          	$('#newmodel').addClass('in');
          	$('#newmodel').addClass('modelin');*/
          }
      
    else{
    	newhide.style.backgroundColor = "#c73232";
        newhide.style.color="#FFFFFF";
        $("#" + "newhide").toggle();
        
        document.getElementById("newhide").innerText="Wrong";
       }
    setTimeout(function (){

    	/*refresh();*/
/*$("#testload").load(location.href+" #testload>*","");*/
		/*console.log("before");*/
		/*$("#rcol").load(location.href+" #rcol");*/
		/*document.getElementById("test").innerText='hi';*/
	
		$("#newhide").css("display","none");
/*		document.getElementById("newhide").innerText="Correct";
		number1();
		number2();
		document.getElementById("val1").innerText=value1;
		console.log(value1);
    	document.getElementById("val2").innerText=value2;
    	console.log(value2);
    	document.getElementById("opt").innerText=op;
    	console.log(op);
    	console.log(ans1);
    	console.log(ans2);
    	console.log(ans3);
    	console.log(ans4);
		console.log("after");*/
        saveQuestions();
        /*if(noOfQuestionSolved==10){
            fireMeUp();
        }
        else*/
		refresh();
    }, 750);
}

/*function timer(){
	// Set the date we're counting down to
	var countDownDate = new Date().getTime() + 10000;

	// Update the count down every 1 second
	var x = setInterval(function() {
	
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("t-time").innerHTML = minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("t-time").innerHTML = "EXPIRED";
        setTimeout(function (){
            window.open("../EasyQuizy/index.html", "_self");
        }, 1000);  
    }
}, 1000);
}
/*function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}*/
 var fireMeUp = function(){  	
                    noOfQuestionSolved=getCookie("noOfQS");
                    if(noOfQuestionSolved%10==0&&noOfQuestionSolved!=0){
                    /*$('#bd').addClass("modal-open");
                     $('#newmodel').css("display","block");*/
                     /*$('#newmodel').modal('show');*/
                        setTimeout(function (){ 
        			 $('#newmodel').modal('show');
                    }, 0);
                     
                     /*$('#bd').addClass("modal-open");
                     $('#newmodel').css("display","block");*/

                    }
     				} 
var   refresh = function(){
    window.open("./game.html", "_self");
}
var homepage = function(){
     window.open("./index.html", "_self");
}
var closeDialog = function() {
    setCookie("mycookie",json_str,-1);
    setCookie("noOfQS",0,40);
    setCookie("crt",0,40);
    setCookie("wrng",0,40);
    setCookie("cnt",0,40);
    arr=[];
    arr.push(0);
    json_str = JSON.stringify(arr);
    setCookie("mycookie",json_str,40);
}
/*function refresh(){
		number1();
		number2();
		document.write(value1);
		document.write(opn_btn());
		document.write(value2);
    	generateAnswer();
    	if(value1!=null && value2!=null){
    	document.getElementById("val1").innerText=value1;
    	document.getElementById("val2").innerText=value2;
    	document.getElementById("opt").innerText=op;
    }
}*/
function saveQuestions(){
    json_str = getCookie('mycookie');
    arr = JSON.parse(json_str);
    arr.push(value1);
    arr.push(op);
    arr.push(value2);
    arr.push(check);
    arr.push(n3);
    json_str = JSON.stringify(arr);
    setCookie('mycookie', json_str);
}