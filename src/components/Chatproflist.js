import { h, Component } from 'preact'
import Chatprof from './Chatprof'
import render from 'preact-render-to-string'

class Chatproflist extends Component {
    state = { element: [], foo: false, nots: [] }

    toggle() {
      this.setState({
        foo: true
      });
    }

    componentDidMount() {
      fetch('https://www.portal.allawaken.com/api/loadconnections', {
        method: 'get'
      }).then(response => response.json())
      .then(element => this.setState({ element }));

      fetch('https://www.portal.allawaken.com/api/notmess', {
        method: 'get'
      }).then(response => response.json())
      .then(nots => this.setState({ nots }));
    }

    componentDidUpdate() {
      if (this.state.foo == true) {
        this.state.foo = false;
      }
    }

    render() {
        var par = this.state.element;
        var notifs = this.state.nots;
        var elements=[];
        var x = "";

        for (var z = 0; z < notifs.length; z++) {
          if (notifs[z]["from"] == "All Awaken") {
            elements.push(<Chatprof numstyle="display: block;" nummess={notifs[z]["num"]} selected={this.props.selected} imge="https://i.ibb.co/PxzR3GM/awaken.jpg" name="All Awaken" subtitle="no-reply" />);
          }
          else {
            elements.push(<Chatprof numstyle="display: none;" nummess="0" selected={this.props.selected} imge="https://i.ibb.co/PxzR3GM/awaken.jpg" name="All Awaken" subtitle="no-reply" />);
          }
        }

        for(var i=0;i<par.length;i++){
          for (var z = 0; z < notifs.length; z++) {
            if (notifs[z]["from"] == par[i]["name"]) {
              x = notifs[z]["num"];
            }
          }
          if (x != "") {
            elements.push(<Chatprof numstyle="display: block;" nummess={x} selected={this.props.selected} imge={par[i]["profileimg"]} name={par[i]["name"]} subtitle={par[i]["subtitle"]} />);
            x = "";
          }
          else {
            elements.push(<Chatprof numstyle="display: none;" nummess="0" selected={this.props.selected} imge={par[i]["profileimg"]} name={par[i]["name"]} subtitle={par[i]["subtitle"]} />);
          }
        };


        if (elements.length == 0) {
          return (
            <div className="empt">
              <p>No connections yet</p>
            </div>
          );
        }
        else {
          return (
              <div id="chatlist" className="chatlist">
                <h3 className="chatlist_title">Connections</h3>
                {elements}
              </div>
          );
        }
    }
}

export default Chatproflist;
