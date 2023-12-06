//your JS code here. If required.
let finalResult="";
for(let i=0;i<=100;i++){
	if(i%3==0){
		finalResult+="Fizz"+"\n";
	}
	else if(i%5==0){
		finalResult+="Buzz"+"\n";
	}
	else if(i%3==0 && i%5==0){
		finalResult+="FizzBuzz"+"\n";
	}
	else{
		finalResult+=i+"\n";
	}
}
alert(finalResult);