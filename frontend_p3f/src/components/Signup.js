import React from 'react'
import axios from 'axios'
import '../Styles/styles.css'

class Signup extends React.Component {

    state = {
        newUser: {},
        errors: {}
    }

    handleChange = e => {
        let { newUser, errors } = this.state
        newUser[e.target.name] = e.target.value
        //validate
        errors = {}
        if (newUser.password !== newUser.password2) errors.password = "no coinciden"
        this.setState({ newUser, errors })
    }

    sendToServer = () => {
        let { newUser } = this.state
        let url = "http://localhost:3000/signup"
        axios.post(url, newUser)
            .then(res => {
                console.log("Nuevo usuario ? ", res)
                this.props.history.push('/login')
            })
            .catch(e => console.log(e))
    }

    render() {
        const { errors } = this.state
        return (
        <div className="back">
            <div className="login">
                <h1>Signup</h1>
                <input onChange={this.handleChange} placeholder="username" name="username" type="text" />
                <br />
                <input onChange={this.handleChange} placeholder="email" name="email" type="text" />
                <br />
                <input onChange={this.handleChange} placeholder="password" name="password" type="password" />
                <br />
                <input onChange={this.handleChange} placeholder="password2" name="password2" type="password" />
                <p style={{ color: "red" }}>{errors.password}</p>
                <button className="btn btn-primary btn-block btn-large" onClick={this.sendToServer}>Registrarse</button>
            </div>
        </div>
            
        )
    }
}

export default Signup