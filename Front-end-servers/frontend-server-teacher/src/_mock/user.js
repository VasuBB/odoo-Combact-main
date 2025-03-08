import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample([
    "Aarav",
    "Aditi",
    "Aishwarya",
    "Akash",
    "Ananya",
    "Anil",
    "Anita",
    "Arjun",
    "Ashok",
    "Deepak",
    "Divya",
    "Gaurav",
    "Geeta",
    "Kavita",
    "Lakshmi",
    "Manish",
    "Meera",
    "Neha",
    "Pooja",
    "Rahul",
    "Ramesh",
    "Ravi",
    "Shreya",
    "Vikram"
]),
  
  isVerified: faker.datatype.boolean(),
  grade : sample(['A','B','C','D']) , 
  status: sample(['active', 'banned']),
  attendence : "woo",
 
}));
