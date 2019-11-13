// async function helloFn() {
//     return 'dd'
// }
//
// helloFn().then(res => {
//     console.log(res);
//     test()
// });
//
// function test() {
//     return new Promise((resolve => {
//         console.log('test');
//         resolve();
//     }))
// }
// function * hellpGen() {
//     yield 'hello';
//     yield 'gen';
//     return
// }
// class Point {
//     constructor() {
//         this.name = 'fff';
//         this.age = '26'
//     }
//     toValue() {
//         return 'to do sthing'
//     }
// }
// const point = new Point();
//
// var a = hellpGen();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// export default point
function Person(name) {
    this.name = name;
    this.sum = function() {
        console.log(this.name, '----');
    }
}
Person.prototype.age = '26';




// 一、原型链继承

function Par() {
    this.name = 'xiaotong2';
}

Par.prototype = new Person();
var par1 = new Par();
console.log(par1.name); // xiaotong2
console.log(par1.age); // 26
console.log(par1.sum()); // xiaotong2
console.log(par1 instanceof Person);  // true


// 二、构造函数

function Con() {
    Person.call(this, 'jer');
    this.age = 12
}
var con1 = new Con();
console.log(con1.name, con1.age); // jer, 12
console.log(con1 instanceof Person); // false
console.log(con1.__proto__ === Con.prototype);


// 三、组合继承

function SubType(name) {
    Person.call(this, name);
}
SubType.prototype = new Person();
var sub = new SubType('jer');
console.log(sub.name); // jer
console.log(sub.age); // 26

const btn = document.getElementsByClassName('btn')[0];

// btn.onclick = function () {
//     console.log('1111');
// };
// btn.onclick = function() {
//     console.log('22');
// };

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

// false 冒泡 3，2，1  目标元素先触发
// true 捕获 1，2，3 父级先触发
div1.addEventListener('click', function() {
    console.log('div1');
}, false);

div2.addEventListener('click', function(e) {
    return false;   // 阻止事件本身

    console.log('div2');
}, false);

div3.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('div3')
}, false);

console.log(['1', '3', '5'].map(Number));


/**
 * 防抖
 * @param fn
 * @returns {Function}
 */
function debounce(fn) {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
            fn.apply(this, arguments);
        }, 500);
    };
}
function sayHi() {
    console.log('防抖成功1111');
}

var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖


/**
 * 节流
 * @param fn
 * @returns {Function}
 */
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
        if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
        canRun = false; // 立即设置为false
        setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
            fn.apply(this, arguments);
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
            canRun = true;
        }, 500);
    };
}
function sayHi(e) {
    console.log(e.target.innerWidth, e.target.innerHeight, '节流函数');
}
window.addEventListener('resize', throttle(sayHi));

let arr = [1, 3, 5, 3];
[... new Set(arr)];




