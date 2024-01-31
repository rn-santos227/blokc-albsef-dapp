// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Counter {
  uint256 public counter;
  event CounterIncremented(uint256 newCounterValue);

  constructor() {
    counter = 0;
  }

  function incrementCounter() public {
    counter += 1;
    emit CounterIncremented(counter);
  }

  function getCounter() public view returns (uint256) {
    return counter;
  }
}