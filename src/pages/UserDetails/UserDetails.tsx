import "./UserDetails.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../models/model";
import star1 from "../../assets/Icons/star1.png";
import star2 from "../../assets/Icons/star2.png";
import avatar from "../../assets/Icons/ava.png";
import back from "../../assets/Icons/back.png";
import { profile } from "console";

const UserDetails: React.FC = () => {
    const { id } = useParams();
    const [user, setUser] = useState<User>();
    const fetchSingleUser = async () => {
        try {
            let response = await fetch(
                `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id} `
            );
            let singleUser = await response.json();
            setUser(singleUser);
        } catch (error) {
            return <div>Error......</div>;
        }
    };
    useEffect(() => {
        fetchSingleUser();
    }, []);

    return (
        <div className="main1">
            <div className="back">
                <img src={back} alt="" /> Back To Users
            </div>
            <div className="title">
                <p>User Details</p>
                <div className="btn">
                    <button className="red">Blacklist User</button>
                    <button className="green">Activate User</button>
                </div>
            </div>
            <div className="data-card">
                <div className="top">
                    <div className="one">
                        <img
                            src={user?.profile.avatar || avatar}
                            className="avatar"
                            alt=""
                        />
                        <div className="name-details">
                            <p className="name">{`${user?.profile.firstName}  ${user?.profile.lastName}`}</p>
                            <p className="id">{user?.accountNumber}</p>
                        </div>
                    </div>
                    <div className="ratings">
                        <p>User's Tier</p>
                        <div className="star">
                            <img src={star1} alt="" />
                            <img src={star2} alt="" />
                            <img src={star2} alt="" />
                        </div>
                    </div>
                    <div className="accdetails">
                        <p className="balance">₦{user?.accountBalance}</p>
                        <p className="bank">
                            {user?.accountNumber}/Providus Bank
                        </p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="tab">General Details</div>
                    <div className="tab">Documents</div>
                    <div className="tab">Bank Details</div>
                    <div className="tab">Loans</div>
                    <div className="tab">Savings</div>
                    <div className="tab">App and Systems</div>
                </div>
            </div>
            <div className="info">
                <div className="personal-info">
                    <p className="heading">Personal Information</p>
                    <div className="two">
                        <div>
                            <p className="title">full name</p>
                            <p className="details">
                                {user?.profile.firstName}{" "}
                                {user?.profile.lastName}
                            </p>
                        </div>
                        <div>
                            <p className="title">phone number</p>
                            <p className="details">{user?.phoneNumber}</p>
                        </div>
                        <div>
                            <p className="title">email address</p>
                            <p className="details">{user?.email}</p>
                        </div>
                        <div>
                            <p className="title">BVN</p>
                            <p className="details">{user?.profile.bvn}</p>
                        </div>
                        <div>
                            <p className="title">gender</p>
                            <p className="details">{user?.profile.gender}</p>
                        </div>
                        <div>
                            <p className="title">marital status</p>
                            <p className="details">Single</p>
                        </div>
                        <div>
                            <p className="title">children</p>
                            <p className="details">None</p>
                        </div>
                        <div>
                            <p className="title">type of residence</p>
                            <p className="details">Parent's Apartment</p>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <p className="heading">Education and Employment</p>

                    <div className="two">
                        <div>
                            <p className="title">Level of education</p>
                            <p className="details">{user?.education.level}</p>
                        </div>
                        <div>
                            <p className="title">Employment Status</p>
                            <p className="details">
                                {user?.education.employmentStatus}
                            </p>
                        </div>
                        <div>
                            <p className="title">Sector of employment</p>
                            <p className="details">{user?.education.sector}</p>
                        </div>
                        <div>
                            <p className="title">Duration of employment</p>
                            <p className="details">
                                {user?.education.duration}
                            </p>
                        </div>
                        <div>
                            <p className="title">office email</p>
                            <p className="details">
                                {user?.education.officeEmail}
                            </p>
                        </div>
                        <div>
                            <p className="title">Monthly income</p>
                            <p className="details">
                                {user?.education.monthlyIncome}
                            </p>
                        </div>
                        <div>
                            <p className="title">loan repayment</p>
                            <p className="details">
                                {user?.education.loanRepayment}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="socials">
                    <p className="heading">Socials</p>

                    <div className="two">
                        <div>
                            <p className="title">twitter</p>
                            <p className="details">{user?.socials.twitter}</p>
                        </div>
                        <div>
                            <p className="title">facebook</p>
                            <p className="details">{user?.socials.facebook}</p>
                        </div>
                        <div>
                            <p className="title">instagram</p>
                            <p className="details">{user?.socials.instagram}</p>
                        </div>
                    </div>
                </div>
                <div className="guarantors">
                    <p className="heading">Guarantors</p>

                    <div className="two">
                        <div>
                            <p className="title">full name</p>
                            <p className="details">
                                {user?.guarantor.firstName}{" "}
                                {user?.guarantor.lastName}
                            </p>
                        </div>
                        <div>
                            <p className="title">phone number</p>
                            <p className="details">
                                {user?.guarantor.phoneNumber}
                            </p>
                        </div>
                        <div>
                            <p className="title">email address</p>
                            <p className="details">{user?.guarantor.address}</p>
                        </div>

                        <div>
                            <p className="title">relationship</p>
                            <p className="details">Sister</p>
                        </div>
                    </div>
                </div>
                <div className="last">
                    <div className="two">
                        <div>
                            <p className="title">full name</p>
                            <p className="details">
                                {user?.profile.firstName}{" "}
                                {user?.profile.lastName}
                            </p>
                        </div>
                        <div>
                            <p className="title">phone number</p>
                            <p className="details">{user?.phoneNumber}</p>
                        </div>
                        <div>
                            <p className="title">email address</p>
                            <p className="details">{user?.email}</p>
                        </div>
                        <div>
                            <p className="title">Relationship</p>
                            <p className="details">{user?.profile.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
