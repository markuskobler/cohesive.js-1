/**
 * cohesive.js | Copyright 2014 Markus Kobler | 3-clause BSD license
 * @fileoverview include all cohesive.js packages
 */
import {
  isUndefined,
  isString,
  isNumber,
  isObject,
  isFunction,
  isArray,
  isArrayLike,
  noop,

  bind,
  curry,
  partial,
  bindPartial,
  partialRight,
  compose,
  once,
  filter,
  bindFilter,
  map,
  bindMap,
  forEach,
  bindForEach,
  find,
  toArray,
  indexOf,

  extend,
  overrideStart,
  start,

  now,
  since,
  Timer,

  escapeHTML,
  unescapeHTML
} from "./base"

var cohesive = {
  isUndefined:isUndefined,
  isString:isString,
  isNumber:isNumber,
  isObject:isObject,
  isFunction:isFunction,
  isArray:isArray,
  isArrayLike:isArrayLike,
  noop:noop,

  bind:bind,
  curry:curry,
  partial:partial,
  bindPartial:bindPartial,
  partialRight:partialRight,
  compose:compose,
  once:once,
  filter:filter,
  bindFilter:bindFilter,
  map:map,
  bindMap:bindMap,
  forEach:forEach,
  bindForEach:bindForEach,
  find:find,
  toArray:toArray,
  indexOf:indexOf,

  extend:extend,
  overrideStart:overrideStart,
  start:start,

  now:now,
  since:since,
  Timer:Timer,

  escapeHTML:escapeHTML,
  unescapeHTML:unescapeHTML
}

import asap from "./asap";
cohesive.asap = asap;

import {listen, unlisten, listenOnce, Event, EventTarget} from "./event";
cohesive.event = {
  listen: listen,
  unlisten: unlisten,
  listenOnce: listenOnce,
  Event: Event,
  EventTarget: EventTarget
}

if (typeof window !== 'undefined') {
  // import {
  //   containsClass,
  //   setClass,
  //   addClasses,
  //   removeClasses,
  //   toggleClass,
  //   enableClass,
  //   setProperties,
  //   setText,
  //   setData,
  //   getData,
  //   getAllData,
  //   hasData,
  //   removeData,
  //   queryByClass,
  //   queryParentsByClass,
  //   focus,
  //   requestAnimationFrame,
  //   cancelAnimationFrame,
  //   listener,
  //   throttledListener
  // } from "./dom";
  // cohesive.dom = {
  //   containsClass:containsClass,
  //   setClass:setClass,
  //   addClasses:addClasses,
  //   removeClasses:removeClasses,
  //   toggleClass:toggleClass,
  //   enableClass:enableClass,
  //   setProperties:setProperties,
  //   setText:setText,
  //   setData:setData,
  //   getData:getData,
  //   getAllData:getAllData,
  //   hasData:hasData,
  //   removeData:removeData,
  //   queryByClass:queryByClass,
  //   queryParentsByClass:queryParentsByClass,
  //   focus:focus,
  //   requestAnimationFrame:requestAnimationFrame,
  //   cancelAnimationFrame:cancelAnimationFrame,
  //   listener:listener,
  //   throttledListener:throttledListener
  // }

  // import ready from "./ready";
  // cohesive.ready = ready;
}

export default cohesive;

if (typeof define === 'function' && define.amd) {
  define(function() { return cohesive; });
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = cohesive;
} else if (typeof this !== 'undefined') {
  this['cohesive'] = cohesive;
}