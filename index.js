// references

var path = require('path');
var homedir = require('homedir');

// exports

module.exports = authorized_keys;

/**
 * Resolves the path to the user's authorized_keys file.
 *
 * @param {String} [username]
 * Username of authorized_keys owner.
 *
 * @return {String}
 * The full path to the user's authorized_keys file.
 */

function authorized_keys(username) {
  return path.join(homedir(username), '.ssh', 'authorized_keys');
}

