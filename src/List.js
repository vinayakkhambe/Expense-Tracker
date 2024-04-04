import { useState } from "react";
import style from "./app.module.css";

function List(props)
{
  const {total,transactions,handleDelete} = props;
   

   //console.log(ptext);
   
    return(
    <>
            <h1>Total Cost:{total}</h1>
     
                        
                <table border={1} className={style.table}>
                    <thead>
                        <tr>
                            <th>
                                Text
                            </th>
                            <th>
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      {transactions.map(
                           (d)=>( 
                                <tr>
                                <td>{d.text}</td>
                                <td>{d.amt}</td>
                                <td className={style.cancel}><span onClick={()=>handleDelete(d.id)}>X</span></td>
                                </tr>
                            ))}

                    </tbody>

                    </table>
                         
                         
     </>
    );
}

export default List;
