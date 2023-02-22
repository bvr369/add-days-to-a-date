const addDays = require("date-fns/addDays");
const addDaysTODate = (days) => addDays(new Date("22 Aug 2020"), days);
module.exports = addDaysTODate;
