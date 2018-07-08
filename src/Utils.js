// Utilities Rest Here

const timeIndexMap = {
  "07" : 0,
  "09" : 1,
  "11" : 2,
  "14" : 3,
  "16" : 4,
  "15" : 4,
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
