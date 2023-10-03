import SocialButtonmail from "./../../assets/socialLogos/SocialButtonmail.png";
import SocialButtofacebook from "./../../assets/socialLogos/SocialButtonfacebook.png";
import SocialButtoninstagram from "./../../assets/socialLogos/SocialButtoninstagram.png";
import SocialButtontwitter from "./../../assets/socialLogos/SocialButtontwitter.png";
import style from "./RedesSociales.module.css";

const RedesSociales = () => {
  return (
    <div className={style.socialContainer}>
      <a href="https://mail.google.com">
        <img src={SocialButtonmail} alt="logo mail" />
      </a>
      <a href="https://twitter.com/MauricioDova">
        <img src={SocialButtontwitter} alt="logo twitter" />
      </a>
      <a href="https://www.instagram.com/mauriciodova/">
        <img src={SocialButtoninstagram} alt="logo instagram" />
      </a>
      <a href="https://www.facebook.com/DovaMauricio">
        <img src={SocialButtofacebook} alt="logo facebook" />
      </a>
    </div>
  );
};

export default RedesSociales;
