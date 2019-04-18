import { h, Component } from 'preact';
import style from './Smallprof.css'

export default class Chatprof extends Component {
  render() {
    return (
      <div id="chpr" onClick={this.props.selected} style="width: 100%;" className="chatprof">
        <div className={style.conwrap}>
          <img src={this.props.imge} alt={"Image for connection: " + this.props.name}/>
          <div className={style.cp_info}>
            <div id="newmess" className={style.newmess} style={this.props.numstyle}>{this.props.nummess}</div>
            <h3 id="mmname">{this.props.name}</h3>
            <h5 className="hhh">{this.props.subtitle}</h5>
          </div>
        </div>
      </div>
    );
  }
}
