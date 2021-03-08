import React from "react";
import Preloader from "../../../assets/preloader/Preloader/Preloader";
import s from "../mainPage.module.css";

const SearchGifs = (props) => {
    return (
        <div>
            {props.preload === true ? <Preloader/> : !props.dataSearch.length ? null :
                props.dataSearch.map(d => <span key={d.id}>
                        <img className={s.images} src={d.images.original.url} alt=""/>
                    </span>)}
        </div>
    )
}

export default SearchGifs