import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        // console.log(props)
        console.log(this.props.name+ "Child Constructor Called")
    }
        state={
            count:0,
        }
        componentDidMount(){
            console.log(this.props.name+ "Child Component Did Mount")
        }

render(){
    console.log(this.props.name+ "Child Render")
    const {Designation,name}=this.props
    return(
        <>
        <h1>{name}</h1>
        <h2>{Designation}</h2>
        <h2>{this.state.count}</h2>
        <button onClick={()=>{
            this.setState({
                count:this.state.count +1,
            })
        }}>Increase the Count</button>

        <button onClick={()=>{
            this.setState({
                count:this.state.count -1,
            })
        }}>Decrease the Count</button>
        
        </>
    )
}


}

export default User;


// This is Class Based Component for the reference