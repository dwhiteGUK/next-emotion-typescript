function uniqueKey(max : number = 1000) {
  return Math.floor(Math.random() * max) + Date.now()
}

export { uniqueKey }