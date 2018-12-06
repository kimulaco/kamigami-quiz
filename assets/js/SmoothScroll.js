const document = window.document
const body = document.body
const rootElement = document.documentElement
const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  function(func) {
    window.setTimeout(func, 15)
  }
let clock = ''
let time = 500
let context = window
let start = context.scrollTop || window.pageYOffset
let end = 0

var easeInOutCubic = function(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

var getTargetTop = function(target) {
  var targetElement = {}

  if (typeof target === 'number') {
    return target
  } else if (typeof target === 'string') {
    targetElement = document.querySelector(target)

    if (!targetElement) {
      return false
    }

    return targetElement.getBoundingClientRect().top + window.pageYOffset
  }

  return false
}

var getScrollTop = function(startV, endV, elapsed, duration) {
  if (elapsed > duration) {
    return endV
  }

  return startV + (end - startV) * easeInOutCubic(elapsed / duration)
}

var getScrollPageBottom = function() {
  var contentHeight = Math.max.apply(null, [
    body.clientHeight,
    body.scrollHeight,
    rootElement.scrollHeight,
    rootElement.clientHeight
  ])

  return contentHeight - window.innerHeight
}

var scrollFrame = function() {
  var elapsed = Date.now() - clock

  if (context === window) {
    window.scroll(0, getScrollTop(start, end, elapsed, time))
  } else {
    context.scrollTop = getScrollTop(start, end, elapsed, time)
  }

  if (elapsed <= time) {
    requestAnimationFrame(scrollFrame)
  }
}

export default {
  scrollTo: function(target, duration, root) {
    clock = Date.now()
    time = duration || 500
    context = root || window
    start = context.scrollTop || window.pageYOffset
    end = getTargetTop(target)

    scrollFrame()
  },
  scrollTop(duration, root) {
    this.scrollTo(0, duration, root)
  },
  scrollBottom(duration, root) {
    this.scrollTo(getScrollPageBottom(), duration, root)
  }
}
