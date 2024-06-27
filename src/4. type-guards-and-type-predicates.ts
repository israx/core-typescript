/**
 * 
 * Type Guard: A type guard is a mechanism that determines the type of a value at runtime 
 * 
 * Type Predicate: it is a type guard that informs Typescript that a value is of a given type.
 * 
 */


// Examples: 


// Example 1

function add(a: string | number | undefined, b: string | number) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Parameters must be of the same type');
}

// Example 2 
{
    interface User {
        name: string;
        role: string;
    }

    interface Admin extends User {
        isAdmin: boolean;
    }

    function printUserRole(user: User | Admin) {
        if (isAdmin(user)) {
            console.log(`User ${user.name} is an admin with role ${user.role}`);
        } else {
            console.log(`User ${user.name} is a normal user with role ${user.role}`);
        }
    }

    function isAdmin(user: User | Admin): user is Admin {
        return 'isAdmin' in user;
    }
}

// Example 3
type Falsy = false | 0 | '' | null | undefined;
const filterFalsyValues = <T>(values: (Falsy | T)[]): T[] => {
    const definedValues = values.filter((item) => !!item);
    return definedValues;
}

filterFalsyValues([false, 0, '', null, undefined, 'A', {word:'hello'}]);
