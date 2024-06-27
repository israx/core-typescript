// -------Glossary-------
// 1. `extends` operator
//  - Used to combine and add new types to an interface — e.g interface Admin extends User {}
//  - Used to narrow down a type
//------------------------


//-------Generics-------
// It is a placeholder for types that will be specified later.

// 1. Generics in function type arguments
function genericFunction<T>(arg: T): T {
    return arg;
}

const genericValue = genericFunction(['a'])

function constrainedGenericFunction<T extends string>(arg: T): T {
    return arg;
}
const constrainedGenericValue = constrainedGenericFunction('a')

// 2. Generics as type helpers

// 2.1 generics in a type alias
type Wrapper<T> = {
    value: T;
};

const stringWrapper: Wrapper<string> = { value: "Hello" };
const numberWrapper: Wrapper<number> = { value: 42 };

// 2.2 generics with conditional types
type GetResult<T> = T extends string ? Wrapper<T> : T;
declare function getResult<T>(arg: T): GetResult<T>
const result = getResult("Hello");
const result2 = getResult(42);

// 3. Generics with union types

type Keys = "a" | "b" | "c";

// 3.1 Pick key
type PickKey<KeyToPick extends UnionKey, UnionKey> =
    KeyToPick extends UnionKey ? KeyToPick : never;
//  ["a"] extends "a" | "b" | "c" -> true -> 'a';

type PickedKey = PickKey<'a', Keys>



// 3.2 Filter key
type FilterKey<KeyToFiler extends UnionKey, UnionKey> =
    UnionKey extends KeyToFiler ? never : UnionKey;
//  ["a"] | "b" | "c"  extends 'a' -> true -> never
//   "a" | ["b"] | "c" extends 'a'  -> false -> 'b'
//   "a" |  "b" | ["c"] extends 'a' -> false ->  'c'
// type Total = never | 'b' | 'c'

type FilteredKeys = FilterKey<'a', Keys>


