//________________ TOP types ___________________

// 1. any type
/**
 * Represents all the possible types
 */

// why is that assigning the `any` type to a value makes TS happy ?

{
    type Fruit = 'Banana' | 'Apple';

    function getFruit(fruit: Fruit) { };

    const vegatable = 'broccoli';

    getFruit(vegatable)

}

// 2. unknown type
/**
 * Requires type assertions or guards before performing operations.
 */
{
function handleError(error: unknown) {

    // type assertion 
    assertError(error)
    
    // type guard
    if(error instanceof TypeError){
        error
    }

}

function assertError(error:unknown): asserts error is Error{
    if(!(error instanceof Error)){
        throw new Error('unknown error')
    }
}
}
// 3. {} type  
// - {} != Object
// - The {} type represents any non null or undefined value

{
    //------ banana dependency

    type BananaType = 'green' | 'yellow';
    function fetchBanana(option?: { type: BananaType }) {
        // do banana stuff
    }
    //----------------------
    // App.tsx
    // import { fetchBanana } from 'banana';

    type FetchBananaOptions = Parameters<typeof fetchBanana>[0]

    type ExtractedBananaType = FetchBananaOptions['type']

    function handleBanana(type: ExtractedBananaType) {
        switch (type) {
            case 'green':
                // handle case
                break;
            case 'yellow':
                // handle case
                break;
            default:
                break;
        }
    }
}

//________________ Bottom types ___________________

// 1. never type
// Represents the type of values that never occur
{
    function handleBananaV2(type: 'green' | 'yellow') {
        switch (type) {
            case 'green':
                // handle case
                break;
            case 'yellow':
                // handle case
                break;
            default:
                const unhandledType: never = type
                break;
        }
    }
}
