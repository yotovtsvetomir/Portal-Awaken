import { h, Component } from 'preact';
import style from './Message.css'

export default class Message extends Component {
  render() {
    if (this.props.current == this.props.from) {
      return (
        <div className={style.message}>
          <p>{this.props.txt}</p>
        </div>
      );
    }
    else {
      return (
        <div className={style.mymessage}>
          <p>{this.props.txt}</p>
        </div>
      );
    }
  }
}
