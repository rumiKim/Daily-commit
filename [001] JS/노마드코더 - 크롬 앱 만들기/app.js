
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
