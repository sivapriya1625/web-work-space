import React from 'react' 
function NameList() {
            const names = ['priya', 'shiva', 'swetha', 'dxc','react']
            const namesList = names.map(name => <h2>{name}</h2>)
                const persons = [
                    {
                        id:1,
                        name: 'priya',
                        age: 30,
                        skill: 'react'
                    },
                    {
                        id:1,
                        name: 'shiva',
                        age: 30,
                        skill: 'flutter'
                    },
                    {
                        id:1,
                        name:'swetha',
                        age: 30,
                        skill: 'java'
                    },
                    {
                        id:1,
                        name:'guru',
                        age: 30,
                        skill: 'spring'
                    }
                ]
        
        
        
            /* const names = ['abdul', 'ansari', 'tanveer', 'dxc','react']
            const namesList = names.map(name => <h2>{name}</h2>) */
            const personList = persons.map(person => <h2> i am {person.name},i am {person.age} years old and my skill is {person.skill}</h2>)
        
            return (
                
                <div>{personList}</div>
            )
        }
         
        
        export default NameList

 

