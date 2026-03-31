const username = Symbol("username");
const password = Symbol("password");

const user = {
    username: "aditya",  // if we make it [username] and [password] so we'll get undefined
    password: "1234566",
    age: 24
};

console.log(user.username);
console.log(user.password);