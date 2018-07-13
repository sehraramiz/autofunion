import React from 'react';
import Table from './Table.js';
import { getAllClassesArray } from '../Utils.js';


// Empty classes main components
class EmptyClass extends React.Component {

  render() {
    return (
      <div class="ostad-yab" dir="rtl">
        <div>
          <h2>کلاسای خالی هفته</h2>
          <h3>چیزی که اگه از نگهبان آمارش و بخوای میگه باید از امور فرهنگی نامه بیاری :|</h3>
          <h4>اینا که کلاسای پره!</h4>
          <h5>از اصل عدم شمول استفاده کن عزیزم</h5>
          <Table allClasses={getAllClassesArray()} squareContent="location"/>
        </div>
      </div>
    );
  }

}

export default EmptyClass;
