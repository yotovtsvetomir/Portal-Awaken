import { h } from 'preact';
import style from './Conprof.css'
import { Link } from 'preact-router'

function addcon() {
  var name = document.getElementById('nnname')
  fetch('https://www.portal.allawaken.com/api/addconnection', {
    method: 'post',
    body: name.innerHTML
  }).then(function(response) {
    return response.text().then(function(text) {
      window.location.assign("http://www.portal.allawaken.com/myprofile/connections");
    });
  });
}

function deletereq() {
  var name = document.getElementById('nnname')
  fetch('https://www.portal.allawaken.com/api/deleterequest', {
    method: 'post',
    body: name.innerHTML
  }).then(function(response) {
    return response.text().then(function(text) {
      window.location.assign("http://www.portal.allawaken.com/myprofile/connections");
    });
  });
}

const Conprof = ({name, subtitle, texxt, imge}) => (
  <div className="conprof">
    <Link href={`/profile/${name}`} className={style.conwrap}>
      <img src={imge} alt={"Image for profile: " + name}/>
      <div className={style.cp_info}>
        <h3 id="nnname">{name}</h3>
        <h5>{subtitle}</h5>
      </div>
    </Link>
    <div className={style.cp_content}>
      <p>{texxt}</p>
    </div>
    <div className={style.cp_actions}>
      <Link onClick={addcon} className={style.button_save}>Accept</Link>
      <Link onClick={deletereq} className={style.button_save}>Decline</Link>
    </div>
  </div>
);

export default Conprof
