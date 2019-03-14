import React from 'react'
import axios from 'axios'
import '../Styles/styles.css'

class Login extends React.Component {

    state = {
        auth: {}
    }

    handleChange = e => {
        let { auth } = this.state
        auth[e.target.name] = e.target.value
        this.setState({ auth })

    }

    sendToServer = () => {
        let { auth } = this.state
        let url = "http://localhost:3000/login"
        axios.post(url, auth, { withCredentials: true })
            .then(res => {
                console.log(res)
                this.props.history.push('/profile')
            })
            .catch(e => {
                alert("Datos Incorrectos")
            })
    }

    render() {
        return (
            <div id='embody'>
                <div className="login">
                <h1>Login</h1>
                <input onChange={this.handleChange} placeholder="EMAIL" name="email" type="text" />
                <br />
                <input onChange={this.handleChange} placeholder="PASSWORD" name="password" type="password" />
                <br />
                <button className="btn btn-primary btn-block btn-large" onClick={this.sendToServer} >Iniciar</button>
            </div>
            </div>
            
        )
    }
}

export default Login