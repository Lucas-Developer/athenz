/**
 * Copyright 2016 Yahoo Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var dateUtils = require('../../../src/utils/date');

var sinon = require('sinon');
var expect = require('chai').expect;

var sandbox;
describe('date utils', function() {
  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should formatDate per dateformatter', function() {
    expect(dateUtils.formatDate(1463054333000)).to.equal('5/12/2016, 04:58 PDT');
    expect(dateUtils.formatDate()).to.equal('');
  });
});