import { h, Component } from 'preact'
import Smallprof from './Smallprof'
import render from 'preact-render-to-string'

class Smallproflist extends Component {
    state = { element: [], foo: false }

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
    }

    componentDidUpdate() {
      if (this.state.foo == true) {
        this.state.foo = false;
      }
    }

    render() {
        var par = this.state.element;
        var elements=[];
        var x = 1;
        for(var i=0;i<par.length;i++){
          elements.push(<Smallprof imge={par[i]["profileimg"]} name={par[i]["name"]} subtitle={par[i]["subtitle"]} />);
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
              <div className="conlist">
                {elements}
              </div>
          );
        }
    }
}

export default Smallproflist;
