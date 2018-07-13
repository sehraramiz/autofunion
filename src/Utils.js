import classData from './static/data.json' ;

// Utilities Rest Here

const timeIndexMap = {
  "07" : 0,
  "09" : 1,
  "11" : 2,
  "14" : 3,
  "16" : 4,
  "15" : 4,
  "17" : 5,
}

const dayIndexMap = {
  "شنبه" : 0,
  "يک شنبه" : 1,
  "دو  شنبه" : 2,
  "سه شنبه" : 3,
  "چهار شنبه" : 4,
}

// gets a full class time and returns an index based on the class start time
export function timeToIndex(classTime) {
  return timeIndexMap[classTime.split(':')[0]];
}

// gets a persian text day and converts it to an index
export function dayToIndex(classDay) {
  return dayIndexMap[classDay];
}

// iterates through data.json and find all classes of the given teacher
export function findTeacher(teacherName) {
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
export function findClass(className) {
  let days = []
  classData.forEach((day) => {
    day.forEach((classInfo) => {
      if (classInfo.class === className)
        days.push(classInfo)
    })
  });
  return days;

}

// concats all days in class json data into one array
export function getAllClassesArray() {
  return classData[0].concat(classData[1], classData[2], classData[3], classData[4])
}
