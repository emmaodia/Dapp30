// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract SimpleStorage {
    string public data;

    function set(string memory _data) public {
        data = _data;
    }

    // function get() public view returns (string memory) {
    //     return data;
    // }
}
