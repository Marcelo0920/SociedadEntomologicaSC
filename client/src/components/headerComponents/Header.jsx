import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

import User from '../../static/user-icon.png';
import '../../styles/components/Header.css';

const Header = ({auth: {isAuthenticated, loading}, logout}) =>
{


    const authLinks = (
    
            <Fragment>             
                <img alt="logo" />
                <nav className="navigation-link">  {/*<---------Navega a través de los posibles valores de title para hacerle Link*/}
                    <ul>
                        <li><Link to = "/">Inicio</Link></li>
                        <li>Nosotros
                            <ul>
                                <li><Link to = "/nosotros/quienessomos">Quiénes Somos</Link></li>
                                <li><Link to = "/nosotros/contacto">Contacto</Link></li>
                            </ul>
                        </li>
                        <li><Link to = "/publicaciones">Publicaciones</Link></li>
                        <li><Link to = "/comentarios">Comentarios</Link></li>
                        <li><Link to = "/publicar">Publicar</Link></li>
                        <div className="hide">
                            <img src= {User} />
                            <ul>
                                <Link to="/" onClick = {logout}><i className = "fas fa-sign-out-alt"></i>{' '}Cerrar Sesión</Link>
                            </ul>
                        </div>
                    </ul>
                </nav>
            </Fragment>
    )

    const guestLinks = (
            <Fragment>
                <img alt="logo" />
                <nav className="navigation-link">
                    <li><Link to = "/">Inicio</Link></li>
                            <li className = "hide"><Link>Nosotros </Link>
                                <ul>
                                    <li><Link to = "/nosotros/quienessomos">Quiénes Somos</Link></li>
                                    <li><Link to = "/nosotros/contacto">Contacto</Link></li>
                                </ul>
                            </li>
                            <li><Link to = "/publicaciones">Publicaciones</Link></li>
                    <div className="hide">
                        <img src= {User} />
                        <ul>
                            <Link to="/login">Iniciar Sesión</Link>
                            <Link to="/register">Registrarme</Link>
                        </ul>
                    </div>
                </nav>
            </Fragment>
    )

    return(
        <header className="header-inicio"> 
            <div className="navigation">
            {
                (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)
            }
            </div>
            
            <div className="principal-header">
				
                <h1>
				Sociedad Entomológica Cruceña
                </h1>
                <Link to = "/register">
                    <button className="button-header button-2"   >Sé un Miembro</button>
                </Link>
            </div>
        </header>
    )
    

}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header);