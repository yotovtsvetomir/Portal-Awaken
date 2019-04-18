import { h, Component } from 'preact'
import Message from './Message'
import render from 'preact-render-to-string'
import LazyLoad from 'react-lazy-load';

class Messagelist extends Component {
    state = { element: [], goo: false, name: "me" }

    toggle() {
      this.setState({
        goo: true
      });
    }

    componentDidMount() {
      fetch('https://www.portal.allawaken.com/api/loadmessages', {
        method: 'post',
        body: this.state.name
      }).then(response => response.json())
      .then(element => this.setState({ element }));
    }

    componentDidUpdate() {
      if (this.state.goo == true) {
        fetch('https://www.portal.allawaken.com/api/loadmessages', {
          method: 'post',
          body: this.state.name
        }).then(response => response.json())
        .then(element => this.setState({ element }));
        this.state.goo = false;
      }
    }

    render() {
        var par = this.state.element;
        var elements=[];
        var x = 1;
        for(var i=0;i<par.length;i++){
          elements.push(<LazyLoad><Message txt={par[i]["txt"]} from={par[i]["from"]} current={this.state.name} /></LazyLoad>);
        };

        if (elements.length == 0) {
          return (
            <div className="messages">
              <p style="color: rgba(0,0,0, .7); font-size: 25px; text-align:center; padding-bottom: 20px;">No Messages</p>
            </div>
          );
        }
        else {
          return (
              <div className="messages">
                {elements}
              </div>
          );
        }
    }
}

export default Messagelist;
