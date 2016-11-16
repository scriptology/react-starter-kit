import React from 'react';
import ReactDOM from 'react-dom';

export default class TestInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myValue: ""
    }

    //this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

  // onChangeHandler(e) {
  //   e.persist();
  //   this.setState(prevState => ({
  //     myValue: e.target.value
  //   }));
  // }
  componentDidMount() { //ставим фокус в input
    ReactDOM.findDOMNode(this.refs.myTestInput).focus();
  }

  onBtnClickHandler() {
    alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
  }

  render() {
      return (
        <div>
          <input className="test-input" placeholder="введите значение" defaultValue='' ref='myTestInput'/>
          <button onClick={this.onBtnClickHandler}>Показать alert</button>
        </div>
      )
  }

}
