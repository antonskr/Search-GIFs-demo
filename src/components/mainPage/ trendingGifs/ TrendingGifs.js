import React from "react";
import s from "../mainPage.module.css";
import Preloader from "../../../assets/preloader/Preloader/Preloader";

const TrendingGifs = (props) => {
    return (
        <div className={s.GifWrapper}>
            {
                props.preload === true && !props.data ? <div className={s.preloaderBlock}><Preloader/></div> :

                    props.data.map(d => <span className={s.imageBlock} key={d.id}>
                        <div>
                            <img className={s.images} src={d.images.original.url} alt=""/>
                            <div className={s.descriptionBblock}>
                                <p className={s.username}>{`Created by  ${d.username}`}</p>
                                <p className={s.descripton}> {d.title} </p>
                            </div>
                        </div>
                    </span>)

            }
        </div>

    )
}

export default TrendingGifs