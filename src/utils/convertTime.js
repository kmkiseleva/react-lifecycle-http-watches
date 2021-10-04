// time to degrees
const convertTime = () => {
  const currentTime = new Date();
  let hours = (currentTime.getUTCHours() - 12);
  let minutes = currentTime.getUTCMinutes();
  let seconds = currentTime.getUTCSeconds();

  let hour = hours * 30;
  let minute = minutes * 6 + seconds * 0.1;
  let second = seconds * 6;

  return [hour, minute, second];
};

export default convertTime;
