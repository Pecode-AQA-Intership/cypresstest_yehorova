import faker from "faker";

export const userData = [
    { selector: '#firstName', value: faker.name.firstName() },
    { selector: '#lastName', value: faker.name.lastName() },
    { selector: '#userEmail', value: faker.internet.email() },
    { selector: '#userNumber', value: faker.phone.phoneNumber('##########') },
    { selector: '#yearSelect', value: faker.datatype.number({ min: 1900, max: 2100 }).toString() },
    { selector: '#monthSelect', value: faker.datatype.number({ min: 0, max: 11 }).toString() },
    { selector: '#daySelect', value: faker.datatype.number({ min: 1, max: 28 }).toString() }
]
let genders = ['Male', 'Female', 'Other'];
export let randomGender = genders[Math.floor(Math.random() * genders.length)];

export const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan']
export const stateCities = {
    'NCR': ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    'Haryana': ['Karnal', 'Panipat'],
    'Rajasthan': ['Jaipur', 'Jaiselmer']
}

export const randomState = states[Math.floor(Math.random() * states.length)]
export const randomCity = stateCities[randomState][Math.floor(Math.random() * stateCities[randomState].length)]