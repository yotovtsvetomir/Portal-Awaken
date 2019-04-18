import { h, Component } from 'preact'
import Comment from './Comment'
import render from 'preact-render-to-string'
import Fingerprint2 from 'fingerprintjs2'

class CommentList extends Component {
    state = { element: [], foo: false, usr: []}

    toggle() {
      this.setState({
        foo: true
      });
    }

    componentDidMount() {
      fetch('https://www.portal.allawaken.com/api/upcomments', {
        method: 'get'
      });

      fetch('https://www.portal.allawaken.com/api/ispostlog', {
        method: 'get'
      }).then(response => response.json())
      .then(usr => this.setState({ usr }));

      fetch('https://www.portal.allawaken.com/api/comments', {
        method: 'post',
        body: this.props.title
      }).then(response => response.json())
      .then(element => this.setState({ element }));
    }

    componentDidUpdate() {
      if (this.state.foo == true) {
        fetch('https://www.portal.allawaken.com/api/upcomments', {
          method: 'get',
        });

        Fingerprint2.get(function (components) {
          fetch('https://www.portal.allawaken.com/api/islog', {
            method: 'post',
            body: JSON.stringify(components)
          }).then(response => response.json())
          .then(usr => this.setState({ usr }));
        });

        fetch('https://www.portal.allawaken.com/api/comments', {
          method: 'post',
          body: this.props.title
        }).then(response => response.json())
        .then(element => this.setState({ element }));

        this.state.foo = false;
      }
    }

    render() {
        var par = this.state.element;
        var elements=[];
        var x = 1;
        for(var i=0;i<par.length;i++){
          if (this.state.usr["name"] == par[i]["user"]) {
            elements.push(<Comment matz="yes" repp={this.state.usr["name"]} del={this.props.del} imgg={this.props.imggg} rr={par[i]["rr"]} imge={par[i]["imge"]} likes={par[i]["likes"]} name={par[i]["user"]} content={par[i]["content"]} commenton={par[i]["commenton"]} />);
          }
          else {
            elements.push(<Comment matz="no" repp={this.state.usr["name"]} del={this.props.del} imgg={this.props.imggg} rr={par[i]["rr"]} imge={par[i]["imge"]} likes={par[i]["likes"]} name={par[i]["user"]} content={par[i]["content"]} commenton={par[i]["commenton"]} />);
          }

        };

        return (
            <div>
              {elements}
            </div>
        );
    }
}

export default CommentList;
