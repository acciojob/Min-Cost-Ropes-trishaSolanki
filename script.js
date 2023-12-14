function mincost(arr)
{ 
//write your code here
// return the min cost
	
 arr.sort((a,b) => a - b) ;
	let totalCost = 0;
	while(arr.length > 1){
		const min1 = arr.shift();
		const min2 = arr.shift();
		 const cost = min1 + min2;
		totalCost += cost;
		arr.push(cost);
		arr.sort((a,b) => a-b);
	}
	return totalCost;
}

module.exports=mincost;
