# authorized-keys

[![Build Status](http://img.shields.io/travis/wilmoore/node-authorized-keys.svg)](https://travis-ci.org/wilmoore/node-authorized-keys) [![NPM version](http://img.shields.io/npm/v/node-authorized-keys.svg)](https://www.npmjs.org/package/node-authorized-keys) [![NPM downloads](http://img.shields.io/npm/dm/node-authorized-keys.svg)](https://www.npmjs.org/package/node-authorized-keys) [![LICENSE](http://img.shields.io/npm/l/node-authorized-keys.svg)](license)

> Platform agnostic path resolution to a user's authorized_keys file [Node.js][].

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

  [MIT](license)

[Node.js]:  http://nodejs.org

