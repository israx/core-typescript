// 1. Union types
// - Union types represent a type that can be of any type

{
    type Type1 = string;
    type Type2 = number;
    type Type3 = boolean;
    type UnionType = Type1 | Type2 | Type3;

    const value: UnionType = 'Hello';
}

// 2. Discriminated unions
// -  Allows to define different types of objects based on a common property
{
    interface User {
        type: string;
        name: string;
    }

    interface Employee extends User {
        type: 'employee';
        department: string;
    }

    interface Admin extends User {
        type: 'admin';
        role: string;
    }

    function handleUser(user: Admin | Employee) { };
    handleUser({ type: 'admin', name: 'admin-user', role: 'ganster' })

}

// 3. Intersection type operator (&)
// - Creates a type with common types

interface User {
    name: string
}
interface Employee {
    name: string;
    department: string;
}

//type Admin = User & Employee;

//interface Admin extends User, Employee {}
//const admin: Admin = {}

// 4.  Filter types
type UserAttributes = 'email' | 'phone' | 'password';

type Email = 'email' & UserAttributes;
const attribute: Email = 'email';