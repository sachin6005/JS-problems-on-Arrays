var array = [NaN, 0, 15, false, -22, undefined, 47, null, 94]

array.shift()
console.log(array)

array.shift()
console.log(array)

array.splice(2, 1)
console.log(array)

array.splice(3, 1)
console.log(array)

array.splice(1, 1)
console.log(array)


// To find even and odd positions in array
var array = [1, 3, 6, 2, 5, 10]
var evenPos=[]
var oddPos=[]
for(var i=0; i< array.length; i+=2){
  evenPos.push(array[i]);
  (i+1) && oddPos.push(array[i+1]);
}
console.log(evenPos,oddPos)




var array = ['sachin', 'raviteja', 'harivishnu', 'benerzee', 'vamshi', 'dhanush']

console.log(array)
console.log(typeof(array))
console.log(array[1])
console.log(array[3])
console.log(array[5])

array.push('shubha')
console.log(array)

array.push('raghu')
console.log(array)

array.pop()
console.log(array)
array.pop()
console.log(array)


array[0] = 'M.SACHIN'
array[2] = 'HARIVISHNU'


array.splice(3,0,'newname1','newname2')
console.log(array)
array.splice(4,1)
console.log(array)


array.sort()
console.log(array)


array.reverse()
console.log(array)


var array2 = [1, 2, 3, 4]

array = array.concat(array2)
console.log(array)