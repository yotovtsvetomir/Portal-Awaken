import { h, Component } from 'preact'
import render from 'preact-render-to-string'
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'
import Header from './Header'
import Favicon from 'react-favicon'
import ReactGA from 'react-ga'
import MetaTags from 'react-meta-tags'


export default class App extends Component {

	componentDidMount() {
    ReactGA.initialize('***********');
    ReactGA.pageview(window.location.pathname + window.location.search); */
  }

	render() {
		return (
			<div id="app">
				<Favicon url="https://res.cloudinary.com/awaken/image/upload/v1549555378/portal/favicon.ico" />
				<Header/>
					<Router>
		  				<AsyncRoute
		  					path="/"
		  					getComponent={ () => import('./Home').then(module => module.default) }
		  				/>
							<AsyncRoute
								path="/allawaken/allawaken/admin"
								getComponent={ () => import('./Admin').then(module => module.default) }
							/>
							<AsyncRoute
								path="/topstories"
								getComponent={ () => import('./Topstories').then(module => module.default) }
							/>
							<AsyncRoute
								path="/partners"
								getComponent={ () => import('./Partners').then(module => module.default) }
							/>
							<AsyncRoute
								path="/community"
								getComponent={ () => import('./Community').then(module => module.default) }
							/>
							<AsyncRoute
								path="/community/mostpopular"
								getComponent={ () => import('./Commp').then(module => module.default) }
							/>
							<AsyncRoute
								path="/contact"
								getComponent={ () => import('./Contact').then(module => module.default) }
							/>
							<AsyncRoute
								path="/login"
								getComponent={ () => import('./Login').then(module => module.default) }
							/>
							<AsyncRoute
								path="/register"
								getComponent={ () => import('./Register').then(module => module.default) }
							/>
							<AsyncRoute
								path="/forgotpassword"
								getComponent={ () => import('./Forgetpass').then(module => module.default) }
							/>
							<AsyncRoute
								path="/confirm/:token"
								getComponent={ () => import('./Confirm').then(module => module.default) }
							/>
							<AsyncRoute
								path="/myprofile"
								getComponent={ () => import('./Myprofile').then(module => module.default) }
							/>
							<AsyncRoute
								path="/myprofile/settings"
								getComponent={ () => import('./Settings').then(module => module.default) }
							/>
							<AsyncRoute
								path="/myprofile/chat"
								getComponent={ () => import('./Chat').then(module => module.default) }
							/>
							<AsyncRoute
								path="/myprofile/posts"
								getComponent={ () => import('./Myposts').then(module => module.default) }
							/>
							<AsyncRoute
								path="/myprofile/comments"
								getComponent={ () => import('./Mycomments').then(module => module.default) }
							/>
							<AsyncRoute
								path="/myprofile/connections"
								getComponent={ () => import('./Connections').then(module => module.default) }
							/>
							<AsyncRoute
								path="/profile/:pname"
								getComponent={ () => import('./Profile').then(module => module.default) }
							/>
							<AsyncRoute
								path="/post/:tid"
								getComponent={ () => import('./Bigpost').then(module => module.default) }
							/>
							<AsyncRoute
								path="/terms"
								getComponent={ () => import('./Terms').then(module => module.default) }
							/>
							<AsyncRoute
								default
								getComponent={ () => import('./404').then(module => module.default) }
							/>
					</Router>
			</div>
		);
	}
}
