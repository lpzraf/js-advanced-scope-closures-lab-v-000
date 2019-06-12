function produceDrivingRange(blockRange) {
  return function(startBlock,endBlock) {
    let distance = Math.abs(parseInt(endBlock) - parseInt(startBlock))
    let reminderRangeDistance = blockRange - distance
    let reminderNotInRangeDistance = Math.abs(reminderRangeDistance)

    if (distance <= blockRange) {
      return `within range by ${reminderRangeDistance}`
    } else {
      return `${reminderNotInRangeDistance} blocks out of range`
    }
  };
}


function produceTipCalculator(tip) {
  return function (bill) {
    return bill * tip
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
