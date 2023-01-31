import { generateId } from "../utils/react/generateRandomIndex";

export const Change = [
    {
        number: 1000,
        count:1000
    },
    {
        number: 500,
        count:200
    },
    {
        number: 100,
        count:1
    },
    {
        number: 50,
        count:1
    },
    {
        number: 10,
        count:1
    },
    {
        number: 5,
        count:50
    },
    {
        number: 1,
        count:1000
    },
].map(generateId)