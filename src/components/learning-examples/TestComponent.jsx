import React from 'react';
//creating javascript object
const Person = {
    name:'testname',
    age: 19,
    gender: 'male',
    address: {
        line1: 'Dwarka',
        city : 'Delhi',
        country: 'India'
    },
    profiles: ['github', 'leetcode'],
    printProfile: () => {
        Person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
        
    }
}

const TestComponent = () => {
  return (
    <div>Person name : {Person.name}<br /> Person Age: {Person.age} <br /> Person Gender: {Person.gender}
    <br /> Person address {Person.address.line1} <br />
    Person Profiles {Person.profiles[0]} <br />
    Calling PrintProfile Function {Person.printProfile()}
    </div>
  )
}

export default TestComponent