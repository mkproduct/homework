
 // ==================================	print array with recursion

	 // i = 0	1	2	3	4	5
// length = 5	5	5	5	5	5
// array=	0	1	2	3	4	

// let arr = ['K','M', 9, 10, 8991];
// // console.log(arr.length)

// print(arr, 0);

// function print(arr, i){
// 	if (i<arr.length){
// 		// console.log(i + ' < ' + arr.length);
// 		// console.log(arr[i])
// 		i++;
// 		print(arr, i)
// 	}
// }



// ==================================	хоистинг


// отличия применов

// console.log(c);
// var a = 5;
// let b = 5;
// const c = 5;

// console.log(c = 'ml');



	// scope функции

// let a=5;

// function func1(){
// 	let a=2;
// 	function func2(){
// 		let b=6;
// 		// console.log(a + b);
// 	}
// 	func2();
// }
// func1()



// let a = '';
// function func(){
// 	t = 8;
// 	// a = t
// 	console.log(t)
// }
// func()
// // console.log(a)









// ==================================	recursion task



// var a = 18;
// var b = 30;

// gcd(a,b);

// function gcd(a,b){
// 	if(b == 0){
// 		return a;
// 	}else{
// 		let t = a%b;
// 		return gcd(b,t) 
// 	}
// }

// 18%30=18


// Azamat task understending

// var a = 18;
// var b = 30;
// NOD(a,b);
// function NOD(a, b){
//     if(a % b == 0){
//         console.log(b);
//     }else{
//             let tmp = a % b;
//             a = b;
//             b = tmp;
//             NOD(a, b);
//     }
// }

// tmp =18	18%30=18
// a =30
// b =18

// tmp =12	30%18=12
// a =18
// b =12

// tmp =6	18%12=6
// a=12
// b=6


// if (12%6=0 == 0){
	// console.log(6)
// }










