import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from 'core/contexts'
import { ProtectedRoute } from 'core/routes'

// import { Landing, Login } from 'pages'
// import { Header, Footer } from 'layout'
// import { TemplateSample } from 'components/templates'
import Profile from '../../tests/Profile'
import { Div, DIV_THEME } from 'components/atoms'

function Routes(props) {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route exact path="/" component={() => <Div theme={DIV_THEME.WIRE}>hello</Div>} />
          <Route exact path="/div" component={() => <p>hello</p>} />
          <Route exact path="/login" component={() => <p>login test</p>} />
        </AuthProvider>
      </Switch>
    </Router>
  )
}

export default Routes
