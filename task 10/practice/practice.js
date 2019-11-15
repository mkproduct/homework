







let m=0;

function func(m){
	

	func2(m)

	function func2(m){
		if(m>=0 && m<10){
			m++;
			console.log(m)
			func2(m)
		}
	}
}
func(m);