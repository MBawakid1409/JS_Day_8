// console.log('#####################################################');
// console.log('Week 2 - Day 4')
// console.log('Tuwaiq Academy   JS')
// console.log('#####################################################');



//Activities

// examples
/*
let per_1 = {
  fName: 'Mohammad',
  age: 33,
  favFood: 'Chicken',
};
console.log(per_1['favFood'])
console.log(per_1.fName)
console.log(per_1.age)

let per_2 = {
  favFood: 'Manaqesh',
  fName: 'Ahmed',
  age: 27
}
console.log('##############################')
console.log(per_2.fName)
console.log(per_2['age'])
console.log(per_2.favFood)

let per_3 = {
  favFood: 'Wafel'
}
console.log(per_3.age)
*/


//2222222222222222222222

// let car_1 = {
//   type: 'BMW',
//   year: 2015,
//   km: 0,
//   move:function(){
//     //console.log(this)
//     this.km = this.km + 10
//     return ('Car increased: '+this.km)
//   }
// }
// console.log(car_1)
// console.log(car_1.move())
// console.log(car_1)
// console.log(car_1.move())
// console.log(car_1.move())
// console.log(car_1)

// let my_person = {
//   fName: 'Mohammad',
//   lName: 'Bawakid',
//   age: 33,
//   favFood: 'PanCake',
//   job: 'unemplyee',
//   salary: 0,
//   increase:function(){
//     this.salary = this.salary + 100
//     return ('Salary increased: '+this.salary)
//   },
//   changeName:function(name1){
//     this.fName =  name1
//     return ('first name has changed to: '+this.fName)
//   }
// }
// console.log(my_person)
// console.log(my_person.changeName('Mohammed'))
// console.log(my_person.increase())
// console.log(my_person)


// 333333333333333333333333333333333



// let per_1 = {
//   fName: 'Mohammad',
//   lName: 'Bawakid',
//   age: 33,
//   favFood: 'Chicken',
//   position: 'unemplyee'
// };

// for (let keyName in per_1){
//   console.log(keyName, per_1[keyName]);
// }

// let my_car = {
//   carName: 'Mercedes',
//   kilometers: 20_000,
//   color: 'Blue'
// }

// for (let i in my_car) {
//   console.log(my_car[i]);
// }


//The Homework

// 1st Point
// const func1 = (fName, age, favFood) => {
//   let per_1 = {
//     fName: 'Mohammad',
//     age: 33,
//     favFood: 'Chicken',
//   };
//   return per_1
// }
// console.log(func1())
// Teacher Solution
// دالة تستقبل قاموس ومفتاح وتقوم بإرجاع القيمة الموجودة في هذا المفتاح
function getTheValue(obj, keyName){
   return obj[keyName]
}
getTheValue({a:12,b:"Mohammad",c:true}, 'a')
// 12
getTheValue({a:12,b:"Mohammad",c:true}, 'b')
// "Mohammad"
getTheValue({a:12,b:"Mohammad",c:true}, 'c')
// true

// ############################################

// 2nd Point
// Teacher Solution
// دالة تستقبل قاموس ومفتاح جديد وقيمة جديدة وتقوم بإرجاع القاموس بعد إضافة القيمة الجديدة باستخدام المفتاح الجديد

function createNewKeyValue(obj, newKey, newValue) {
  obj[newKey] = newValue
  return obj
}
createNewKeyValue({a:12}, 'd', 'Mohammad');
// { a : 12, d: 'Mohammad' }
createNewKeyValue({a:12}, 'b', true);
// { a: 12, b: true }
createNewKeyValue({a:12}, 'c', 'JavaScript');
// { a: 12, c: 'JavaScript' }

// ############################################

// 3rd Point
// Teacher Solution
// دالة تستقبل قاموس ومفتاح موجود أصلاً وقيمة جديدة وتقوم بإرجاع القاموس بعد تغيير قيمة المفتاح الموجود أصلاً للقيمة الجديدة

function changeKeyValue(obj, oldKey, newValue) {
  obj[oldKey] = newValue
  return obj
}
changeKeyValue({a:12}, 'a', 'Mohammad');
// { a: 'Mohammad' }
changeKeyValue({ a: 12, c: 5 }, 'c', true);
// { a: 12, c: true }
changeKeyValue({ a: 12, d: 'JS' }, 'd', 'JavaScript');
// { a: 12, d: 'JavaScript' }

// ############################################

// 4th Point
// دالة باسم changeMovieTitle تكون بداخل قاموس يتكون من (عنوان الفيلم, مدة الفلم, نوع الفلم) وتقوم هذه الدالة باستقبال عنوان جديد للفيلم وترجع القاموس بعد تغيير عنوان الفيلم للعنوان الجديد

// My Solution
function changeMovieTitle(obj, oldTitle, newTitle) {
  obj[oldTitle] = newTitle
  return obj
}
changeMovieTitle({title:'HombaGomba', duration: 1.50, type: 'balaha'}, 'title', 'GombaHomba');
// {title: 'GombaHomba', duration: 1.5, type: 'balaha'}


// Teacher Solution

let movie_1 = {
  title: 'The Redeption',
  duration: '1h 25m',
  type: 'mal omk sala7',
  changeTitle: function(newTitle){
    // 'The HombaGombaDonga'
    this.title=newTitle
    return this
  },
};
console.log(movie_1)
console.log(movie_1.changeTitle('HombaGombaDomba'))
console.log(movie_1)





// ############################################

// 5th Point
// Teacher Solution
// دالة تستقبل قاموس وتقوم بطباعة كل المفاتيح وقيمها وبينهما إشارة "=" ـ
// مثال: {fName:"Mohammad", age: 33} "fName = Mohammad" وأيضاً "age = 33"

function printAllValue(obj) {
  for(let keyName in obj) {
    //
    console.log(keyName + ' = ' + obj[keyName])
  }
}

printAllValue({ a: 12, b: 'Mohammad', c: true })
printAllValue({ d: 25, e: 'Tuwaiq-1000'})
printAllValue({ f: 80 })












