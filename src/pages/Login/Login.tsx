import background from "../../assets/background.png";
import { useState } from "react";
import "./Login.scss";
import Logo from "../../components/Logo";
const Login: React.FC = () => {
    const [passwordType, setPasswordType] = useState<string>("password");
    const clickHandler = () => {
        passwordType === "password"
            ? setPasswordType("text")
            : setPasswordType("password");
    };
    return (
        <main>
            <section className="left">
                <Logo />
                <div className="background">
                    <img src={background} alt="background" />
                </div>
            </section>
            <section className="right">
                    <div className="logo">
                        <Logo
                            visibility={
                                window.innerWidth <= 860 ? "visible" : "hidden"
                            }
                        />
                    </div>
                <div className="inner-div">
                    <h1 className="title">Welcome!</h1>
                    <p className="subtitle">Enter details to login.</p>
                    <div className="form">
                        <div className="input">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input">
                            <input
                                type={passwordType}
                                placeholder="Password"
                                required
                            />
                            <button onClick={clickHandler}>
                                {passwordType === "password" ? "Show" : "Hide"}
                            </button>
                        </div>
                        <p className="small-text">Forgot Password?</p>
                        <button type="submit">Log In</button>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Login;
