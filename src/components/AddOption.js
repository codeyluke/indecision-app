import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error,
    }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form onSubmit={this.onFormSubmit} className="add-option">
          <input
            type="text"
            name="option"
            className="add-option__input"
          ></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
