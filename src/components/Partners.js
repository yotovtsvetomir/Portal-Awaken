import { h } from 'preact'
import style from './Partners.css'
import Partnerlist from './Partnerlist'

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Parners = () => (
  <div className="shell">
    <div className={style.phead}>
      <div className={style.phead_content}>
        <h1>Partners</h1>
      </div>
    </div>
    <div className={style.p_body}>
      <Partnerlist />
    </div>
  </div>
);

export default Parners
