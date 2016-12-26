/**
 * Copyright 2016 Google Inc. All rights reserved.
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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["_config.yml","d178df8a46be3ea7f599296e24430ce0"],["your-first-pwapp-master/CONTRIBUTING.md","ee4bb1b568f81bd1378a05f4325587d9"],["your-first-pwapp-master/README.md","8bb5bd678ccd3b8ca9a056b39cf65574"],["your-first-pwapp-master/final/favicon.ico","22298544979c4a6950cea9dc5423a3cd"],["your-first-pwapp-master/final/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["your-first-pwapp-master/final/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["your-first-pwapp-master/final/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["your-first-pwapp-master/final/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/final/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["your-first-pwapp-master/final/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["your-first-pwapp-master/final/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["your-first-pwapp-master/final/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["your-first-pwapp-master/final/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["your-first-pwapp-master/final/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["your-first-pwapp-master/final/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["your-first-pwapp-master/final/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/final/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["your-first-pwapp-master/final/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["your-first-pwapp-master/final/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["your-first-pwapp-master/final/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["your-first-pwapp-master/final/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["your-first-pwapp-master/final/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["your-first-pwapp-master/final/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["your-first-pwapp-master/final/images/wind.png","c1136285b55a50c206f0a96f64080767"],["your-first-pwapp-master/final/index.html","b6b8f9d4362add7bcf3845d152fca581"],["your-first-pwapp-master/final/manifest.json","2adbb7bf9fae1d0127149610c43ee0a0"],["your-first-pwapp-master/final/scripts/app.js","59ccc71b42dab19dd3f31421fab57a6b"],["your-first-pwapp-master/final/service-worker.js","73496788d67fed87eb82b1ed4b7abbb5"],["your-first-pwapp-master/final/styles/inline.css","096bae0222967bec9501b13024af6de4"],["your-first-pwapp-master/resources/push-supplement/ic_more_vert_white_24px.svg","3efa18ee8808637f22dea77406c7704e"],["your-first-pwapp-master/resources/push-supplement/libs.min.js","07cce235ad1f7b578ca2730cb95f0c0a"],["your-first-pwapp-master/resources/push-supplement/push.css","7c62e54a1c5be8baa6741c2ba83233b3"],["your-first-pwapp-master/resources/push-supplement/push.html","6effe604e5e2011b737ef93ad3c747aa"],["your-first-pwapp-master/step-02/favicon.ico","22298544979c4a6950cea9dc5423a3cd"],["your-first-pwapp-master/step-02/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["your-first-pwapp-master/step-02/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["your-first-pwapp-master/step-02/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["your-first-pwapp-master/step-02/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-02/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["your-first-pwapp-master/step-02/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["your-first-pwapp-master/step-02/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["your-first-pwapp-master/step-02/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["your-first-pwapp-master/step-02/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["your-first-pwapp-master/step-02/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["your-first-pwapp-master/step-02/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["your-first-pwapp-master/step-02/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-02/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["your-first-pwapp-master/step-02/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["your-first-pwapp-master/step-02/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["your-first-pwapp-master/step-02/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["your-first-pwapp-master/step-02/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["your-first-pwapp-master/step-02/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["your-first-pwapp-master/step-02/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["your-first-pwapp-master/step-02/images/wind.png","c1136285b55a50c206f0a96f64080767"],["your-first-pwapp-master/step-02/index.html","c126ec455d5fd8ebe7b67dedf74bc6df"],["your-first-pwapp-master/step-02/styles/inline.css","096bae0222967bec9501b13024af6de4"],["your-first-pwapp-master/step-04/favicon.ico","22298544979c4a6950cea9dc5423a3cd"],["your-first-pwapp-master/step-04/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["your-first-pwapp-master/step-04/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["your-first-pwapp-master/step-04/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["your-first-pwapp-master/step-04/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-04/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["your-first-pwapp-master/step-04/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["your-first-pwapp-master/step-04/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["your-first-pwapp-master/step-04/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["your-first-pwapp-master/step-04/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["your-first-pwapp-master/step-04/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["your-first-pwapp-master/step-04/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["your-first-pwapp-master/step-04/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-04/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["your-first-pwapp-master/step-04/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["your-first-pwapp-master/step-04/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["your-first-pwapp-master/step-04/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["your-first-pwapp-master/step-04/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["your-first-pwapp-master/step-04/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["your-first-pwapp-master/step-04/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["your-first-pwapp-master/step-04/images/wind.png","c1136285b55a50c206f0a96f64080767"],["your-first-pwapp-master/step-04/index.html","5614d494ab2bb714b0f26d6a2dda484c"],["your-first-pwapp-master/step-04/scripts/app.js","d4812fa230dae231878bff72e964d014"],["your-first-pwapp-master/step-04/styles/inline.css","096bae0222967bec9501b13024af6de4"],["your-first-pwapp-master/step-05/favicon.ico","22298544979c4a6950cea9dc5423a3cd"],["your-first-pwapp-master/step-05/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["your-first-pwapp-master/step-05/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["your-first-pwapp-master/step-05/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["your-first-pwapp-master/step-05/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-05/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["your-first-pwapp-master/step-05/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["your-first-pwapp-master/step-05/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["your-first-pwapp-master/step-05/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["your-first-pwapp-master/step-05/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["your-first-pwapp-master/step-05/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["your-first-pwapp-master/step-05/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["your-first-pwapp-master/step-05/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-05/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["your-first-pwapp-master/step-05/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["your-first-pwapp-master/step-05/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["your-first-pwapp-master/step-05/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["your-first-pwapp-master/step-05/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["your-first-pwapp-master/step-05/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["your-first-pwapp-master/step-05/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["your-first-pwapp-master/step-05/images/wind.png","c1136285b55a50c206f0a96f64080767"],["your-first-pwapp-master/step-05/index.html","5614d494ab2bb714b0f26d6a2dda484c"],["your-first-pwapp-master/step-05/scripts/app.js","4fda58eebc3865e0afeb17acc9146d48"],["your-first-pwapp-master/step-05/styles/inline.css","096bae0222967bec9501b13024af6de4"],["your-first-pwapp-master/step-06/favicon.ico","22298544979c4a6950cea9dc5423a3cd"],["your-first-pwapp-master/step-06/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["your-first-pwapp-master/step-06/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["your-first-pwapp-master/step-06/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["your-first-pwapp-master/step-06/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-06/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["your-first-pwapp-master/step-06/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["your-first-pwapp-master/step-06/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["your-first-pwapp-master/step-06/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["your-first-pwapp-master/step-06/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["your-first-pwapp-master/step-06/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["your-first-pwapp-master/step-06/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["your-first-pwapp-master/step-06/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-06/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["your-first-pwapp-master/step-06/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["your-first-pwapp-master/step-06/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["your-first-pwapp-master/step-06/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["your-first-pwapp-master/step-06/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["your-first-pwapp-master/step-06/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["your-first-pwapp-master/step-06/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["your-first-pwapp-master/step-06/images/wind.png","c1136285b55a50c206f0a96f64080767"],["your-first-pwapp-master/step-06/index.html","5614d494ab2bb714b0f26d6a2dda484c"],["your-first-pwapp-master/step-06/scripts/app.js","d9e648e959f87c91db3d43dff3684403"],["your-first-pwapp-master/step-06/service-worker.js","b81865d1c8304b50f3e3616f768f086a"],["your-first-pwapp-master/step-06/styles/inline.css","096bae0222967bec9501b13024af6de4"],["your-first-pwapp-master/step-07/favicon.ico","22298544979c4a6950cea9dc5423a3cd"],["your-first-pwapp-master/step-07/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["your-first-pwapp-master/step-07/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["your-first-pwapp-master/step-07/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["your-first-pwapp-master/step-07/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-07/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["your-first-pwapp-master/step-07/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["your-first-pwapp-master/step-07/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["your-first-pwapp-master/step-07/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["your-first-pwapp-master/step-07/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["your-first-pwapp-master/step-07/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["your-first-pwapp-master/step-07/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["your-first-pwapp-master/step-07/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-07/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["your-first-pwapp-master/step-07/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["your-first-pwapp-master/step-07/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["your-first-pwapp-master/step-07/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["your-first-pwapp-master/step-07/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["your-first-pwapp-master/step-07/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["your-first-pwapp-master/step-07/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["your-first-pwapp-master/step-07/images/wind.png","c1136285b55a50c206f0a96f64080767"],["your-first-pwapp-master/step-07/index.html","5614d494ab2bb714b0f26d6a2dda484c"],["your-first-pwapp-master/step-07/scripts/app.js","59ccc71b42dab19dd3f31421fab57a6b"],["your-first-pwapp-master/step-07/service-worker.js","39bc772e340e6e25838fd4380be7c81f"],["your-first-pwapp-master/step-07/styles/inline.css","096bae0222967bec9501b13024af6de4"],["your-first-pwapp-master/step-08/favicon.ico","22298544979c4a6950cea9dc5423a3cd"],["your-first-pwapp-master/step-08/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["your-first-pwapp-master/step-08/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["your-first-pwapp-master/step-08/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["your-first-pwapp-master/step-08/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-08/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["your-first-pwapp-master/step-08/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["your-first-pwapp-master/step-08/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["your-first-pwapp-master/step-08/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["your-first-pwapp-master/step-08/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["your-first-pwapp-master/step-08/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["your-first-pwapp-master/step-08/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["your-first-pwapp-master/step-08/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/step-08/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["your-first-pwapp-master/step-08/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["your-first-pwapp-master/step-08/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["your-first-pwapp-master/step-08/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["your-first-pwapp-master/step-08/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["your-first-pwapp-master/step-08/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["your-first-pwapp-master/step-08/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["your-first-pwapp-master/step-08/images/wind.png","c1136285b55a50c206f0a96f64080767"],["your-first-pwapp-master/step-08/index.html","194038fd7e368fed677f84c64948f235"],["your-first-pwapp-master/step-08/manifest.json","2adbb7bf9fae1d0127149610c43ee0a0"],["your-first-pwapp-master/step-08/scripts/app.js","59ccc71b42dab19dd3f31421fab57a6b"],["your-first-pwapp-master/step-08/service-worker.js","164af16ee2646e8d36e67bc661e8c9fe"],["your-first-pwapp-master/step-08/styles/inline.css","096bae0222967bec9501b13024af6de4"],["your-first-pwapp-master/work/favicon.ico","22298544979c4a6950cea9dc5423a3cd"],["your-first-pwapp-master/work/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["your-first-pwapp-master/work/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["your-first-pwapp-master/work/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["your-first-pwapp-master/work/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/work/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["your-first-pwapp-master/work/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["your-first-pwapp-master/work/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["your-first-pwapp-master/work/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["your-first-pwapp-master/work/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["your-first-pwapp-master/work/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["your-first-pwapp-master/work/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["your-first-pwapp-master/work/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["your-first-pwapp-master/work/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["your-first-pwapp-master/work/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["your-first-pwapp-master/work/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["your-first-pwapp-master/work/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["your-first-pwapp-master/work/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["your-first-pwapp-master/work/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["your-first-pwapp-master/work/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["your-first-pwapp-master/work/images/wind.png","c1136285b55a50c206f0a96f64080767"],["your-first-pwapp-master/work/index.html","e2d12e2fae376d7522bb9b4c37ab1a76"],["your-first-pwapp-master/work/scripts/app.js","ce17d9bf45fa5673d9668a1246bde76d"],["your-first-pwapp-master/work/styles/inline.css","096bae0222967bec9501b13024af6de4"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







