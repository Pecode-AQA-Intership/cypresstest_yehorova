import faker from 'faker'

export const userData = [
    {selector: "#userName", value: faker.name.firstName(),output:"#name"},
    {selector: "#userEmail", value: faker.internet.email(),output:"#email"},
    {selector: "#currentAddress", value: faker.address.streetAddress(),output:"#currentAddress"},
    {selector: "#permanentAddress", value: faker.address.streetAddress(),output:"#permanentAddress"},
  ]