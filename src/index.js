import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './styles/index.css';
import classData from './static/data.json' ;
import Table from './components/Table.js';


const Base = () => (
  <main class="content" dir="rtl">
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/ostadyab' component={OstadYab}/>
      <Route exact path='/classyab' component={ClassYab}/>
      <Route path='/starterkit' component={StarterKit}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

const Header = () => (
  <header class="header">
    <nav>
      <ul>
        <li><Link to='/'>خانه</Link></li>
        <li><Link to='/starterkit'>راهنمای کلاس اولی ها</Link></li>
        <li><Link to='/ostadyab'>استاد یاب</Link></li>
        <li><Link to='/classyab'>ابزار انتخاب واحد</Link></li>
        <li><Link to='/about'>درباره</Link></li>
      </ul>
    </nav>
  </header>
)

const Home = () => (
  <div >
    <h2>اتوفانیون،<br/>چیزایی که اتوماسیون آموزشی کم داره.</h2>
  </div>
)

const About = () => (
  <div >
    <h2>درباره اتوفانیون</h2>
  </div>
)

const StarterKit = () => (
  <div>
    <h2>راهنمای کلاس اولی ها</h2>
  </div>
)


// Class Yab Page Main Component
class ClassYab extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedClass: 'signal'};

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedClass: event.target.value});
  }

  render() {

    let classes = {
      signal: "سيگنال و سيستم(اي تي ج)",
      paygah: "پايگاه داده ها(علوم كامپيوتر)",
      fizik: "فيزيک2(کامپيوتر)",
      os: "سيستم عامل",
    }
    let classDays = findClass(classes[this.state.selectedClass])

    return (
      <div class="ostad-yab" dir="rtl">
        <div>
          <h2>انتخاب واحد برای بدبخت ها</h2>
          <h3>چی ورداریم مشروط نشیم؟</h3>
          <select value={this.state.value} onChange={this.handleChange} dir="ltr">
            <option value="signal">سیگنال</option>
            <option value="fizik">فیزیک</option>
            <option value="paygah">پایگاه</option>
            <option value="os">سیستم عامل</option>
          </select>
          <ul>
            {classDays.map((day) => <li>{day.class_time} {day.day}<br/>{day.class_loc}</li>)}
          </ul>
        </div>
        <div>
          <Table classDays={classDays}/>
        </div>
      </div>
    );

  }
}


// Ostad Yab Page Main Component
class OstadYab extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedTeacher: 'ehsan'};

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedTeacher: event.target.value});
  }

  render() {

    let teachers = {
      khadem: "خادم حسيني*امير*مهندسي كامپيوتر(100)*",
      ehsan: "حسيني*احسان*مهندسي كامپيوتر(100)*",
      fakhari: "فخاري*عباسعلي*مهندسي كامپيوتر(100)*",
      ghafari: "غفاري*آقاي*فناوري اطلاعات(100)*"
    }
    let name = teachers[this.state.selectedTeacher];
    let days = findTeacher(name);

    let classes = {
      signal: "سيگنال و سيستم(اي تي ج)",
      paygah: "پايگاه داده ها(علوم كامپيوتر)",
      fizik: "فيزيک2(کامپيوتر)",
      os:"سيستم عامل",
    }
    let classDays = findClass(classes.signal)

    return (
      <div class="ostad-yab" dir="rtl">
        <div>
          <h2>استاد یاب</h2>
          <h3>کی اذیتت کرده؟</h3>
          <select value={this.state.value} onChange={this.handleChange} dir="ltr">
            <option value="ehsan">احسان</option>
            <option value="ghafari">غفاری</option>
            <option value="khadem">خادم</option>
            <option value="fakhari">فخاری</option>
          </select>
          <ul>
            {days.map((day) => <li>{day.class_time} {day.day}<br/>{day.class_loc}</li>)}
          </ul>
        </div>
      </div>
    );

  }
}


// tools

// iterates through data.json and find all classes of the given teacher
function findTeacher(teacherName) {
  let days = []
  classData.forEach((day) => {
    day.forEach((classInfo) => {
      if (classInfo.teacher === teacherName)
        days.push(classInfo)
    })
  })
  return days;
}

// iterates through data.json and find all classes of the given class name
function findClass(className) {
  let days = []
  classData.forEach((day) => {
    day.forEach((classInfo) => {
      if (classInfo.class === className)
        days.push(classInfo)
    })
  });
  return days;

}


ReactDOM.render((
  <BrowserRouter>
  <Base />
  </BrowserRouter>
), document.getElementById('root'));
