import React from 'react';

export default class PortfolioItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hover: 'n'};
  }

  mouseEnter() {
    this.setState({hover: 'y'});
  }

  mouseLeave() {
    this.setState({hover: 'n'});
  }

  render() {
    let self = this;
    return (
      <div style={{position: 'relative'}}
        onMouseEnter={this.mouseEnter.bind(this)}
        onMouseLeave={this.mouseLeave.bind(this)}>
        <a href={this.props.href}>
          <div style={{ position: 'absolute', textAlign: 'center', left: 0, right: 0, top: 0, bottom: 0, width: 'auto', height: 'auto', zIndex: 1, backgroundColor: ((this.state.hover === 'y') ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.0)'), color: ((this.state.hover === 'y') ? 'rgba(255, 255, 255, 1.0)' : 'rgba(255, 255, 255, 0.0)'), display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>{this.props.text}</p>
          </div>
          </a>
            <img src={this.props.src} style={{width: '100%', height: 'auto'}}/>
      </div>
    );
  }
}
