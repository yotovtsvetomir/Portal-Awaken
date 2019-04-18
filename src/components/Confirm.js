import { h, Component } from 'preact';
import render from 'preact-render-to-string'

export default class Confirm extends Component {
  componentDidMount() {
    const tok = this.props.token;
    fetch(`https://www.portal.allawaken.com/api/confirm/${tok}`, {
      method: 'get'
    }).then(function(response) {
      return response.text().then(function(text) {
        var el = document.getElementById("el");
        el.innerHTML = text
      });
    });
  }
  render() {
    return(
      <div>
        <h3 id="el" className="here">You have confirmed your account. Now you can login.</h3>
      </div>
    );
  }
}
