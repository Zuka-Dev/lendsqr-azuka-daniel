import "./Table.scss";
import React from "react";
import ticon from "../../assets/tableicon.png";
import { User } from "../../models/model";
type Props = {
    users: User[];
};
const Table: React.FC<Props> = ({ users }) => {
    return (
        <div>
            <table>
                <tr>
                    <td className="thead">
                        Organisation <img src={ticon} alt="ticon" />
                    </td>
                    <td className="thead">
                        Username <img src={ticon} alt="ticon" />
                    </td>
                    <td className="thead">
                        Email <img src={ticon} alt="ticon" />
                    </td>
                    <td className="thead">
                        Phone Number <img src={ticon} alt="ticon" />
                    </td>
                    <td className="thead">
                        DateJoined <img src={ticon} alt="ticon" />
                    </td>
                    <td className="thead">
                        Status <img src={ticon} alt="ticon" />
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                </tr>
            </table>
        </div>
    );
};

export default Table;
