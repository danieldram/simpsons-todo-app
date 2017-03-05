
import React from 'react'

const createTableData = (headers, obj) => {

  return  headers.map(key=> <td key={obj.id+obj[key]}>{obj[key]}</td>)
}

export const DataTable = (props) => (

  <table className="u-full-width">
    <thead>
      <tr>
        {props.headers.map( s => <th key={s}> {s} </th>)}
      </tr>
    </thead>
    <tbody>
      {
        props.body.map((o)=>{
          return (
            <tr key={o.id}>
              {createTableData(props.headers, o)}
            </tr>
          )

        })

      }

    </tbody>
  </table>

)
