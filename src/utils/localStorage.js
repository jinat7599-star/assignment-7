const DB_NAME = "timelineData";
 
export const getTimelineData = function() {
  const storedValue = localStorage.getItem(DB_NAME);
  
  if (!storedValue) return [];
  
  try {
    return JSON.parse(storedValue);
  } catch (error) {
    return [];
  }
};

 
export const saveTimelineData = (dataArray) => {
  const payload = JSON.stringify(dataArray);
  localStorage.setItem(DB_NAME, payload);
};