import { h, Component } from 'preact';

const bimage = "https://res.cloudinary.com/awaken/image/upload/f_auto/v1549100794/portal/404.webp";

export default class Fourofour extends Component {
  render() {
    return(
      <div style="height: 100vh; padding: 100px 200px;">
        <img src={bimage} style="width: 100%; height: 100%;" />
      </div>
    );
  }
}
