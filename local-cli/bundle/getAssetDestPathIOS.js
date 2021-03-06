/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

const path = require('path');

function getAssetDestPathIOS(asset, scale) {
  const suffix = scale === 1 ? '' : '@' + scale + 'x';
  const fileName = asset.name + suffix + '.' + asset.type;
  return path.join(asset.httpServerLocation.substr(1), fileName);
}

module.exports = getAssetDestPathIOS;
