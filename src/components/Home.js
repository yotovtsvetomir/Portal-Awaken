import { h, Component } from 'preact';
import Landingpage from './Landingpage'
import Bloplist from './Bloplist'
import Postlist from './Postlist'
import MetaTags from 'react-meta-tags'
import { hotjar } from 'react-hotjar';
import JsonLd from 'react-jsonld';

const primaryRed = "#e53935";
const secondaryRed = "#ffebee";

const primaryBlue = "#1e88e5";
const secondaryBlue = "#bbdefb";

const primaryGreen = "#43a047";
const secondaryGreen = "#e8f5e9";

const primaryYellow = "#fbc02d";
const secondaryYellow = "#fffde7";

const hjid = 1181890;
const hjsv = 6;

const data =
{
  "@context": "https://www.schema.org",
  "@type": "Organization",
  "name": "All Awaken",
  "alternateName": "All Awaken",
  "url": "https://www.portal.allawaken.com/",
  "sameAs" : [
   "https://www.instagram.com/allawaken",
   "https://twitter.com/all_awaken",
   "https://www.facebook.com/All.Awaken.Official/"
  ]
};

const data2 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Top Stories",
    "item": "https://www.portal.allawaken.com/topstories"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Community",
    "item": "https://www.portal.allawaken.com/community"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Sign In",
    "item": "https://www.portal.allawaken.com/login"
  },{
    "@type": "ListItem",
    "position": 4,
    "name": "Sign Up",
    "item": "https://www.portal.allawaken.com/register"
  },{
    "@type": "ListItem",
    "position": 5,
    "name": "Partners",
    "item": "https://www.portal.allawaken.com/partners"
  },{
    "@type": "ListItem",
    "position": 6,
    "name": "Contact Us",
    "item": "https://www.portal.allawaken.com/contact"
  }]
};

export default class Home extends Component {
  componendDidMount() {
    /* hotjar.initialize(hjid, hjsv); */
  }

  render () {
    return (
      <div className="home">
        <MetaTags>
          <title>All Awaken Portal - Time to wake up!</title>
          <meta name="description" content="Here we connect. We will work together in order to spead the truth and build strong community where everyone will be heard." />
          <meta name ="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

          <meta property="og:title" content="All Awaken Portal - Time to wake up!" />
          <meta property="og:description" content="Here we connect. We will work together in order to spead the truth and build strong community where everyone will be heard." />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.portal.allawaken.com" />
					<meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1549533587/portal/blacklogo.jpg" />
          <meta property="fb:app_id" content="1118435171656958"/>

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@All_Awaken" />
          <meta name="twitter:creator" content="@All_Awaken" />
          <meta name="twitter:title" content="All Awaken Portal - Time to wake up!" />
          <meta name="twitter:description" content="Here we connect. We will work together in order to spead the truth and build strong community where everyone will be heard." />
          <meta name="twitter:image" content="https://res.cloudinary.com/awaken/image/upload/v1549533587/portal/blacklogo.jpg" />

          <JsonLd data={data} />
          <JsonLd data={data2} />
        </MetaTags>
        <div className="shell">
          <Landingpage />
          <div className="main">
            <div className="content">
              <div className="posts" style="width: 100%;">
                <h2 className="home_title">Latest</h2>
                <Postlist link="https://www.portal.allawaken.com/api/posts" />
              </div>
            </div>
            <div className="blopss">
              <h2 className="home_title">Popular</h2>
              <div className="blobs">
                <Bloplist lid="https://www.portal.allawaken.com/api/blops" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
