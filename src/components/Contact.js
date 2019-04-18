import { h } from 'preact';
import style from './Contact.css'
import { Link } from 'preact-router'
import { SocialIcon } from 'react-social-icons'
import MetaTags from 'react-meta-tags'

const bimage = "https://res.cloudinary.com/awaken/image/upload/f_auto/v1549100792/portal/contact.jpg";

function sendmail() {
  var mail = document.getElementById('mail');
  var name = document.getElementById('usname');
  var txt = document.getElementById('message');
  var button = document.getElementById('ssend');

  if (mail.value == "") {
    mail.style.borderColor = "red";
  }
  else if (name.value == "") {
    name.style.borderColor = "red";
  }
  else if (txt.value == "") {
    txt.style.borderColor = "red";
  }
  else {
    fetch('https://www.portal.allawaken.com/api/sendmail', {
      method: 'post',
      body: mail.value + "//" + name.value + "//" + txt.value
    }).then(function(response) {
        mail.value = "";
        name.value = "";
        txt.value = "";
    });
    button.innerHTML = "Your message has been sent.";
    button.style.pointerEvents = "none";
    button.style.background = "#2e7d32";
  }
}

const Contact = () => (
  <div className="shell">
    <MetaTags>
        <title>All Awaken Portal - Contact us</title>
        <meta name="description" content="You can contact us directly through our form or by email." />
        <meta property="og:title" content="All Awaken Portal - Contact us" />
        <meta property="og:description" content="You can contact us directly through our form or by email." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.portal.allawaken.com/contact" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1547905379/4795.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
     </MetaTags>
    <div className={style.contact}>
      <div className={style.contact_head}>
        <img src={bimage} alt="Contacts page image"/>
        <h1>Contact</h1>
      </div>
      <div className={style.contact_body}>
        <div className={style.contact_form}>
          <h2>Form</h2>
          <div className={style.cf_holder}>
            <input id="mail" type="email" placeholder = "Email Address" />
          </div>
          <div className={style.cf_holder}>
            <input id="usname" type="text" placeholder = "Name"/>
          </div>
          <div className={style.cf_holder}>
            <textarea id="message" type="text" placeholder = "Message" />
          </div>
          <div className={style.cf_action}>
            <Link id="ssend" onClick={sendmail} className={style.button_save}>Send</Link>
          </div>
        </div>

        <div className={style.contact_info}>
          <h2>Info</h2>
          <div className={style.contact_block}>
            <p>contact@allawaken.com</p>
          </div>
          <div className={style.contact_block}>
              <SocialIcon className={style.social_icon} url="http://facebook.com/All.Awaken.Official/" style={{ height: 70, width: 70 }} fgColor="#fff" bgColor="#202124" />
              <SocialIcon className={style.social_icon} url="http://instagram.com/allawaken" style={{ height: 70, width: 70 }} fgColor="#fff" bgColor="#202124" />
              <SocialIcon className={style.social_icon} url="http://twitter.com/all_awaken" style={{ height: 70, width: 70 }} fgColor="#fff" bgColor="#202124" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact
