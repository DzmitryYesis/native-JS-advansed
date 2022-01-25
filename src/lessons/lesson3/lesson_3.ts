console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let porom = new Promise((resolve, reject) => {
// // симулируем запрос
//     setTimeout((response) => {
//         if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//             resolve(response.body);
//         } else {
//             reject(response.error);
//         }
//     }, 200, {HTTPstatus: 200, body: {data: 'success'}, error: ''})
// });
//
// porom
//     .then((res: any) => {
//         console.log(res)
//         return 2
//     })
//     .then((res2) => {
//         console.log(res2)
//     })
//     .then((res3)=>{
//         console.log('res3', res3)
//     })

let userDataProm = new Promise((resolve, reject) => {
// симулируем запрос
    setTimeout((response) => {
        if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
            resolve(response.body.access_token);
        } else {
            reject(response.error);
        }
    }, 1000, {HTTPstatus: 200, body: {access_token: 'sdfgsfsfhdhadfhdafhuccess'}, error: ''})
});

console.log(userDataProm)
// just a plug
export default () => {
};