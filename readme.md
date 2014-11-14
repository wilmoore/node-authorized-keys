# authorized-keys [![Build Status](https://travis-ci.org/wilmoore/node-authorized-keys.png?branch=master)](https://travis-ci.org/wilmoore/node-authorized-keys) [![NPM version](https://badge.fury.io/js/authorized-keys.png)](http://badge.fury.io/js/authorized-keys)

  Platform agnostic path resolution to a user's authorized_keys file [Node.js][].

#### OSX

    keys();
    #=> /Users/wilmoore/.ssh/authorized_keys

    keys('git');
    #=> /Users/git/.ssh/authorized_keys

#### Windows

    keys();
    #=> C:\Users\wilmoore\.ssh\authorized_keys

    keys('git');
    #=> C:\Users\git\.ssh\authorized_keys

#### Linux

    keys();
    #=> /home/wilmoore/.ssh/authorized_keys

    keys('git');
    #=> /home/git/.ssh/authorized_keys

## Installation

    npm install authorized-keys --save

## License

  MIT

[Node.js]:  http://nodejs.org

