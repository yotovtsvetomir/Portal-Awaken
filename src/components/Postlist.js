import { h, Component } from 'preact'
import Posst from './Posst'
import render from 'preact-render-to-string'
import LazyLoad from 'react-lazyload'
import MetaTags from 'react-meta-tags'
import Fingerprint2 from 'fingerprintjs2'

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

class Postlist extends Component {
    state = { element: [], useer: [], fing: [] }

    constructor(props) {
       super(props);
     }

    componentDidMount() {
      fetch('https://www.portal.allawaken.com/api/ispostlog', {
        method: 'get'
      }).then(response => response.json())
      .then(useer => this.setState({ useer }));


      if (this.props.link == "https://www.portal.allawaken.com/api/activity") {
        fetch(this.props.link, {
          method: 'post',
          body: this.props.name
        }).then(response => response.json())
        .then(element => this.setState({ element }));
      }
      else {
        fetch(this.props.link, {
          method: 'get'
        }).then(response => response.json())
        .then(element => this.setState({ element }));
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
            if (i == 0) {
              var uuurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              var title= par[i]["title"];
              var desc= par[i]["description"];
              var imge= par[i]["imgUrl"];
            }
            if (x == 1) {
              var profli = "https://www.allawaken.com";
              var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              elements.push(<LazyLoad once height={'400'} offset={400}><Posst ussr={this.state.useer["name"]} proflink={profli} profimg={par[i]["profimg"]} link={uurl} comments={par[i]["cc"]} imge={par[i]["imgUrl"]} likes={par[i]["likes"]} title={par[i]["title"]} desc={par[i]["description"]} imge={par[i]["imgUrl"]} postby={par[i]["postby"]} poston={par[i]["poston"]} color={primaryBlue} /></LazyLoad>);
              x++;
            }
            else if (x == 2) {
              var profli = "https://www.allawaken.com";
              var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              elements.push(<LazyLoad once height={'400'} offset={400}><Posst ussr={this.state.useer["name"]} proflink={profli} profimg={par[i]["profimg"]} link={uurl} comments={par[i]["cc"]} imge={par[i]["imgUrl"]} likes={par[i]["likes"]} title={par[i]["title"]} desc={par[i]["description"]} imge={par[i]["imgUrl"]} postby={par[i]["postby"]} poston={par[i]["poston"]} color={primaryRed} /></LazyLoad>);
              x++;
            }
            else if (x == 3) {
              var profli = "https://www.allawaken.com";
              var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              elements.push(<LazyLoad once height={'400'} offset={400}><Posst ussr={this.state.useer["name"]} proflink={profli} profimg={par[i]["profimg"]} link={uurl} comments={par[i]["cc"]} imge={par[i]["imgUrl"]} likes={par[i]["likes"]} title={par[i]["title"]} desc={par[i]["description"]} imge={par[i]["imgUrl"]} postby={par[i]["postby"]} poston={par[i]["poston"]} color={primaryYellow} /></LazyLoad>);
              x++;
            }
            else if (x == 4) {
              var profli = "https://www.allawaken.com";
              var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g,"-");
              elements.push(<LazyLoad once height={'400'} offset={400}><Posst ussr={this.state.useer["name"]} proflink={profli} profimg={par[i]["profimg"]} link={uurl} comments={par[i]["cc"]} imge={par[i]["imgUrl"]} likes={par[i]["likes"]} title={par[i]["title"]} desc={par[i]["description"]} imge={par[i]["imgUrl"]} postby={par[i]["postby"]} poston={par[i]["poston"]} color={primaryGreen} /></LazyLoad>);
              x++;
            }
        }

        if (this.props.link == "https://www.portal.allawaken.com/api/posts") {
          return (
              <div>
              {elements}
              </div>
          );
        }
        else {
          return (
              <div>
              {elements}
              </div>
          );
        }
    }
}

export default Postlist;
