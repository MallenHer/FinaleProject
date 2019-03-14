import React from 'react'
import '../Styles/home.css'
import { Link } from 'react-router-dom'

class Home extends React.Component {
 render(){
   return(
		 <div>
			 

  <div className="pimg1">
    <div className="ptext">
      <span className="border">
        TAME
      </span>
      <br/>
      <br/>
      <p className="mutual">Mutual Help</p>
    </div>
  </div>

  <section className="section section-light">
  <section id="intro" className="main">
						<img className="icon" src='https://cdn0.iconfinder.com/data/icons/business-management-and-growth-10/64/535-512.png' alt='mutual'/>
						<h2>What is 'TAME'?</h2>
						<p>TAME es una Organización encargada de llevar tu proyecto al siguiente nivel.
              <br/>
              No sabes como dar el siguiente paso? necesitas ayuda profesional?
              <br/>
              En 'TAME' no tienes que preocuparte, unicamente busca lo que necesitas y si realmente te convence podras dar el siguiente paso.
            </p>
						<ul className="actions">
							<li><Link to="/signup" className="button big">Join</Link></li>
						</ul>
					</section>
  </section>

  <div className="pimg2">
    <div className="ptext">
      <span className="border trans">
        Siendo Parte de Tame puedes publicar y aportar
      </span>
    </div>
  </div>

  <section className="section section-dark">
  <section className="main items">
						<article className="item">
							<header>
								<Link to="/createnew"><img src="http://www.servimatango.com/wp-content/uploads/Publicar-libro-amazon.jpg" alt="subir" /></Link>
								<h2>COMPARTIR PROYECTO</h2>
							</header>
							<p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare.</p>
							<ul className="actions">
								<li><Link to="/createnew" className="button">More</Link></li>
							</ul>
						</article>
						<article className="item">
							<header>
								<Link to="/persons"><img src="https://api.women-talk.com/uploads/2016042157192a69c7776.png  " alt="aportar" /></Link>
								<h2>BUSCAR UN COLABORADOR</h2>
							</header>
							<p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare.</p>
							<ul className="actions">
								<li><Link to="/persons" className="button">More</Link></li>
							</ul>
						</article>
						<article className="item">
							<header>
								<Link to="/projects"><img src="https://vilmanunez.com/wp-content/uploads/2013/11/crear-contenidos-desde-cero.png" alt="crear" /></Link>
								<h2>APORTAR A UN PROYECTO</h2>
							</header>
							<p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare.</p>
							<ul className="actions">
								<li><Link to="projects" className="button">More</Link></li>
							</ul>
						</article>
						<article className="item">
							<header>
								<Link to="/"><img src="https://image.freepik.com/vector-gratis/jefe-mano-dando-recompensa-empleados_51635-1717.jpg" alt="recompensa" /></Link>
								<h2>RECOMPENSAS!</h2>
							</header>
							<p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare.</p>
							<ul className="actions">
								<li><Link to="/" className="button">More</Link></li>
							</ul>
						</article>
					</section>
  </section>

  <div className="pimg3">
      <section id="cta" className="main special">
						<h2>SIENDO PARTE DE LA COMUNIDAD</h2>
						<p>Phasellus ac augue ac magna auctor tempus proin<br />
						accumsan lacus a nibh commodo in pellentesque dui<br />
						in hac habitasse platea dictumst.</p>
						<ul className="actions">
							<li><Link to="/login" className="button big">Get Started</Link></li>
						</ul>
					</section>
  </div>

  <section className="section section-dark">
  <footer id="footer">
						<ul className="icons">
							<span className="label">Twitter</span>
							<span className="label">Facebook</span>
							<span className="label">Instagram</span>
							<span className="label">LinkedIn</span>
							<span className="label">Email</span>
						</ul>
						<p className="copyright">&copy; Untitled. Design: MALLENHER. Images: GOOGLE.</p>
					</footer>
  </section>

  



</div>
    
   )
 }
}

export default Home