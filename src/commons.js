async function helloFn() {
    return 'dd'
}

helloFn().then(res => {
    console.log(res);
    test()
});

function test() {
    return new Promise((resolve => {
        console.log('test');
        resolve();
    }))
}
function * hellpGen() {
    yield 'hello';
    yield 'gen';
    return
}
class Point {
    constructor() {
        this.name = 'fff';
        this.age = '26'
    }
    toValue() {
        return 'to do sthing'
    }
}
const point = new Point();

var a = hellpGen();
console.log(a.next());
console.log(a.next());
console.log(a.next());
export default point
