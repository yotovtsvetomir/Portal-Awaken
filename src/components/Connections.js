import { h, Component } from 'preact'
import style from './Connections.css'
import render from 'preact-render-to-string'
import { Link } from 'preact-router'
import Promenu from './Promenu'
import Profilehead from './Profilehead'
import Conproflist from './Conproflist'
import Smallproflist from './Smallproflist'

export default class Connections extends Component {
  render() {
    return (
      <div className="shell">
        <div className="profile">
          <Profilehead />
          <div className="profile_body">
            <Promenu />
            <div className="profile_content">
              <div className={style.connections}>
                <h2>Requests</h2>
                <Conproflist />
                <h2 style="background: #43a047;">My connections</h2>
                <Smallproflist/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
