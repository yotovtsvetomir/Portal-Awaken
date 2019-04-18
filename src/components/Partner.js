import { h } from 'preact';
import style from './Partner.css'
import { Link } from 'preact-router'

const Partner = ({color, name, causes, vision, desc, adres, imgg}) => (
  <div className={style.partner}>
    <div className={style.partner_inner}>
      <div className={style.partner_container}>
        <img className={style.partner_image} src={imgg} alt={"Image for partner: " + name} />
        <h2>{name}</h2>
        <div className={style.partner_content}>
          <h3>Vision</h3>
          <div className={style.decor1} style={{ background: `${color}` }}></div>
          <div className={style.decor2} style={{ background: `${color}` }}></div>
          <p>{vision}</p>
        </div>
      </div>
      <div className={style.desc} style={{ background: `${color}` }}>
        <div className={style.desc_holder}>
          <p className={style.label}>Causes</p>
          <p>{causes}</p>
        </div>
        <div className={style.desc_holder}>
          <p className={style.label}>Description</p>
          <p>{desc}</p>
        </div>
        <div className={style.desc_holder}>
          <p className={style.label}>More info at</p>
          <p>{adres}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Partner
