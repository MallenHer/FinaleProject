import React from 'react'
import axios from 'axios'


const url = "http://localhost:3000/createnew" 


class CreateNew extends React.Component {
  state = {
    profileInfo: {},
    authorized: false,
    newProject: {},
    
    

}

handleChange = e => {
    let { newProject } = this.state
    newProject[e.target.name] = e.target.value
    
}

componentDidMount() {
    this.getProfileData()
}

getProfileData = () => {
    axios.get(url, { withCredentials: true })
        .then(res => { 
            this.setState({ profileInfo: res.data, authorized: true })
        })
        .catch(e => {
            this.props.history.push('/login')
        })
}

sendToServer = () => {
    let { newProject } = this.state
    axios.post(url, newProject, {withCredentials:true})
        .then(res => {
            this.props.history.push('/projects')
        })
        .catch(e => console.log(e))
}


render() {
    
    if(this.state.authorized){
        return (
            <div className="back">
                <div className="login">
                
                    <h1>Create Project</h1>
                    <input onChange={this.handleChange} placeholder="NAME OF PROJECT" name="nameproject" type="text" />
                    <br />
                    <input onChange={this.handleChange} placeholder="SECTOR" name="sector" type="text" />
                    <br />
                    <input onChange={this.handleChange} placeholder="FUNCTION" name="function" type="text" />
                    <br />
                    <input onChange={this.handleChange} placeholder="DESCRIPTION" name="description" type="text" />
                    <br />
                    <input onChange={this.handleChange} placeholder="ACHIVEMENT" name="achivement" type="text" />
                    <br />
                    <input onChange={this.handleChange} placeholder="WHAT AM I LOOKING FOR" name="find" type="text" />
                    <br />
                    <input onChange={this.handleChange} placeholder="OFFER" name="offer" type="text" />
                    
                    <button className="btn btn-primary btn-block btn-large" onClick={this.sendToServer}>Registrar</button>
                </div>
            </div>
            )
          }else{
            return (
                <div>
                    <p>LOADING...</p>
                </div>
            )
          }
        }
    }
    

export default CreateNew