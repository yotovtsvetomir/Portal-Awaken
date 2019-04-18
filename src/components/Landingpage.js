import { h } from 'preact';
import style from './Landingpage.css'

const fp = "https://res.cloudinary.com/awaken/image/upload/f_auto/v1549559990/portal/avatar.jpg";

const Landingpage = () => (
    <div className={style.lp}>
      <div className={style.lp_content}>
        <div className={style.lp_title}>
          <h1>Welcome to All Awaken Portal</h1>
          <h1 style="padding-left: 80px;">It's time to wake up</h1>
        </div>
        <div className={style.lp_image} style={{ backgroundImage : `url(${fp})` }}>
        </div>
      </div>
    </div>
);

export default Landingpage
