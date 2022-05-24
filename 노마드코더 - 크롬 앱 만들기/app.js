
const a = 5;
const b = 10;

console.log(a+b);
console.log(a*b);
console.log(a/b);


// 자바스크립트에서는 변수명을 쓸 때 일반적으로 camelCase를 쓰고, 파이썬에서는 snake기법을 쓴다.



// 변수 
// 일반적으로는 const 를 사용하고, 변수를 업데이트 할 경우에만 let을 쓴다. 즉 let은 필요할 때만.


// null ==> 변수에 값은 있는데 아무것도 없음. 절대 자연적으로 생기지 않는다. 변수 안에 어떠한 것이 없다는 것을 확실히 하기 위해서 사용. 여기엔 값이 없다는 것을 의도적으로 표현.
let x = null;
console.log(x);

// undefined ==> 값 자체를 주지않음. 즉 컴퓨터 메모리 안에 공간은 있으나 값이 들어가 있지 않음
let something;
console.log(something);


// 배열 만들기 
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// get item form Array
console.log(daysOfWeek[5])

// Add one more day to the array
daysOfWeek.push('Sun');
console.log(daysOfWeek);

// 🟠 object

const player = {
    name : 'ahreum',
    points : 12121,
    fat :true
}

console.log(player);
console.log(player.name);
console.log(player['name']);

// 객체 업데이트
player.name = 'rumi';
console.log(player.name);
    //constant 로 변수를 정했어도 object 안의 property 를 변경하는 것은 가능하다. 변수 그 자체를 변경하는 것이 안됨.

// 속성 추가
player.age = 27;

console.log(player);



function sayHello(nameOfperson, age){

    console.log(nameOfperson, age)
    console.log("Hello my name is " + nameOfperson + " and I'm " + age)
    
}

sayHello("ahreum", 27)
sayHello("jin", 31)
sayHello("JK" ,26)


console.log('----------------------------------------------------')
function plus(a,b){
    console.log(a + b);
}

plus();

// Nan ==> Not a Number


const user = { 
    name : 'ahreum',
    sayHello :function(otherPersonsName){
        console.log('hello! ' + otherPersonsName + ' Nice to meet you');
    },
};

console.log(user.name);

// object update
user.name = 'rumi';
console.log(user.name);

// object add property
user.age = 27;
console.log(user);


const calc = {
    plus : function(a,b){
        return a + b ;
        console.log(a+b+'는 결과값이다')
    },
    minus : function(a,b){
        return a - b ;
    },
    multi : function(a,b){
        return a * b ;
    },
    divide : function(a,b){
        return a / b ;
    },
    power : function(a,b){
        return a ** b ;
    }
    
}

const plusResult = calc.plus(5,10);
const minusResult = calc.minus(plusResult,10 );
console.log(plusResult);

console.log(plusResult, minusResult);
calc.minus(20,8);
calc.multi(7,8);
calc.divide(100,10);
calc.power(5,3);


const age = 27;
function calcKrAge(ageOfForeign){
    return ageOfForeign + 2;
}
const krAge = calcKrAge(30);
console.log(krAge);


const yourAge = parseInt(prompt('How old are you?'));

if(isNaN(yourAge)){
    alert('please write a number');
}else if (yourAge < 18){
    console.log('you are too young.')
}else if (yourAge >= 18 && yourAge <= 50){
    console.log('you can drink');
    
}else if (yourAge > 50 && yourAge <= 80){
    console.log('you should exercise');
}else{
    console.log("you can't drink")
}






