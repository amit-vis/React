// const api = async function(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json()
//     console.log(data)
// }

// api();

// const api = function(){
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response)=>{
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
// }

// api()

// async function errorExample() {
//     try {
//         const rejectedPromise = await Promise.reject("Oh-oh!");
//     } catch (error) {
//         console.log(error); // "Uh-oh!"
//     }
// }
// errorExample();

// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message))

// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//     })
//     .catch(error => console.log(error.message))
//     .catch(error => console.log(error.message))

// new Promise((resolve, reject) => {
//     resolve('Success!')
// })
//     .then(() => {
//         throw Error('Oh noes!')
//     })
//     .catch(error => {
//         return "actually, that worked"
//     })
//     .catch(error => console.log(error.message))

// for (let i=0; i<=5; i++){
//     setTimeout(()=>{
//         console.log(i)
//     }, 1000*i)
// }

// for (var i=1; i<=5; i++){
//     function close(x){
//         setTimeout(()=>{
//             console.log(x)
//         }, x*1000)
//     }
//     close(i);
// }

const posts = [
    { title: "One", body: "Body num 1" },
    { title: "Two", body: "Body num 2" }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}, ${post.body}</li>`;
            console.log(output);
        });
        document.body.innerHTML = output;
    }, 1000);
}

getPosts();
// Callbacks
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost()

