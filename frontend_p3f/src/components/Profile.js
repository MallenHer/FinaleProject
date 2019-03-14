import React from 'react'
import axios from 'axios'
import '../Styles/profile.css';



const url = "http://localhost:3000/profile" 
const serviceUpload  = axios.create({url, withCredentials: true})

class Profile extends React.Component {
    state = {
        profileInfo: {},
        authorized: false,
        photo: {},
        respo: {},
        modified:{}
    
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

    handleChange = (e) => {
        let foto = e.target.files[0]
        let { modified } = this.state
        modified[e.target.name] = e.target.value
        this.setState({photo: foto})
    }

    handleSubmit = () => {
        let {photo} = this.state
        
        const { profileInfo } = this.state
        this.subeImagen(photo, url)
            .then(res => {
                console.log(res)
                console.log(profileInfo)
                profileInfo.pic = res
                this.setState({ profileInfo })
            })
    }

    subeImagen = (file, url) => {
        const formData = new FormData()
        formData.append('picture', file)
        return serviceUpload.post(url, formData, {headers: {
            'Content-Type': 'multipart/form-data',
          },})
          .then( (res) => res.data )
          .catch( e => console.log(e))
        }
    


    render() {
        let { profileInfo } = this.state
        console.log(profileInfo)
        if(this.state.authorized) {
            return(
                
                    
                <div className="bodydelp">
                    <nav className="sidep">
                     <div className="sidebar-image">
                        <img src={profileInfo.pic} alt="img-profile" onChange={this.handleChange}/>
                        
                     </div>
                     <h4 className="name">{profileInfo.username}</h4>
                     <p className="info">{profileInfo.name}</p>
                     <p className="info">{profileInfo.lastname}</p>
                     <p  className="info">{profileInfo.age}</p>
                     <p className="info">{profileInfo.email}</p>

                     <b className="caret" />

                     <p className="desc">Hi ! My name is kike ykejbfrielvubelivfbleifvv </p>
                    </nav>
                    <main className="mainpr">
                    <div className="right col-lg-8">
                    <ul className="nav">
                        <li>My Projects</li>
                        <li>Comments</li>
                        <li>My Partners</li>   
                    </ul>

                    <div className="login">
                <h1>Editar perfil</h1>
                <input onChange={this.handleChange} placeholder="Name" name="name" type="text" />
                <br />
                <input onChange={this.handleChange} placeholder="LastName" name="lastname" type="text" />
                <br />
                <input onChange={this.handleChange} placeholder="Age" name="age" type="number" />
                <br />
                
                <button className="btn btn-primary btn-block btn-large" onClick={this.sendToServer}>Editar</button>
            </div>
                    </div>
                    </main>
                </div>

            )
        }else {
            return (
                <div>
                    <p>LOADING...</p>
                </div>
            )
        }

    }

}




export default Profile