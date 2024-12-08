// console.log('Hello Typescript');
//Interface
var user1 = {
    id: 1,
    username: 'johndoe',
    password: '1234',
    getProfile: function () {
        return "User profile: id - ".concat(this.id, ", username - ").concat(this.username);
    },
    changePassword: function (newPassword) {
        this.password = newPassword;
        console.log('Password changed successfully');
    }
};
console.log(user1.getProfile());
user1.changePassword('4567');
console.log("Password: ".concat(user1.password));
var user01 = { id: 1, name: "Alice" };
var user02 = { id: 2, name: "Bob", email: "bob@example.com" };
console.log(111, user01);
console.log(222, user02);
