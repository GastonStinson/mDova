import SocialButtonmail from "./../../assets/socialLogos/SocialButtonmail.png";
import SocialButtofacebook from "./../../assets/socialLogos/SocialButtonfacebook.png";
import SocialButtoninstagram from "./../../assets/socialLogos/SocialButtoninstagram.png";
import SocialButtontwitter from "./../../assets/socialLogos/SocialButtontwitter.png";
import style from "./RedesSociales.module.css";

const RedesSociales = () => {
  return (
    <div className={style.socialContainer}>
      <a href="mailto:social@mauriciodova.com" target="_blank" rel="noreferrer">
        <img src={SocialButtonmail} alt="logo mail" />
      </a>
      <a
        href="https://twitter.com/MauricioDova"
        target="_blank"
        rel="noreferrer"
      >
        <img src={SocialButtontwitter} alt="logo twitter" />
      </a>
      <a
        href="https://www.instagram.com/mauriciodova/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={SocialButtoninstagram} alt="logo instagram" />
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
