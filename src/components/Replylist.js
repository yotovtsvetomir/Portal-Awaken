import { h, Component } from 'preact'
import Reply from './Reply'
import render from 'preact-render-to-string'

class Replylist extends Component {
    state = { element: [], roo: false }

    toggle() {
      this.setState({
        roo: true
      });
    }

    componentDidMount() {
      fetch('https://www.portal.allawaken.com/api/upreplies', {
        method: 'get'
      });

      fetch('https://www.portal.allawaken.com/api/replies', {
        method: 'post',
        body: this.props.name + "//" + this.props.content
      }).then(response => response.json())
      .then(element => this.setState({ element }));
    }

    componentDidUpdate() {
      if (this.state.roo == true) {
        fetch('https://www.portal.allawaken.com/api/upreplies', {
          method: 'get'
        });

        fetch('https://www.portal.allawaken.com/api/replies', {
          method: 'post',
          body: this.props.name + "//" + this.props.content
        }).then(response => response.json())
        .then(element => this.setState({ element }));
        this.state.roo = false;
      }

    }

    render() {
        var par = this.state.element;
        var elements=[];
        var x = 1;
        for(var i=0;i<par.length;i++){
          if (this.props.mat == par[i]["user"]) {
            elements.push(<Reply dellee={this.props.dele} jj="yes" imge={par[i]["imge"]} likes={par[i]["likes"]} name={par[i]["user"]} content={par[i]["content"]} commenton={par[i]["commenton"]} />);
          }
          else if (this.props.mat == "All Awaken") {
            elements.push(<Reply dellee={this.props.dele} jj="yes" imge={par[i]["imge"]} likes={par[i]["likes"]} name={par[i]["user"]} content={par[i]["content"]} commenton={par[i]["commenton"]} />);
          }
          else {
            elements.push(<Reply dellee={this.props.dele} jj="no" imge={par[i]["imge"]} likes={par[i]["likes"]} name={par[i]["user"]} content={par[i]["content"]} commenton={par[i]["commenton"]} />);
          }
        };

        return (
            <div>
              {elements}
            </div>
        );
    }
}

export default Replylist;
