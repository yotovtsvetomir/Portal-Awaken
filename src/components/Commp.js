import { h } from 'preact';
import style from './Community.css'
import Compostlist from './Compostlist'

const bimage = require('./images/post.jpg');

function showcp() {
  if (document.getElementById('createpost').style.display == "block") {
    document.getElementById('createpost').style.display = "none";
  }
  else if (document.getElementById('createpost').style.display == "") {
    document.getElementById('createpost').style.display = "block";
  }
  else {
    document.getElementById('createpost').style.display = "block";
  }
}

function createpost() {
  var title = document.getElementById('title');
  var desc = document.getElementById('desc');
  var content = document.getElementById('content');

  var file = document.getElementById('in1').files[0];

  if (file.size >= 300000) {
    alert("The Maximum Image size is 300kb, please upload smaller image.");
    return false;
  }

  var fd = new FormData();
  fd.append('upload_preset', 'awaken');
  fd.append('tags', 'browser_upload');
  fd.append('file', file);

  fetch('https://api.cloudinary.com/v1_1/awaken/upload', {
    method: 'post',
    body: fd
  }).then(function(response) {
    return response.json().then(function(resp) {
      var x = resp["secure_url"];
      var y = resp["public_id"];
      fetch('https://www.portal.allawaken.com/api/createcompost', {
        method: 'post',
        body: title.value + "//" + desc.value + "//" + content.value + "//" + x
      }).then(function(response) {
        return response.text().then(function(text) {
          window.location.assign("http://www.portal.allawaken.com/community");
        });
      });
    });
  });
}

function previewImg() {
  var preview = document.getElementById('sprofimg');
  var file    = document.getElementById('in1').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

const Commp = () => (
    <div className="shell">
      <div className={style.community}>
        <div className={style.c_head}>
          <h1>Awaken Community</h1>
          <div className={style.c_intro}>
            <div onClick={showcp} className={style.c_block}>
              <i className="material-icons">public</i>
              <p>Create Post</p>
            </div>
            <a href="/community" className={style.c_block}>
              <i className="material-icons">device_hub</i>
              <p>Most relevant Posts</p>
            </a>
            <a href="/community/mostpopular" className={style.c_block}>
              <i className="material-icons">group</i>
              <p>Most popular Posts</p>
            </a>
            <div className={style.c_block}>
              <i className="material-icons">share</i>
              <p>Find Post</p>
            </div>
          </div>

          <div id="createpost" className={style.createpost}>
            <h2>Create Post</h2>
            <div className={style.cp_form}>
              <div className={style.cp_holder}>
                <label id="lbl_title" for="title">Title</label>
                <input id="title" type="text" />
              </div>
              <div className={style.cp_holder}>
                <label id="lbl_desc" for="desc">Description</label>
                <input id="desc" type="text" />
              </div>
              <div className={style.ps_smallpic}>
                <img id="sprofimg" className={style.ps_smpic} src={bimage} alt="Image placeholder"></img>
                <input id="in1" onChange={previewImg} className={style.imin} type="file" />
                <a><p>Front Image</p></a>
              </div>
              <div className={style.cp_holder}>
                <label id="lbl_content" for="content">Content</label>
                <textarea id="content" type="text" />
              </div>
              <div className={style.ps_action}>
                <a className={style.button_save}>Cancel</a>
                <a onClick={createpost} className={style.button_save}>Submit</a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.c_body}>
          <div className={style.c_posts}>
            <Compostlist link="https://www.portal.allawaken.com/api/topcomposts" />
          </div>
        </div>
      </div>
    </div>
);

export default Commp
