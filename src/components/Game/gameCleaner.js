export const timeCleaner = (time) => {
  let newTime = time.split('T')[1].split('+')[0]
  newTime = newTime.split(':')
  if (newTime[0] <= 12) {
    newTime = `${newTime[0]}:${newTime[1]}AM`
  } else {
    newTime = `${newTime[0] - 12}:${newTime[1]}PM`
  }
  return newTime
}