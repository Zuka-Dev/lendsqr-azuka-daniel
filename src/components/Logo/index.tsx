import logoImg from "../../assets/Union.png";
import logo from "../../assets/logo.png";
import "./Logo.scss"
type Props = {
    visibility?: string | any;
};
const Logo: React.FC<Props> = ({ visibility }) => {
    return (
        <div className="logo" style={{background: "white", visibility }}>
            <img src={logoImg} className="logo__img" alt="logoImg" />
            <img src={logo} className="logo__text" alt="logo" />
        </div>
    );
};

export default Logo;
