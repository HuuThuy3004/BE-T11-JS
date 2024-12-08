// console.log('Hello Typescript');
//Interface

interface Person {
  name: string;
  age: number;
}

interface User {
    id: number;
    username: string;
    password: string;

    getProfile(): string;
    changePassword(newPassword: string): void;
}

const user1: User = {
    id: 1,
    username: 'johndoe',
    password: '1234',
    
    getProfile(): string {
        return `User profile: id - ${this.id}, username - ${this.username}`;
    },
    
    changePassword(newPassword: string): void {
        this.password = newPassword;
        console.log('Password changed successfully');
    }
}

console.log(user1.getProfile());
user1.changePassword('4567');
console.log(`Password: ${user1.password}`);

interface User2 {
    id: number;
    name: string;
    email?: string; // Thuộc tính tùy chọn
  }
  
  const user01: User2 = { id: 1, name: "Alice" };
  const user02: User2 = { id: 2, name: "Bob", email: "bob@example.com" };

  console.log(111, user01);
  console.log(222, user02);
  

  // Interface, đc sử dụng để định nghĩa cấu trúc đối tượng, có thể extends và merge, dành riêng cho mô tả kiểu Object, Class, Function