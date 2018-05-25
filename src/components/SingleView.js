import React from 'react';
import StarRating from './StarRating';
import SalongInfoSection from './SalongInfoSection';
import Background from '../images/linear.svg';

class SingleView extends React.Component {
  state = {
    hover: false,
    sectionView: true
  }
  hoverOn = () => {
    this.setState({ hover: true });
  }
  hoverOff = () => {
    this.setState({ hover: false });    
  }
  toggleSection = () =>{
    if(this.state.sectionView){
      this.setState({ sectionView: false });
    }else{
      this.setState({ sectionView: true });
    }
  }


  render(){
  return this.props.salongs.map((salong) => {
    if (salong.id === (this.props.salongId)) {
      const imgURL = require("../images/headerImg.svg");
      const background = {
        width: "100%",
        height: "250px",
        backgroundImage: 'url(' + imgURL + '), url(' + Background + ')',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundBlendMode: "darken",
       };

      return (
        <div className="singleView-container" key={salong.id}>
          <header style={background}>
            <span className="singleViewBackIcon" onClick={this.props.listView}><i className="fa fa-chevron-left"></i></span>
            <span className="singleViewSaveIcon">
              <i className={ this.state.hover ? "fa fa-heart" : "fa fa-heart-o"} 
                onMouseEnter={this.hoverOn} 
                onMouseLeave={this.hoverOff}
              ></i>
            </span>
            <span className="singleViewName"> { salong.name } </span>
            <StarRating rating={salong.rating}
                        itemclass="singleViewStars"
            />
            <span className="singleViewAmountRating">{"(" + salong.amountRating + ")"}</span>
          </header>
          <div className="singleViewNav">
            <span className={this.state.sectionView ? "singleViewBorderBottom" : ""} onClick={this.toggleSection}>Info</span>
            <span className={this.state.sectionView ? "" : "singleViewBorderBottom"} onClick={this.toggleSection}>Schema</span>
          </div>
          {this.state.sectionView ? <SalongInfoSection salong={salong} /> : <div></div>}
        </div> 
      );
    }
    return null;
  });
}
}

export default SingleView;
