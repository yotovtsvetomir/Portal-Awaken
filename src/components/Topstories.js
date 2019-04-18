import { h } from 'preact';
import Landingpage from './Landingpage'
import Blop from './Blop'
import Postlist from './Postlist'
import Bloplist from './Bloplist'

const Topstories = () => (
  <div className="home">
    <div className="shell">
      <div className="main">
        <div className="content" style="width: 100%; display: flex; justify-content: space-between;">
          <div className="posts">
            <h2 className="section_title" style="padding-top: 90px;">Top Stories</h2>
            <Postlist link="https://www.portal.allawaken.com/api/topposts"/>
          </div>
          <div className="blopss" style="width: 19%; padding-top: 145px;">
            <Bloplist lid="https://www.portal.allawaken.com/api/topblops"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Topstories
