function pyramid(n){
	for(let i=1; i<=n; i++){
		let space = ' '.repeat(n-i);
		let str2= '*'.repeat(i*2-1);
		console.log(space+str2);
	}
}
pyramid(3);
