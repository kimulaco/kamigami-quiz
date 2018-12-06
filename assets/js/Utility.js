export default {
  random(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
  },
  paddingZero(val, digits) {
    return (val + '').padStart(digits, '0')
  }
}
