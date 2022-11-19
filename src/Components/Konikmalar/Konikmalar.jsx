import React from 'react'
import { konikmalar } from '../API'

const Konikmalar = () => {
  return (
    <div className='Konikmalar'>
        {
            konikmalar.map(
                skill=>{
                    return <h1 key={skill.id}>{skill.nomi}</h1>
                }
            )
        }
    </div>
  )
}

export default Konikmalar