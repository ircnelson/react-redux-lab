import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import store from './store'

import AppLayout from './containers/Layout'
import UsersContainer from './containers/Users'

const Home = () => <div>Home view</div>

const navigation = [
  {
    path: '/',
    exact: true,
    displayText: 'Home',
    icon: 'home',
    component: () => Home
  },
  {
    path: '/users',
    exact: true,
    displayText: 'Users',
    icon: 'user',
    component: () => UsersContainer
  }
]

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <AppLayout menus={navigation}>
              <Switch>
                {navigation.map((nav, index) => (
                  <Route
                    key={index}
                    path={nav.path}
                    exact={nav.exact}
                    component={nav.component()}
                  />
                ))}
              </Switch>
            </AppLayout>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}
