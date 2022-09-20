// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract SimpleStorage {
    // string public data;

    // function set(string memory _data) public {
    //     data = _data;
    // }

    // function get() public view returns (string memory) {
    //     return data;
    // }

    address public owner;
    string greeting;

    constructor() {
        owner = msg.sender;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
