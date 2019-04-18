import { h, Component } from 'preact'
import Posst from './Posst'
import render from 'preact-render-to-string'

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

class Postlist extends Component {
    state = { element: [], useer: [] }

    constructor(props) {
       super(props);
   }

    componentDidMount() {
      fetch(this.props.link, {
        method: 'get'
      }).then(response => response.json())
      .then(element => this.setState({ element }));

      fetch('https://www.portal.allawaken.com/api/ispostlog', {
        method: 'get'
      }).then(response => response.json())
      .then(useer => this.setState({ useer }));
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
              var profli = "https://www.portal.allawaken.com/profile/" + par[i]["postby"];
              var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              elements.push(<Posst ussr={this.state.useer["name"]} proflink={profli} profimg={par[i]["profimg"]} link={uurl} comments={par[i]["cc"]} imge={par[i]["imgUrl"]} likes={par[i]["likes"]} title={par[i]["title"]} desc={par[i]["description"]} imge={par[i]["imgUrl"]} postby={par[i]["postby"]} poston={par[i]["poston"]} color={primaryBlue} />);
              x++;
            }
            else if (x == 2) {
              var profli = "https://www.portal.allawaken.com/profile/" + par[i]["postby"];
              var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              elements.push(<Posst ussr={this.state.useer["name"]} proflink={profli} profimg={par[i]["profimg"]} link={uurl} comments={par[i]["cc"]} imge={par[i]["imgUrl"]} likes={par[i]["likes"]} title={par[i]["title"]} desc={par[i]["description"]} imge={par[i]["imgUrl"]} postby={par[i]["postby"]} poston={par[i]["poston"]} color={primaryRed} />);
              x++;
            }
            else if (x == 3) {
              var profli = "https://www.portal.allawaken.com/profile/" + par[i]["postby"];
              var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              elements.push(<Posst ussr={this.state.useer["name"]} proflink={profli} profimg={par[i]["profimg"]} link={uurl} comments={par[i]["cc"]} imge={par[i]["imgUrl"]} likes={par[i]["likes"]} title={par[i]["title"]} desc={par[i]["description"]} imge={par[i]["imgUrl"]} postby={par[i]["postby"]} poston={par[i]["poston"]} color={primaryYellow} />);
              x++;
            }
            else if (x == 4) {
              var profli = "https://www.portal.allawaken.com/profile/" + par[i]["postby"];
              var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              elements.push(<Posst ussr={this.state.useer["name"]} proflink={profli} profimg={par[i]["profimg"]} link={uurl} comments={par[i]["cc"]} imge={par[i]["imgUrl"]} likes={par[i]["likes"]} title={par[i]["title"]} desc={par[i]["description"]} imge={par[i]["imgUrl"]} postby={par[i]["postby"]} poston={par[i]["poston"]} color={primaryGreen} />);
              x++;
            }
        }

        return (
            <div>
            {elements}
            </div>
        );
    }
}

export default Postlist;
