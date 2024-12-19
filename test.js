// 고차 함수

// function testTwoDouble(three) {
//     return three *3
// }

// function testDouble(two) {
//     return two * 4
// }

// function double(num) {
//     return num * 2;
// }

// function doubleNum(func, num) {
//     return func(num);
// }

// let output = doubleNum(testTwoDouble, 4);
// console.log(output);

// function adder(added) {
//     return function (num) {
//         return num - added;
//     };
// }

// adder()();

// let output = adder(5)(3);
// console.log(output);


// const add3 = adder(3);
// let output = add3(2);
// console.log(output);


// function double(num) {
//     return num * 2;
// }

// function doubleAdder(added, func) {
//     const doubled = func(added);
//     return function(num) {
//         return num + doubled;
//     };
// }

// doubleAdder(5, double)(3);


// const addTwice3 = doubleAdder(3, double);
// addTwice3(2);




// // 아래 코드는 정확한 표현 방식은 아닙니다.
// // 의미만 이해해도 충분합니다.

// let arr = [1, 2, 3];
// // 배열의 filter 메서드는 함수를 전달인자로 받는 고차 함수입니다.
// // arr.filter를 실행하면 내부적으로 arr에 접근할 수 있다고 생각해도 됩니다.
// arr.filter = function (arr, func) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     // filter에 전달인자로 전달된 콜백 함수는 arr의 각 요소를 전달받아 호출됩니다.
//     // 콜백 함수가 true를 리턴하는 경우에만 새로운 배열에 추가됩니다.
//     if (func(arr[i]) === true) {
//       newArr.push(this[i]);
//     }
//   }
//   // 콜백 함수의 결과가 true인 요소들만 저장된 배열을 리턴합니다.
//   return newArr;
// };


// function isEven(num) {
// 	return num % 2 === 0;
// }

// let Arr = arr.filter(arr, isEven);

// console.log(Arr); //[2]


// function joinName(resultStr, user) {
//     resultStr = resultStr + user.name + ', ';
//     return resultStr;
//   }
  
//   let users = [
//     { name: 'Tim', age: 40 },
//     { name: 'Satya', age: 30 },
//     { name: 'Sundar', age: 50 }
//   ];
  
// let len= users.reduce(joinName, '');
// console.log(len); //Tim, Satya, Sundar,


// function makeAddressBook(addressBook, user) {
//     let firstLetter = user.name[0];
  
//     if(firstLetter in addressBook) {
//       addressBook[firstLetter].push(user);
//     } else {
//       addressBook[firstLetter] = [];
//       addressBook[firstLetter].push(user);
//     }
  
//     return addressBook;
//   }
  
//   let users = [
//     { name: 'Tim', age: 40 },
//     { name: 'Satya', age: 30 },
//     { name: 'Sundar', age: 50 }
//   ];
  
// let ret= users.reduce(makeAddressBook, {}); // -> 
// console.log(ret); // T: [ { name: 'Tim', age: 40 } ],
//                   //S: [ { name: 'Satya', age: 30 }, { name: 'Sundar', age: 50 } ]


// // 만화책 배열
// const cartoons = [
//     {
//       id: 1,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '어머니의 쌀',
//       createdAt: '2003-09-09',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.66,
//     },
//     {
//       id: 2,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '김치',
//       createdAt: '2003-12-15',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.55,
//     },
//     {
//       id: 3,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '장인의 손길',
//       createdAt: '2004-02-01',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.60,
//     },
//     {
//       id: 4,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '가을의 맛',
//       createdAt: '2004-05-10',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.45,
//     },
//     {
//       id: 5,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '명인의 솜씨',
//       createdAt: '2004-08-19',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.70,
//     },
//     {
//       id: 6,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '한국의 맛',
//       createdAt: '2004-11-25',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.75,
//     },
//     {
//       id: 7,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '전통의 힘',
//       createdAt: '2005-02-14',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.50,
//     },
//     {
//       id: 8,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '계절의 맛',
//       createdAt: '2005-06-03',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.55,
//     },
//     {
//       id: 9,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '가정의 맛',
//       createdAt: '2005-09-12',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.62,
//     },
//     {
//       id: 10,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '시골의 맛',
//       createdAt: '2005-12-20',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.48,
//     },
//     {
//       id: 11,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '추억의 맛',
//       createdAt: '2006-03-01',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.53,
//     },
//     {
//       id: 12,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '한식의 비밀',
//       createdAt: '2006-06-10',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.58,
//     },
//     {
//       id: 13,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '봄의 향기',
//       createdAt: '2006-09-09',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.60,
//     },
//     {
//       id: 14,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '겨울의 맛',
//       createdAt: '2006-12-15',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.57,
//     },
//     {
//       id: 15,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '우리의 맛',
//       createdAt: '2007-02-01',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.59,
//     },
//     {
//       id: 16,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '봄날의 맛',
//       createdAt: '2007-05-10',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.62,
//     },
//     {
//       id: 17,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '명절의 맛',
//       createdAt: '2007-08-19',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.55,
//     },
//     {
//       id: 18,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '여름의 맛',
//       createdAt: '2007-11-25',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.53,
//     },
//     {
//       id: 19,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '한식의 비밀',
//       createdAt: '2008-02-14',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.55,
//     },
//     {
//       id: 20,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '가족의 맛',
//       createdAt: '2008-06-03',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.58,
//     },
//     {
//       id: 21,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '이웃의 맛',
//       createdAt: '2008-09-12',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.60,
//     },
//     {
//       id: 22,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '한국의 맛',
//       createdAt: '2008-12-20',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.62,
//     },
//     {
//       id: 23,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '시골의 맛',
//       createdAt: '2009-03-01',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.65,
//     },
//     {
//       id: 24,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '계절의 맛',
//       createdAt: '2009-06-10',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.68,
//     },
//     {
//       id: 25,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '추억의 맛',
//       createdAt: '2009-09-09',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.60,
//     },
//     {
//       id: 26,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '명인의 솜씨',
//       createdAt: '2009-12-15',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.62,
//     },
//     {
//       id: 27,
//       bookType: 'cartoon',
//       title: '식객',
//       subtitle: '전통의 힘',
//       createdAt: '2010-02-01',
//       genre: '요리',
//       artist: '허영만',
//       averageScore: 9.55,
//     }
//   ];
  
//   // 단행본 한 권의 평점을 누적값에 더한다.
//   const scoreReducer = function (sum, cartoon) {
//     return sum + cartoon.averageScore;
//   };
  
//   // 초기값에 0을 주고, 숫자의 형태로 평점을 누적한다.
//   let initialValue = 0
//   // 모든 책의 평점을 누적한 평균을 구한다.
//   const cartoonsAvgScore = cartoons.reduce(scoreReducer, initialValue) / cartoons.length;
//   console.log(cartoonsAvgScore);