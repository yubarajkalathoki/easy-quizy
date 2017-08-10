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
    var maxx;
    if((cl!=1 && cl*2>fl) || fl<=3 || fl>999){
            maxx = 3;
        }else{
            maxx = 4;
        }
    mth_opn=Math.floor(Math.random()*maxx+1);
}
function range(){
    console.log("Value of cl: " + cl);
    if(cl<=999){
        if(fl>999){
        fl=999;
        generateRandom();
    }
    }
}
function generateRandom(){
    number1();
    number2();
}
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
        setCookie("num2",input1,0.02);
    }
}
function r1() {
    if (document.getElementById('userInput1') != null) {
    input = parseFloat(document.getElementById("userInput1").value);
    setCookie("num1",input,0.02);
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
            setCookie("crt",correct,0.02);
            setCookie("cnt",count,0.02);
            console.log(getCookie("crt"));
            toggler();
            console.log(getCookie("crt"));
            if(parseFloat(getCookie("cnt"))==3){
                            console.log(count);
            cl=parseFloat(getCookie("num1"));
            fl=parseFloat(getCookie("num2"))*3;
            setCookie("num1",cl,0.02);
            setCookie("num2",fl,0.02);
            count=0;
            setCookie("cnt",count,0.02);
            }
        }       
    else{
        wrong=parseFloat(getCookie("wrng"));
        wrong++;
        property.style.backgroundColor = "#c73232";
        property.style.color="#FFFFFF";
        toggler();
        setCookie("wrng",wrong,0.02);
        count--;
        setCookie("cnt",count,0.02);         
    }   
}
function coccount() {
    setCookie("cnt",count,0.02);
    json_str = JSON.stringify(arr);
    setCookie("mycookie",json_str,-1);
    arr=[];
    json_str = JSON.stringify(arr);
    setCookie("mycookie",json_str,0.02);   
}
function cokrw(){
    setCookie("wrng",wrong,0.02);
    setCookie("crt",correct,0.02);
    setCookie("noOfQS",noOfQuestionSolved,0.02);
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
                var num1=(parseInt((Math.random()*(1000000-1+1)), 10)+(1))%5;
                    if(num1===0){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt3;
                        ans4=opt4;
                        break;
                    }
                    else if(num1===1){
                        ans1=opt4;
                        ans2=opt1;
                        ans3=opt2;                          
                        ans4=opt3;
                        break;
                    }
                    else if(num1===2){
                        ans1=opt3;
                        ans2=opt4;
                        ans3=opt1;                            
                        ans4=opt2;
                        break;
                    }
                    else if(num1===3){
                        ans1=opt1;
                        ans2=opt2;
                        ans3=opt5;                          
                        ans4=opt3;
                        break;
                    }
                    else {
                        ans1=opt3;
                        ans2=opt5;
                        ans3=opt1;                            
                        ans4=opt4;
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
	setCookie("noOfQS",noOfQuestionSolved,0.02);
    if(check==n3){
    	newhide.style.backgroundColor = "#31ad7a";
        newhide.style.color="#FFFFFF";
    	$("#" + "newhide").toggle();
          }     
    else{
    	newhide.style.backgroundColor = "#c73232";
        newhide.style.color="#FFFFFF";
        $("#" + "newhide").toggle();       
        document.getElementById("newhide").innerText="Wrong";
       }
    setTimeout(function (){
		$("#newhide").css("display","none");
        saveQuestions();
		refresh();
    }, 750);
}
 var fireMeUp = function(){  	
                    noOfQuestionSolved=getCookie("noOfQS");
                    if(noOfQuestionSolved%10==0&&noOfQuestionSolved!=0){
                    setTimeout(function (){ 
        			 $('#newmodel').modal('show');
                     }, 0);
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
    setCookie("noOfQS",0,0.02);
    setCookie("crt",0,0.02);
    setCookie("wrng",0,0.02);
    setCookie("cnt",0,0.02);
    arr=[];
    json_str = JSON.stringify(arr);
    setCookie("mycookie",json_str,0.02);
}
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