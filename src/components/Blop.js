import { h } from 'preact';
import style from './Blop.css'

const Blop = ({title, desc, imgg, color, llink, poston, postby}) => (
    <a href={llink} className={style.blop}>
      <div className={style.blop_image} style={{ backgroundImage : `url(${imgg})` }}></div>
      <div className={style.blop_content}>
        <h3>{title}</h3>
        <p style="margin-bottom: 16px; color: rgba(0,0,0, .7); padding-right: 10px;">{desc}</p>
        <div style="display: flex; justify-content: space-between; align-items: flex-end;">
          <p>{poston}</p>
          <p style="color: rgba(0,0,0, .7)">All Awaken</p>
        </div>
      </div>
    </a>
);

export default Blop
