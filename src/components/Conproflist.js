import { h, Component } from 'preact'
import Conprof from './Conprof'
import render from 'preact-render-to-string'

class Conproflist extends Component {
    state = { element: [], ttt: [], foo: false }

    toggle() {
      this.setState({
        foo: true
      });
    }

    componentDidMount() {
      fetch('https://www.portal.allawaken.com/api/loadrequests', {
        method: 'get'
      }).then(response => response.json())
      .then(element => this.setState({ element }));

      fetch('https://www.portal.allawaken.com/api/loadreqtext', {
        method: 'get'
      }).then(response => response.json())
      .then(ttt => this.setState({ ttt }));
    }

    componentDidUpdate() {
      if (this.state.foo == true) {
        this.state.foo = false;
      }
    }

    render() {
        var par = this.state.element;
        var tekst = this.state.ttt;
        var elements=[];
        var x = 1;
        for(var i=0;i<par.length;i++){
          elements.push(<Conprof texxt={tekst[i]["text"]} imge={par[i]["profileimg"]} name={par[i]["name"]} subtitle={par[i]["subtitle"]} />);
        };

        if (elements.length == 0) {
          return (
            <div className="empt">
              <p>No pending requests</p>
            </div>
          );
        }
        else {
          return (
              <div className="notifications">
                {elements}
              </div>
          );
        }
    }
}

export default Conproflist;
