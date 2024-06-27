/**
 * Interface: used to define the shape of an object. 
 * 
 * Type Alias: used to give a name to any type, including primitive types, union types, intersection types, tuples, and even other interfaces.
 */

// Interface Examples 
{
    // 1. Fruit
    interface Fruit {
        name: string;
        color: string;
    }

    // 2. Global User
    interface User {
        name: string;
    }

    interface User {
        age: number;
    }

    const user: User = { name: "Alice", age: 25 };

}

// type alias examples
{
    // 1. primitive
    type Name = string;
    const person: Name = 'John'
    // 2. object
    type User = { name: string; age: number };
    // 3. union
    type MyBoolean = true | false;
    // 4. tuple
    type Pair = [number, number];
    // 5 intersection
    type Employee = User & { department: string };
}

