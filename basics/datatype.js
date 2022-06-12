var value1 = 16;
var value2 = 20 ;
var str1 = 'priya is 21 yrs old'
var isTrue = true
var float_value = 12.24

var num = [1,'is',2,'for',4]
var person = {
    'firstName': 'priya',
    'lastName': 'dharshini',
    'age': 22,
    'phone': 123456578910
}

var obj = {
    'firstName': 'priya',
    'lastName': 'dharshini',
    1: 12,
    54.6: 123456578910
}

document.write(typeof(value1))
document.write('<br>')
document.write(typeof(value2))
document.write('<br>')
document.write(typeof(str1))
document.write('<br>')

document.write(value1+value2+str1)
document.write('<br>')
document.write(str1+value1+value2)
document.write('<br>')
document.write(value1+value2+str1+value1+value2)
document.write('<br>')
document.write(typeof(isTrue)+ " " +isTrue)
document.write('<br>')
document.write(typeof(num)+ " " +num[1])
document.write('<br>')
document.write(typeof(obj)+ " " +obj.firstName)
document.write('<br>')

var undefinied_variable;

var null_varibale = null;

if (person.age >= 18) {
    document.write('is eligible to vote')
} else {
    document.write('is not eligible to vote')
}

document.write('<br>')
document.write(undefinied_variable)
document.write('<br>')
document.write(typeof(null_varibale))


