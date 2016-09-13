'use strict';

const fs = require('fs');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const chai = require('chai').should();

describe('loading a file and printing it', function () {

  it('should say hello m8', () =>{
    let index = require('../index');
    index.should.equal('hello m8');
  });

});

describe('replace file contents', () => {

  let readFileSyncMock = sinon.stub(fs, 'readFileSync');

  before(() => {
    app = proxyquire('../index', {
      fs: {
        readFileSync: readFileSyncMock
      }
    });
    readFileSynceSyncMock.returns('world');
  });

  it('should say hello world', () => {
    app.should.equal('hello world');
  });

});

