import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    redirect: false,
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    this.setState({redirect: true})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {email, password} = this.state
    
    const userDetails = {email, password}
    console.log(userDetails)
   

    const url = 'http://localhost:5000/api/auth/login'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    console.log(options)
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    response.ok
      ? this.onSubmitSuccess(data.token)
      : this.onSubmitFailure(data.error)
  }

  render() {
    const {email, password, showSubmitError, errorMsg, redirect} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken || redirect) {
      return <Navigate to="/" replace />
    }

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h2 className="form-heading">Login</h2>

          <label className="input-label" htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            className="input-field"
            value={email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
            required
          />

          <label className="input-label" htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Enter password"
            required
          />

          <button type="submit" className="login-button">Login</button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
