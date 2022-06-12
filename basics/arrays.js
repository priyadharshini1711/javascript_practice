var arr1 = [10,"20",30]

document.write(arr1.toString())
document.write('<br>')

arr2 = arr1.join(" $ ")
document.write(arr2.toString())
document.write('<br>')

arr2 = arr1.pop()
document.write(arr2.toString())
document.write('<br>')
document.write(arr1.toString())
document.write('<br>')

arr1.push(40)
document.write(arr1.toString())
document.write('<br>')

arr1.shift()
document.write(arr1.toString())
document.write('<br>')

arr1.unshift(40)
document.write(arr1.toString())
document.write('<br>')

delete arr1[1]
document.write(arr1.toString())
document.write('<br>')

document.write(arr1.length)
document.write('<br>')

arr1[4] = 50
document.write(arr1.toString())
document.write('<br>')

arr1.sort()
document.write(arr1.toString())
document.write('<br>')

arr1[3] = '80'
for(let i  = 0 ; i < arr1.length ; i++){
    document.write(arr1[i]+ " " +typeof(arr1[i]))
    document.write('<br>')
}

let i = 0
while(i<arr1.length){
    document.write(arr1[i]+ " " +typeof(arr1[i]))
    document.write('<br>')
    i++;
}


i = 0
do{
    document.write(arr1[i]+ " " +typeof(arr1[i]))
    document.write('<br>')
    i++;
}while(i<arr1.length);

 a = [10,20,30,40,50]

 a.forEach(func1);

 function func1(item,index){
     document.write(item+ " "+index)
     document.write('<br>')
 }

a.forEach((item,index) =>{
     if (item > 30)
        document.write((item * 100)+ " " + index)
     else 
        document.write(item + " " + index)
     document.write('<br>')
 })

b = [1,2,3,4,5]

for (x of b){
document.write(x)
document.write('<br>')
}

a = [1,, false, 'false', NaN, null, 2, 'true', 'meeena']
b = [1,2,3]
c = [2,6,5]
d = [1,2,3,5,6]