const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objs){
let found = objs.find(function(obj){
    return obj.result === "W"
  })

  return found != undefined ? found.year : undefined
}
