// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Storage {

  struct FileMetadata {
    string uri;
    bool flagged;
  }

  mapping(string => FileMetadata) data;
  
  event NewItemToStore(string uri);
  event ItemToFlag(string uri);

  // add new file
  function storeData(string memory uri) public {
    data[uri] = FileMetadata(uri, false);
    emit NewItemToStore(uri);
  }

  // set file not to be fetched 
  function flagData(string memory uri) public {
    FileMetadata memory dataToFlag = data[uri];
    dataToFlag.flagged = true;
    emit ItemToFlag(dataToFlag.uri);
  }

}
