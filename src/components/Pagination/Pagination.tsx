import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import "./Pagination.scss";
import React from "react";

type Props = {
    nPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
const Pagination: React.FC<Props> = ({
    nPages,
    currentPage,
    setCurrentPage,
}) => {
    const pageNumbers = [...new Array(nPages + 1)];

    return (
        <nav>
            <ul>
                <li>
                    <a href="#">
                        {" "}
                        <img src={prev} alt="" />{" "}
                    </a>
                </li>
                {pageNumbers.map((item: number, i: number) => (
                    <li
                        onClick={() => {
                            setCurrentPage(i);
                            console.log(i);
                        }}
                        key={i}
                    >
                        <a
                            href="#"
                            className={
                                currentPage === i ? "active" : "numbs"
                            }
                        >
                            {i}
                        </a>
                    </li>
                ))}
                <li>
                    <a href="#">
                        <img src={next} alt="" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
