import { h, Component } from 'preact'
import style from './Chat.css'
import render from 'preact-render-to-string'
import Promenu from './Promenu'
import Profilehead from './Profilehead'
import Chatproflist from './Chatproflist'
import Messagelist from './Messagelist'
import io from 'socket.io-client'

const socket = io.connect("/");

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state.withwho = "Select Connection";
    this.selected = this.selected.bind(this)
    this.addmessage = this.addmessage.bind(this)
  }

  selected() {
    var z = document.getElementsByClassName("chatprof");
    for (var i = 0; i < z.length; i++) {
      z[i].classList.remove("chatz");
    }
    event.target.closest(".chatprof").classList.add("chatz");
    var who = event.target.closest(".chatprof").children[0].children[1].children[1].innerHTML;
    fetch('https://www.portal.allawaken.com/api/seen', {
      method: 'post',
      body: who
    });

    this.setState({withwho: who});
    this.goo.setState({goo: true, name: who});

    document.getElementById('chatlist').style.display = "none";
    document.getElementById('messenger').style.display = "flex";

    event.target.closest(".chatprof").children[0].children[1].children[0].style.display = "none";
    document.getElementById("notifs").style.display = "none";
    document.getElementById("notif_conn").style.display = "none";
    document.getElementById("notif_mess").style.display = "none";
  }

  goback() {
    var z = document.getElementsByClassName("chatprof");
    for (var i = 0; i < z.length; i++) {
      z[i].classList.remove("chatz");
    }
    document.getElementById('chatlist').style.display = "block";
    document.getElementById('messenger').style.display = "none";
  }

  addmessage() {
    var txt = document.getElementById('innp').value;
    var who = document.getElementById('ihere').innerHTML;
    if (txt == "") {
      this.goo.setState({goo: true, name: who});
    }
    else {
      fetch('https://www.portal.allawaken.com/api/addmessage', {
        method: 'post',
        body: who  + "//" + txt
      }).then(function(response) {
        return response.text().then(function(text) {
        });
      });
      this.goo.setState({goo: true, name: who});
      socket.emit('stiga');
    }

    document.getElementById('innp').value = "";
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  componentDidMount() {
    socket.connect();
    var input = document.getElementById("innp");
    input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("tisi").click();
      }
    });
  }

  render() {

    socket.on('stiga', function() {
      document.getElementById('tisi').click();
    });

    return (
      <div className="shell">
        <div className="profile">
          <Profilehead />
          <div className="profile_body">
            <Promenu />
            <div className="profile_content">
              <div className={style.chat}>
                <h2>Chat</h2>
                <div className={style.chatwrap}>
                  <Chatproflist selected = {this.selected}/>
                  <div id="messenger" className={style.messenger}>
                    <h3 id="ihere" className={style.messtitle}>{this.state.withwho}</h3>
                    <a onClick={this.goback} className={style.button_back}><i className="material-icons">arrow_back</i></a>
                    <Messagelist ref={goo => this.goo = goo} />
                    <div className={style.mess_actions}>
                      <input id="innp" type="text" />
                      <a id="tisi" onClick={this.addmessage} className={style.button_save}>Send</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
