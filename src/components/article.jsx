import React from 'react';
import styles from '../base.scss';

export default class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    // This binding is necessary to make `this` work in the callback
    this.readmoreClick = this.readmoreClick.bind(this);
  }

  readmoreClick() {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }

  render() {

    let author = this.props.data.author,
    text = this.props.data.text,
    bigText = this.props.data.bigText,
    visible = this.state.visible;

    return (
      <div className="article">
        <p className="news__author">{author}</p>
        <p className="news__text">{text}</p>
        <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? styles.hide : '')}>Подробнее</a>
        <p className={'news__big-text ' + (visible ? '' : styles.hide)}>{bigText}</p>
      </div>
    )
  }
}
