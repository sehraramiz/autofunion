import classData from './static/data.json' ;

// Utilities Rest Here

const classes = classData.classes;
const teachers = classData.teachers;
const departments = classData.departments;

const timeIndexMap = {
  "07" : 0,
  "09" : 1,
  "11" : 2,
  "14" : 3,
  "16" : 4,
  "15" : 4,
  "17" : 5,
};

const dayIndexMap = {
  "شنبه" : 0,
  "یک شنبه" : 1,
  "دو  شنبه" : 2,
  "سه شنبه" : 3,
  "چهار شنبه" : 4,
};

// gets a full class time and returns an index based on the class start time
export function timeToIndex(classTime) {
  return timeIndexMap[classTime.split(':')[0]];
};

// gets a persian text day and converts it to an index
export function dayToIndex(classDay) {
  return dayIndexMap[classDay];
};

// iterates through data.json and find all classes of the given teacher
export function findTeacher(teacherInfo) {
  let days = [];
  classes.forEach((day) => {
    day.forEach((classInfo) => {
      if (classInfo.teacher.first_name === teacherInfo.first_name && classInfo.teacher.last_name === teacherInfo.last_name)
        days.push(classInfo);
    })
  })
  return days;
}

// iterates through data.json and find all classes of the given class name
export function findClassDays(selectedClass) {
  let days = []
  classes.forEach((day) => {
    day.forEach((classInfo) => {
      if (classInfo.id === selectedClass.id && classInfo.group === selectedClass.group)
        days.push(classInfo);
    })
  });
  return days;

}

// concats all days in class json data into one array
export function getAllClassesArray() {
  return classes[0].concat(classes[1], classes[2], classes[3], classes[4]);
}

export function getAllDepartments() {
  return departments;
}
