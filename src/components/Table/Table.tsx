import "./Table.scss";
import React, { useState } from "react";
import ticon from "../../assets/tableicon.png";
import { User } from "../../models/model";
import moment from "moment";
import option from "../../assets/Vector.png";
import Pagination from "../Pagination/Pagination";
type Props = {
    users: User[];
    total: number;
};
const Table: React.FC<Props> = ({ users, total }) => {
    const [sortValue, setSortValue] = useState<number | any>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const numberPerPage: number = 10;
    const indexOfLastRecord: number = currentPage * numberPerPage;
    const indexOfFirstRecord: number = indexOfLastRecord - numberPerPage;
    const currentRecord: User[] = users.slice(
        indexOfFirstRecord,
        indexOfLastRecord
    );
    const nPages: number = Math.ceil(users.length / numberPerPage);

    return (
        <div>
            <table>
                <thead>
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
                            Date Joined <img src={ticon} alt="ticon" />
                        </td>
                        <td className="thead">
                            Status <img src={ticon} alt="ticon" />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {currentRecord.map((user) => (
                        <tr key={user?.id} className="data">
                            <td style={{ paddingLeft: "30px" }}>
                                {user?.orgName}
                            </td>
                            <td>{user?.userName}</td>
                            <td>{user?.email.toLowerCase()}</td>
                            <td>{user?.phoneNumber}</td>
                            <td>
                                {moment(user?.lastActiveDate).format("lll")}
                            </td>
                            <td className="status">
                                <p>Inactive</p>{" "}
                            </td>
                            <td style={{ paddingRight: "30px" }}>
                                <img src={option} alt="" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-sort">
                <div className="number">
                    Showing{" "}
                    <select
                        value={sortValue}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setSortValue(e.target.value)
                        }
                    >
                        {[...new Array(total + 1)].map(
                            (item: number, i: number) => (
                                <option value={item} key={i}>
                                    {i}
                                </option>
                            )
                        )}
                    </select>{" "}
                    out of {total}
                </div>
                <div>
                    <Pagination
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;
