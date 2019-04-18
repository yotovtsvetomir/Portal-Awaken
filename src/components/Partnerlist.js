import { h, Component } from 'preact'
import Partner from './Partner'
import render from 'preact-render-to-string'

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

class Partnerlist extends Component {
    state = { element: [] }

    componentDidMount() {
      fetch('https://www.portal.allawaken.com/api/partners', {
        method: 'get'
      }).then(response => response.json())
      .then(element => this.setState({ element }));
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
            elements.push(<Partner name={par[i]["name"]} causes={par[i]["causes"]} vision={par[i]["vision"]} desc={par[i]["desc"]} adres={par[i]["link"]} imgg={par[i]["img"]} color={primaryBlue} />);
            x++;
          }
          else if (x == 2) {
            elements.push(<Partner name={par[i]["name"]} causes={par[i]["causes"]} vision={par[i]["vision"]} desc={par[i]["desc"]} adres={par[i]["link"]} imgg={par[i]["img"]} color={primaryRed} />);
            x++;
          }
          else if (x == 3) {
            elements.push(<Partner name={par[i]["name"]} causes={par[i]["causes"]} vision={par[i]["vision"]} desc={par[i]["desc"]} adres={par[i]["link"]} imgg={par[i]["img"]} color={primaryYellow} />);
            x++;
          }
          else if (x == 4) {
            elements.push(<Partner name={par[i]["name"]} causes={par[i]["causes"]} vision={par[i]["vision"]} desc={par[i]["desc"]} adres={par[i]["link"]} imgg={par[i]["img"]} color={primaryGreen} />);
            x++;
          }
        };

        return (
            <div className="partners">
              {elements}
            </div>
        );

    }
}

export default Partnerlist;
