// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.



const str = "06:40:03PM";
const hours = parseInt(str.substr(0, 2));

console.log(convertTOMilitary(str));

function convertTOMilitary(str) {
  return str.slice(-2) === "AM" ? convertAM(str) : convertPM(str);
}

function convertAM(str) {
  str = str.replace("AM", "");
  const hours = str.slice(0, 2);
  if (hours == "12") {
    return str.replace(hours, "00");
  }
  return str;
}

function convertPM(str) {
  str = str.replace("PM", "");
  const hours = str.slice(0, 2);
  if (hours == "12") {
    return str;
  }

  return str.replace(hours, parseInt(hours) + 12);
}
