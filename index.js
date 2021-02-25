/*
 * token-gen.
 * Generate random tokens from a list of characters.
 * 
 * Copyright (C) 2020-2021, Ty Gillespie. All rights reserved.
 * MIT License.
 */

'use strict';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateToken(length = 8) {
  let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'; // Feel free to change this to meet your needs.
  let final = '';
  for (let i = 0; i < length; i++) {
    final += symbols[randomInt(0, symbols.length - 1)]
  }
  return final;
}

module.exports = {
  generateToken,
};
