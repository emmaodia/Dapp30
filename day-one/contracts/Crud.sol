// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Crud {
    struct User {
        uint id;
        string name;
    }

    User[] public users;
    uint public nextId;

    function create(string memory name) public {
        users.push(User(nextId, name));
        nextId++;
    }

    function read(uint _id) public view returns (uint, string memory) {
        uint i = find(_id);
        return (users[i].id, users[i].name);
        // for(uint i = 0; i < users.length; i++) {
        //     if(users[i].id == _id) {
        //         return(users[i].id, users[i].name);
        //     }
        // }
    }

    function update(uint id, string memory name) public {
        uint i = find(id);
        users[i].name = name;
        // for(uint i = 0; i < users.length; i++) {
        //     if(users[i].id == _id) {
        //         users[i].name = name;
        //     }
        // }
    }

    function destroy(uint id) public {
        delete users[id];
    }

    function find(uint _id) internal view returns (uint) {
        for (uint i = 0; i < users.length; i++) {
            if (users[i].id == _id) {
                return i;
            }
        }
        revert("User does not exist");
    }
}
