// function calculateMoney(ticketSell){
//     if (ticketSell<0){
//         return 'Invalid Number'
//     }
//     let ticketPrice=120
//     let salaryOfDarowan=500
//     let salaryOfStaf=50

//     let totalSalaryOfStaf=salaryOfStaf*8
//     const totalSpending=salaryOfDarowan + totalSalaryOfStaf
//     let totalIncome=ticketSell*ticketPrice
//     let restIncome=totalIncome-totalSpending
//     return restIncome

// }

// function checkName(str){
//     if (typeof str !=='string'){
//         return 'invalid'
//     }
//     let lastNum= str.split('')
//     let lastNum1=lastNum.pop()

//     let  goodName='aeiouyw'
//     for(let item of goodName){
//         if(item.includes(lastNum1)){
//             return 'good name'
//         }

//     }

//     return 'bad name'

//     }

// function deleteInvalid(array){
//     let removeNaN=array.includes(NaN)
//     let indexNaN=array.indexOf(NaN)
//     console.log(indexNaN);

//     let newArray=[]

//     for(let item of array){
//         if(typeof item =='number'){

//             newArray.push(item)
//         }
//     }
//     console.log(newArray);

// }

// function password(obj){
//     if(typeof obj !=='object'){
//         return 'invalid'
//     }
//     let web=Object.values(obj)
//     let birthYear=web[1]

//     if(birthYear.length==4){
//         console.log('invalid');
//     }

//     let web1=web[web.length-1]
//     let web2=web1[0]
//     let web3=web2.toUpperCase()+web1.slice(1)
//     let username=web[0]

//     let password=web3+'#'+username+'@'+birthYear

//     console.log(password);

// }

// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google"}
// ));

// function monthlySavings(array,number){
//     if(typeof array !== 'array' || typeof number !== 'number'){
//         console.log('invalid');
//     }
//   let s=0
//    for(let item of array){
//       s += item
//    }

//  let rent=number
//  let savings=number-rent
//  if(savings<rent){
//     console.log('earn more');
//  }

// }
// monthlySavings([ 1000 , 2000 , 3000 ] , 6400 )

// let number=02222258
// let numbertoString=number.toString()
// let s=[]
// for(let num of numbertoString){
//    if(num%2==0){
//     s.push('-'+num)
//    }
//    else{
//     s.push(num)
//    }
// }
// console.log(s.join(''));

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let find='a'
// let s=0
// for(let item of arr1){
// if (typeof item ==='string' && item.includes(find)){
//     s++

// }

// }
// console.log(s);

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (var i in a)
// {
//    console.log("row " + i);
//    for (var j in a[i])
//      {
//       console.log(" " + a[i][j]);
//      }
// }







