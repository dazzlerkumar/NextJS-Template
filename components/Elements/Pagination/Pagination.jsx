import style from "./Pagination.module.css"
import {
    CgChevronDoubleLeft,
    CgChevronDoubleRight,
} from "react-icons/cg";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={style.pagination_list}>
                {/* Icon redirects to first page when clicked */}
                {pageNumbers[0] == undefined ? null : (
                    <CgChevronDoubleLeft
                        onClick={() => paginate(pageNumbers[0])}
                    />
                )}
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a
                            onClick={() => paginate(number)}
                            href="#!"
                            className={style.pagination_link}
                        >
                            {number}
                        </a>
                    </li>
                ))}
                {/* Icon redirects to last page when clicked */}
                {pageNumbers[0] == undefined ? null : (
                    <CgChevronDoubleRight
                        onClick={() => paginate(pageNumbers.length)}
                    />
                )}
            </ul>
        </nav>
    );
}
