import React from 'react';
import {connect} from "react-redux";
import MainPage from "./MainPage";
import {setGif, setSearchGif} from "../../redux/mainpage-reducer";

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
                         preload={this.props.preload}/>
    }
}

let mapStateToProps = (state,) => {
    return {
        data: state.mainPage.data,
        dataSearch: state.mainPage.dataSearch,
        currentText: state.mainPage.currentText,
        preload: state.mainPage.preload
    }
}

export default MainPageContainer = connect(mapStateToProps, {
    setGif,
    setSearchGif,
})(MainPageContainer)
