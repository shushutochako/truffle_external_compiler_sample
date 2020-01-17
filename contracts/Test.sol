pragma solidity >=0.4.21 <0.7.0;

contract Test {
  uint private _val;
  constructor(uint val) public {
    _val = val;
  }

  function setVal(uint newVal) public {
    _val = newVal;
  }

  function getVal() public view returns (uint) {
    return _val;
  }
}