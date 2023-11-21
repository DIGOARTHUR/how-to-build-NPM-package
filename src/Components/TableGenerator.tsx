
import React from 'react';

import './style.css'


type Props = {
    tableType:'Violet'|'Blue'|'Black', 
    data:object[]
};


export function TableGenerator ({tableType,data}:Props){
    return(
        <>
    
        <table className={tableType}>
          <thead>
            
            <tr>
              {
                Object.keys(data[0]).map((item) => {
                  return (
                    <th ><strong>{item}</strong></th>
                  )
                })
              }
  
  
            </tr>
          
          </thead>
          <tbody>
            {
              data.map((item) => {
                return (
                  <tr>
                   
                    {
                      Object.keys(data[0]).map((item2)=>{return(<td>{item[item2 as never]}</td>)})
                    }
                
                  </tr>
                )
              }
  
              )
            }
  
  
          </tbody>
        </table>
      </>
    )
}