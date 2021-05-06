import React, {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { API_URL } from "./../config"
import toastr from 'toastr'
import "toastr/build/toastr.css"

const isActive = (history, path) => {

  if(history.location.pathname === path){
    return{ color: '#000'}
  }
  else{
    return { color: '#fff'}
  }
}



const Menu = (props) => {

const signout = () => {

  fetch(`${API_URL}/signout`)
  .then(() => {
    toastr.info('user signOut', 'Next Time', {
      positionClass: "toast-bottom-left",
    })

    localStorage.removeItem('jwt_info')
    props.history.push('/signin')
  })

  .catch()
}

const isAuthenticated = () => {

  const jwt = localStorage.getItem('jwt_info');
  if(jwt) {
    return JSON.parse(jwt)
  }
  return false
}

return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link style={isActive(props.history, '/')} className="navbar-brand" to="/">My App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {isAuthenticated() &&(
        <Fragment>
      <li className="nav-item active">
        <Link style={isActive(props.history, '/Admin')} className="nav-link" to="/Admin">Admin <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
      <Link style={isActive(props.history, '/User')} className="nav-link" to="/User">User <span className="sr-only">(current)</span></Link>
    </li>
    <li className="nav-item active">
    <Link style={isActive(props.history, '/Technicien')} className="nav-link" to="/Technicien">Technicien <span className="sr-only">(current)</span></Link>
  </li>
  </Fragment>
      )}
      
    </ul>
    <ul className="navbar-nav ml-auto">
    {!isAuthenticated() &&(
      <Fragment>
      <li className="nav-item">
        <Link style={isActive(props.history, '/signin')} className="nav-link" to="/signin">Conexion</Link>
      </li>
      
      <li className="nav-item">
        <Link style={isActive(props.history, '/signup')} className="nav-link" to="/signup">Register</Link>
      </li>
      </Fragment>
        )}
      {isAuthenticated() &&(
      <li className="nav-item">
        <span className="nav-link" style={{cursor: 'pointer'}} onClick={signout}>SignOut</span>
      </li>
       )}
    </ul>
  </div>
</nav>
</div>
  )
}

export default withRouter(Menu)