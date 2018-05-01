/*for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}*/

/*for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time")
}*/

function forLoop(array) {
  array = []
  for (let i = 0 ; i < 25; i++) {
  if (i === 0) {
    array.push("I am 0 strange loop.")
  } else if (i === 1) {
    array.push("I am 1 strange loop.")
  } else {
    array.push(`I am ${i} strange loops.`)
  }
}
}