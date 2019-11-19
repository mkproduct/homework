let arr = ['K','M', 9, 10, 8991];

print(arr, 0);

function print(arr, i){
	if (i<arr.length){
		console.log(arr[i])
		i++;
		print(arr, i)
	}
}
/*
console.log(i + ' < ' + arr.length + ' = ' + i<arr.length)
console.log(`${i} < ${arr.length} = ${i<arr.length}`);

0<5
1<5
2<5
3<5
4<5

5<5 false


*/

