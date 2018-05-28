import React from 'react';
import StarRating from './StarRating';
import SalongInfoSection from './SalongInfoSection';
import Background from '../images/linear.svg';

class SingleView extends React.Component {
  state = {
    hover: false,
    sectionView: true,
  };
  hoverOn = () => {
    this.setState({ hover: true });
  };
  hoverOff = () => {
    this.setState({ hover: false });
  };
  toggleSection = () => {
    this.setState({ sectionView: !this.state.sectionView });
  };

  render() {
    return this.props.salongs.map((salong) => {
      if (salong.id === this.props.salongId) {
        const imgURL = require('../images/headerImg.svg');
        const background = {
          width: '100%',
          height: '250px',
          backgroundImage: `url(${imgURL}), url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundBlendMode: 'darken',
        };

        return (
          <div className="singleView-container" key={salong.id}>
            <header style={background}>
              <span
                className="singleViewBackIcon"
                onClick={this.props.listView}
              >
                <i className="fa fa-chevron-left" />
              </span>
              <span className="singleViewSaveIcon">
                <i
                  className={this.state.hover ? 'fa fa-heart' : 'fa fa-heart-o'}
                  onMouseEnter={this.hoverOn}
                  onMouseLeave={this.hoverOff}
                />
              </span>
              <h2 className="singleViewName"> {salong.name} </h2>
              <StarRating rating={salong.rating} itemclass="singleViewStars" />
              <span className="singleViewAmountRating">
                {`(${salong.amountRating})`}
              </span>
            </header>
            <nav className="singleViewNav">
              <span
                className={this.state.sectionView ? 'singleViewBorderBottom' : ''}
                onClick={this.toggleSection}
              >
                Info
              </span>
              <span
                className={this.state.sectionView ? '' : 'singleViewBorderBottom'}
                onClick={this.toggleSection}
              >
                Schema
              </span>
            </nav>
            {this.state.sectionView ? (
              <SalongInfoSection salong={salong} />
            ) : (
              <div />
            )}
          </div>
        );
      }
      return null;
    });
  }
}

export default SingleView;
