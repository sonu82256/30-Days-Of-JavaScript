let challenge = '30 Days Of JavaScript'
let str1 = 'You cannot end a sentence with because because because is a conjunction'
let str2= '   30 Days Of JavaScript   '
let str3 = '30 Days Of'
let str4 = 'JavaScript'





console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,1), challenge.substring(0,1))
console.log(challenge.substr(3,18), challenge.substring(3,21))
console.log(challenge.includes('Script'))
console.log(challenge.split());
console.log(challenge.split(' '))


console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.lastIndexOf('J'))
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'))
console.log(str1.indexOf('because'))
console.log(str1.lastIndexOf('because'))
console.log(str1.search('because'))
console.log(str2.trim())
console.log(challenge.startsWith(30))
console.log(challenge.endsWith('JavaScript'))
console.log(str3 + ' '+ str4, str3.concat(' '+ str4))
console.log(str3.concat(str4))
console.log(challenge.repeat(2))