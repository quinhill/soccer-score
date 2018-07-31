export const cleanTime = (time) => {
  let newTime = time.split(':')
  if (newTime[0] <= 12) {
    newTime = `${newTime[0]}:${newTime[1]}AM`
  } else {
    newTime = `${newTime[0] - 12}:${newTime[1]}PM`
  }
  return newTime
}