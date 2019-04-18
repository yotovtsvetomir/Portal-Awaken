import { h } from 'preact';
import Landingpage from './Landingpage'
import Blop from './Blop'
import Postlist from './Postlist'

const Latestnews = () => (
  <div className="home">
    <div className="shell">
      <div className="main">
        <div className="content" style="width: 100%;">
          <div className="posts">
            <h2 className="section_title" style="padding-top: 90px;">Latest News</h2>
            <Postlist />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Latestnews
