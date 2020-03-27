import React from 'react';
const MovieTabs = (props) => {
    const { updateSortBy, sort_by } = props;
    const handleClick = (value) => () => { updateSortBy(value) }
    const getClassLink = (value) => {
        return `nav-link ${sort_by === value ? "active" : ""} `

    }
    return (
        <ul className="tabs nav nav-pills">
            <li className="nav-item">
                <div className={getClassLink("popularity.desc")}
                    onClick={handleClick("popularity.desc")}>
                    Popularity desc
                </div>
            </li>
            <li className="nav-item">
                <div className={getClassLink(("revenue.desc"))}
                    onClick={() => {
                        updateSortBy("revenue.desc")
                    }}>

                    Revenue desc
                </div>
            </li>
            <li className="nav-item">
                <div className={getClassLink("vote_average.desc")}
                    onClick={() => {
                        updateSortBy("vote_average.desc")
                    }}>
                    Vote average desc
                 </div>
            </li>
        </ul >

    );
}
export default MovieTabs;