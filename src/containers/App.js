import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../store/actions'

import UsersContainer from './Users'

const Home = () => (<div>Home view</div>)

class App extends React.Component {

    render() {
        return (
            <div>
                <header>App Header</header>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/users' component={UsersContainer} />
                    </Switch>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)