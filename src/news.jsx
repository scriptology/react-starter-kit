import React from 'react';
import styles from './news.scss';

import Article from './components/article.jsx';

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    let data = this.props.data;
    let newsTemplate;
    if(data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    }
    else {
      newsTemplate = <div>Новостей нет</div>
    }

    return (
      <div className="news">
        <strong className={data.length > 0 ? '': styles.hide}>
          Всего новостей: {data.length}
        </strong>
        {newsTemplate}
      </div>
    )
  }
}
