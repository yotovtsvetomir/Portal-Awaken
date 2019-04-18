import { h, Component } from 'preact'
import Blop from './Blop'
import render from 'preact-render-to-string'

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

class Bloplist extends Component {
    state = { element: [], zoo: false }

    toggle() {
      this.setState({
        zoo: true
      });
    }

    componentDidMount() {
      fetch(this.props.lid, {
        method: 'get'
      }).then(response => response.json())
      .then(element => this.setState({ element }));
    }

    componentDidUpdate() {
      if (this.state.zoo == true) {
        this.state.zoo = false;
      }
    }

    render() {
        var par = this.state.element;
        var elements=[];
        var x = 1;
        for(var i=0;i<par.length;i++){
          if (x == 5) {
            x = 1;
          }
          if (x == 1) {
            var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"];
            elements.push(<Blop postby={par[i]["postby"]} poston={par[i]["poston"]} llink={uurl} imgg={par[i]["imgUrl"]} title={par[i]["title"]} desc={par[i]["description"]} color={primaryBlue} />);
            x++;
          }
          else if (x == 2) {
            var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"];
            elements.push(<Blop postby={par[i]["postby"]} poston={par[i]["poston"]} llink={uurl} imgg={par[i]["imgUrl"]} title={par[i]["title"]} desc={par[i]["description"]} color={primaryRed} />);
            x++;
          }
          else if (x == 3) {
            var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"];
            elements.push(<Blop postby={par[i]["postby"]} poston={par[i]["poston"]} llink={uurl} imgg={par[i]["imgUrl"]} title={par[i]["title"]} desc={par[i]["description"]} color={primaryGreen} />);
            x++;
          }
          else if (x == 4) {
            var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"];
            elements.push(<Blop postby={par[i]["postby"]} poston={par[i]["poston"]} llink={uurl} imgg={par[i]["imgUrl"]} title={par[i]["title"]} desc={par[i]["description"]} color={primaryYellow} />);
            x++;
          }
        };

        return (
          <div>
            {elements}
          </div>
        );
    }
}

export default Bloplist;
