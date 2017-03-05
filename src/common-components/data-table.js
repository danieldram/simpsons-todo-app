
import React from 'react'

const createTableData = (headers, obj) => {

  return  headers.map(key=> (
    <td key={obj.id+obj[key]}>
      {obj[key]}
    </td>

  ))
}

export const DataTable = (props) => (

  <table className="u-full-width">
    <thead>
      <tr>
        {props.headers.map( s => <th key={s}> {s} </th>)}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        props.body.map((o)=>{
          return (
            <tr key={o.id}>
              {createTableData(props.headers, o)}
              <td>
                <div className="four columns">
                  <i className="fa fa-check-circle-o" aria-hidden="true" onClick={ ()=>{ props.completeDataItem(o.id)} } ></i>
                </div>
                <div className="four columns">
                    <i className="fa fa-times" aria-hidden="true" onClick={ ()=>{props.removeDataItem(o.id)} } ></i>
                </div>

              </td>
            </tr>
          )

        })

      }

    </tbody>
  </table>

)
