import React from 'react'
import axios from 'axios'
import '../Styles/cards.css'
import {Link} from 'react-router-dom'

  


const url = "http://localhost:3000/persons" 


  
  class Persons extends React.Component {
    state = {
        authorized: false,
        photo: {},
        respo: {},
        loading: true,
        profileInfo:{}
    }

    componentDidMount() {
        this.getProfileData()
    }


    getProfileData = () => {
        axios.get(url,  {withCredentials: true })
            .then(res => {
                
                this.setState({ profileInfo: res.data, authorized: true })
            })
            .catch(e => {
                this.props.history.push('/login')
            })
    }
  
    onChange = (checked) => {
      this.setState({ loading: !checked });
    }
  
    render() {
      const { profileInfo } = this.state;
        
    
      if(this.state.authorized){
      return (

        <section>
          <div className="container">
            <h1 className="heading">Meet The Persons</h1>
            <div className="card-wrapper">
             <div className="card">
             <img className="card-img" src="https://us.123rf.com/450wm/ookasan/ookasan1702/ookasan170200128/71778022-puente-de-madera-de-la-cubierta-de-oto%C3%B1o-monta%C3%B1as-fondo-borroso-.jpg?ver=6" alt="img" />
             <img className="profile-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg" alt="img" />
             <h1>{profileInfo.username}</h1>
             <p className="job-title">{profileInfo.education}</p>
             <p className="about">lorem eifhoewufgweifgoqbwiefgwoaeifugoiewgb oeuigib</p>
             <Link to="#" className="btn">Contact</Link>
             <ul className="social-media">

             <Link to="/"><li>{profileInfo.email}</li></Link>

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


export default Persons