import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../Styles/cards.css'
  


const url = "http://localhost:3000/projects" 
const serviceUpload  = axios.create({url, withCredentials: true})

  
  class Projects extends React.Component {
    state = {
        authorized: false,
        photo: {},
        respo: {},
        loading: true,
        projectInfo:{},
        profileInfo: {},
    }

    componentDidMount() {
        this.getProfileData()
        this.getProjectData()
    }


    getProfileData = () => {
        axios.get(url,  {withCredentials: true })
            .then(res => {
                console.log(res)
                this.setState({ profileInfo: res.data, authorized: true })
            })
            .catch(e => {
                this.props.history.push('/login')
            })
    }

    getProjectData = () => {
        axios.get(url,  {withCredentials: true })
            .then(res => {
                console.log(res)
                this.setState({ projectInfo: res.data, authorized: true })
            })
            .catch(e => {
                this.props.history.push('/login')
            })
    }

  
    onChange = (checked) => {
      this.setState({ loading: !checked });
    }
  
    render() {
      const { loading, profileInfo, projectInfo } = this.state;
        
    
      if(this.state.authorized){
      return (

        <section>
        <div className="container">
          <h1 className="heading">Meet The Projects</h1>
          <div className="card-wrapper">
           <div className="card">
           <img className="card-img" src="https://us.123rf.com/450wm/ookasan/ookasan1702/ookasan170200128/71778022-puente-de-madera-de-la-cubierta-de-oto%C3%B1o-monta%C3%B1as-fondo-borroso-.jpg?ver=6" alt="img" />
           <img className="profile-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg" alt="img" />
           <h1>{profileInfo.username}</h1>
           <p className="job-title">{projectInfo.nameproject}</p>
           <p className="about">{projectInfo.sector}</p>
           <Link to="/detail/:id" className="btn">Contact</Link>
           <ul className="social-media">

           <li><Link to="#"><li>{profileInfo.email}</li></Link></li>

           </ul>
           </div>
          </div>
        </div>
      </section>
      );
    }else {
        return (
            <div>
                <p>LOADING...</p>
            </div>
        )
      }
    }
  }


export default Projects