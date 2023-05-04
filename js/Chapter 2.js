let x11_input = document.getElementById('x11')
let x21_input = document.getElementById('x21')
let x31_input = document.getElementById('x31')
let x41_input = document.getElementById('x41')
let x12_input = document.getElementById('x12')
let x22_input = document.getElementById('x22')
let x32_input = document.getElementById('x32')
let x42_input = document.getElementById('x42')
let x13_input = document.getElementById('x13')
let x23_input = document.getElementById('x23')
let x33_input = document.getElementById('x33')
let x43_input = document.getElementById('x43')

function Calculate() {
    let x11 = Number(x11_input.value)
    let x21 = Number(x21_input.value)
    let x31 = Number(x31_input.value)
    let x41 = Number(x41_input.value)
    let x12 = Number(x12_input.value)
    let x22 = Number(x22_input.value)
    let x32 = Number(x32_input.value)
    let x42 = Number(x42_input.value)
    let x13 = Number(x13_input.value)
    let x23 = Number(x23_input.value)
    let x33 = Number(x33_input.value)
    let x43 = Number(x43_input.value)
    let a = [[x11, x21, x31, x41], [x12, x22, x32, x42], [x13, x23, x33, x43]];
    Cramer(a);
}

function Cramer(a) {
    let a0 = [[a[0][0], a[0][1], a[0][2]], [a[1][0], a[1][1], a[1][2]], [a[2][0], a[2][1], a[2][2]]];
    console.log(a0);
    let deta0 = math.det(a0);
    console.log(deta0);
    let a1 = [[a[0][3], a[0][1], a[0][2]], [a[1][3], a[1][1], a[1][2]], [a[2][3], a[2][1], a[2][2]]];
    console.log(a1);
    let deta1 = math.det(a1);
    console.log(deta1);
    let a2 = [[a[0][0], a[0][3], a[0][2]], [a[1][0], a[1][3], a[1][2]], [a[2][0], a[2][3], a[2][2]]];
    console.log(a2);
    let deta2 = math.det(a2);
    console.log(deta2);
    let a3 = [[a[0][0], a[0][1], a[0][3]], [a[1][0], a[1][1], a[1][3]], [a[2][0], a[2][1], a[2][3]]];
    console.log(a3);
    let deta3 = math.det(a3);
    console.log(deta3);
    let x1 = deta1 /deta0;
    let x2 = deta2 /deta0;
    let x3 = deta3 /deta0;
    console.log(`x1 = ${x1} \nx2 = ${x2} \nx3 = ${x3}`);
};