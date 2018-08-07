import React from 'react';
import Table from './Table.js';
import { getAllClassesArray } from '../Utils.js';


// Empty classes main components
class EmptyClass extends React.Component {

  render() {
    return (
      <div className="table-page-container" dir="rtl">
        <p>کلاسای خالی هفته</p>
        <p>چیزی که اگه از نگهبان آمارش و بخوای میگه باید از امور فرهنگی نامه بیاری :|</p>
        <p>- اینا که کلاسای پره!</p>
        <p>+ از اصل عدم شمول استفاده کن عزیزم</p>
        <Table allClasses={getAllClassesArray()} squareContent="location"/>
      </div>
    );
  }

}

export default EmptyClass;
