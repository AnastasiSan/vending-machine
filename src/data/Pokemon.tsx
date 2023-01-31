import { generateId } from "../utils/react/generateRandomIndex";

export const Pokemons = [{
  name: "Бульбазавр",
  img: "https://d16u9y6cg00afk.cloudfront.net/pokemon/752667.512.webp",
  price: 250,
  count: 0,
  quantity: 1
},
{
  name: "Иви",
  img: "https://d16u9y6cg00afk.cloudfront.net/pokemon/752689.512.webp ",
  price: 400,
  count: 0,
  quantity: 0
},
{
  name: "Псидак",
  img: "https://d16u9y6cg00afk.cloudfront.net/pokemon/752683.512.webp",
  price: 350,
  count: 0,
  quantity: 0
},
{
  name: "Чикорита",
  img: "https://d16u9y6cg00afk.cloudfront.net/pokemon/752721.512.webp",
  price: 200,
  count: 0,
  quantity: 1
},
{
  name: "Мью",
  img: "https://d16u9y6cg00afk.cloudfront.net/pokemon/752711.512.webp",
  price: 500,
  count: 0,
  quantity: 10
},
{
  name: "Пикачу",
  img: "https://d16u9y6cg00afk.cloudfront.net/pokemon/752681.512.webp ",
  price: 550,
  count: 0,
  quantity: 2
},
{
  name: "Тогипи",
  img: "https://d16u9y6cg00afk.cloudfront.net/pokemon/752755.512.webp",
  price: 400,
  count: 0,
  quantity: 13
},
{
  name: "Вабафет",
  img: "https://d16u9y6cg00afk.cloudfront.net/pokemon/752750.512.webp",
  price: 300,
  count: 0,
  quantity: 20
}].map(generateId)