class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.d);
    if (this.props.d) {
      const rotation = this.calculateRotation(this.props.d);
      this.state = { rotation };
    } else {
      const rotation = this.calculateRotation(new Date());
      this.state = { rotation };
    }
  }

  componentDidMount() {
    if (!this.props.d) {
      setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

  componentWillUnmount() {}

  calculateRotation(d) {
    // seconds
    const seconds = d.getSeconds();
    const sdegree = seconds * 6; // 360/60 = 6
    // hours
    const hours = d.getHours();
    const mins = d.getMinutes();
    const hdegree = hours * 30 + mins / 2;
    // minutes
    const mdegree = mins * 6;
    return {
      srotate: `rotate(${sdegree}deg)`,
      mrotate: `rotate(${mdegree}deg)`,
      hrotate: `rotate(${hdegree}deg)`,
    };
  }

  tick() {
    const rotation = this.calculateRotation(new Date());
    this.setState({ rotation });
  }

  render() {
    const { rotation } = this.state;
    const hourStyle = { transform: rotation.hrotate };
    const minuteStyle = { transform: rotation.mrotate };
    const secondStyle = { transform: rotation.srotate };
    return (
      <React.Fragment>
        <ul class="clock">
          <li class="clock-sec" style={secondStyle}></li>
          <li class="clock-min" style={minuteStyle}></li>
          <li class="clock-hour" style={hourStyle}></li>
        </ul>
      </React.Fragment>
    );
  }
}
