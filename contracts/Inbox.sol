pragma solidity ^0.4.25;

contract Inbox {
    string public message;

    constructor(string intialMessage) public {
        message = intialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
