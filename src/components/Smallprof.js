import { h } from 'preact';
import style from './Smallprof.css'
import { Link } from 'preact-router'

function deletecon() {
  var name = document.getElementById('mmname')
  fetch('https://www.portal.allawaken.com/api/deleteconnection', {
    method: 'post',
    body: name.innerHTML
  }).then(function(response) {
    return response.text().then(function(text) {
      window.location.assign("https://www.portal.allawaken.com/myprofile/connections");
    });
  });
}

const Smallprof = ({name, subtitle, imge}) => (
  <div className="conprof">
    <Link href={`/profile/${name}`} className={style.conwrap}>
      <img src={imge} alt={"Image for profile: " + name} />
      <div className={style.cp_info}>
        <h3 id="mmname">{name}</h3>
        <h5>{subtitle}</h5>
      </div>
    </Link>
    <div className={style.cp_actions}>
      <Link onClick={deletecon} className={style.button_save}>Delete</Link>
    </div>
  </div>
);

export default Smallprof
