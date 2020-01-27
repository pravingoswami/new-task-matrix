import React from 'react'
import Matrix from './Matrix'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            matrix : [[1,2], [3,4]],
            transpose : [[1,2],[3,4]],
            temp : [[1,2],[3,4]]

        }
    }

    componentDidMount = () => {
        const transpose = this.state.transpose
        const matrix = this.state.matrix
        // this.state.matrix.map(ele => {
        //     transpose[0][0] = ele[0]
        //     transpose[0][1] = 
        // })  
        for(let i = 0 ; i < matrix.length ; i++){
            transpose[i][0] = matrix[0][i]
            transpose[i][1] = matrix[1][i]
        }
        this.setState({transpose})
        // const temp = this.state.temp
        // temp[0][1] = 10
        // console.log(temp)
    }

    // handleChange = (e) => {
    //     const name = e.target.name
    //     const temp = this.state.temp
    //     temp[name] = 5
    //     console.log(temp)
    // }


    handleCol = (e, i , j) => {
        const matrix = this.state.matrix
        matrix[i][j] = e.target.value
        this.setState({matrix})
        const transpose = this.state.transpose
        // this.state.matrix.map(ele => {
        //     transpose[0][0] = ele[0]
        //     transpose[0][1] = 
        // })  
        for(let i = 0 ; i < matrix.length ; i++){
            transpose[i][0] = matrix[0][i]
            transpose[i][1] = matrix[1][i]
        }
        this.setState({transpose})
    }


    render() {
        return (
            <div>
                <h1>Matrix</h1>
                
                <Matrix handleCol = {this.handleCol}  data = {this.state.matrix} />
                {/* <table>
                    {
                        this.state.matrix.map((ele, i) => {
                            // const temp = 
                            // console.log(temp)
                            return(
                                <tr>{console.log()}
                                     <td  ><input 
                                                type = "text" 
                                                style = {{height : "50px", width : "50px", fontSize : "40px" }} 
                                                value = {ele[0]} 
                                                // name = {`[${i}][0]`}
                                                onChange = {(e) => this.handleCol(e, i, 0)}
                                                /> </td>

                                     <td  ><input 
                                                type = "text" 
                                                style = {{height : "50px", width : "50px",  fontSize : "40px"}} 
                                                value = {ele[1]} 
                                                // name = {`[${i}][1]`}
                                                onChange = {(e) => this.handleCol(e, i, 1)}
                                                /> </td>
                                </tr>
                            )
                        })
                    }
                </table> */}

                <br></br>
                <h1>Transpose of Matrix</h1>
                
                <Matrix data = {this.state.transpose} />
                    {/* <table>
                    {
                        this.state.transpose.map(ele => {
                            return(
                                <tr>
                                     <td  ><input type = "text" style = {{height : "50px", width : "50px", fontSize : "40px"}} value = {ele[0]} /> </td>

                                     <td  ><input type = "text" style = {{height : "50px", width : "50px",  fontSize : "40px"}} value = {ele[1]} /> </td>
                                </tr>
                            )
                        })
                    }
                    </table> */}


            </div>    
        )
    }
}

export default App