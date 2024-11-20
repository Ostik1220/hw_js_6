//1
let x = 1
 while (x < 11) {
     console.log(x)
     x += 1
 }


 //2
 for (let y = 1; y <= 20; y += 1) {
    if (y % 2 !== 0){
        continue
    }
    console.log(y)
}


//3
let f = 7;
for (let a = 0; a <= 10; a += 1) {
    const j = f * a;
    console.log(`${f} x ${a} = ${j}`);
}


//4
const num = [1, 2, 3, 4, 5];
let i = 0;
while (i < num.length) {
    console.log(num[i])
    i ++;
}


//5
 const p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let b = 0;
 while (b < p.length) {
     console.log(p[b])
     b ++;
         if ( p[b] === 7){
        break
    }
 }


 //6
const n = 54;
const z = Number(prompt("введіть число більше або менше за 54"))
for (let o = 0; o <= n; o++) {
   console.log(o)
   if (n <= z) {
    alert("перериваємо цикл")
    break
   }
}


//7
const q = 20;
let t = 0;
while(t <= q){
    t++
    if (t % 3 == 0){
        continue
    }
    console.log(t)
}