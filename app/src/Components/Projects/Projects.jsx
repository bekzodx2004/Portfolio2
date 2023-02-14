import React from 'react'
import { projects } from '../API'
import Contacts from '../Contacts/Contacts'
import Header from '../Header/Header'
import Card from './Card/Card'

import './Projects.scss'

const Projects = () => {
  return (
    <div className="projects">
        <Header/>
        <h1>Loyihalar</h1>

       <div className="projects__block">
       {
          projects.map(
            projects=>{
              return <Card 
              key={projects.id}
              img={projects.rasm}
              h3={projects.nomi} 
              h4={projects.sahifa}
              p={projects.turi}
              a={projects.netlify}
              />
            }
          )
        }
       </div>

       <Contacts/>
    </div>
  )
}

export default Projects