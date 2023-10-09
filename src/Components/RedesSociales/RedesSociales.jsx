import SocialButtofacebook from "./../../assets/socialLogos/facebookIcon.svg";
import SocialButtoninstagram from "./../../assets/socialLogos/instagramIcon.svg";
import SocialButtontwitter from "./../../assets/socialLogos/twitterIcon.svg";
import style from "./RedesSociales.module.css";

const RedesSociales = () => {
  return (
    <div className={style.socialContainer}>
      <a
        href="https://www.instagram.com/mauriciodova/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={SocialButtoninstagram} alt="logo instagram" />
      </a>
      <a
        href="https://twitter.com/MauricioDova"
        target="_blank"
        rel="noreferrer"
      >
        <img src={SocialButtontwitter} alt="logo twitter" />
      </a>
      <a
        href="https://www.facebook.com/DovaMauricio"
        target="_blank"
        rel="noreferrer"
      >
        <img src={SocialButtofacebook} alt="logo facebook" />
      </a>
    </div>
  );
};

export default RedesSociales;
