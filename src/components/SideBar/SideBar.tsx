import so from "../../assets/Icons/organisation.png";
import sd from "../../assets/Icons/sidedown.png";
import "./SideBar.scss";
import dash from "../../assets/Icons/dash.png";
import { business, customers, settings } from "../../service/data";
import Item from "./Item";
const SideBar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="s-o">
                <img src={so} alt="switch" />
                <p>Switch Organization</p>
                <img src={sd} alt="sdown" />
            </div>
            <div className="dashboard">
                <img src={dash} alt="dash" />
                <p>Dashboard</p>
            </div>
            <div className="sect">
                <p className="customers">Cutomers</p>
                {customers.map((c, i) => (
                    <Item
                        icon={c.icon}
                        key={i}
                        title={c.title}
                        active={c.active}
                    />
                ))}
            </div>
            <div className="sect">
                <p className="customers">Businesses</p>
                {business.map((c, i) => (
                    <Item
                        icon={c.icon}
                        key={i}
                        title={c.title}
                        active={c.active}
                    />
                ))}
            </div>
            <div className="sect">
                <p className="customers">Settings</p>
                {settings.map((c, i) => (
                    <Item
                        icon={c.icon}
                        key={i}
                        title={c.title}
                        active={c.active}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
