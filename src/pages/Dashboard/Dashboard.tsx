import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { User } from "../../models/model";
import "./Dashboard.scss";
import cicon from "../../assets/usercard.png";
import cicon2 from "../../assets/activeCard.png";
import cicon3 from "../../assets/loancard.png";
import cicon4 from "../../assets/savecard.png";
import Table from "../../components/Table/Table";

const Dashboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [amount, setAmount] = useState<number>(100);
    const fetchData = async () => {
        try {
            let response = await fetch(
                "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
            );
            let user = await response.json();
            setUsers(user);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    // console.log(users)
    return (
        <div className="dash-div">
            <p className="header">Users</p>
            <div className="cards">
                <Card
                    cardIcon={cicon}
                    cardTitle="Users"
                    cardValue={users.length || 1}
                />
                <Card
                    cardIcon={cicon2}
                    cardTitle="Active Users"
                    cardValue={1}
                />
                <Card
                    cardIcon={cicon3}
                    cardTitle="Users with Loans"
                    cardValue={1}
                />
                <Card
                    cardIcon={cicon4}
                    cardTitle="Users with Savings"
                    cardValue={1}
                />
            </div>
            <Table users={users}/>
        </div>
    );
};

export default Dashboard;
