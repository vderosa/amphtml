/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const del = require('del');

/**
 * Clean up the build artifacts
 * @return {!Promise}
 */
async function clean() {
  return del([
    'dist',
    'dist.3p',
    'dist.tools',
    'build',
    '.amp-build',
    'deps.txt',
    'build-system/runner/build',
    'build-system/runner/dist',
    'build-system/server/new-server/transforms/dist',
    'validator/java/target',
    'validator/java/src/main/resources',
    'validator/java/src/main/java/dev/amp/validator/ValidatorProtos.java',
    'validator/java/bazel-*',
  ]);
}

module.exports = {
  clean,
};

clean.description = 'Removes build output';
