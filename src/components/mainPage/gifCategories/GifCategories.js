import React from 'react'
import s from './GigCategories.module.css'

const GifCategories = (props) => {
    debugger

    const changeCategories = (e) => {
        props.setCategoriesSearchGif(e.currentTarget.innerText)
    }

    return (
        <div className={s.categoriesWrapper}>
            <ul>
                <li onClick={changeCategories}> Смешные</li>
                <li onClick={changeCategories}> Животные</li>
                <li onClick={changeCategories}> Мемы</li>
            </ul>
        </div>
    )
}

export default GifCategories