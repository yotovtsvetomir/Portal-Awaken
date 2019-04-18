import { h, Component } from 'preact'
import style from './Admin.css'
import Fingerprint2 from 'fingerprintjs2'

const bimage = require('./images/post.jpg');

function createpost() {
  var title = document.getElementById('title');
  var desc = document.getElementById('desc');
  var content = document.getElementById('content');

  var preview = document.getElementById('sprofimg');
  var file    = document.getElementById('in1').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

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
      fetch('https://www.portal.allawaken.com/api/createpost', {
        method: 'post',
        body: title.value + "//" + desc.value + "//" + content.value + "//" + x
      }).then(function(response) {
        return response.text().then(function(text) {
          if (text == "Success") {
            document.getElementById('access').innerHTML = "SUCCESS";
            window.location.assign("https://www.portal.allawaken.com");
          }
          else {
            document.getElementById('access').innerHTML = "ACCESS DENIED!";
            document.getElementById('lbl_title').innerHTML = "ACCESS DENIED!";
            document.getElementById('lbl_desc').innerHTML = "ACCESS DENIED!";
            document.getElementById('lbl_content').innerHTML = "ACCESS DENIED!";
            document.getElementById('btcl').innerHTML = "ACCESS DENIED!";
            document.getElementById('btsub').innerHTML = "ACCESS DENIED!";
            document.getElementById('title').value = "ACCESS DENIED!";
            document.getElementById('desc').value = "ACCESS DENIED!";
            document.getElementById('content').value = "ACCESS DENIED!";
          }
        });
      });
    });
  });
}

function createblop() {
  var title = document.getElementById('title');
  var desc = document.getElementById('desc');
  var content = document.getElementById('content');

  var preview = document.getElementById('sprofimg');
  var file    = document.getElementById('in1').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

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
      fetch('https://www.portal.allawaken.com/api/createblop', {
        method: 'post',
        body: title.value + "//" + desc.value + "//" + content.value + "//" + x
      }).then(function(response) {
        return response.text().then(function(text) {
          if (text == "Success") {
            document.getElementById('access').innerHTML = "SUCCESS";
            window.location.assign("https://www.portal.allawaken.com");
          }
          else {
            document.getElementById('access').innerHTML = "ACCESS DENIED!";
            document.getElementById('lbl_title').innerHTML = "ACCESS DENIED!";
            document.getElementById('lbl_desc').innerHTML = "ACCESS DENIED!";
            document.getElementById('lbl_content').innerHTML = "ACCESS DENIED!";
            document.getElementById('btcl').innerHTML = "ACCESS DENIED!";
            document.getElementById('btsub').innerHTML = "ACCESS DENIED!";
            document.getElementById('title').value = "ACCESS DENIED!";
            document.getElementById('desc').value = "ACCESS DENIED!";
            document.getElementById('content').value = "ACCESS DENIED!";
          }
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

function previewImg7() {
  var preview = document.getElementById('sprofimg7');
  var file    = document.getElementById('in7').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function broadmess() {
  var messg = document.getElementById('messg');
  fetch('https://www.portal.allawaken.com/api/broadcastmessage', {
    method: 'post',
    body: messg.value
  }).then(function(response) {
    return response.text().then(function(text) {
      if ( text == "Success" ) {
        document.getElementById('btcl').innerHTML = text;
      }
    });
  });
}

function clearbroad() {
  fetch('https://www.portal.allawaken.com/api/clearbroad', {
    method: 'get'
  }).then(function(response) {
    return response.text().then(function(text) {
      if ( text == "Success" ) {
        document.getElementById('btclear').innerHTML = text;
      }
    });
  });
}

function account() {
  fetch('https://www.portal.allawaken.com/api/accounts', {
    method: 'get'
  }).then(function(response) {
    return response.text().then(function(text) {
      document.getElementById('acc').innerHTML = text;
    });
  });
}

function createpartner() {
  var name  = document.getElementById('partnername');
  var vision  = document.getElementById('vision');
  var description  = document.getElementById('description');
  var causes  = document.getElementById('causes');
  var website  = document.getElementById('website');
  var position  = document.getElementById('position');

  var preview = document.getElementById('sprofimg7');
  var file    = document.getElementById('in7').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

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
      var xx = resp["secure_url"];
      var y = resp["public_id"];
      fetch('https://www.portal.allawaken.com/api/createpartner', {
        method: 'post',
        body: name.value + "//" + vision.value  + "//" + description.value  + "//" + causes.value  + "//" + website.value + "//" + position.value + "//" + xx
      }).then(function(response) {
        return response.text().then(function(text) {
          document.getElementById('btpartner').innerHTML = "Success";
          name.value = "";
          vision.value = "";
          description.value = "";
          causes.value = "";
          website.value = "";
          position.value = "";
        });
      });
    });
  });
}

function deleteblop() {
  var blopname = document.getElementById('blopname');
  fetch('https://www.portal.allawaken.com/api/deleteblop', {
    method: 'post',
    body: blopname.value
  }).then(function(response) {
    return response.text().then(function(text) {
      document.getElementById('delblop').innerHTML = "Success";
      blopname.value = "";
    });
  });
}

function deletepartner() {
  var partnername = document.getElementById('partnrname');
  fetch('https://www.portal.allawaken.com/api/deletepartner', {
    method: 'post',
    body: partnername.value
  }).then(function(response) {
    return response.text().then(function(text) {
      document.getElementById('delpartner').innerHTML = "Success";
      partnername.value = "";
    });
  });
}

export default class Admin extends Component {
  componentDidMount() {
    Fingerprint2.get(function (components) {
      fetch('https://www.portal.allawaken.com/api/islog', {
        method: 'post',
        body: JSON.stringify(components)
      }).then(function(response) {
        return response.text().then(function(text) {
          if (text != "Out") {
            var user = JSON.parse(text)
            if (user["name"] != "All Awaken") {
              window.location.assign("https://www.portal.allawaken.com/notfound");
            }
          }
          else {
            window.location.assign("https://www.portal.allawaken.com/notfound");
          }
        });
      });
    });
  }

  render() {
      return (
        <div id="createpost" className={style.createpost}>
          <h2 id="access">Create Post</h2>
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
              <a id="btsub" onClick={createpost} className={style.button_save}>Create Post</a>
              <a id="btblop" onClick={createblop} className={style.button_save}>Create Blop</a>
            </div>
          </div>

          <div className={style.cp_form}>
            <h2 id="access">Broadcast Message</h2>
              <div className={style.cp_holder}>
                <label id="lbl_messg" for="content">Message</label>
                <textarea id="messg" type="text" />
              </div>
            <div className={style.broad}>
              <a id="btclear" onClick={clearbroad} className={style.button_save}>Clear all broadcasted messages.</a>
              <a id="btcl" onClick={broadmess} className={style.button_save}>Broadcast message</a>
            </div>
          </div>

          <div className={style.cp_form}>
            <h2 id="access">Create Partner</h2>
            <div className={style.cp_holder}>
              <label>Name</label>
              <input id="partnername" type="text" />
            </div>
            <div className={style.cp_holder}>
              <label>Vision</label>
              <input id="vision" type="text" />
            </div>
            <div className={style.cp_holder}>
              <label>Description</label>
              <input id="description" type="text" />
            </div>
            <div className={style.cp_holder}>
              <label>Causes</label>
              <input id="causes" type="text" />
            </div>
            <div className={style.cp_holder}>
              <label>Website</label>
              <input id="website" type="text" />
            </div>
            <div className={style.cp_holder}>
              <label>Position</label>
              <input id="position" type="text" />
            </div>
            <div className={style.ps_smallpic}>
              <img id="sprofimg7" className={style.ps_smpic} src={bimage} alt="Image placeholder"></img>
              <input id="in7" onChange={previewImg7} className={style.imin} type="file" />
              <a><p>Front Image</p></a>
            </div>
            <div className={style.ps_action}>
              <a id="btpartner" onClick={createpartner} className={style.button_save}>Create Partner</a>
            </div>
            <div className={style.ps_action}>
              <a id="acc" onClick={account} className={style.button_save}>Total Accounts</a>
            </div>
            <div>
              <div className={style.cp_holder}>
                <label>Blop Name</label>
                <input id="blopname" type="text" />
              </div>
              <div className={style.ps_action}>
                <a id="delblop" onClick={deleteblop} className={style.button_save}>Delete Blop</a>
              </div>
            </div>
            <div>
              <div className={style.cp_holder}>
                <label>Partner name</label>
                <input id="partnrname" type="text" />
              </div>
              <div className={style.ps_action}>
                <a id="delpartner" onClick={deletepartner} className={style.button_save}>Delete Partner</a>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
