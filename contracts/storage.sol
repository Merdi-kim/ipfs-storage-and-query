// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Storage {
  event NewItemToStore(bool uri);
  event ItemToFlag(string uri);

  error EmptyString();

  // add new file
  function storeData(string memory uri) public {
    bool dis = (keccak256(abi.encodePacked(uri)) != keccak256(abi.encodePacked('')));
    emit NewItemToStore(dis);
  }

  // set file not to be fetched 
  function flagData(string memory uri) public {
    //TO DO
  }

}
