import React from "react";
import s from './mainPage.module.css'
import {AddSearchFormRedux} from "../searchForm/SearchForm";
import TrendingGifs from "./ trendingGifs/ TrendingGifs";
import SearchGifs from "./searchGifs/SearchGifs";
import GifCategories from "./gifCategories/GifCategories";


const MainPage = (props) => {
    let AddNewMessage = (values) => {
        props.searchGif(values);
    }
    return (
        <div className={s.wrapper}>
            <GifCategories setCategoriesSearchGif={props.setCategoriesSearchGif}/>
            <span>
               <AddSearchFormRedux onSubmit={values => {
                   AddNewMessage(values.textField)
               }}
               />
           </span>
            <SearchGifs preload={props.preload}
                        dataSearch={props.dataSearch}/>

            <TrendingGifs preload={props.preload}
                          data={props.data}/>
        </div>
    )
}
export default MainPage