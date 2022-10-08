import "./Item.scss"
type Props = {
    icon: string;
    title: string;
    active: boolean;
};
const Item: React.FC<Props> = ({ icon, title, active }) => {
    return (
        <div className={`main ${active ? "active": ""}`}>
            <img src={icon} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default Item;
