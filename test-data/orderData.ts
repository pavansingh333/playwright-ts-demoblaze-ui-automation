import { faker } from '@faker-js/faker';

export function generateOrderData(){

return {

name:faker.person.firstName(),

country:faker.location.country(),

city:faker.location.city(),

card:faker.finance.creditCardNumber(),

month:String(faker.number.int({min:1,max:12})),

year:String(faker.number.int({min:2026,max:2032}))
};
}