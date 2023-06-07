export interface User { //define interface with types accodring to used objects
  name: string;
  age: number;
  occupation: string;
}

export const users: User[] = [ //reassign types to User from unknown
  {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
  },
  {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  }
];

export function logPerson(user: User) { //reassing types to User from unknown
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);