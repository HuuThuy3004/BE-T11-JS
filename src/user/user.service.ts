import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

export interface User {
    id: number;
    name: string;
    email: string;
}

@Injectable()
export class UserService {
    private users: User[] = [{
        id: 1,
        name: 'Bobb Smith',
        email: 'bobbsmith@example.com'
    },
    {
        id: 2,
        name: 'Alice Johnson',
        email: 'alicejohnson@example.com'
    }];

    getUser(): User[] {
        return this.users;
    }

    createUser(user: CreateUserDto) {
        console.log(`User created: ${JSON.stringify(user)}`);
        const newUser: User = {
            id: Math.random(),
            ...user
        }
        this.users.push(newUser);
        return this.users;
    }
}
