import User from "../Components/UserClass";
import React, { useContext } from "react";
import UserContext from "../Components/utils/UserContext";



class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor Called")
    }
    componentDidMount(){
        console.log("Parent Component Did Mount")
    }
    render(){
        console.log("Parent Render Called")
        return(
                    <div>
                <h1>About Us</h1>
                <h2>Learning React JS From Namstee React By Akshy Saini</h2>
                <UserContext.Consumer>
                    {(data)=><h3>{data.loggedInUser}</h3>}
                </UserContext.Consumer>
                <User name={'First'}/>
                <User name={'Second'}/>
                <User name={'Third'}/>
                </div>
                )
    }
}









// const About=()=>{
//     return(
//         <div>
//     <h1>About Us</h1>
//     <h2>Learning React JS From Namstee React By Akshy Saini</h2>
//     <User />
//     </div>
//     )
// }

export default About;