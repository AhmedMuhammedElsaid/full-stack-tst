"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _Types=_interopRequireDefault(require("./Types"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var initialState={data:{},error:""},rootReducer=function(e,t){var r=0<arguments.length&&void 0!==e?e:initialState,o=1<arguments.length?t:void 0;switch(o.type){case _Types.default.FETCH_DATA_SUCCESS:return _objectSpread({},r,{data:o.data});case _Types.default.FETCH_DATA_FAILED:return _objectSpread({},r,{error:o.message});default:return r}},_default=rootReducer;exports.default=_default;