import faker from "faker";

export const userData = {
firstName: faker.name.firstName(),
lastName: faker.name.lastName(),
userEmail: faker.internet.email(),
// userGender: gender,
userNumber: faker.phone.phoneNumber('##########'),
yearSelect: faker.datatype.number({ min: 1900, max: 2100 }).toString(),
monthSelect: faker.datatype.number({ min: 0, max: 11 }).toString(),
daySelect: faker.datatype.number({ min: 1, max: 28 }).toString()
}

let randomGender = ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3'];
let randomGenderOfArray = randomGender[Math.floor(Math.random()*randomGender.length)];
let gender = randomGenderOfArray;

export const stateAndSity = {
'#react-select-3-option-0':{
    value:'NCR',
    cities:{
        '#react-select-4-option-0':'Delhi',
        '#react-select-4-option-1':'Gurgaon',
        '#react-select-4-option-2':'Noida'
    }
},
'#react-select-3-option-1':{
    value:'Uttar Pradesh',
    cities:{
        '#react-select-4-option-0':'Agra',
        '#react-select-4-option-1':'Lucknow',
        '#react-select-4-option-2':'Merrut'
    }
},
'#react-select-3-option-2':{
    value:'Haryana',
    cities:{
        '#react-select-4-option-0':'Karnal',
        '#react-select-4-option-1':'Panipat'
    }
},
'#react-select-3-option-3':{
    value:'Rajasthan',
    cities:{
        '#react-select-4-option-0':'Jaipur',
        '#react-select-4-option-1':'Jaiselmer'
    }
}
}