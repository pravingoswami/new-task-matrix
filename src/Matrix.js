import React from 'react'

function Matrix(props){
    return(
        <table>
        {
            props.data.map((ele, i) => {
                // const temp = 
                // console.log(temp)
                return(
                    <tr>{console.log()}
                         <td  ><input 
                                    type = "text" 
                                    style = {{height : "50px", width : "50px", fontSize : "40px" }} 
                                    value = {ele[0]} 
                                    // name = {`[${i}][0]`}
                                    onChange = {props.handleCol && ((e) => props.handleCol(e, i, 0))}

                                    /> </td>

                         <td  ><input 
                                    type = "text" 
                                    style = {{height : "50px", width : "50px",  fontSize : "40px"}} 
                                    value = {ele[1]} 
                                    // name = {`[${i}][1]`}
                                    onChange = {props.handleCol && ((e) => props.handleCol(e, i, 1))}
                                    /> </td>
                    </tr>
                )
            })
        }
    </table>
    )
}

export default Matrix