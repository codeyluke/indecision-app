class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options,
        }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter a valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    const { options } = this.state;
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={options.length > 0 ? true : false}
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

const Action = (props) => {
  const { hasOptions, handlePick } = props;
  return (
    <div>
      <button disabled={!hasOptions} onClick={handlePick}>
        What Should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All Choices</button>
      {options && options.length === 0 && (
        <p>Please add an option to get started</p>
      )}
      {options && options.length ? (
        <p>{options.length} options to choose:</p>
      ) : (
        <p>No option to choose from</p>
      )}
      <div>
        {options &&
          options.map((option) => {
            return (
              <Option
                key={option}
                optionText={option}
                handleDeleteOption={handleDeleteOption}
              />
            );
          })}
      </div>
    </div>
  );
};

const Option = (props) => {
  const { optionText, handleDeleteOption } = props;
  return (
    <div>
      <ul>
        <li>
          {optionText}{" "}
          <button
            onClick={(e) => {
              handleDeleteOption(optionText);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined,
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error,
    }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <IndecisionApp options={["Devils den", "Second District"]} />,
  document.getElementById("app")
);
