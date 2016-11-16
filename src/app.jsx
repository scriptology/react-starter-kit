import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import News from './news.jsx';
import TestInput from './components/testInput.jsx'

let newsData = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];
console.log(newsData);
export default class App extends React.Component {
  render() {
    return (
      <div>
        <TestInput />
        <News data={newsData} />
      </div>
    )
  }
}
