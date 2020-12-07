class Clock extends React.Component {
  constructor(props) {
    super(props);
    const rotation = this.calculateRotation(new Date());
    this.state = { rotation };
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
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
        <h2>Clock</h2>
        <p>Một số điều cần biết về chuyển động góc trong kim đồng hồ</p>
        <ol>
          <li>
            Cơ sở toán học :
            https://sites.google.com/site/mymathclassroom/trigonometry/clock-angle-problems/clock-angle-problem-formula
          </li>
          <li>
            Độ và radian là hai đơn vị đo góc.[1] Một đường tròn có 360 độ,
            tương đương với 2π radian, vậy 360° và 2π radian đại diện cho giá
            trị số của "một vòng" đường tròn. Eg: 1° = π/180
          </li>
        </ol>
        <ul id="clock">
          <li id="sec" style={secondStyle}></li>
          <li id="hour" style={hourStyle}></li>
          <li id="min" style={minuteStyle}></li>
        </ul>
      </React.Fragment>
    );
  }
}
