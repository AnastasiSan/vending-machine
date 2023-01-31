import { generateId } from "../utils/react/generateRandomIndex";

export const nominal = [{
    number:50
},
{
    number:100
},
{
    number:500
},
{
    number:1000
}].map(generateId)