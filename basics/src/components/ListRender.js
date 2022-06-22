import React from 'react'

// to render number of items 

const ListRender = ({navTitle}) => {

    // normal list
    const language=['C++','C','Python','Javascript','Java'];

    // json file rendering

    const bioData=[
        {
            id:1,
            name:"kunal",
            skill:"web developer"
        },
        {
            id:2,
            name:"rohan",
            skill:"Running"
        },
        {
            id:3,
            name:"sourav",
            skill:"Fitness"
        }
    ]
  
    return (
    <div>
        <nav>{navTitle}</nav>
        <ul>
            <h2>Languages Learnt</h2>
        {
            language.map((values,index)=><li key={index}>{values}</li>)
            //map takes function as an argument
        }
        </ul>

        <ul>
            <h2>Friends Biodata</h2>
            {
                bioData.map(persons=><li key={persons.id}>Hello my name is <b>{persons.name}</b> and my skill is <b>{persons.skill}</b></li>)
            }
            {/* or you can render a child component  */}
        </ul>
    </div>
  )
}

export default ListRender