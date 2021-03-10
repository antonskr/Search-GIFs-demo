import React from 'react'
import s from './GigCategories.module.css'

const GifCategories = ({setCategoriesSearchGif}) => {

    return (
        <div className={s.categoriesWrapper}>
            <ul>
                <li onClick={(e) => {
                    setCategoriesSearchGif(e.currentTarget.innerText)
                }}> Смешные
                </li>
                <li onClick={(e) => {
                    setCategoriesSearchGif(e.currentTarget.innerText)
                }}> Животные
                </li>
                <li onClick={(e) => {
                    setCategoriesSearchGif(e.currentTarget.innerText)
                }}> Мемы
                </li>
            </ul>
        </div>
    )
}

export default GifCategories