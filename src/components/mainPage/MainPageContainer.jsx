import React from 'react';
import {connect} from "react-redux";
import MainPage from "./MainPage";
import {setCategoriesSearchGif, setGif, setSearchGif} from "../../redux/mainpage-reducer";

class MainPageContainer extends React.Component {
    componentDidMount() {
        this.props.setGif()
    }

    searchGif = (message) => {
        this.props.setSearchGif(message)
    }

    render() {
        return <MainPage data={this.props.data}
                         dataSearch={this.props.dataSearch}
                         searchGif={this.searchGif}
                         setCategoriesSearchGif={this.props.setCategoriesSearchGif}
                         preload={this.props.preload}/>
    }
}

const mapStateToProps = (state,) => {
    return {
        data: state.mainPage.data,
        dataSearch: state.mainPage.dataSearch,
        currentText: state.mainPage.currentText,
        preload: state.mainPage.preload
    }
}

export default MainPageContainer = connect(mapStateToProps, {
    setGif, setSearchGif, setCategoriesSearchGif
})(MainPageContainer)
