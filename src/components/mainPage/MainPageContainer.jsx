import React from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import {
  setCategoriesSearchGif,
  setGif,
  setSearchGif,
} from "../../redux/mainpage-reducer";

class MainPageContainer extends React.Component {
  componentDidMount() {
    this.props.setGif();
  }

  searchGif = (message) => {
    this.props.setSearchGif(message);
  };

  render() {
    const { data, dataSearch, preload } = this.props;
    return (
      <MainPage
        data={data}
        dataSearch={dataSearch}
        searchGif={this.searchGif}
        setCategoriesSearchGif={this.props.setCategoriesSearchGif}
        preload={preload}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.mainPage.data,
    dataSearch: state.mainPage.dataSearch,
    currentText: state.mainPage.currentText,
    preload: state.mainPage.preload,
  };
};

// eslint-disable-next-line no-class-assign
export default MainPageContainer = connect(mapStateToProps, {
  setGif,
  setSearchGif,
  setCategoriesSearchGif,
})(MainPageContainer);
