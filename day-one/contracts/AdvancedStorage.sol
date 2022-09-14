// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract AdvancedStorage {
    uint[] public ids;

    function add(uint _id) public {
        ids.push(_id);
    }

    function get(uint position) public view returns (uint) {
        return ids[position];
    }

    function getAll() public view returns (uint[] memory) {
        return ids;
    }

    function length() public view returns (uint) {
        return ids.length;
    }
}
