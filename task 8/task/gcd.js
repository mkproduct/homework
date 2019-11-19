
var a = 18;
var b = 30;

gcd(a,b);

function gcd(a,b){
	if(b == 0){
		return a;
	}else{
		let t = a%b;
		return gcd(b,t) 
	}
}