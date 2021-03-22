import React from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import {
  deleteCurrentGifAc,
  setCategoriesSearchGif,
  setGif,
  setSearchGif,
  setTotalCountAc,
  updateDetails,
} from "../../redux/mainpage-reducer";

class MainPageContainer extends React.Component {
  componentDidMount() {
    this.props.setGif();
  }

  searchGif = (message) => {
    this.props.setSearchGif(message);
  };

  deleteCurrentGif = (id) => {
    this.props.deleteCurrentGifAc(id);
  };

  updateTotalCount = () => {
    this.props.setTotalCountAc();
  };

  setUpdateDetails = (details) => {
    this.props.updateDetails(details);
  };

  render() {
    const {
      data,
      dataSearch,
      preload,
      totalCount,
      isActive,
      showDetails,
    } = this.props;

    return (
      <MainPage
        data={data}
        dataSearch={dataSearch}
        searchGif={this.searchGif}
        setCategoriesSearchGif={this.props.setCategoriesSearchGif}
        preload={preload}
        deleteCurrentGif={this.deleteCurrentGif}
        totalCount={totalCount}
        updateTotalCount={this.updateTotalCount}
        isActive={isActive}
        showDetails={showDetails}
        setUpdateDetails={this.setUpdateDetails}
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
    totalCount: state.mainPage.totalCount,
    isActive: state.mainPage.isActive,
    showDetails: state.mainPage.showDetails,
  };
};

// eslint-disable-next-line no-class-assign
export default MainPageContainer = connect(mapStateToProps, {
  setGif,
  setSearchGif,
  setCategoriesSearchGif,
  deleteCurrentGifAc,
  setTotalCountAc,
  updateDetails,
})(MainPageContainer);
