import React,{ Component } from "react";
import User from "./components/User";
const url ='https://dummyjson.com'

class App extends Component {
    constructor(props){
      super(props)
      this.state={
        users:[]
      }
    }

    componentDidMount(){
      //
        fetch(`${url}/users`)
        .then(res =>res.json())
        .then(out =>{
          console.log('users =',out)
          this.setState({
            users:out.users
          })
        }).catch(err => console.log(err.message))
    }

    render(){
      return(
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="display-3 text-success">Props in Class Component</h3>
            </div>
          </div>
          <User users={this.state.users} />
        </div>
      )
    }
}

export default App