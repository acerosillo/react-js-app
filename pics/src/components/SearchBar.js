import React from "react";

class SearchBar extends React.Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  onInputClick() {
    console.log("input was clicked");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
