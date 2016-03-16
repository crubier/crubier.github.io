import React, { PropTypes, Component } from 'react';

const Styles = {
  wrapper: {
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative'
  },
  tiltMask: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    backgroundSize: '100% 100%',
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
  }
};

const getFilter = (blur) => `blur(${blur}px) contrast(105%) saturate(105%)`;

const getGradient = (angle, pos, apt, smtns) => {
  const mask = alpha => `rgba(0,0,0,${alpha})`;
  const end = pos - (apt / 2);
  return (
    `-webkit-linear-gradient(${angle}, ${mask(1)} 0, ` +
    `${mask(1)} ${(end - smtns).toFixed(2)}%, ${mask(0)} ${end}%)`
  );
};

const toDeg = val => `${val}deg`;

const getAngle = (dir, values) => (
  isNaN(dir) ? toDeg(values[dir]) : toDeg((dir % 360) + values.axis)
);

const bottomAngle = dir => getAngle(dir, {
  horizontal: 90, vertical: 0, axis: 0
});

const topAngle = dir => getAngle(dir, {
  horizontal: 270, vertical: 180, axis: 180
});

const inRange = (val, min, max) => (val >= min && val <= max);

const anglePropType = (props, propName, component) => {
  const val = props[propName];
  const range = [0, 360];
  const dirs = ['horizontal', 'vertical'];
  if (!inRange(val, ...range) && !dirs.indexOf(val) >= 0) {
    return new Error(`Invalid angle in propType: ${propName}.
                      The angle must be ${dirs.join(', ')} or within ${range.join(' and ')}`);
  }
};

const rangePropType = (props, propName, component) => {
  const val = props[propName];
  const range = [0, 100];
  if (isNaN(val) || !inRange(val, ...range)) {
    return new Error(`Invalid number in propType: ${propName}.
                      The number must be within ${range.join(' and ')}`);
  }
};

function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect();
  const root = document.documentElement;

  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY,
    xrel: mouseX / rect.width,
    yrel: mouseY / rect.height
  };
}

export default class TiltShift extends Component {

  static propTypes = {
    aperture: rangePropType,
    blur: rangePropType,
    direction: anglePropType,
    position: rangePropType,
    smoothness: rangePropType,
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    aperture: 10,
    blur: 1.5,
    direction: 'horizontal',
    position: 50,
    smoothness: 10,
  };

  state = {
    position: this.props.position
  };


  mouseMove(e) {
    this.setState({position: getMousePos(this.refs.frame, e).yrel * 100});
    console.log(getMousePos(this.refs.frame, e));
  }

  render() {
    const { aperture, smoothness, direction } = this.props;
    const { position } = this.state;
    const bAngle = bottomAngle(direction);
    const tAngle = topAngle(direction);
    const bGradient = getGradient(bAngle, position - 100, aperture, smoothness);
    const tGradient = getGradient(tAngle, position, aperture, smoothness);

    const bStyles = {
      ...Styles.tiltMask,
      backgroundImage: `url(${this.props.src})`,
      WebkitFilter: getFilter(this.props.blur),
      WebkitMaskImage: bGradient,
    };
    const tStyles = { ...bStyles, WebkitMaskImage: tGradient };

    return (
      <div ref="frame" style={Styles.wrapper} onMouseMove={this.mouseMove.bind(this)}>
        <img {...this.props} />
        <div style={tStyles} />
        <div style={bStyles} />
      </div>
    );
  }
}
