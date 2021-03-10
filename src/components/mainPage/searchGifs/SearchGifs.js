import React from "react";
import Preloader from "../../../assets/preloader/Preloader/Preloader";
import s from "../mainPage.module.css";

const SearchGifs = (props) => {

    return (
        <div>
            {props.preload ? <div className={s.preloaderBlock}><Preloader/></div> :
                props.dataSearch.reverse().map(d => <span className={s.imageBlock} key={d.id}>
                        <img className={s.images} src={d.images.original.url} alt=""/>
                        <div className={s.descriptionBlock}>
                                <p className={s.username}>{d.username ? `Created by ${d.username}` : "Created by unknown"}</p>
                                <p className={s.descripton}> {d.title} </p>
                            </div>
                    </span>)}
        </div>
    )
}

export default SearchGifs