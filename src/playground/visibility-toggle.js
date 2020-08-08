class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      title: "Visibility Toggle",
      show: true,
      subtitle: "These are some details",
    };
  }

  handleToggle() {
    let currentShow = this.state.show;
    if (currentShow) {
      this.setState(() => {
        return {
          show: false,
        };
      });
    } else {
      this.setState(() => {
        return {
          show: true,
        };
      });
    }
  }

  render() {
    console.log(this.state);
    const { title, show, subtitle } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <button onClick={this.handleToggle}>{show ? "Hide" : "Show"}</button>
        <p>{show ? subtitle : ""}</p>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("app"));
// const appRoot = document.getElementById("app");

// const detailToggle = {
//   title: "Visibility Toggle",
//   subtitle: "Hey. These are some details you can now see!",
//   show: true,
// };

// const onToggleDetail = () => {
//   if (detailToggle.show) {
//     detailToggle.show = false;
//     render();
//   } else {
//     detailToggle.show = true;
//     render();
//   }
// };

// const render = () => {
//   const template = (
//     <div>
//       <h3>{detailToggle.title}</h3>
//       <button onClick={onToggleDetail}>
//         {detailToggle && detailToggle.show ? "Hide Details" : "Show Details"}
//       </button>
//       {detailToggle && detailToggle.show ? <p>{detailToggle.subtitle}</p> : ""}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
