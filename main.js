/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar TypeError = global.TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar TypeError = global.TypeError;\n\n// `Assert: IsConstructor(argument) is true`\nmodule.exports = function (argument) {\n  if (isConstructor(argument)) return argument;\n  throw TypeError(tryToString(argument) + ' is not a constructor');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/a-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar String = global.String;\nvar TypeError = global.TypeError;\n\nmodule.exports = function (argument) {\n  if (typeof argument == 'object' || isCallable(argument)) return argument;\n  throw TypeError(\"Can't set \" + String(argument) + ' as a prototype');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar charAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt);\n\n// `AdvanceStringIndex` abstract operation\n// https://tc39.es/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar TypeError = global.TypeError;\n\nmodule.exports = function (it, Prototype) {\n  if (isPrototypeOf(Prototype, it)) return it;\n  throw TypeError('Incorrect invocation');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar String = global.String;\nvar TypeError = global.TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw TypeError(String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-native.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-native.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("// eslint-disable-next-line es/no-typed-arrays -- safe\nmodule.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-buffer-native.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = fails(function () {\n  if (typeof ArrayBuffer == 'function') {\n    var buffer = new ArrayBuffer(8);\n    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe\n    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-buffer-non-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-view-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-view-core.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ \"./node_modules/core-js/internals/array-buffer-native.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar Int8Array = global.Int8Array;\nvar Int8ArrayPrototype = Int8Array && Int8Array.prototype;\nvar Uint8ClampedArray = global.Uint8ClampedArray;\nvar Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;\nvar TypedArray = Int8Array && getPrototypeOf(Int8Array);\nvar TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);\nvar ObjectPrototype = Object.prototype;\nvar TypeError = global.TypeError;\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');\nvar TYPED_ARRAY_CONSTRUCTOR = uid('TYPED_ARRAY_CONSTRUCTOR');\n// Fixing native typed arrays in Opera Presto crashes the browser, see #595\nvar NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';\nvar TYPED_ARRAY_TAG_REQUIRED = false;\nvar NAME, Constructor, Prototype;\n\nvar TypedArrayConstructorsList = {\n  Int8Array: 1,\n  Uint8Array: 1,\n  Uint8ClampedArray: 1,\n  Int16Array: 2,\n  Uint16Array: 2,\n  Int32Array: 4,\n  Uint32Array: 4,\n  Float32Array: 4,\n  Float64Array: 8\n};\n\nvar BigIntArrayConstructorsList = {\n  BigInt64Array: 8,\n  BigUint64Array: 8\n};\n\nvar isView = function isView(it) {\n  if (!isObject(it)) return false;\n  var klass = classof(it);\n  return klass === 'DataView'\n    || hasOwn(TypedArrayConstructorsList, klass)\n    || hasOwn(BigIntArrayConstructorsList, klass);\n};\n\nvar isTypedArray = function (it) {\n  if (!isObject(it)) return false;\n  var klass = classof(it);\n  return hasOwn(TypedArrayConstructorsList, klass)\n    || hasOwn(BigIntArrayConstructorsList, klass);\n};\n\nvar aTypedArray = function (it) {\n  if (isTypedArray(it)) return it;\n  throw TypeError('Target is not a typed array');\n};\n\nvar aTypedArrayConstructor = function (C) {\n  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;\n  throw TypeError(tryToString(C) + ' is not a typed array constructor');\n};\n\nvar exportTypedArrayMethod = function (KEY, property, forced, options) {\n  if (!DESCRIPTORS) return;\n  if (forced) for (var ARRAY in TypedArrayConstructorsList) {\n    var TypedArrayConstructor = global[ARRAY];\n    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {\n      delete TypedArrayConstructor.prototype[KEY];\n    } catch (error) {\n      // old WebKit bug - some methods are non-configurable\n      try {\n        TypedArrayConstructor.prototype[KEY] = property;\n      } catch (error2) { /* empty */ }\n    }\n  }\n  if (!TypedArrayPrototype[KEY] || forced) {\n    redefine(TypedArrayPrototype, KEY, forced ? property\n      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);\n  }\n};\n\nvar exportTypedArrayStaticMethod = function (KEY, property, forced) {\n  var ARRAY, TypedArrayConstructor;\n  if (!DESCRIPTORS) return;\n  if (setPrototypeOf) {\n    if (forced) for (ARRAY in TypedArrayConstructorsList) {\n      TypedArrayConstructor = global[ARRAY];\n      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {\n        delete TypedArrayConstructor[KEY];\n      } catch (error) { /* empty */ }\n    }\n    if (!TypedArray[KEY] || forced) {\n      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable\n      try {\n        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);\n      } catch (error) { /* empty */ }\n    } else return;\n  }\n  for (ARRAY in TypedArrayConstructorsList) {\n    TypedArrayConstructor = global[ARRAY];\n    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {\n      redefine(TypedArrayConstructor, KEY, property);\n    }\n  }\n};\n\nfor (NAME in TypedArrayConstructorsList) {\n  Constructor = global[NAME];\n  Prototype = Constructor && Constructor.prototype;\n  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);\n  else NATIVE_ARRAY_BUFFER_VIEWS = false;\n}\n\nfor (NAME in BigIntArrayConstructorsList) {\n  Constructor = global[NAME];\n  Prototype = Constructor && Constructor.prototype;\n  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);\n}\n\n// WebKit bug - typed arrays constructors prototype is Object.prototype\nif (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {\n  // eslint-disable-next-line no-shadow -- safe\n  TypedArray = function TypedArray() {\n    throw TypeError('Incorrect invocation');\n  };\n  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {\n    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);\n  }\n}\n\nif (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {\n  TypedArrayPrototype = TypedArray.prototype;\n  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {\n    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);\n  }\n}\n\n// WebKit bug - one more object in Uint8ClampedArray prototype chain\nif (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {\n  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);\n}\n\nif (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {\n  TYPED_ARRAY_TAG_REQUIRED = true;\n  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {\n    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;\n  } });\n  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {\n    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);\n  }\n}\n\nmodule.exports = {\n  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,\n  TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR,\n  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,\n  aTypedArray: aTypedArray,\n  aTypedArrayConstructor: aTypedArrayConstructor,\n  exportTypedArrayMethod: exportTypedArrayMethod,\n  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,\n  isView: isView,\n  isTypedArray: isTypedArray,\n  TypedArray: TypedArray,\n  TypedArrayPrototype: TypedArrayPrototype\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-buffer-view-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ \"./node_modules/core-js/internals/array-buffer-native.js\");\nvar FunctionName = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toIndex = __webpack_require__(/*! ../internals/to-index */ \"./node_modules/core-js/internals/to-index.js\");\nvar IEEE754 = __webpack_require__(/*! ../internals/ieee754 */ \"./node_modules/core-js/internals/ieee754.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar arrayFill = __webpack_require__(/*! ../internals/array-fill */ \"./node_modules/core-js/internals/array-fill.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar PROPER_FUNCTION_NAME = FunctionName.PROPER;\nvar CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length';\nvar WRONG_INDEX = 'Wrong index';\nvar NativeArrayBuffer = global[ARRAY_BUFFER];\nvar $ArrayBuffer = NativeArrayBuffer;\nvar ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];\nvar $DataView = global[DATA_VIEW];\nvar DataViewPrototype = $DataView && $DataView[PROTOTYPE];\nvar ObjectPrototype = Object.prototype;\nvar Array = global.Array;\nvar RangeError = global.RangeError;\nvar fill = uncurryThis(arrayFill);\nvar reverse = uncurryThis([].reverse);\n\nvar packIEEE754 = IEEE754.pack;\nvar unpackIEEE754 = IEEE754.unpack;\n\nvar packInt8 = function (number) {\n  return [number & 0xFF];\n};\n\nvar packInt16 = function (number) {\n  return [number & 0xFF, number >> 8 & 0xFF];\n};\n\nvar packInt32 = function (number) {\n  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];\n};\n\nvar unpackInt32 = function (buffer) {\n  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];\n};\n\nvar packFloat32 = function (number) {\n  return packIEEE754(number, 23, 4);\n};\n\nvar packFloat64 = function (number) {\n  return packIEEE754(number, 52, 8);\n};\n\nvar addGetter = function (Constructor, key) {\n  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });\n};\n\nvar get = function (view, count, index, isLittleEndian) {\n  var intIndex = toIndex(index);\n  var store = getInternalState(view);\n  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);\n  var bytes = getInternalState(store.buffer).bytes;\n  var start = intIndex + store.byteOffset;\n  var pack = arraySlice(bytes, start, start + count);\n  return isLittleEndian ? pack : reverse(pack);\n};\n\nvar set = function (view, count, index, conversion, value, isLittleEndian) {\n  var intIndex = toIndex(index);\n  var store = getInternalState(view);\n  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);\n  var bytes = getInternalState(store.buffer).bytes;\n  var start = intIndex + store.byteOffset;\n  var pack = conversion(+value);\n  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];\n};\n\nif (!NATIVE_ARRAY_BUFFER) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, ArrayBufferPrototype);\n    var byteLength = toIndex(length);\n    setInternalState(this, {\n      bytes: fill(Array(byteLength), 0),\n      byteLength: byteLength\n    });\n    if (!DESCRIPTORS) this.byteLength = byteLength;\n  };\n\n  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, DataViewPrototype);\n    anInstance(buffer, ArrayBufferPrototype);\n    var bufferLength = getInternalState(buffer).byteLength;\n    var offset = toIntegerOrInfinity(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    setInternalState(this, {\n      buffer: buffer,\n      byteLength: byteLength,\n      byteOffset: offset\n    });\n    if (!DESCRIPTORS) {\n      this.buffer = buffer;\n      this.byteLength = byteLength;\n      this.byteOffset = offset;\n    }\n  };\n\n  DataViewPrototype = $DataView[PROTOTYPE];\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, 'byteLength');\n    addGetter($DataView, 'buffer');\n    addGetter($DataView, 'byteLength');\n    addGetter($DataView, 'byteOffset');\n  }\n\n  redefineAll(DataViewPrototype, {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packInt8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packInt8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);\n    }\n  });\n} else {\n  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;\n  /* eslint-disable no-new -- required for testing */\n  if (!fails(function () {\n    NativeArrayBuffer(1);\n  }) || !fails(function () {\n    new NativeArrayBuffer(-1);\n  }) || fails(function () {\n    new NativeArrayBuffer();\n    new NativeArrayBuffer(1.5);\n    new NativeArrayBuffer(NaN);\n    return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;\n  })) {\n  /* eslint-enable no-new -- required for testing */\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, ArrayBufferPrototype);\n      return new NativeArrayBuffer(toIndex(length));\n    };\n\n    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;\n\n    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) {\n        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);\n      }\n    }\n\n    ArrayBufferPrototype.constructor = $ArrayBuffer;\n  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {\n    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);\n  }\n\n  // WebKit bug - the same parent prototype for typed arrays and data view\n  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {\n    setPrototypeOf(DataViewPrototype, ObjectPrototype);\n  }\n\n  // iOS Safari 7.x bug\n  var testView = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);\n  testView.setInt8(0, 2147483648);\n  testView.setInt8(1, 2147483649);\n  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll(DataViewPrototype, {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8(this, byteOffset, value << 24 >> 24);\n    }\n  }, { unsafe: true });\n}\n\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\n\nmodule.exports = {\n  ArrayBuffer: $ArrayBuffer,\n  DataView: $DataView\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-copy-within.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar min = Math.min;\n\n// `Array.prototype.copyWithin` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.copywithin\n// eslint-disable-next-line es/no-array-prototype-copywithin -- safe\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = lengthOfArrayLike(O);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\n// `Array.prototype.fill` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.fill\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = lengthOfArrayLike(O);\n  var argumentsLength = arguments.length;\n  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);\n  var end = argumentsLength > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\nmodule.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n// eslint-disable-next-line es/no-array-prototype-foreach -- safe\n} : [].forEach;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-from-constructor-and-list.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-from-constructor-and-list.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nmodule.exports = function (Constructor, list) {\n  var index = 0;\n  var length = lengthOfArrayLike(list);\n  var result = new Constructor(length);\n  while (length > index) result[index] = list[index++];\n  return result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-from-constructor-and-list.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar Array = global.Array;\n\n// `Array.from` method implementation\n// https://tc39.es/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var IS_CONSTRUCTOR = isConstructor(this);\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value;\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = getIterator(O, iteratorMethod);\n    next = iterator.next;\n    result = IS_CONSTRUCTOR ? new this() : [];\n    for (;!(step = call(next, iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = lengthOfArrayLike(O);\n    result = IS_CONSTRUCTOR ? new this(length) : Array(length);\n    for (;length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-from.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = lengthOfArrayLike(O);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = uncurryThis([].push);\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_REJECT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that);\n    var length = lengthOfArrayLike(self);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push(target, value);      // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push(target, value);      // filterReject\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterReject` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterReject: createMethod(7)\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n/* eslint-disable es/no-array-prototype-lastindexof -- safe */\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar min = Math.min;\nvar $lastIndexOf = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;\nvar STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');\nvar FORCED = NEGATIVE_ZERO || !STRICT_METHOD;\n\n// `Array.prototype.lastIndexOf` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.lastindexof\nmodule.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n  // convert -0 to +0\n  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;\n  var O = toIndexedObject(this);\n  var length = lengthOfArrayLike(O);\n  var index = length - 1;\n  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));\n  if (index < 0) index = length + index;\n  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;\n  return -1;\n} : $lastIndexOf;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar TypeError = global.TypeError;\n\n// `Array.prototype.{ reduce, reduceRight }` methods implementation\nvar createMethod = function (IS_RIGHT) {\n  return function (that, callbackfn, argumentsLength, memo) {\n    aCallable(callbackfn);\n    var O = toObject(that);\n    var self = IndexedObject(O);\n    var length = lengthOfArrayLike(O);\n    var index = IS_RIGHT ? length - 1 : 0;\n    var i = IS_RIGHT ? -1 : 1;\n    if (argumentsLength < 2) while (true) {\n      if (index in self) {\n        memo = self[index];\n        index += i;\n        break;\n      }\n      index += i;\n      if (IS_RIGHT ? index < 0 : length <= index) {\n        throw TypeError('Reduce of empty array with no initial value');\n      }\n    }\n    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {\n      memo = callbackfn(memo, self[index], index, O);\n    }\n    return memo;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.reduce` method\n  // https://tc39.es/ecma262/#sec-array.prototype.reduce\n  left: createMethod(false),\n  // `Array.prototype.reduceRight` method\n  // https://tc39.es/ecma262/#sec-array.prototype.reduceright\n  right: createMethod(true)\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\nvar Array = global.Array;\nvar max = Math.max;\n\nmodule.exports = function (O, start, end) {\n  var length = lengthOfArrayLike(O);\n  var k = toAbsoluteIndex(start, length);\n  var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n  var result = Array(max(fin - k, 0));\n  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);\n  result.length = n;\n  return result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-slice-simple.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis([].slice);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-slice.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-sort.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-sort.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\n\nvar floor = Math.floor;\n\nvar mergeSort = function (array, comparefn) {\n  var length = array.length;\n  var middle = floor(length / 2);\n  return length < 8 ? insertionSort(array, comparefn) : merge(\n    array,\n    mergeSort(arraySlice(array, 0, middle), comparefn),\n    mergeSort(arraySlice(array, middle), comparefn),\n    comparefn\n  );\n};\n\nvar insertionSort = function (array, comparefn) {\n  var length = array.length;\n  var i = 1;\n  var element, j;\n\n  while (i < length) {\n    j = i;\n    element = array[i];\n    while (j && comparefn(array[j - 1], element) > 0) {\n      array[j] = array[--j];\n    }\n    if (j !== i++) array[j] = element;\n  } return array;\n};\n\nvar merge = function (array, left, right, comparefn) {\n  var llength = left.length;\n  var rlength = right.length;\n  var lindex = 0;\n  var rindex = 0;\n\n  while (lindex < llength || rindex < rlength) {\n    array[lindex + rindex] = (lindex < llength && rindex < rlength)\n      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]\n      : lindex < llength ? left[lindex++] : right[rindex++];\n  } return array;\n};\n\nmodule.exports = mergeSort;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-sort.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar Array = global.Array;\n\n// a part of `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ \"./node_modules/core-js/internals/array-species-constructor.js\");\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  } catch (error) {\n    iteratorClose(iterator, 'throw', error);\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar Object = global.Object;\n\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/clear-error-stack.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/clear-error-stack.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar replace = uncurryThis(''.replace);\n\nvar TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');\nvar V8_OR_CHAKRA_STACK_ENTRY = /\\n\\s*at [^:]*:[^\\n]*/;\nvar IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);\n\nmodule.exports = function (stack, dropEntries) {\n  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {\n    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');\n  } return stack;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/clear-error-stack.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fastKey = (__webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\").fastKey);\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar internalStateGetterFor = InternalStateModule.getterFor;\n\nmodule.exports = {\n  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {\n    var Constructor = wrapper(function (that, iterable) {\n      anInstance(that, Prototype);\n      setInternalState(that, {\n        type: CONSTRUCTOR_NAME,\n        index: create(null),\n        first: undefined,\n        last: undefined,\n        size: 0\n      });\n      if (!DESCRIPTORS) that.size = 0;\n      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });\n    });\n\n    var Prototype = Constructor.prototype;\n\n    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);\n\n    var define = function (that, key, value) {\n      var state = getInternalState(that);\n      var entry = getEntry(that, key);\n      var previous, index;\n      // change existing entry\n      if (entry) {\n        entry.value = value;\n      // create new entry\n      } else {\n        state.last = entry = {\n          index: index = fastKey(key, true),\n          key: key,\n          value: value,\n          previous: previous = state.last,\n          next: undefined,\n          removed: false\n        };\n        if (!state.first) state.first = entry;\n        if (previous) previous.next = entry;\n        if (DESCRIPTORS) state.size++;\n        else that.size++;\n        // add to index\n        if (index !== 'F') state.index[index] = entry;\n      } return that;\n    };\n\n    var getEntry = function (that, key) {\n      var state = getInternalState(that);\n      // fast case\n      var index = fastKey(key);\n      var entry;\n      if (index !== 'F') return state.index[index];\n      // frozen object case\n      for (entry = state.first; entry; entry = entry.next) {\n        if (entry.key == key) return entry;\n      }\n    };\n\n    redefineAll(Prototype, {\n      // `{ Map, Set }.prototype.clear()` methods\n      // https://tc39.es/ecma262/#sec-map.prototype.clear\n      // https://tc39.es/ecma262/#sec-set.prototype.clear\n      clear: function clear() {\n        var that = this;\n        var state = getInternalState(that);\n        var data = state.index;\n        var entry = state.first;\n        while (entry) {\n          entry.removed = true;\n          if (entry.previous) entry.previous = entry.previous.next = undefined;\n          delete data[entry.index];\n          entry = entry.next;\n        }\n        state.first = state.last = undefined;\n        if (DESCRIPTORS) state.size = 0;\n        else that.size = 0;\n      },\n      // `{ Map, Set }.prototype.delete(key)` methods\n      // https://tc39.es/ecma262/#sec-map.prototype.delete\n      // https://tc39.es/ecma262/#sec-set.prototype.delete\n      'delete': function (key) {\n        var that = this;\n        var state = getInternalState(that);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.next;\n          var prev = entry.previous;\n          delete state.index[entry.index];\n          entry.removed = true;\n          if (prev) prev.next = next;\n          if (next) next.previous = prev;\n          if (state.first == entry) state.first = next;\n          if (state.last == entry) state.last = prev;\n          if (DESCRIPTORS) state.size--;\n          else that.size--;\n        } return !!entry;\n      },\n      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods\n      // https://tc39.es/ecma262/#sec-map.prototype.foreach\n      // https://tc39.es/ecma262/#sec-set.prototype.foreach\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        var state = getInternalState(this);\n        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n        var entry;\n        while (entry = entry ? entry.next : state.first) {\n          boundFunction(entry.value, entry.key, this);\n          // revert to the last existing entry\n          while (entry && entry.removed) entry = entry.previous;\n        }\n      },\n      // `{ Map, Set}.prototype.has(key)` methods\n      // https://tc39.es/ecma262/#sec-map.prototype.has\n      // https://tc39.es/ecma262/#sec-set.prototype.has\n      has: function has(key) {\n        return !!getEntry(this, key);\n      }\n    });\n\n    redefineAll(Prototype, IS_MAP ? {\n      // `Map.prototype.get(key)` method\n      // https://tc39.es/ecma262/#sec-map.prototype.get\n      get: function get(key) {\n        var entry = getEntry(this, key);\n        return entry && entry.value;\n      },\n      // `Map.prototype.set(key, value)` method\n      // https://tc39.es/ecma262/#sec-map.prototype.set\n      set: function set(key, value) {\n        return define(this, key === 0 ? 0 : key, value);\n      }\n    } : {\n      // `Set.prototype.add(value)` method\n      // https://tc39.es/ecma262/#sec-set.prototype.add\n      add: function add(value) {\n        return define(this, value = value === 0 ? 0 : value, value);\n      }\n    });\n    if (DESCRIPTORS) defineProperty(Prototype, 'size', {\n      get: function () {\n        return getInternalState(this).size;\n      }\n    });\n    return Constructor;\n  },\n  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {\n    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';\n    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);\n    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);\n    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods\n    // https://tc39.es/ecma262/#sec-map.prototype.entries\n    // https://tc39.es/ecma262/#sec-map.prototype.keys\n    // https://tc39.es/ecma262/#sec-map.prototype.values\n    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator\n    // https://tc39.es/ecma262/#sec-set.prototype.entries\n    // https://tc39.es/ecma262/#sec-set.prototype.keys\n    // https://tc39.es/ecma262/#sec-set.prototype.values\n    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator\n    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {\n      setInternalState(this, {\n        type: ITERATOR_NAME,\n        target: iterated,\n        state: getInternalCollectionState(iterated),\n        kind: kind,\n        last: undefined\n      });\n    }, function () {\n      var state = getInternalIteratorState(this);\n      var kind = state.kind;\n      var entry = state.last;\n      // revert to the last existing entry\n      while (entry && entry.removed) entry = entry.previous;\n      // get next entry\n      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {\n        // or finish the iteration\n        state.target = undefined;\n        return { value: undefined, done: true };\n      }\n      // return step by kind\n      if (kind == 'keys') return { value: entry.key, done: false };\n      if (kind == 'values') return { value: entry.value, done: false };\n      return { value: [entry.key, entry.value], done: false };\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // `{ Map, Set }.prototype[@@species]` accessors\n    // https://tc39.es/ecma262/#sec-get-map-@@species\n    // https://tc39.es/ecma262/#sec-get-set-@@species\n    setSpecies(CONSTRUCTOR_NAME);\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/collection-weak.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/collection-weak.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\nvar getWeakData = (__webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\").getWeakData);\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar ArrayIterationModule = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar internalStateGetterFor = InternalStateModule.getterFor;\nvar find = ArrayIterationModule.find;\nvar findIndex = ArrayIterationModule.findIndex;\nvar splice = uncurryThis([].splice);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (store) {\n  return store.frozen || (store.frozen = new UncaughtFrozenStore());\n};\n\nvar UncaughtFrozenStore = function () {\n  this.entries = [];\n};\n\nvar findUncaughtFrozen = function (store, key) {\n  return find(store.entries, function (it) {\n    return it[0] === key;\n  });\n};\n\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.entries.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = findIndex(this.entries, function (it) {\n      return it[0] === key;\n    });\n    if (~index) splice(this.entries, index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {\n    var Constructor = wrapper(function (that, iterable) {\n      anInstance(that, Prototype);\n      setInternalState(that, {\n        type: CONSTRUCTOR_NAME,\n        id: id++,\n        frozen: undefined\n      });\n      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });\n    });\n\n    var Prototype = Constructor.prototype;\n\n    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);\n\n    var define = function (that, key, value) {\n      var state = getInternalState(that);\n      var data = getWeakData(anObject(key), true);\n      if (data === true) uncaughtFrozenStore(state).set(key, value);\n      else data[state.id] = value;\n      return that;\n    };\n\n    redefineAll(Prototype, {\n      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods\n      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete\n      // https://tc39.es/ecma262/#sec-weakset.prototype.delete\n      'delete': function (key) {\n        var state = getInternalState(this);\n        if (!isObject(key)) return false;\n        var data = getWeakData(key);\n        if (data === true) return uncaughtFrozenStore(state)['delete'](key);\n        return data && hasOwn(data, state.id) && delete data[state.id];\n      },\n      // `{ WeakMap, WeakSet }.prototype.has(key)` methods\n      // https://tc39.es/ecma262/#sec-weakmap.prototype.has\n      // https://tc39.es/ecma262/#sec-weakset.prototype.has\n      has: function has(key) {\n        var state = getInternalState(this);\n        if (!isObject(key)) return false;\n        var data = getWeakData(key);\n        if (data === true) return uncaughtFrozenStore(state).has(key);\n        return data && hasOwn(data, state.id);\n      }\n    });\n\n    redefineAll(Prototype, IS_MAP ? {\n      // `WeakMap.prototype.get(key)` method\n      // https://tc39.es/ecma262/#sec-weakmap.prototype.get\n      get: function get(key) {\n        var state = getInternalState(this);\n        if (isObject(key)) {\n          var data = getWeakData(key);\n          if (data === true) return uncaughtFrozenStore(state).get(key);\n          return data ? data[state.id] : undefined;\n        }\n      },\n      // `WeakMap.prototype.set(key, value)` method\n      // https://tc39.es/ecma262/#sec-weakmap.prototype.set\n      set: function set(key, value) {\n        return define(this, key, value);\n      }\n    } : {\n      // `WeakSet.prototype.add(value)` method\n      // https://tc39.es/ecma262/#sec-weakset.prototype.add\n      add: function add(value) {\n        return define(this, value, true);\n      }\n    });\n\n    return Constructor;\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/collection-weak.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\n\nmodule.exports = function (CONSTRUCTOR_NAME, wrapper, common) {\n  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;\n  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var NativeConstructor = global[CONSTRUCTOR_NAME];\n  var NativePrototype = NativeConstructor && NativeConstructor.prototype;\n  var Constructor = NativeConstructor;\n  var exported = {};\n\n  var fixMethod = function (KEY) {\n    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);\n    redefine(NativePrototype, KEY,\n      KEY == 'add' ? function add(value) {\n        uncurriedNativeMethod(this, value === 0 ? 0 : value);\n        return this;\n      } : KEY == 'delete' ? function (key) {\n        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);\n      } : KEY == 'get' ? function get(key) {\n        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);\n      } : KEY == 'has' ? function has(key) {\n        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);\n      } : function set(key, value) {\n        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);\n        return this;\n      }\n    );\n  };\n\n  var REPLACE = isForced(\n    CONSTRUCTOR_NAME,\n    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {\n      new NativeConstructor().entries().next();\n    }))\n  );\n\n  if (REPLACE) {\n    // create collection constructor\n    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);\n    InternalMetadataModule.enable();\n  } else if (isForced(CONSTRUCTOR_NAME, true)) {\n    var instance = new Constructor();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    // eslint-disable-next-line no-new -- required for testing\n    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new NativeConstructor();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n\n    if (!ACCEPT_ITERABLES) {\n      Constructor = wrapper(function (dummy, iterable) {\n        anInstance(dummy, NativePrototype);\n        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);\n        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });\n        return that;\n      });\n      Constructor.prototype = NativePrototype;\n      NativePrototype.constructor = Constructor;\n    }\n\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n\n    // weak collections should not contains .clear method\n    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;\n  }\n\n  exported[CONSTRUCTOR_NAME] = Constructor;\n  $({ global: true, forced: Constructor != NativeConstructor }, exported);\n\n  setToStringTag(Constructor, CONSTRUCTOR_NAME);\n\n  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);\n\n  return Constructor;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/collection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source, exceptions) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {\n      defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n    }\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (error1) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (error2) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar quot = /\"/g;\nvar replace = uncurryThis(''.replace);\n\n// `CreateHTML` abstract operation\n// https://tc39.es/ecma262/#sec-createhtml\nmodule.exports = function (string, tag, attribute, value) {\n  var S = toString(requireObjectCoercible(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + replace(toString(value), quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/create-html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\").IteratorPrototype);\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPropertyKey(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/date-to-iso-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-iso-string.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar padStart = (__webpack_require__(/*! ../internals/string-pad */ \"./node_modules/core-js/internals/string-pad.js\").start);\n\nvar RangeError = global.RangeError;\nvar abs = Math.abs;\nvar DatePrototype = Date.prototype;\nvar n$DateToISOString = DatePrototype.toISOString;\nvar getTime = uncurryThis(DatePrototype.getTime);\nvar getUTCDate = uncurryThis(DatePrototype.getUTCDate);\nvar getUTCFullYear = uncurryThis(DatePrototype.getUTCFullYear);\nvar getUTCHours = uncurryThis(DatePrototype.getUTCHours);\nvar getUTCMilliseconds = uncurryThis(DatePrototype.getUTCMilliseconds);\nvar getUTCMinutes = uncurryThis(DatePrototype.getUTCMinutes);\nvar getUTCMonth = uncurryThis(DatePrototype.getUTCMonth);\nvar getUTCSeconds = uncurryThis(DatePrototype.getUTCSeconds);\n\n// `Date.prototype.toISOString` method implementation\n// https://tc39.es/ecma262/#sec-date.prototype.toisostring\n// PhantomJS / old WebKit fails here:\nmodule.exports = (fails(function () {\n  return n$DateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  n$DateToISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime(this))) throw RangeError('Invalid time value');\n  var date = this;\n  var year = getUTCFullYear(date);\n  var milliseconds = getUTCMilliseconds(date);\n  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';\n  return sign + padStart(abs(year), sign ? 6 : 4, 0) +\n    '-' + padStart(getUTCMonth(date) + 1, 2, 0) +\n    '-' + padStart(getUTCDate(date), 2, 0) +\n    'T' + padStart(getUTCHours(date), 2, 0) +\n    ':' + padStart(getUTCMinutes(date), 2, 0) +\n    ':' + padStart(getUTCSeconds(date), 2, 0) +\n    '.' + padStart(milliseconds, 3, 0) +\n    'Z';\n} : n$DateToISOString;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/date-to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-primitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js/internals/ordinary-to-primitive.js\");\n\nvar TypeError = global.TypeError;\n\n// `Date.prototype[@@toPrimitive](hint)` method implementation\n// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive\nmodule.exports = function (hint) {\n  anObject(this);\n  if (hint === 'string' || hint === 'default') hint = 'string';\n  else if (hint !== 'number') throw TypeError('Incorrect hint');\n  return ordinaryToPrimitive(this, hint);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar FunctionName = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\");\n\nvar PROPER_FUNCTION_NAME = FunctionName.PROPER;\nvar CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {\n          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF\n  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {\n      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);\n    } else {\n      INCORRECT_VALUES_NAME = true;\n      defaultIterator = function values() { return call(nativeIterator, this); };\n    }\n  }\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });\n  }\n  Iterators[NAME] = defaultIterator;\n\n  return methods;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js/internals/well-known-symbol-wrapped.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/define-well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-exception-constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-exception-constants.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = {\n  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },\n  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },\n  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },\n  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },\n  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },\n  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },\n  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },\n  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },\n  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },\n  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },\n  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },\n  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },\n  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },\n  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },\n  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },\n  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },\n  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },\n  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },\n  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },\n  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },\n  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },\n  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },\n  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },\n  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },\n  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/dom-exception-constants.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\nvar classList = documentCreateElement('span').classList;\nvar DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;\n\nmodule.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/dom-token-list-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-ff-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-ff-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar firefox = userAgent.match(/firefox\\/(\\d+)/i);\n\nmodule.exports = !!firefox && +firefox[1];\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-ff-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-browser.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("module.exports = typeof window == 'object';\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-is-browser.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ie-or-edge.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ie-or-edge.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var UA = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /MSIE|Trident/.test(UA);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-is-ie-or-edge.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios-pebble.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios-pebble.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-is-ios-pebble.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-is-ios.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = classof(global.process) == 'process';\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-is-node.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /web0s(?!.*chrome)/i.test(userAgent);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-is-webos-webkit.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-webkit-version.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-webkit-version.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar webkit = userAgent.match(/AppleWebKit\\/(\\d+)\\./);\n\nmodule.exports = !!webkit && +webkit[1];\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/engine-webkit-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/error-stack-installable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/error-stack-installable.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = !fails(function () {\n  var error = Error('a');\n  if (!('stack' in error)) return true;\n  // eslint-disable-next-line es/no-object-defineproperty -- safe\n  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));\n  return error.stack !== 7;\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/error-stack-installable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/error-to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/error-to-string.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ \"./node_modules/core-js/internals/normalize-string-argument.js\");\n\nvar nativeErrorToString = Error.prototype.toString;\n\nvar INCORRECT_TO_STRING = fails(function () {\n  if (DESCRIPTORS) {\n    // Chrome 32- incorrectly call accessor\n    // eslint-disable-next-line es/no-object-defineproperty -- safe\n    var object = create(Object.defineProperty({}, 'name', { get: function () {\n      return this === object;\n    } }));\n    if (nativeErrorToString.call(object) !== 'true') return true;\n  }\n  // FF10- does not properly handle non-strings\n  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'\n    // IE8 does not properly handle defaults\n    || nativeErrorToString.call({}) !== 'Error';\n});\n\nmodule.exports = INCORRECT_TO_STRING ? function toString() {\n  var O = anObject(this);\n  var name = normalizeStringArgument(O.name, 'Error');\n  var message = normalizeStringArgument(O.message);\n  return !name ? message : !message ? name : name + ': ' + message;\n} : nativeErrorToString;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/error-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n  options.name        - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty == typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// TODO: Remove from `core-js@4` since it's moved to entry points\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar RegExpPrototype = RegExp.prototype;\n\nmodule.exports = function (KEY, exec, FORCED, SHAM) {\n  var SYMBOL = wellKnownSymbol(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {};\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () { execCalled = true; return null; };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    FORCED\n  ) {\n    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      var uncurriedNativeMethod = uncurryThis(nativeMethod);\n      var $exec = regexp.exec;\n      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };\n        }\n        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };\n      }\n      return { done: false };\n    });\n\n    redefine(String.prototype, KEY, methods[0]);\n    redefine(RegExpPrototype, SYMBOL, methods[1]);\n  }\n\n  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/flatten-into-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar TypeError = global.TypeError;\n\n// `FlattenIntoArray` abstract operation\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? bind(mapper, thisArg) : false;\n  var element, elementLen;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      if (depth > 0 && isArray(element)) {\n        elementLen = lengthOfArrayLike(element);\n        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n};\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing\n  return Object.isExtensible(Object.preventExtensions({}));\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/freezing.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar call = FunctionPrototype.call;\n\n// eslint-disable-next-line es/no-reflect -- safe\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/function-apply.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/function-bind-native.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar Function = global.Function;\nvar concat = uncurryThis([].concat);\nvar join = uncurryThis([].join);\nvar factories = {};\n\nvar construct = function (C, argsLength, args) {\n  if (!hasOwn(factories, argsLength)) {\n    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';\n    factories[argsLength] = Function('C,a', 'return new C(' + join(list, ',') + ')');\n  } return factories[argsLength](C, args);\n};\n\n// `Function.prototype.bind` method implementation\n// https://tc39.es/ecma262/#sec-function.prototype.bind\nmodule.exports = NATIVE_BIND ? Function.bind : function bind(that /* , ...args */) {\n  var F = aCallable(this);\n  var Prototype = F.prototype;\n  var partArgs = arraySlice(arguments, 1);\n  var boundFunction = function bound(/* args... */) {\n    var args = concat(partArgs, arraySlice(arguments));\n    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);\n  };\n  if (isObject(Prototype)) boundFunction.prototype = Prototype;\n  return boundFunction;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/function-bind.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar FunctionPrototype = Function.prototype;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;\n\nvar EXISTS = hasOwn(FunctionPrototype, 'name');\n// additional protection from minified / mangled / dropped function names\nvar PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';\nvar CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));\n\nmodule.exports = {\n  EXISTS: EXISTS,\n  PROPER: PROPER,\n  CONFIGURABLE: CONFIGURABLE\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/function-name.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar bind = FunctionPrototype.bind;\nvar call = FunctionPrototype.call;\nvar uncurryThis = NATIVE_BIND && bind.bind(call, call);\n\nmodule.exports = NATIVE_BIND ? function (fn) {\n  return fn && uncurryThis(fn);\n} : function (fn) {\n  return fn && function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar aFunction = function (argument) {\n  return isCallable(argument) ? argument : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return getMethod(it, ITERATOR)\n    || getMethod(it, '@@iterator')\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar TypeError = global.TypeError;\n\nmodule.exports = function (argument, usingIterator) {\n  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;\n  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));\n  throw TypeError(tryToString(argument) + ' is not iterable');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return func == null ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar floor = Math.floor;\nvar charAt = uncurryThis(''.charAt);\nvar replace = uncurryThis(''.replace);\nvar stringSlice = uncurryThis(''.slice);\nvar SUBSTITUTION_SYMBOLS = /\\$([$&'`]|\\d{1,2}|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&'`]|\\d{1,2})/g;\n\n// `GetSubstitution` abstract operation\n// https://tc39.es/ecma262/#sec-getsubstitution\nmodule.exports = function (matched, str, position, captures, namedCaptures, replacement) {\n  var tailPos = position + matched.length;\n  var m = captures.length;\n  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n  if (namedCaptures !== undefined) {\n    namedCaptures = toObject(namedCaptures);\n    symbols = SUBSTITUTION_SYMBOLS;\n  }\n  return replace(replacement, symbols, function (match, ch) {\n    var capture;\n    switch (charAt(ch, 0)) {\n      case '$': return '$';\n      case '&': return matched;\n      case '`': return stringSlice(str, 0, position);\n      case \"'\": return stringSlice(str, tailPos);\n      case '<':\n        capture = namedCaptures[stringSlice(ch, 1, -1)];\n        break;\n      default: // \\d\\d?\n        var n = +ch;\n        if (n === 0) return match;\n        if (n > m) {\n          var f = floor(n / 10);\n          if (f === 0) return match;\n          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);\n          return match;\n        }\n        capture = captures[n - 1];\n    }\n    return capture === undefined ? '' : capture;\n  });\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/get-substitution.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = function (a, b) {\n  var console = global.console;\n  if (console && console.error) {\n    arguments.length == 1 ? console.error(a) : console.error(a, b);\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/host-report-errors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ieee754.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/ieee754.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// IEEE754 conversions based on https://github.com/feross/ieee754\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar Array = global.Array;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\n\nvar pack = function (number, mantissaLength, bytes) {\n  var buffer = Array(bytes);\n  var exponentLength = bytes * 8 - mantissaLength - 1;\n  var eMax = (1 << exponentLength) - 1;\n  var eBias = eMax >> 1;\n  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;\n  var index = 0;\n  var exponent, mantissa, c;\n  number = abs(number);\n  // eslint-disable-next-line no-self-compare -- NaN check\n  if (number != number || number === Infinity) {\n    // eslint-disable-next-line no-self-compare -- NaN check\n    mantissa = number != number ? 1 : 0;\n    exponent = eMax;\n  } else {\n    exponent = floor(log(number) / LN2);\n    c = pow(2, -exponent);\n    if (number * c < 1) {\n      exponent--;\n      c *= 2;\n    }\n    if (exponent + eBias >= 1) {\n      number += rt / c;\n    } else {\n      number += rt * pow(2, 1 - eBias);\n    }\n    if (number * c >= 2) {\n      exponent++;\n      c /= 2;\n    }\n    if (exponent + eBias >= eMax) {\n      mantissa = 0;\n      exponent = eMax;\n    } else if (exponent + eBias >= 1) {\n      mantissa = (number * c - 1) * pow(2, mantissaLength);\n      exponent = exponent + eBias;\n    } else {\n      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);\n      exponent = 0;\n    }\n  }\n  while (mantissaLength >= 8) {\n    buffer[index++] = mantissa & 255;\n    mantissa /= 256;\n    mantissaLength -= 8;\n  }\n  exponent = exponent << mantissaLength | mantissa;\n  exponentLength += mantissaLength;\n  while (exponentLength > 0) {\n    buffer[index++] = exponent & 255;\n    exponent /= 256;\n    exponentLength -= 8;\n  }\n  buffer[--index] |= sign * 128;\n  return buffer;\n};\n\nvar unpack = function (buffer, mantissaLength) {\n  var bytes = buffer.length;\n  var exponentLength = bytes * 8 - mantissaLength - 1;\n  var eMax = (1 << exponentLength) - 1;\n  var eBias = eMax >> 1;\n  var nBits = exponentLength - 7;\n  var index = bytes - 1;\n  var sign = buffer[index--];\n  var exponent = sign & 127;\n  var mantissa;\n  sign >>= 7;\n  while (nBits > 0) {\n    exponent = exponent * 256 + buffer[index--];\n    nBits -= 8;\n  }\n  mantissa = exponent & (1 << -nBits) - 1;\n  exponent >>= -nBits;\n  nBits += mantissaLength;\n  while (nBits > 0) {\n    mantissa = mantissa * 256 + buffer[index--];\n    nBits -= 8;\n  }\n  if (exponent === 0) {\n    exponent = 1 - eBias;\n  } else if (exponent === eMax) {\n    return mantissa ? NaN : sign ? -Infinity : Infinity;\n  } else {\n    mantissa = mantissa + pow(2, mantissaLength);\n    exponent = exponent - eBias;\n  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);\n};\n\nmodule.exports = {\n  pack: pack,\n  unpack: unpack\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/ieee754.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar Object = global.Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\n// makes subclassing work correct for wrapped built-ins\nmodule.exports = function ($this, dummy, Wrapper) {\n  var NewTarget, NewTargetPrototype;\n  if (\n    // it can work only with native `setPrototypeOf`\n    setPrototypeOf &&\n    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this\n    isCallable(NewTarget = dummy.constructor) &&\n    NewTarget !== Wrapper &&\n    isObject(NewTargetPrototype = NewTarget.prototype) &&\n    NewTargetPrototype !== Wrapper.prototype\n  ) setPrototypeOf($this, NewTargetPrototype);\n  return $this;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = uncurryThis(Function.toString);\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (!isCallable(store.inspectSource)) {\n  store.inspectSource = function (it) {\n    return functionToString(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/install-error-cause.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/install-error-cause.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\n// `InstallErrorCause` abstract operation\n// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause\nmodule.exports = function (O, options) {\n  if (isObject(options) && 'cause' in options) {\n    createNonEnumerableProperty(O, 'cause', options.cause);\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/install-error-cause.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js/internals/object-get-own-property-names-external.js\");\nvar isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ \"./node_modules/core-js/internals/object-is-extensible.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar FREEZING = __webpack_require__(/*! ../internals/freezing */ \"./node_modules/core-js/internals/freezing.js\");\n\nvar REQUIRED = false;\nvar METADATA = uid('meta');\nvar id = 0;\n\nvar setMetadata = function (it) {\n  defineProperty(it, METADATA, { value: {\n    objectID: 'O' + id++, // object ID\n    weakData: {}          // weak collections IDs\n  } });\n};\n\nvar fastKey = function (it, create) {\n  // return a primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!hasOwn(it, METADATA)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMetadata(it);\n  // return object ID\n  } return it[METADATA].objectID;\n};\n\nvar getWeakData = function (it, create) {\n  if (!hasOwn(it, METADATA)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMetadata(it);\n  // return the store of weak collections IDs\n  } return it[METADATA].weakData;\n};\n\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);\n  return it;\n};\n\nvar enable = function () {\n  meta.enable = function () { /* empty */ };\n  REQUIRED = true;\n  var getOwnPropertyNames = getOwnPropertyNamesModule.f;\n  var splice = uncurryThis([].splice);\n  var test = {};\n  test[METADATA] = 1;\n\n  // prevent exposing of metadata key\n  if (getOwnPropertyNames(test).length) {\n    getOwnPropertyNamesModule.f = function (it) {\n      var result = getOwnPropertyNames(it);\n      for (var i = 0, length = result.length; i < length; i++) {\n        if (result[i] === METADATA) {\n          splice(result, i, 1);\n          break;\n        }\n      } return result;\n    };\n\n    $({ target: 'Object', stat: true, forced: true }, {\n      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f\n    });\n  }\n};\n\nvar meta = module.exports = {\n  enable: enable,\n  fastKey: fastKey,\n  getWeakData: getWeakData,\n  onFreeze: onFreeze\n};\n\nhiddenKeys[METADATA] = true;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/internal-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar TypeError = global.TypeError;\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = uncurryThis(store.get);\n  var wmhas = uncurryThis(store.has);\n  var wmset = uncurryThis(store.set);\n  set = function (it, metadata) {\n    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    wmset(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return hasOwn(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return hasOwn(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(argument) {\n  return classof(argument) == 'Array';\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\nmodule.exports = function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar noop = function () { /* empty */ };\nvar empty = [];\nvar construct = getBuiltIn('Reflect', 'construct');\nvar constructorRegExp = /^\\s*(?:class|function)\\b/;\nvar exec = uncurryThis(constructorRegExp.exec);\nvar INCORRECT_TO_STRING = !constructorRegExp.exec(noop);\n\nvar isConstructorModern = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  try {\n    construct(noop, empty, argument);\n    return true;\n  } catch (error) {\n    return false;\n  }\n};\n\nvar isConstructorLegacy = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  switch (classof(argument)) {\n    case 'AsyncFunction':\n    case 'GeneratorFunction':\n    case 'AsyncGeneratorFunction': return false;\n  }\n  try {\n    // we can't check .prototype since constructors produced by .bind haven't it\n    // `Function#toString` throws on some built-it function in some legacy engines\n    // (for example, `DOMQuad` and similar in FF41-)\n    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));\n  } catch (error) {\n    return true;\n  }\n};\n\nisConstructorLegacy.sham = true;\n\n// `IsConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-isconstructor\nmodule.exports = !construct || fails(function () {\n  var called;\n  return isConstructorModern(isConstructorModern.call)\n    || !isConstructorModern(Object)\n    || !isConstructorModern(function () { called = true; })\n    || called;\n}) ? isConstructorLegacy : isConstructorModern;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-data-descriptor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/is-data-descriptor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nmodule.exports = function (descriptor) {\n  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-data-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-integral-number.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/is-integral-number.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar floor = Math.floor;\n\n// `IsIntegralNumber` abstract operation\n// https://tc39.es/ecma262/#sec-isintegralnumber\n// eslint-disable-next-line es/no-number-isinteger -- safe\nmodule.exports = Number.isInteger || function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-integral-number.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nmodule.exports = function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.es/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar Object = global.Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\nvar TypeError = global.TypeError;\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nvar ResultPrototype = Result.prototype;\n\nmodule.exports = function (iterable, unboundFunction, options) {\n  var that = options && options.that;\n  var AS_ENTRIES = !!(options && options.AS_ENTRIES);\n  var IS_ITERATOR = !!(options && options.IS_ITERATOR);\n  var INTERRUPTED = !!(options && options.INTERRUPTED);\n  var fn = bind(unboundFunction, that);\n  var iterator, iterFn, index, length, result, next, step;\n\n  var stop = function (condition) {\n    if (iterator) iteratorClose(iterator, 'normal', condition);\n    return new Result(true, condition);\n  };\n\n  var callFn = function (value) {\n    if (AS_ENTRIES) {\n      anObject(value);\n      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);\n    } return INTERRUPTED ? fn(value, stop) : fn(value);\n  };\n\n  if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {\n        result = callFn(iterable[index]);\n        if (result && isPrototypeOf(ResultPrototype, result)) return result;\n      } return new Result(false);\n    }\n    iterator = getIterator(iterable, iterFn);\n  }\n\n  next = iterator.next;\n  while (!(step = call(next, iterator)).done) {\n    try {\n      result = callFn(step.value);\n    } catch (error) {\n      iteratorClose(iterator, 'throw', error);\n    }\n    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;\n  } return new Result(false);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nmodule.exports = function (iterator, kind, value) {\n  var innerResult, innerError;\n  anObject(iterator);\n  try {\n    innerResult = getMethod(iterator, 'return');\n    if (!innerResult) {\n      if (kind === 'throw') throw value;\n      return value;\n    }\n    innerResult = call(innerResult, iterator);\n  } catch (error) {\n    innerError = true;\n    innerResult = error;\n  }\n  if (kind === 'throw') throw value;\n  if (innerError) throw innerResult;\n  anObject(innerResult);\n  return value;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/iterator-close.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\n// `%IteratorPrototype%` object\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\n/* eslint-disable es/no-array-prototype-keys -- safe */\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nvar NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {\n  var test = {};\n  // FF44- legacy iterators case\n  return IteratorPrototype[ITERATOR].call(test) !== test;\n});\n\nif (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};\nelse if (IS_PURE) IteratorPrototype = create(IteratorPrototype);\n\n// `%IteratorPrototype%[@@iterator]()` method\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator\nif (!isCallable(IteratorPrototype[ITERATOR])) {\n  redefine(IteratorPrototype, ITERATOR, function () {\n    return this;\n  });\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\n// `LengthOfArrayLike` abstract operation\n// https://tc39.es/ecma262/#sec-lengthofarraylike\nmodule.exports = function (obj) {\n  return toLength(obj.length);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/length-of-array-like.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/math-expm1.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-expm1.js ***!
  \******************************************************/
/***/ ((module) => {

eval("// eslint-disable-next-line es/no-math-expm1 -- safe\nvar $expm1 = Math.expm1;\nvar exp = Math.exp;\n\n// `Math.expm1` method implementation\n// https://tc39.es/ecma262/#sec-math.expm1\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/math-expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/math-fround.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/math-fround.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var sign = __webpack_require__(/*! ../internals/math-sign */ \"./node_modules/core-js/internals/math-sign.js\");\n\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\n// `Math.fround` method implementation\n// https://tc39.es/ecma262/#sec-math.fround\n// eslint-disable-next-line es/no-math-fround -- safe\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare -- NaN check\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/math-fround.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/math-log10.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-log10.js ***!
  \******************************************************/
/***/ ((module) => {

eval("var log = Math.log;\nvar LOG10E = Math.LOG10E;\n\n// eslint-disable-next-line es/no-math-log10 -- safe\nmodule.exports = Math.log10 || function log10(x) {\n  return log(x) * LOG10E;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/math-log10.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/math-log1p.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-log1p.js ***!
  \******************************************************/
/***/ ((module) => {

eval("var log = Math.log;\n\n// `Math.log1p` method implementation\n// https://tc39.es/ecma262/#sec-math.log1p\n// eslint-disable-next-line es/no-math-log1p -- safe\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/math-log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/math-sign.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/math-sign.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// `Math.sign` method implementation\n// https://tc39.es/ecma262/#sec-math.sign\n// eslint-disable-next-line es/no-math-sign -- safe\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/math-sign.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar macrotask = (__webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\").set);\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js/internals/engine-is-ios.js\");\nvar IS_IOS_PEBBLE = __webpack_require__(/*! ../internals/engine-is-ios-pebble */ \"./node_modules/core-js/internals/engine-is-ios-pebble.js\");\nvar IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ \"./node_modules/core-js/internals/engine-is-webos-webkit.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar MutationObserver = global.MutationObserver || global.WebKitMutationObserver;\nvar document = global.document;\nvar process = global.process;\nvar Promise = global.Promise;\n// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`\nvar queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');\nvar queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;\n\nvar flush, head, last, notify, toggle, node, promise, then;\n\n// modern engines have queueMicrotask method\nif (!queueMicrotask) {\n  flush = function () {\n    var parent, fn;\n    if (IS_NODE && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (error) {\n        if (head) notify();\n        else last = undefined;\n        throw error;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339\n  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898\n  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {\n    toggle = true;\n    node = document.createTextNode('');\n    new MutationObserver(flush).observe(node, { characterData: true });\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    promise = Promise.resolve(undefined);\n    // workaround of WebKit ~ iOS Safari 10.1 bug\n    promise.constructor = Promise;\n    then = bind(promise.then, promise);\n    notify = function () {\n      then(flush);\n    };\n  // Node.js without promises\n  } else if (IS_NODE) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    // strange IE + webpack dev server bug - use .bind(global)\n    macrotask = bind(macrotask, global);\n    notify = function () {\n      macrotask(flush);\n    };\n  }\n}\n\nmodule.exports = queueMicrotask || function (fn) {\n  var task = { fn: fn, next: undefined };\n  if (last) last.next = task;\n  if (!head) {\n    head = task;\n    notify();\n  } last = task;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global.Promise;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/native-promise-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line unicorn/relative-url-style -- required for testing\n  var url = new URL('b?a=1&b=2&c=3', 'http://a');\n  var searchParams = url.searchParams;\n  var result = '';\n  url.pathname = 'c%20d';\n  searchParams.forEach(function (value, key) {\n    searchParams['delete']('b');\n    result += key + value;\n  });\n  return (IS_PURE && !url.toJSON)\n    || !searchParams.sort\n    || url.href !== 'http://a/c%20d?a=1&c=3'\n    || searchParams.get('c') !== '3'\n    || String(new URLSearchParams('?a=1')) !== 'a=1'\n    || !searchParams[ITERATOR]\n    // throws in Edge\n    || new URL('https://a@b').username !== 'a'\n    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'\n    // not punycoded in Edge\n    || new URL('http://тест').host !== 'xn--e1aybc'\n    // not escaped in Chrome 62-\n    || new URL('http://a#б').hash !== '#%D0%B1'\n    // fails in Chrome 66-\n    || result !== 'a1c3'\n    // throws in Safari\n    || new URL('http://x', undefined).host !== 'x';\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/native-url.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\nvar PromiseCapability = function (C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aCallable(resolve);\n  this.reject = aCallable(reject);\n};\n\n// `NewPromiseCapability` abstract operation\n// https://tc39.es/ecma262/#sec-newpromisecapability\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/normalize-string-argument.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/normalize-string-argument.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nmodule.exports = function (argument, $default) {\n  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/normalize-string-argument.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\n\nvar TypeError = global.TypeError;\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/not-a-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/number-is-finite.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-is-finite.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar globalIsFinite = global.isFinite;\n\n// `Number.isFinite` method\n// https://tc39.es/ecma262/#sec-number.isfinite\n// eslint-disable-next-line es/no-number-isfinite -- safe\nmodule.exports = Number.isFinite || function isFinite(it) {\n  return typeof it == 'number' && globalIsFinite(it);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/number-is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar trim = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim);\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar charAt = uncurryThis(''.charAt);\nvar n$ParseFloat = global.parseFloat;\nvar Symbol = global.Symbol;\nvar ITERATOR = Symbol && Symbol.iterator;\nvar FORCED = 1 / n$ParseFloat(whitespaces + '-0') !== -Infinity\n  // MS Edge 18- broken with boxed symbols\n  || (ITERATOR && !fails(function () { n$ParseFloat(Object(ITERATOR)); }));\n\n// `parseFloat` method\n// https://tc39.es/ecma262/#sec-parsefloat-string\nmodule.exports = FORCED ? function parseFloat(string) {\n  var trimmedString = trim(toString(string));\n  var result = n$ParseFloat(trimmedString);\n  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;\n} : n$ParseFloat;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/number-parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar trim = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim);\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar $parseInt = global.parseInt;\nvar Symbol = global.Symbol;\nvar ITERATOR = Symbol && Symbol.iterator;\nvar hex = /^[+-]?0x/i;\nvar exec = uncurryThis(hex.exec);\nvar FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22\n  // MS Edge 18- broken with boxed symbols\n  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));\n\n// `parseInt` method\n// https://tc39.es/ecma262/#sec-parseint-string-radix\nmodule.exports = FORCED ? function parseInt(string, radix) {\n  var S = trim(toString(string));\n  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/number-parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\n// eslint-disable-next-line es/no-object-assign -- safe\nvar $assign = Object.assign;\n// eslint-disable-next-line es/no-object-defineproperty -- required for testing\nvar defineProperty = Object.defineProperty;\nvar concat = uncurryThis([].concat);\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\nmodule.exports = !$assign || fails(function () {\n  // should have correct order of operations (Edge bug)\n  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {\n    enumerable: true,\n    get: function () {\n      defineProperty(this, 'b', {\n        value: 3,\n        enumerable: false\n      });\n    }\n  }), { b: 2 })).b !== 1) return true;\n  // should work with symbols and should have deterministic property order (V8 bug)\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line es/no-symbol -- safe\n  var symbol = Symbol();\n  var alphabet = 'abcdefghijklmnopqrst';\n  A[symbol] = 7;\n  alphabet.split('').forEach(function (chr) { B[chr] = chr; });\n  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* global ActiveXObject -- old IE, WSH */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    activeXDocument = new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = typeof document != 'undefined'\n    ? document.domain && activeXDocument\n      ? NullProtoObjectViaActiveX(activeXDocument) // old IE\n      : NullProtoObjectViaIFrame()\n    : NullProtoObjectViaActiveX(activeXDocument); // WSH\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\nexports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var props = toIndexedObject(Properties);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar TypeError = global.TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable es/no-object-getownpropertynames -- safe */\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return $getOwnPropertyNames(it);\n  } catch (error) {\n    return arraySlice(windowNames);\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && classof(it) == 'Window'\n    ? getWindowNames(it)\n    : $getOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es/no-object-getownpropertynames -- safe\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar Object = global.Object;\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  var object = toObject(O);\n  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];\n  var constructor = object.constructor;\n  if (isCallable(constructor) && object instanceof constructor) {\n    return constructor.prototype;\n  } return object instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-is-extensible.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-extensible.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ \"./node_modules/core-js/internals/array-buffer-non-extensible.js\");\n\n// eslint-disable-next-line es/no-object-isextensible -- safe\nvar $isExtensible = Object.isExtensible;\nvar FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });\n\n// `Object.isExtensible` method\n// https://tc39.es/ecma262/#sec-object.isextensible\nmodule.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {\n  if (!isObject(it)) return false;\n  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;\n  return $isExtensible ? $isExtensible(it) : true;\n} : $isExtensible;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar push = uncurryThis([].push);\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (hasOwn(O, key = names[i++])) {\n    ~indexOf(result, key) || push(result, key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n// eslint-disable-next-line es/no-object-keys -- safe\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-prototype-accessors-forced.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-prototype-accessors-forced.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ \"./node_modules/core-js/internals/engine-webkit-version.js\");\n\n// Forced replacement object prototype accessors methods\nmodule.exports = IS_PURE || !fails(function () {\n  // This feature detection crashes old WebKit\n  // https://github.com/zloirock/core-js/issues/232\n  if (WEBKIT && WEBKIT < 535) return;\n  var key = Math.random();\n  // In FF throws only define methods\n  // eslint-disable-next-line no-undef, no-useless-call -- required for testing\n  __defineSetter__.call(null, key, function () { /* empty */ });\n  delete global[key];\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-prototype-accessors-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-proto -- safe */\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);\n    setter(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar $propertyIsEnumerable = (__webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\").f);\n\nvar propertyIsEnumerable = uncurryThis($propertyIsEnumerable);\nvar push = uncurryThis([].push);\n\n// `Object.{ entries, values }` methods implementation\nvar createMethod = function (TO_ENTRIES) {\n  return function (it) {\n    var O = toIndexedObject(it);\n    var keys = objectKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {\n        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\nmodule.exports = {\n  // `Object.entries` method\n  // https://tc39.es/ecma262/#sec-object.entries\n  entries: createMethod(true),\n  // `Object.values` method\n  // https://tc39.es/ecma262/#sec-object.values\n  values: createMethod(false)\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar TypeError = global.TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar concat = uncurryThis([].concat);\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return { error: false, value: exec() };\n  } catch (error) {\n    return { error: true, value: error };\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/perform.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/queue.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/queue.js ***!
  \*************************************************/
/***/ ((module) => {

eval("var Queue = function () {\n  this.head = null;\n  this.tail = null;\n};\n\nQueue.prototype = {\n  add: function (item) {\n    var entry = { item: item, next: null };\n    if (this.head) this.tail.next = entry;\n    else this.head = entry;\n    this.tail = entry;\n  },\n  get: function () {\n    var entry = this.head;\n    if (entry) {\n      this.head = entry.next;\n      if (this.tail === entry) this.tail = null;\n      return entry.item;\n    }\n  }\n};\n\nmodule.exports = Queue;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/queue.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) redefine(target, key, src[key], options);\n  return target;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").CONFIGURABLE);\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  var name = options && options.name !== undefined ? options.name : key;\n  var state;\n  if (isCallable(value)) {\n    if (String(name).slice(0, 7) === 'Symbol(') {\n      name = '[' + String(name).replace(/^Symbol\\(([^)]*)\\)/, '$1') + ']';\n    }\n    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {\n      createNonEnumerableProperty(value, 'name', name);\n    }\n    state = enforceInternalState(value);\n    if (!state.source) {\n      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');\n    }\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return isCallable(this) && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\nvar TypeError = global.TypeError;\n\n// `RegExpExec` abstract operation\n// https://tc39.es/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (isCallable(exec)) {\n    var result = call(exec, R, S);\n    if (result !== null) anObject(result);\n    return result;\n  }\n  if (classof(R) === 'RegExp') return call(regexpExec, R, S);\n  throw TypeError('RegExp#exec called on incompatible receiver');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */\n/* eslint-disable regexp/no-useless-quantifier -- testing */\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar getInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").get);\nvar UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ \"./node_modules/core-js/internals/regexp-unsupported-dot-all.js\");\nvar UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ \"./node_modules/core-js/internals/regexp-unsupported-ncg.js\");\n\nvar nativeReplace = shared('native-string-replace', String.prototype.replace);\nvar nativeExec = RegExp.prototype.exec;\nvar patchedExec = nativeExec;\nvar charAt = uncurryThis(''.charAt);\nvar indexOf = uncurryThis(''.indexOf);\nvar replace = uncurryThis(''.replace);\nvar stringSlice = uncurryThis(''.slice);\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  call(nativeExec, re1, 'a');\n  call(nativeExec, re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n})();\n\nvar UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;\n\nif (PATCH) {\n  patchedExec = function exec(string) {\n    var re = this;\n    var state = getInternalState(re);\n    var str = toString(string);\n    var raw = state.raw;\n    var result, reCopy, lastIndex, match, i, object, group;\n\n    if (raw) {\n      raw.lastIndex = re.lastIndex;\n      result = call(patchedExec, raw, str);\n      re.lastIndex = raw.lastIndex;\n      return result;\n    }\n\n    var groups = state.groups;\n    var sticky = UNSUPPORTED_Y && re.sticky;\n    var flags = call(regexpFlags, re);\n    var source = re.source;\n    var charsAdded = 0;\n    var strCopy = str;\n\n    if (sticky) {\n      flags = replace(flags, 'y', '');\n      if (indexOf(flags, 'g') === -1) {\n        flags += 'g';\n      }\n\n      strCopy = stringSlice(str, re.lastIndex);\n      // Support anchored sticky behavior.\n      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\\n')) {\n        source = '(?: ' + source + ')';\n        strCopy = ' ' + strCopy;\n        charsAdded++;\n      }\n      // ^(? + rx + ) is needed, in combination with some str slicing, to\n      // simulate the 'y' flag.\n      reCopy = new RegExp('^(?:' + source + ')', flags);\n    }\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + source + '$(?!\\\\s)', flags);\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n\n    match = call(nativeExec, sticky ? reCopy : re, strCopy);\n\n    if (sticky) {\n      if (match) {\n        match.input = stringSlice(match.input, charsAdded);\n        match[0] = stringSlice(match[0], charsAdded);\n        match.index = re.lastIndex;\n        re.lastIndex += match[0].length;\n      } else re.lastIndex = 0;\n    } else if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      call(nativeReplace, match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    if (match && groups) {\n      match.groups = object = create(null);\n      for (i = 0; i < groups.length; i++) {\n        group = groups[i];\n        object[group[0]] = match[group[1]];\n      }\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError\nvar $RegExp = global.RegExp;\n\nvar UNSUPPORTED_Y = fails(function () {\n  var re = $RegExp('a', 'y');\n  re.lastIndex = 2;\n  return re.exec('abcd') != null;\n});\n\n// UC Browser bug\n// https://github.com/zloirock/core-js/issues/1008\nvar MISSED_STICKY = UNSUPPORTED_Y || fails(function () {\n  return !$RegExp('a', 'y').sticky;\n});\n\nvar BROKEN_CARET = UNSUPPORTED_Y || fails(function () {\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687\n  var re = $RegExp('^r', 'gy');\n  re.lastIndex = 2;\n  return re.exec('str') != null;\n});\n\nmodule.exports = {\n  BROKEN_CARET: BROKEN_CARET,\n  MISSED_STICKY: MISSED_STICKY,\n  UNSUPPORTED_Y: UNSUPPORTED_Y\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/regexp-sticky-helpers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError\nvar $RegExp = global.RegExp;\n\nmodule.exports = fails(function () {\n  var re = $RegExp('.', 's');\n  return !(re.dotAll && re.exec('\\n') && re.flags === 's');\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/regexp-unsupported-dot-all.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError\nvar $RegExp = global.RegExp;\n\nmodule.exports = fails(function () {\n  var re = $RegExp('(?<a>b)', 'g');\n  return re.exec('b').groups.a !== 'b' ||\n    'b'.replace(re, '$<a>c') !== 'bc';\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/regexp-unsupported-ncg.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar TypeError = global.TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

eval("// `SameValue` abstract operation\n// https://tc39.es/ecma262/#sec-samevalue\n// eslint-disable-next-line es/no-object-is -- safe\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () { return this; }\n    });\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (target, TAG, STATIC) {\n  if (target && !STATIC) target = target.prototype;\n  if (target && !hasOwn(target, TO_STRING_TAG)) {\n    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.20.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aConstructor = __webpack_require__(/*! ../internals/a-constructor */ \"./node_modules/core-js/internals/a-constructor.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// check the existence of a method, lowercase\n// of a tag and escaping quotes in arguments\nmodule.exports = function (METHOD_NAME) {\n  return fails(function () {\n    var test = ''[METHOD_NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  });\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/string-html-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar stringSlice = uncurryThis(''.slice);\n\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = toString(requireObjectCoercible($this));\n    var position = toIntegerOrInfinity(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = charCodeAt(S, position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING\n          ? charAt(S, position)\n          : first\n        : CONVERT_TO_STRING\n          ? stringSlice(S, position, position + 2)\n          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-pad-webkit-bug.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/string-pad-webkit-bug.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/zloirock/core-js/issues/280\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /Version\\/10(?:\\.\\d+){1,2}(?: [\\w./]+)?(?: Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/string-pad-webkit-bug.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-pad.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/string-pad.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar $repeat = __webpack_require__(/*! ../internals/string-repeat */ \"./node_modules/core-js/internals/string-repeat.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar repeat = uncurryThis($repeat);\nvar stringSlice = uncurryThis(''.slice);\nvar ceil = Math.ceil;\n\n// `String.prototype.{ padStart, padEnd }` methods implementation\nvar createMethod = function (IS_END) {\n  return function ($this, maxLength, fillString) {\n    var S = toString(requireObjectCoercible($this));\n    var intMaxLength = toLength(maxLength);\n    var stringLength = S.length;\n    var fillStr = fillString === undefined ? ' ' : toString(fillString);\n    var fillLen, stringFiller;\n    if (intMaxLength <= stringLength || fillStr == '') return S;\n    fillLen = intMaxLength - stringLength;\n    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));\n    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);\n    return IS_END ? S + stringFiller : stringFiller + S;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.padStart` method\n  // https://tc39.es/ecma262/#sec-string.prototype.padstart\n  start: createMethod(false),\n  // `String.prototype.padEnd` method\n  // https://tc39.es/ecma262/#sec-string.prototype.padend\n  end: createMethod(true)\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/string-pad.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-punycode-to-ascii.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/string-punycode-to-ascii.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1\nvar base = 36;\nvar tMin = 1;\nvar tMax = 26;\nvar skew = 38;\nvar damp = 700;\nvar initialBias = 72;\nvar initialN = 128; // 0x80\nvar delimiter = '-'; // '\\x2D'\nvar regexNonASCII = /[^\\0-\\u007E]/; // non-ASCII chars\nvar regexSeparators = /[.\\u3002\\uFF0E\\uFF61]/g; // RFC 3490 separators\nvar OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';\nvar baseMinusTMin = base - tMin;\n\nvar RangeError = global.RangeError;\nvar exec = uncurryThis(regexSeparators.exec);\nvar floor = Math.floor;\nvar fromCharCode = String.fromCharCode;\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar join = uncurryThis([].join);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar split = uncurryThis(''.split);\nvar toLowerCase = uncurryThis(''.toLowerCase);\n\n/**\n * Creates an array containing the numeric code points of each Unicode\n * character in the string. While JavaScript uses UCS-2 internally,\n * this function will convert a pair of surrogate halves (each of which\n * UCS-2 exposes as separate characters) into a single code point,\n * matching UTF-16.\n */\nvar ucs2decode = function (string) {\n  var output = [];\n  var counter = 0;\n  var length = string.length;\n  while (counter < length) {\n    var value = charCodeAt(string, counter++);\n    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {\n      // It's a high surrogate, and there is a next character.\n      var extra = charCodeAt(string, counter++);\n      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.\n        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);\n      } else {\n        // It's an unmatched surrogate; only append this code unit, in case the\n        // next code unit is the high surrogate of a surrogate pair.\n        push(output, value);\n        counter--;\n      }\n    } else {\n      push(output, value);\n    }\n  }\n  return output;\n};\n\n/**\n * Converts a digit/integer into a basic code point.\n */\nvar digitToBasic = function (digit) {\n  //  0..25 map to ASCII a..z or A..Z\n  // 26..35 map to ASCII 0..9\n  return digit + 22 + 75 * (digit < 26);\n};\n\n/**\n * Bias adaptation function as per section 3.4 of RFC 3492.\n * https://tools.ietf.org/html/rfc3492#section-3.4\n */\nvar adapt = function (delta, numPoints, firstTime) {\n  var k = 0;\n  delta = firstTime ? floor(delta / damp) : delta >> 1;\n  delta += floor(delta / numPoints);\n  while (delta > baseMinusTMin * tMax >> 1) {\n    delta = floor(delta / baseMinusTMin);\n    k += base;\n  }\n  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));\n};\n\n/**\n * Converts a string of Unicode symbols (e.g. a domain name label) to a\n * Punycode string of ASCII-only symbols.\n */\nvar encode = function (input) {\n  var output = [];\n\n  // Convert the input in UCS-2 to an array of Unicode code points.\n  input = ucs2decode(input);\n\n  // Cache the length.\n  var inputLength = input.length;\n\n  // Initialize the state.\n  var n = initialN;\n  var delta = 0;\n  var bias = initialBias;\n  var i, currentValue;\n\n  // Handle the basic code points.\n  for (i = 0; i < input.length; i++) {\n    currentValue = input[i];\n    if (currentValue < 0x80) {\n      push(output, fromCharCode(currentValue));\n    }\n  }\n\n  var basicLength = output.length; // number of basic code points.\n  var handledCPCount = basicLength; // number of code points that have been handled;\n\n  // Finish the basic string with a delimiter unless it's empty.\n  if (basicLength) {\n    push(output, delimiter);\n  }\n\n  // Main encoding loop:\n  while (handledCPCount < inputLength) {\n    // All non-basic code points < n have been handled already. Find the next larger one:\n    var m = maxInt;\n    for (i = 0; i < input.length; i++) {\n      currentValue = input[i];\n      if (currentValue >= n && currentValue < m) {\n        m = currentValue;\n      }\n    }\n\n    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.\n    var handledCPCountPlusOne = handledCPCount + 1;\n    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {\n      throw RangeError(OVERFLOW_ERROR);\n    }\n\n    delta += (m - n) * handledCPCountPlusOne;\n    n = m;\n\n    for (i = 0; i < input.length; i++) {\n      currentValue = input[i];\n      if (currentValue < n && ++delta > maxInt) {\n        throw RangeError(OVERFLOW_ERROR);\n      }\n      if (currentValue == n) {\n        // Represent delta as a generalized variable-length integer.\n        var q = delta;\n        var k = base;\n        while (true) {\n          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);\n          if (q < t) break;\n          var qMinusT = q - t;\n          var baseMinusT = base - t;\n          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));\n          q = floor(qMinusT / baseMinusT);\n          k += base;\n        }\n\n        push(output, fromCharCode(digitToBasic(q)));\n        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);\n        delta = 0;\n        handledCPCount++;\n      }\n    }\n\n    delta++;\n    n++;\n  }\n  return join(output, '');\n};\n\nmodule.exports = function (input) {\n  var encoded = [];\n  var labels = split(replace(toLowerCase(input), regexSeparators, '\\u002E'), '.');\n  var i, label;\n  for (i = 0; i < labels.length; i++) {\n    label = labels[i];\n    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);\n  }\n  return join(encoded, '.');\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/string-punycode-to-ascii.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar RangeError = global.RangeError;\n\n// `String.prototype.repeat` method implementation\n// https://tc39.es/ecma262/#sec-string.prototype.repeat\nmodule.exports = function repeat(count) {\n  var str = toString(requireObjectCoercible(this));\n  var result = '';\n  var n = toIntegerOrInfinity(count);\n  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;\n  return result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/string-repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").PROPER);\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar non = '\\u200B\\u0085\\u180E';\n\n// check that a method works with the correct list\n// of whitespaces and has a correct name\nmodule.exports = function (METHOD_NAME) {\n  return fails(function () {\n    return !!whitespaces[METHOD_NAME]()\n      || non[METHOD_NAME]() !== non\n      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);\n  });\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/string-trim-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar replace = uncurryThis(''.replace);\nvar whitespace = '[' + whitespaces + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$');\n\n// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = toString(requireObjectCoercible($this));\n    if (TYPE & 1) string = replace(string, ltrim, '');\n    if (TYPE & 2) string = replace(string, rtrim, '');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.es/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.es/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.es/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js/internals/engine-is-ios.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar set = global.setImmediate;\nvar clear = global.clearImmediate;\nvar process = global.process;\nvar Dispatch = global.Dispatch;\nvar Function = global.Function;\nvar MessageChannel = global.MessageChannel;\nvar String = global.String;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar location, defer, channel, port;\n\ntry {\n  // Deno throws a ReferenceError on `location` access without `--location` flag\n  location = global.location;\n} catch (error) { /* empty */ }\n\nvar run = function (id) {\n  if (hasOwn(queue, id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar runner = function (id) {\n  return function () {\n    run(id);\n  };\n};\n\nvar listener = function (event) {\n  run(event.data);\n};\n\nvar post = function (id) {\n  // old engines have not location.origin\n  global.postMessage(String(id), location.protocol + '//' + location.host);\n};\n\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!set || !clear) {\n  set = function setImmediate(fn) {\n    var args = arraySlice(arguments, 1);\n    queue[++counter] = function () {\n      apply(isCallable(fn) ? fn : Function(fn), undefined, args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clear = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (IS_NODE) {\n    defer = function (id) {\n      process.nextTick(runner(id));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(runner(id));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  // except iOS - https://github.com/zloirock/core-js/issues/624\n  } else if (MessageChannel && !IS_IOS) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = bind(port.postMessage, port);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (\n    global.addEventListener &&\n    isCallable(global.postMessage) &&\n    !global.importScripts &&\n    location && location.protocol !== 'file:' &&\n    !fails(post)\n  ) {\n    defer = post;\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in createElement('script')) {\n    defer = function (id) {\n      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(runner(id), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: set,\n  clear: clear\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/task.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\n// `thisNumberValue` abstract operation\n// https://tc39.es/ecma262/#sec-thisnumbervalue\nmodule.exports = uncurryThis(1.0.valueOf);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/this-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toIntegerOrInfinity(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar RangeError = global.RangeError;\n\n// `ToIndex` abstract operation\n// https://tc39.es/ecma262/#sec-toindex\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toIntegerOrInfinity(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length or index');\n  return length;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToIntegerOrInfinity` abstract operation\n// https://tc39.es/ecma262/#sec-tointegerorinfinity\nmodule.exports = function (argument) {\n  var number = +argument;\n  // eslint-disable-next-line no-self-compare -- safe\n  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-integer-or-infinity.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar Object = global.Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-offset.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar toPositiveInteger = __webpack_require__(/*! ../internals/to-positive-integer */ \"./node_modules/core-js/internals/to-positive-integer.js\");\n\nvar RangeError = global.RangeError;\n\nmodule.exports = function (it, BYTES) {\n  var offset = toPositiveInteger(it);\n  if (offset % BYTES) throw RangeError('Wrong offset');\n  return offset;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-offset.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-positive-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/to-positive-integer.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar RangeError = global.RangeError;\n\nmodule.exports = function (it) {\n  var result = toIntegerOrInfinity(it);\n  if (result < 0) throw RangeError(\"The argument can't be less than 0\");\n  return result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-positive-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TypeError = global.TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar String = global.String;\n\nmodule.exports = function (argument) {\n  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');\n  return String(argument);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/try-node-require.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/try-node-require.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nmodule.exports = function (name) {\n  try {\n    // eslint-disable-next-line no-new-func -- safe\n    if (IS_NODE) return Function('return require(\"' + name + '\")')();\n  } catch (error) { /* empty */ }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/try-node-require.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar String = global.String;\n\nmodule.exports = function (argument) {\n  try {\n    return String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructor.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ \"./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ \"./node_modules/core-js/internals/array-buffer.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar isIntegralNumber = __webpack_require__(/*! ../internals/is-integral-number */ \"./node_modules/core-js/internals/is-integral-number.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toIndex = __webpack_require__(/*! ../internals/to-index */ \"./node_modules/core-js/internals/to-index.js\");\nvar toOffset = __webpack_require__(/*! ../internals/to-offset */ \"./node_modules/core-js/internals/to-offset.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\nvar typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ \"./node_modules/core-js/internals/typed-array-from.js\");\nvar forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach);\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar round = Math.round;\nvar RangeError = global.RangeError;\nvar ArrayBuffer = ArrayBufferModule.ArrayBuffer;\nvar ArrayBufferPrototype = ArrayBuffer.prototype;\nvar DataView = ArrayBufferModule.DataView;\nvar NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;\nvar TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;\nvar TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;\nvar TypedArray = ArrayBufferViewCore.TypedArray;\nvar TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;\nvar aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;\nvar isTypedArray = ArrayBufferViewCore.isTypedArray;\nvar BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\nvar WRONG_LENGTH = 'Wrong length';\n\nvar fromList = function (C, list) {\n  aTypedArrayConstructor(C);\n  var index = 0;\n  var length = list.length;\n  var result = new C(length);\n  while (length > index) result[index] = list[index++];\n  return result;\n};\n\nvar addGetter = function (it, key) {\n  nativeDefineProperty(it, key, { get: function () {\n    return getInternalState(this)[key];\n  } });\n};\n\nvar isArrayBuffer = function (it) {\n  var klass;\n  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';\n};\n\nvar isTypedArrayIndex = function (target, key) {\n  return isTypedArray(target)\n    && !isSymbol(key)\n    && key in target\n    && isIntegralNumber(+key)\n    && key >= 0;\n};\n\nvar wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {\n  key = toPropertyKey(key);\n  return isTypedArrayIndex(target, key)\n    ? createPropertyDescriptor(2, target[key])\n    : nativeGetOwnPropertyDescriptor(target, key);\n};\n\nvar wrappedDefineProperty = function defineProperty(target, key, descriptor) {\n  key = toPropertyKey(key);\n  if (isTypedArrayIndex(target, key)\n    && isObject(descriptor)\n    && hasOwn(descriptor, 'value')\n    && !hasOwn(descriptor, 'get')\n    && !hasOwn(descriptor, 'set')\n    // TODO: add validation descriptor w/o calling accessors\n    && !descriptor.configurable\n    && (!hasOwn(descriptor, 'writable') || descriptor.writable)\n    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)\n  ) {\n    target[key] = descriptor.value;\n    return target;\n  } return nativeDefineProperty(target, key, descriptor);\n};\n\nif (DESCRIPTORS) {\n  if (!NATIVE_ARRAY_BUFFER_VIEWS) {\n    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;\n    definePropertyModule.f = wrappedDefineProperty;\n    addGetter(TypedArrayPrototype, 'buffer');\n    addGetter(TypedArrayPrototype, 'byteOffset');\n    addGetter(TypedArrayPrototype, 'byteLength');\n    addGetter(TypedArrayPrototype, 'length');\n  }\n\n  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {\n    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,\n    defineProperty: wrappedDefineProperty\n  });\n\n  module.exports = function (TYPE, wrapper, CLAMPED) {\n    var BYTES = TYPE.match(/\\d+$/)[0] / 8;\n    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + TYPE;\n    var SETTER = 'set' + TYPE;\n    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];\n    var TypedArrayConstructor = NativeTypedArrayConstructor;\n    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;\n    var exported = {};\n\n    var getter = function (that, index) {\n      var data = getInternalState(that);\n      return data.view[GETTER](index * BYTES + data.byteOffset, true);\n    };\n\n    var setter = function (that, index, value) {\n      var data = getInternalState(that);\n      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;\n      data.view[SETTER](index * BYTES + data.byteOffset, value, true);\n    };\n\n    var addElement = function (that, index) {\n      nativeDefineProperty(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n\n    if (!NATIVE_ARRAY_BUFFER_VIEWS) {\n      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {\n        anInstance(that, TypedArrayConstructorPrototype);\n        var index = 0;\n        var byteOffset = 0;\n        var buffer, byteLength, length;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new ArrayBuffer(byteLength);\n        } else if (isArrayBuffer(data)) {\n          buffer = data;\n          byteOffset = toOffset(offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - byteOffset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (isTypedArray(data)) {\n          return fromList(TypedArrayConstructor, data);\n        } else {\n          return call(typedArrayFrom, TypedArrayConstructor, data);\n        }\n        setInternalState(that, {\n          buffer: buffer,\n          byteOffset: byteOffset,\n          byteLength: byteLength,\n          length: length,\n          view: new DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n\n      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);\n      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);\n    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {\n      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {\n        anInstance(dummy, TypedArrayConstructorPrototype);\n        return inheritIfRequired(function () {\n          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));\n          if (isArrayBuffer(data)) return $length !== undefined\n            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)\n            : typedArrayOffset !== undefined\n              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))\n              : new NativeTypedArrayConstructor(data);\n          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);\n          return call(typedArrayFrom, TypedArrayConstructor, data);\n        }(), dummy, TypedArrayConstructor);\n      });\n\n      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);\n      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {\n        if (!(key in TypedArrayConstructor)) {\n          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);\n        }\n      });\n      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;\n    }\n\n    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {\n      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);\n    }\n\n    createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);\n\n    if (TYPED_ARRAY_TAG) {\n      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);\n    }\n\n    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;\n\n    $({\n      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS\n    }, exported);\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {\n      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);\n    }\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {\n      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);\n    }\n\n    setSpecies(CONSTRUCTOR_NAME);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/typed-array-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-new -- required for testing */\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\nvar NATIVE_ARRAY_BUFFER_VIEWS = (__webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\").NATIVE_ARRAY_BUFFER_VIEWS);\n\nvar ArrayBuffer = global.ArrayBuffer;\nvar Int8Array = global.Int8Array;\n\nmodule.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {\n  Int8Array(1);\n}) || !fails(function () {\n  new Int8Array(-1);\n}) || !checkCorrectnessOfIteration(function (iterable) {\n  new Int8Array();\n  new Int8Array(null);\n  new Int8Array(1.5);\n  new Int8Array(iterable);\n}, true) || fails(function () {\n  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill\n  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from-species-and-list.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from-species-and-list.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ \"./node_modules/core-js/internals/array-from-constructor-and-list.js\");\nvar typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ \"./node_modules/core-js/internals/typed-array-species-constructor.js\");\n\nmodule.exports = function (instance, list) {\n  return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/typed-array-from-species-and-list.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar aConstructor = __webpack_require__(/*! ../internals/a-constructor */ \"./node_modules/core-js/internals/a-constructor.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\nvar aTypedArrayConstructor = (__webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\").aTypedArrayConstructor);\n\nmodule.exports = function from(source /* , mapfn, thisArg */) {\n  var C = aConstructor(this);\n  var O = toObject(source);\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var iteratorMethod = getIteratorMethod(O);\n  var i, length, result, step, iterator, next;\n  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {\n    iterator = getIterator(O, iteratorMethod);\n    next = iterator.next;\n    O = [];\n    while (!(step = call(next, iterator)).done) {\n      O.push(step.value);\n    }\n  }\n  if (mapping && argumentsLength > 2) {\n    mapfn = bind(mapfn, arguments[2]);\n  }\n  length = lengthOfArrayLike(O);\n  result = new (aTypedArrayConstructor(C))(length);\n  for (i = 0; length > i; i++) {\n    result[i] = mapping ? mapfn(O[i], i) : O[i];\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/typed-array-from.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-species-constructor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-species-constructor.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\n\nvar TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;\nvar aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;\n\n// a part of `TypedArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#typedarray-species-create\nmodule.exports = function (originalArray) {\n  return aTypedArrayConstructor(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]));\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/typed-array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype != 42;\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar TypeError = global.TypeError;\n\nmodule.exports = function (passed, required) {\n  if (passed < required) throw TypeError('Not enough arguments');\n  return passed;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/validate-arguments-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nexports.f = wellKnownSymbol;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/well-known-symbol-wrapped.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar symbolFor = Symbol && Symbol['for'];\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    var description = 'Symbol.' + name;\n    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else if (USE_SYMBOL_AS_UID && symbolFor) {\n      WellKnownSymbolsStore[name] = symbolFor(description);\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("// a string of all valid unicode whitespaces\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002' +\n  '\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/wrap-error-constructor-with-cause.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\nvar normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ \"./node_modules/core-js/internals/normalize-string-argument.js\");\nvar installErrorCause = __webpack_require__(/*! ../internals/install-error-cause */ \"./node_modules/core-js/internals/install-error-cause.js\");\nvar clearErrorStack = __webpack_require__(/*! ../internals/clear-error-stack */ \"./node_modules/core-js/internals/clear-error-stack.js\");\nvar ERROR_STACK_INSTALLABLE = __webpack_require__(/*! ../internals/error-stack-installable */ \"./node_modules/core-js/internals/error-stack-installable.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nmodule.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {\n  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;\n  var path = FULL_NAME.split('.');\n  var ERROR_NAME = path[path.length - 1];\n  var OriginalError = getBuiltIn.apply(null, path);\n\n  if (!OriginalError) return;\n\n  var OriginalErrorPrototype = OriginalError.prototype;\n\n  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006\n  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;\n\n  if (!FORCED) return OriginalError;\n\n  var BaseError = getBuiltIn('Error');\n\n  var WrappedError = wrapper(function (a, b) {\n    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);\n    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();\n    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);\n    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));\n    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);\n    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);\n    return result;\n  });\n\n  WrappedError.prototype = OriginalErrorPrototype;\n\n  if (ERROR_NAME !== 'Error') {\n    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);\n    else copyConstructorProperties(WrappedError, BaseError, { name: true });\n  }\n\n  copyConstructorProperties(WrappedError, OriginalError);\n\n  if (!IS_PURE) try {\n    // Safari 13- bug: WebAssembly errors does not have a proper `.name`\n    if (OriginalErrorPrototype.name !== ERROR_NAME) {\n      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);\n    }\n    OriginalErrorPrototype.constructor = WrappedError;\n  } catch (error) { /* empty */ }\n\n  return WrappedError;\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/internals/wrap-error-constructor-with-cause.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.aggregate-error.cause.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.aggregate-error.cause.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wrapErrorConstructorWithCause = __webpack_require__(/*! ../internals/wrap-error-constructor-with-cause */ \"./node_modules/core-js/internals/wrap-error-constructor-with-cause.js\");\n\nvar AGGREGATE_ERROR = 'AggregateError';\nvar $AggregateError = getBuiltIn(AGGREGATE_ERROR);\nvar FORCED = !fails(function () {\n  return $AggregateError([1]).errors[0] !== 1;\n}) && fails(function () {\n  return $AggregateError([1], AGGREGATE_ERROR, { cause: 7 }).cause !== 7;\n});\n\n// https://github.com/tc39/proposal-error-cause\n$({ global: true, forced: FORCED }, {\n  AggregateError: wrapErrorConstructorWithCause(AGGREGATE_ERROR, function (init) {\n    // eslint-disable-next-line no-unused-vars -- required for functions `.length`\n    return function AggregateError(errors, message) { return apply(init, this, arguments); };\n  }, FORCED, true)\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.aggregate-error.cause.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.aggregate-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.aggregate-error.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar clearErrorStack = __webpack_require__(/*! ../internals/clear-error-stack */ \"./node_modules/core-js/internals/clear-error-stack.js\");\nvar installErrorCause = __webpack_require__(/*! ../internals/install-error-cause */ \"./node_modules/core-js/internals/install-error-cause.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ \"./node_modules/core-js/internals/normalize-string-argument.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar ERROR_STACK_INSTALLABLE = __webpack_require__(/*! ../internals/error-stack-installable */ \"./node_modules/core-js/internals/error-stack-installable.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar Error = global.Error;\nvar push = [].push;\n\nvar $AggregateError = function AggregateError(errors, message /* , options */) {\n  var options = arguments.length > 2 ? arguments[2] : undefined;\n  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);\n  var that;\n  if (setPrototypeOf) {\n    that = setPrototypeOf(new Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);\n  } else {\n    that = isInstance ? this : create(AggregateErrorPrototype);\n    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');\n  }\n  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));\n  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));\n  installErrorCause(that, options);\n  var errorsArray = [];\n  iterate(errors, push, { that: errorsArray });\n  createNonEnumerableProperty(that, 'errors', errorsArray);\n  return that;\n};\n\nif (setPrototypeOf) setPrototypeOf($AggregateError, Error);\nelse copyConstructorProperties($AggregateError, Error, { name: true });\n\nvar AggregateErrorPrototype = $AggregateError.prototype = create(Error.prototype, {\n  constructor: createPropertyDescriptor(1, $AggregateError),\n  message: createPropertyDescriptor(1, ''),\n  name: createPropertyDescriptor(1, 'AggregateError')\n});\n\n// `AggregateError` constructor\n// https://tc39.es/ecma262/#sec-aggregate-error-constructor\n$({ global: true }, {\n  AggregateError: $AggregateError\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.aggregate-error.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.constructor.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar arrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ \"./node_modules/core-js/internals/array-buffer.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\n\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];\nvar NativeArrayBuffer = global[ARRAY_BUFFER];\n\n// `ArrayBuffer` constructor\n// https://tc39.es/ecma262/#sec-arraybuffer-constructor\n$({ global: true, forced: NativeArrayBuffer !== ArrayBuffer }, {\n  ArrayBuffer: ArrayBuffer\n});\n\nsetSpecies(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array-buffer.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.is-view.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.is-view.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;\n\n// `ArrayBuffer.isView` method\n// https://tc39.es/ecma262/#sec-arraybuffer.isview\n$({ target: 'ArrayBuffer', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {\n  isView: ArrayBufferViewCore.isView\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array-buffer.is-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.slice.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.slice.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ \"./node_modules/core-js/internals/array-buffer.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\n\nvar ArrayBuffer = ArrayBufferModule.ArrayBuffer;\nvar DataView = ArrayBufferModule.DataView;\nvar DataViewPrototype = DataView.prototype;\nvar un$ArrayBufferSlice = uncurryThis(ArrayBuffer.prototype.slice);\nvar getUint8 = uncurryThis(DataViewPrototype.getUint8);\nvar setUint8 = uncurryThis(DataViewPrototype.setUint8);\n\nvar INCORRECT_SLICE = fails(function () {\n  return !new ArrayBuffer(2).slice(1, undefined).byteLength;\n});\n\n// `ArrayBuffer.prototype.slice` method\n// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice\n$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {\n  slice: function slice(start, end) {\n    if (un$ArrayBufferSlice && end === undefined) {\n      return un$ArrayBufferSlice(anObject(this), start); // FF fix\n    }\n    var length = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));\n    var viewSource = new DataView(this);\n    var viewTarget = new DataView(result);\n    var index = 0;\n    while (first < fin) {\n      setUint8(viewTarget, index++, getUint8(viewSource, first++));\n    } return result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array-buffer.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.at.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\n// `Array.prototype.at` method\n// https://github.com/tc39/proposal-relative-indexing-method\n$({ target: 'Array', proto: true }, {\n  at: function at(index) {\n    var O = toObject(this);\n    var len = lengthOfArrayLike(O);\n    var relativeIndex = toIntegerOrInfinity(index);\n    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;\n    return (k < 0 || k >= len) ? undefined : O[k];\n  }\n});\n\naddToUnscopables('at');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\nvar TypeError = global.TypeError;\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.es/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  concat: function concat(arg) {\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = lengthOfArrayLike(E);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.copy-within.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.copy-within.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar copyWithin = __webpack_require__(/*! ../internals/array-copy-within */ \"./node_modules/core-js/internals/array-copy-within.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\n// `Array.prototype.copyWithin` method\n// https://tc39.es/ecma262/#sec-array.prototype.copywithin\n$({ target: 'Array', proto: true }, {\n  copyWithin: copyWithin\n});\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('copyWithin');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.every.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.every.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $every = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").every);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('every');\n\n// `Array.prototype.every` method\n// https://tc39.es/ecma262/#sec-array.prototype.every\n$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fill = __webpack_require__(/*! ../internals/array-fill */ \"./node_modules/core-js/internals/array-fill.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\n// `Array.prototype.fill` method\n// https://tc39.es/ecma262/#sec-array.prototype.fill\n$({ target: 'Array', proto: true }, {\n  fill: fill\n});\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('fill');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $filter = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").filter);\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');\n\n// `Array.prototype.filter` method\n// https://tc39.es/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").findIndex);\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\nvar FIND_INDEX = 'findIndex';\nvar SKIPS_HOLES = true;\n\n// Shouldn't skip holes\nif (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });\n\n// `Array.prototype.findIndex` method\n// https://tc39.es/ecma262/#sec-array.prototype.findindex\n$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables(FIND_INDEX);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $find = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").find);\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\nvar FIND = 'find';\nvar SKIPS_HOLES = true;\n\n// Shouldn't skip holes\nif (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });\n\n// `Array.prototype.find` method\n// https://tc39.es/ecma262/#sec-array.prototype.find\n$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables(FIND);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat-map.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ \"./node_modules/core-js/internals/flatten-into-array.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\n// `Array.prototype.flatMap` method\n// https://tc39.es/ecma262/#sec-array.prototype.flatmap\n$({ target: 'Array', proto: true }, {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen = lengthOfArrayLike(O);\n    var A;\n    aCallable(callbackfn);\n    A = arraySpeciesCreate(O, 0);\n    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ \"./node_modules/core-js/internals/flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\n// `Array.prototype.flat` method\n// https://tc39.es/ecma262/#sec-array.prototype.flat\n$({ target: 'Array', proto: true }, {\n  flat: function flat(/* depthArg = 1 */) {\n    var depthArg = arguments.length ? arguments[0] : undefined;\n    var O = toObject(this);\n    var sourceLen = lengthOfArrayLike(O);\n    var A = arraySpeciesCreate(O, 0);\n    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.flat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\n// eslint-disable-next-line es/no-array-prototype-foreach -- safe\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js/internals/array-from.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  // eslint-disable-next-line es/no-array-from -- required for testing\n  Array.from(iterable);\n});\n\n// `Array.from` method\n// https://tc39.es/ecma262/#sec-array.from\n$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {\n  from: from\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $includes = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").includes);\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\n// `Array.prototype.includes` method\n// https://tc39.es/ecma262/#sec-array.prototype.includes\n$({ target: 'Array', proto: true }, {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('includes');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n/* eslint-disable es/no-array-prototype-indexof -- required for testing */\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar $IndexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar un$IndexOf = uncurryThis([].indexOf);\n\nvar NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;\nvar STRICT_METHOD = arrayMethodIsStrict('indexOf');\n\n// `Array.prototype.indexOf` method\n// https://tc39.es/ecma262/#sec-array.prototype.indexof\n$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? un$IndexOf(this, searchElement, fromIndex) || 0\n      : $IndexOf(this, searchElement, fromIndex);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\n// `Array.isArray` method\n// https://tc39.es/ecma262/#sec-array.isarray\n$({ target: 'Array', stat: true }, {\n  isArray: isArray\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.es/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.es/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.es/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.es/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.es/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.es/ecma262/#sec-createmappedargumentsobject\nvar values = Iterators.Arguments = Iterators.Array;\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n// V8 ~ Chrome 45- bug\nif (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {\n  defineProperty(values, 'name', { value: 'values' });\n} catch (error) { /* empty */ }\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar un$Join = uncurryThis([].join);\n\nvar ES3_STRINGS = IndexedObject != Object;\nvar STRICT_METHOD = arrayMethodIsStrict('join', ',');\n\n// `Array.prototype.join` method\n// https://tc39.es/ecma262/#sec-array.prototype.join\n$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {\n  join: function join(separator) {\n    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.last-index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ \"./node_modules/core-js/internals/array-last-index-of.js\");\n\n// `Array.prototype.lastIndexOf` method\n// https://tc39.es/ecma262/#sec-array.prototype.lastindexof\n// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing\n$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {\n  lastIndexOf: lastIndexOf\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $map = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").map);\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');\n\n// `Array.prototype.map` method\n// https://tc39.es/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.of.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.of.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\nvar Array = global.Array;\n\nvar ISNT_GENERIC = fails(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n});\n\n// `Array.of` method\n// https://tc39.es/ecma262/#sec-array.of\n// WebKit Array.of isn't generic\n$({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {\n  of: function of(/* ...args */) {\n    var index = 0;\n    var argumentsLength = arguments.length;\n    var result = new (isConstructor(this) ? this : Array)(argumentsLength);\n    while (argumentsLength > index) createProperty(result, index, arguments[index++]);\n    result.length = argumentsLength;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $reduceRight = (__webpack_require__(/*! ../internals/array-reduce */ \"./node_modules/core-js/internals/array-reduce.js\").right);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('reduceRight');\n// Chrome 80-82 has a critical bug\n// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982\nvar CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;\n\n// `Array.prototype.reduceRight` method\n// https://tc39.es/ecma262/#sec-array.prototype.reduceright\n$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $reduce = (__webpack_require__(/*! ../internals/array-reduce */ \"./node_modules/core-js/internals/array-reduce.js\").left);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('reduce');\n// Chrome 80-82 has a critical bug\n// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982\nvar CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;\n\n// `Array.prototype.reduce` method\n// https://tc39.es/ecma262/#sec-array.prototype.reduce\n$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    var length = arguments.length;\n    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar un$Reverse = uncurryThis([].reverse);\nvar test = [1, 2];\n\n// `Array.prototype.reverse` method\n// https://tc39.es/ecma262/#sec-array.prototype.reverse\n// fix for Safari 12.0 bug\n// https://bugs.webkit.org/show_bug.cgi?id=188794\n$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {\n  reverse: function reverse() {\n    // eslint-disable-next-line no-self-assign -- dirty hack\n    if (isArray(this)) this.length = this.length;\n    return un$Reverse(this);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.reverse.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar un$Slice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');\n\nvar SPECIES = wellKnownSymbol('species');\nvar Array = global.Array;\nvar max = Math.max;\n\n// `Array.prototype.slice` method\n// https://tc39.es/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = lengthOfArrayLike(O);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n    var Constructor, result, n;\n    if (isArray(O)) {\n      Constructor = O.constructor;\n      // cross-realm fallback\n      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n      if (Constructor === Array || Constructor === undefined) {\n        return un$Slice(O, k, fin);\n      }\n    }\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n    result.length = n;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.some.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.some.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $some = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").some);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('some');\n\n// `Array.prototype.some` method\n// https://tc39.es/ecma262/#sec-array.prototype.some\n$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar internalSort = __webpack_require__(/*! ../internals/array-sort */ \"./node_modules/core-js/internals/array-sort.js\");\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar FF = __webpack_require__(/*! ../internals/engine-ff-version */ \"./node_modules/core-js/internals/engine-ff-version.js\");\nvar IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ \"./node_modules/core-js/internals/engine-is-ie-or-edge.js\");\nvar V8 = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ \"./node_modules/core-js/internals/engine-webkit-version.js\");\n\nvar test = [];\nvar un$Sort = uncurryThis(test.sort);\nvar push = uncurryThis(test.push);\n\n// IE8-\nvar FAILS_ON_UNDEFINED = fails(function () {\n  test.sort(undefined);\n});\n// V8 bug\nvar FAILS_ON_NULL = fails(function () {\n  test.sort(null);\n});\n// Old WebKit\nvar STRICT_METHOD = arrayMethodIsStrict('sort');\n\nvar STABLE_SORT = !fails(function () {\n  // feature detection can be too slow, so check engines versions\n  if (V8) return V8 < 70;\n  if (FF && FF > 3) return;\n  if (IE_OR_EDGE) return true;\n  if (WEBKIT) return WEBKIT < 603;\n\n  var result = '';\n  var code, chr, value, index;\n\n  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)\n  for (code = 65; code < 76; code++) {\n    chr = String.fromCharCode(code);\n\n    switch (code) {\n      case 66: case 69: case 70: case 72: value = 3; break;\n      case 68: case 71: value = 4; break;\n      default: value = 2;\n    }\n\n    for (index = 0; index < 47; index++) {\n      test.push({ k: chr + index, v: value });\n    }\n  }\n\n  test.sort(function (a, b) { return b.v - a.v; });\n\n  for (index = 0; index < test.length; index++) {\n    chr = test[index].k.charAt(0);\n    if (result.charAt(result.length - 1) !== chr) result += chr;\n  }\n\n  return result !== 'DGBEFHACIJK';\n});\n\nvar FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;\n\nvar getSortCompare = function (comparefn) {\n  return function (x, y) {\n    if (y === undefined) return -1;\n    if (x === undefined) return 1;\n    if (comparefn !== undefined) return +comparefn(x, y) || 0;\n    return toString(x) > toString(y) ? 1 : -1;\n  };\n};\n\n// `Array.prototype.sort` method\n// https://tc39.es/ecma262/#sec-array.prototype.sort\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  sort: function sort(comparefn) {\n    if (comparefn !== undefined) aCallable(comparefn);\n\n    var array = toObject(this);\n\n    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);\n\n    var items = [];\n    var arrayLength = lengthOfArrayLike(array);\n    var itemsLength, index;\n\n    for (index = 0; index < arrayLength; index++) {\n      if (index in array) push(items, array[index]);\n    }\n\n    internalSort(items, getSortCompare(comparefn));\n\n    itemsLength = items.length;\n    index = 0;\n\n    while (index < itemsLength) array[index] = items[index++];\n    while (index < arrayLength) delete array[index++];\n\n    return array;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.species.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.species.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\n\n// `Array[@@species]` getter\n// https://tc39.es/ecma262/#sec-get-array-@@species\nsetSpecies('Array');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');\n\nvar TypeError = global.TypeError;\nvar max = Math.max;\nvar min = Math.min;\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';\n\n// `Array.prototype.splice` method\n// https://tc39.es/ecma262/#sec-array.prototype.splice\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  splice: function splice(start, deleteCount /* , ...items */) {\n    var O = toObject(this);\n    var len = lengthOfArrayLike(O);\n    var actualStart = toAbsoluteIndex(start, len);\n    var argumentsLength = arguments.length;\n    var insertCount, actualDeleteCount, A, k, from, to;\n    if (argumentsLength === 0) {\n      insertCount = actualDeleteCount = 0;\n    } else if (argumentsLength === 1) {\n      insertCount = 0;\n      actualDeleteCount = len - actualStart;\n    } else {\n      insertCount = argumentsLength - 2;\n      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);\n    }\n    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {\n      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);\n    }\n    A = arraySpeciesCreate(O, actualDeleteCount);\n    for (k = 0; k < actualDeleteCount; k++) {\n      from = actualStart + k;\n      if (from in O) createProperty(A, k, O[from]);\n    }\n    A.length = actualDeleteCount;\n    if (insertCount < actualDeleteCount) {\n      for (k = actualStart; k < len - actualDeleteCount; k++) {\n        from = k + actualDeleteCount;\n        to = k + insertCount;\n        if (from in O) O[to] = O[from];\n        else delete O[to];\n      }\n      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];\n    } else if (insertCount > actualDeleteCount) {\n      for (k = len - actualDeleteCount; k > actualStart; k--) {\n        from = k + actualDeleteCount - 1;\n        to = k + insertCount - 1;\n        if (from in O) O[to] = O[from];\n        else delete O[to];\n      }\n    }\n    for (k = 0; k < insertCount; k++) {\n      O[k + actualStart] = arguments[k + 2];\n    }\n    O.length = len - actualDeleteCount + insertCount;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.splice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// this method was added to unscopables after implementation\n// in popular engines, so it's moved to a separate module\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('flatMap');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.unscopables.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// this method was added to unscopables after implementation\n// in popular engines, so it's moved to a separate module\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('flat');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.array.unscopables.flat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.data-view.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.data-view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ \"./node_modules/core-js/internals/array-buffer.js\");\nvar NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ \"./node_modules/core-js/internals/array-buffer-native.js\");\n\n// `DataView` constructor\n// https://tc39.es/ecma262/#sec-dataview-constructor\n$({ global: true, forced: !NATIVE_ARRAY_BUFFER }, {\n  DataView: ArrayBufferModule.DataView\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.data-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.get-year.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.get-year.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar FORCED = fails(function () {\n  return new Date(16e11).getYear() !== 120;\n});\n\nvar getFullYear = uncurryThis(Date.prototype.getFullYear);\n\n// `Date.prototype.getYear` method\n// https://tc39.es/ecma262/#sec-date.prototype.getyear\n$({ target: 'Date', proto: true, forced: FORCED }, {\n  getYear: function getYear() {\n    return getFullYear(this) - 1900;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.date.get-year.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.now.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar Date = global.Date;\nvar getTime = uncurryThis(Date.prototype.getTime);\n\n// `Date.now` method\n// https://tc39.es/ecma262/#sec-date.now\n$({ target: 'Date', stat: true }, {\n  now: function now() {\n    return getTime(new Date());\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.date.now.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.set-year.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.set-year.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar DatePrototype = Date.prototype;\nvar getTime = uncurryThis(DatePrototype.getTime);\nvar setFullYear = uncurryThis(DatePrototype.setFullYear);\n\n// `Date.prototype.setYear` method\n// https://tc39.es/ecma262/#sec-date.prototype.setyear\n$({ target: 'Date', proto: true }, {\n  setYear: function setYear(year) {\n    // validate\n    getTime(this);\n    var yi = toIntegerOrInfinity(year);\n    var yyyy = 0 <= yi && yi <= 99 ? yi + 1900 : yi;\n    return setFullYear(this, yyyy);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.date.set-year.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-gmt-string.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-gmt-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// `Date.prototype.toGMTString` method\n// https://tc39.es/ecma262/#sec-date.prototype.togmtstring\n$({ target: 'Date', proto: true }, {\n  toGMTString: Date.prototype.toUTCString\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.date.to-gmt-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-iso-string.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-iso-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toISOString = __webpack_require__(/*! ../internals/date-to-iso-string */ \"./node_modules/core-js/internals/date-to-iso-string.js\");\n\n// `Date.prototype.toISOString` method\n// https://tc39.es/ecma262/#sec-date.prototype.toisostring\n// PhantomJS / old WebKit has a broken implementations\n$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-json.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar FORCED = fails(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n});\n\n// `Date.prototype.toJSON` method\n// https://tc39.es/ecma262/#sec-date.prototype.tojson\n$({ target: 'Date', proto: true, forced: FORCED }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O, 'number');\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.date.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-primitive.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-primitive.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar dateToPrimitive = __webpack_require__(/*! ../internals/date-to-primitive */ \"./node_modules/core-js/internals/date-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar DatePrototype = Date.prototype;\n\n// `Date.prototype[@@toPrimitive]` method\n// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive\nif (!hasOwn(DatePrototype, TO_PRIMITIVE)) {\n  redefine(DatePrototype, TO_PRIMITIVE, dateToPrimitive);\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar DatePrototype = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar un$DateToString = uncurryThis(DatePrototype[TO_STRING]);\nvar getTime = uncurryThis(DatePrototype.getTime);\n\n// `Date.prototype.toString` method\n// https://tc39.es/ecma262/#sec-date.prototype.tostring\nif (String(new Date(NaN)) != INVALID_DATE) {\n  redefine(DatePrototype, TO_STRING, function toString() {\n    var value = getTime(this);\n    // eslint-disable-next-line no-self-compare -- NaN check\n    return value === value ? un$DateToString(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.date.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.error.cause.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.error.cause.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-unused-vars -- required for functions `.length` */\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar wrapErrorConstructorWithCause = __webpack_require__(/*! ../internals/wrap-error-constructor-with-cause */ \"./node_modules/core-js/internals/wrap-error-constructor-with-cause.js\");\n\nvar WEB_ASSEMBLY = 'WebAssembly';\nvar WebAssembly = global[WEB_ASSEMBLY];\n\nvar FORCED = Error('e', { cause: 7 }).cause !== 7;\n\nvar exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {\n  var O = {};\n  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);\n  $({ global: true, forced: FORCED }, O);\n};\n\nvar exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {\n  if (WebAssembly && WebAssembly[ERROR_NAME]) {\n    var O = {};\n    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);\n    $({ target: WEB_ASSEMBLY, stat: true, forced: FORCED }, O);\n  }\n};\n\n// https://github.com/tc39/proposal-error-cause\nexportGlobalErrorCauseWrapper('Error', function (init) {\n  return function Error(message) { return apply(init, this, arguments); };\n});\nexportGlobalErrorCauseWrapper('EvalError', function (init) {\n  return function EvalError(message) { return apply(init, this, arguments); };\n});\nexportGlobalErrorCauseWrapper('RangeError', function (init) {\n  return function RangeError(message) { return apply(init, this, arguments); };\n});\nexportGlobalErrorCauseWrapper('ReferenceError', function (init) {\n  return function ReferenceError(message) { return apply(init, this, arguments); };\n});\nexportGlobalErrorCauseWrapper('SyntaxError', function (init) {\n  return function SyntaxError(message) { return apply(init, this, arguments); };\n});\nexportGlobalErrorCauseWrapper('TypeError', function (init) {\n  return function TypeError(message) { return apply(init, this, arguments); };\n});\nexportGlobalErrorCauseWrapper('URIError', function (init) {\n  return function URIError(message) { return apply(init, this, arguments); };\n});\nexportWebAssemblyErrorCauseWrapper('CompileError', function (init) {\n  return function CompileError(message) { return apply(init, this, arguments); };\n});\nexportWebAssemblyErrorCauseWrapper('LinkError', function (init) {\n  return function LinkError(message) { return apply(init, this, arguments); };\n});\nexportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {\n  return function RuntimeError(message) { return apply(init, this, arguments); };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.error.cause.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.error.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.error.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar errorToString = __webpack_require__(/*! ../internals/error-to-string */ \"./node_modules/core-js/internals/error-to-string.js\");\n\nvar ErrorPrototype = Error.prototype;\n\n// `Error.prototype.toString` method fix\n// https://tc39.es/ecma262/#sec-error.prototype.tostring\nif (ErrorPrototype.toString !== errorToString) {\n  redefine(ErrorPrototype, 'toString', errorToString);\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.error.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.escape.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.escape.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar exec = uncurryThis(/./.exec);\nvar numberToString = uncurryThis(1.0.toString);\nvar toUpperCase = uncurryThis(''.toUpperCase);\n\nvar raw = /[\\w*+\\-./@]/;\n\nvar hex = function (code, length) {\n  var result = numberToString(code, 16);\n  while (result.length < length) result = '0' + result;\n  return result;\n};\n\n// `escape` method\n// https://tc39.es/ecma262/#sec-escape-string\n$({ global: true }, {\n  escape: function escape(string) {\n    var str = toString(string);\n    var result = '';\n    var length = str.length;\n    var index = 0;\n    var chr, code;\n    while (index < length) {\n      chr = charAt(str, index++);\n      if (exec(raw, chr)) {\n        result += chr;\n      } else {\n        code = charCodeAt(chr, 0);\n        if (code < 256) {\n          result += '%' + hex(code, 2);\n        } else {\n          result += '%u' + toUpperCase(hex(code, 4));\n        }\n      }\n    } return result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.escape.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"./node_modules/core-js/internals/function-bind.js\");\n\n// `Function.prototype.bind` method\n// https://tc39.es/ecma262/#sec-function.prototype.bind\n$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {\n  bind: bind\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.has-instance.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.has-instance.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar HAS_INSTANCE = wellKnownSymbol('hasInstance');\nvar FunctionPrototype = Function.prototype;\n\n// `Function.prototype[@@hasInstance]` method\n// https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance\nif (!(HAS_INSTANCE in FunctionPrototype)) {\n  definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, { value: function (O) {\n    if (!isCallable(this) || !isObject(O)) return false;\n    var P = this.prototype;\n    if (!isObject(P)) return O instanceof this;\n    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n    while (O = getPrototypeOf(O)) if (P === O) return true;\n    return false;\n  } });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").EXISTS);\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar FunctionPrototype = Function.prototype;\nvar functionToString = uncurryThis(FunctionPrototype.toString);\nvar nameRE = /function\\b(?:\\s|\\/\\*[\\S\\s]*?\\*\\/|\\/\\/[^\\n\\r]*[\\n\\r]+)*([^\\s(/]*)/;\nvar regExpExec = uncurryThis(nameRE.exec);\nvar NAME = 'name';\n\n// Function instances `.name` property\n// https://tc39.es/ecma262/#sec-function-instances-name\nif (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return regExpExec(nameRE, functionToString(this))[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.global-this.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.global-this.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// `globalThis` object\n// https://tc39.es/ecma262/#sec-globalthis\n$({ global: true }, {\n  globalThis: global\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.global-this.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar Array = global.Array;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar exec = uncurryThis(/./.exec);\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar replace = uncurryThis(''.replace);\nvar numberToString = uncurryThis(1.0.toString);\n\nvar tester = /[\\uD800-\\uDFFF]/g;\nvar low = /^[\\uD800-\\uDBFF]$/;\nvar hi = /^[\\uDC00-\\uDFFF]$/;\n\nvar fix = function (match, offset, string) {\n  var prev = charAt(string, offset - 1);\n  var next = charAt(string, offset + 1);\n  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {\n    return '\\\\u' + numberToString(charCodeAt(match, 0), 16);\n  } return match;\n};\n\nvar FORCED = fails(function () {\n  return $stringify('\\uDF06\\uD834') !== '\"\\\\udf06\\\\ud834\"'\n    || $stringify('\\uDEAD') !== '\"\\\\udead\"';\n});\n\nif ($stringify) {\n  // `JSON.stringify` method\n  // https://tc39.es/ecma262/#sec-json.stringify\n  // https://github.com/tc39/proposal-well-formed-stringify\n  $({ target: 'JSON', stat: true, forced: FORCED }, {\n    // eslint-disable-next-line no-unused-vars -- required for `.length`\n    stringify: function stringify(it, replacer, space) {\n      for (var i = 0, l = arguments.length, args = Array(l); i < l; i++) args[i] = arguments[i];\n      var result = apply($stringify, null, args);\n      return typeof result == 'string' ? replace(result, tester, fix) : result;\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.json.stringify.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.json.to-string-tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.to-string-tag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\n// JSON[@@toStringTag] property\n// https://tc39.es/ecma262/#sec-json-@@tostringtag\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.json.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar collection = __webpack_require__(/*! ../internals/collection */ \"./node_modules/core-js/internals/collection.js\");\nvar collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ \"./node_modules/core-js/internals/collection-strong.js\");\n\n// `Map` constructor\n// https://tc39.es/ecma262/#sec-map-objects\ncollection('Map', function (init) {\n  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };\n}, collectionStrong);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.acosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.acosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar log1p = __webpack_require__(/*! ../internals/math-log1p */ \"./node_modules/core-js/internals/math-log1p.js\");\n\n// eslint-disable-next-line es/no-math-acosh -- required for testing\nvar $acosh = Math.acosh;\nvar log = Math.log;\nvar sqrt = Math.sqrt;\nvar LN2 = Math.LN2;\n\nvar FORCED = !$acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  || Math.floor($acosh(Number.MAX_VALUE)) != 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  || $acosh(Infinity) != Infinity;\n\n// `Math.acosh` method\n// https://tc39.es/ecma262/#sec-math.acosh\n$({ target: 'Math', stat: true, forced: FORCED }, {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? log(x) + LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.acosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.asinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.asinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// eslint-disable-next-line es/no-math-asinh -- required for testing\nvar $asinh = Math.asinh;\nvar log = Math.log;\nvar sqrt = Math.sqrt;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));\n}\n\n// `Math.asinh` method\n// https://tc39.es/ecma262/#sec-math.asinh\n// Tor Browser bug: Math.asinh(0) -> -0\n$({ target: 'Math', stat: true, forced: !($asinh && 1 / $asinh(0) > 0) }, {\n  asinh: asinh\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.asinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.atanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.atanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// eslint-disable-next-line es/no-math-atanh -- required for testing\nvar $atanh = Math.atanh;\nvar log = Math.log;\n\n// `Math.atanh` method\n// https://tc39.es/ecma262/#sec-math.atanh\n// Tor Browser bug: Math.atanh(-0) -> 0\n$({ target: 'Math', stat: true, forced: !($atanh && 1 / $atanh(-0) < 0) }, {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.atanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.cbrt.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.cbrt.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar sign = __webpack_require__(/*! ../internals/math-sign */ \"./node_modules/core-js/internals/math-sign.js\");\n\nvar abs = Math.abs;\nvar pow = Math.pow;\n\n// `Math.cbrt` method\n// https://tc39.es/ecma262/#sec-math.cbrt\n$({ target: 'Math', stat: true }, {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * pow(abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.clz32.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.clz32.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar floor = Math.floor;\nvar log = Math.log;\nvar LOG2E = Math.LOG2E;\n\n// `Math.clz32` method\n// https://tc39.es/ecma262/#sec-math.clz32\n$({ target: 'Math', stat: true }, {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - floor(log(x + 0.5) * LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.clz32.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.cosh.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.cosh.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar expm1 = __webpack_require__(/*! ../internals/math-expm1 */ \"./node_modules/core-js/internals/math-expm1.js\");\n\n// eslint-disable-next-line es/no-math-cosh -- required for testing\nvar $cosh = Math.cosh;\nvar abs = Math.abs;\nvar E = Math.E;\n\n// `Math.cosh` method\n// https://tc39.es/ecma262/#sec-math.cosh\n$({ target: 'Math', stat: true, forced: !$cosh || $cosh(710) === Infinity }, {\n  cosh: function cosh(x) {\n    var t = expm1(abs(x) - 1) + 1;\n    return (t + 1 / (t * E * E)) * (E / 2);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.cosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.expm1.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.expm1.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar expm1 = __webpack_require__(/*! ../internals/math-expm1 */ \"./node_modules/core-js/internals/math-expm1.js\");\n\n// `Math.expm1` method\n// https://tc39.es/ecma262/#sec-math.expm1\n// eslint-disable-next-line es/no-math-expm1 -- required for testing\n$({ target: 'Math', stat: true, forced: expm1 != Math.expm1 }, { expm1: expm1 });\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.fround.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.fround.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fround = __webpack_require__(/*! ../internals/math-fround */ \"./node_modules/core-js/internals/math-fround.js\");\n\n// `Math.fround` method\n// https://tc39.es/ecma262/#sec-math.fround\n$({ target: 'Math', stat: true }, { fround: fround });\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.hypot.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.hypot.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// eslint-disable-next-line es/no-math-hypot -- required for testing\nvar $hypot = Math.hypot;\nvar abs = Math.abs;\nvar sqrt = Math.sqrt;\n\n// Chrome 77 bug\n// https://bugs.chromium.org/p/v8/issues/detail?id=9546\nvar BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity;\n\n// `Math.hypot` method\n// https://tc39.es/ecma262/#sec-math.hypot\n$({ target: 'Math', stat: true, forced: BUGGY }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  hypot: function hypot(value1, value2) {\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.hypot.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.imul.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.imul.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// eslint-disable-next-line es/no-math-imul -- required for testing\nvar $imul = Math.imul;\n\nvar FORCED = fails(function () {\n  return $imul(0xFFFFFFFF, 5) != -5 || $imul.length != 2;\n});\n\n// `Math.imul` method\n// https://tc39.es/ecma262/#sec-math.imul\n// some WebKit versions fails with big numbers, some has wrong arity\n$({ target: 'Math', stat: true, forced: FORCED }, {\n  imul: function imul(x, y) {\n    var UINT16 = 0xFFFF;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.imul.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.log10.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.log10.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar log10 = __webpack_require__(/*! ../internals/math-log10 */ \"./node_modules/core-js/internals/math-log10.js\");\n\n// `Math.log10` method\n// https://tc39.es/ecma262/#sec-math.log10\n$({ target: 'Math', stat: true }, {\n  log10: log10\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.log10.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.log1p.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.log1p.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar log1p = __webpack_require__(/*! ../internals/math-log1p */ \"./node_modules/core-js/internals/math-log1p.js\");\n\n// `Math.log1p` method\n// https://tc39.es/ecma262/#sec-math.log1p\n$({ target: 'Math', stat: true }, { log1p: log1p });\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.log2.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.log2.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar log = Math.log;\nvar LN2 = Math.LN2;\n\n// `Math.log2` method\n// https://tc39.es/ecma262/#sec-math.log2\n$({ target: 'Math', stat: true }, {\n  log2: function log2(x) {\n    return log(x) / LN2;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.log2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.sign.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.sign.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar sign = __webpack_require__(/*! ../internals/math-sign */ \"./node_modules/core-js/internals/math-sign.js\");\n\n// `Math.sign` method\n// https://tc39.es/ecma262/#sec-math.sign\n$({ target: 'Math', stat: true }, {\n  sign: sign\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.sinh.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.sinh.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar expm1 = __webpack_require__(/*! ../internals/math-expm1 */ \"./node_modules/core-js/internals/math-expm1.js\");\n\nvar abs = Math.abs;\nvar exp = Math.exp;\nvar E = Math.E;\n\nvar FORCED = fails(function () {\n  // eslint-disable-next-line es/no-math-sinh -- required for testing\n  return Math.sinh(-2e-17) != -2e-17;\n});\n\n// `Math.sinh` method\n// https://tc39.es/ecma262/#sec-math.sinh\n// V8 near Chromium 38 has a problem with very small numbers\n$({ target: 'Math', stat: true, forced: FORCED }, {\n  sinh: function sinh(x) {\n    return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.sinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.tanh.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.tanh.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar expm1 = __webpack_require__(/*! ../internals/math-expm1 */ \"./node_modules/core-js/internals/math-expm1.js\");\n\nvar exp = Math.exp;\n\n// `Math.tanh` method\n// https://tc39.es/ecma262/#sec-math.tanh\n$({ target: 'Math', stat: true }, {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.tanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.to-string-tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.to-string-tag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\n// Math[@@toStringTag] property\n// https://tc39.es/ecma262/#sec-math-@@tostringtag\nsetToStringTag(Math, 'Math', true);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.math.trunc.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.trunc.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `Math.trunc` method\n// https://tc39.es/ecma262/#sec-math.trunc\n$({ target: 'Math', stat: true }, {\n  trunc: function trunc(it) {\n    return (it > 0 ? floor : ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.math.trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ \"./node_modules/core-js/internals/this-number-value.js\");\nvar trim = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim);\n\nvar NUMBER = 'Number';\nvar NativeNumber = global[NUMBER];\nvar NumberPrototype = NativeNumber.prototype;\nvar TypeError = global.TypeError;\nvar arraySlice = uncurryThis(''.slice);\nvar charCodeAt = uncurryThis(''.charCodeAt);\n\n// `ToNumeric` abstract operation\n// https://tc39.es/ecma262/#sec-tonumeric\nvar toNumeric = function (value) {\n  var primValue = toPrimitive(value, 'number');\n  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);\n};\n\n// `ToNumber` abstract operation\n// https://tc39.es/ecma262/#sec-tonumber\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, 'number');\n  var first, third, radix, maxCode, digits, length, index, code;\n  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');\n  if (typeof it == 'string' && it.length > 2) {\n    it = trim(it);\n    first = charCodeAt(it, 0);\n    if (first === 43 || first === 45) {\n      third = charCodeAt(it, 2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (charCodeAt(it, 1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i\n        default: return +it;\n      }\n      digits = arraySlice(it, 2);\n      length = digits.length;\n      for (index = 0; index < length; index++) {\n        code = charCodeAt(digits, index);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\n// `Number` constructor\n// https://tc39.es/ecma262/#sec-number-constructor\nif (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {\n  var NumberWrapper = function Number(value) {\n    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));\n    var dummy = this;\n    // check on 1..constructor(foo) case\n    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })\n      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;\n  };\n  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES2015 (in case, if modules with ES2015 Number statics required before):\n    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +\n    // ESNext\n    'fromString,range'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {\n      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));\n    }\n  }\n  NumberWrapper.prototype = NumberPrototype;\n  NumberPrototype.constructor = NumberWrapper;\n  redefine(global, NUMBER, NumberWrapper);\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.epsilon.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.epsilon.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// `Number.EPSILON` constant\n// https://tc39.es/ecma262/#sec-number.epsilon\n$({ target: 'Number', stat: true }, {\n  EPSILON: Math.pow(2, -52)\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-finite.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-finite.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar numberIsFinite = __webpack_require__(/*! ../internals/number-is-finite */ \"./node_modules/core-js/internals/number-is-finite.js\");\n\n// `Number.isFinite` method\n// https://tc39.es/ecma262/#sec-number.isfinite\n$({ target: 'Number', stat: true }, { isFinite: numberIsFinite });\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-integer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isIntegralNumber = __webpack_require__(/*! ../internals/is-integral-number */ \"./node_modules/core-js/internals/is-integral-number.js\");\n\n// `Number.isInteger` method\n// https://tc39.es/ecma262/#sec-number.isinteger\n$({ target: 'Number', stat: true }, {\n  isInteger: isIntegralNumber\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-nan.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-nan.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// `Number.isNaN` method\n// https://tc39.es/ecma262/#sec-number.isnan\n$({ target: 'Number', stat: true }, {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare -- NaN check\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-safe-integer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-safe-integer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isIntegralNumber = __webpack_require__(/*! ../internals/is-integral-number */ \"./node_modules/core-js/internals/is-integral-number.js\");\n\nvar abs = Math.abs;\n\n// `Number.isSafeInteger` method\n// https://tc39.es/ecma262/#sec-number.issafeinteger\n$({ target: 'Number', stat: true }, {\n  isSafeInteger: function isSafeInteger(number) {\n    return isIntegralNumber(number) && abs(number) <= 0x1FFFFFFFFFFFFF;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.max-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.max-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// `Number.MAX_SAFE_INTEGER` constant\n// https://tc39.es/ecma262/#sec-number.max_safe_integer\n$({ target: 'Number', stat: true }, {\n  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.min-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.min-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// `Number.MIN_SAFE_INTEGER` constant\n// https://tc39.es/ecma262/#sec-number.min_safe_integer\n$({ target: 'Number', stat: true }, {\n  MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.parse-float.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.parse-float.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ \"./node_modules/core-js/internals/number-parse-float.js\");\n\n// `Number.parseFloat` method\n// https://tc39.es/ecma262/#sec-number.parseFloat\n// eslint-disable-next-line es/no-number-parsefloat -- required for testing\n$({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat }, {\n  parseFloat: parseFloat\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.parse-int.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.parse-int.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar parseInt = __webpack_require__(/*! ../internals/number-parse-int */ \"./node_modules/core-js/internals/number-parse-int.js\");\n\n// `Number.parseInt` method\n// https://tc39.es/ecma262/#sec-number.parseint\n// eslint-disable-next-line es/no-number-parseint -- required for testing\n$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {\n  parseInt: parseInt\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-exponential.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-exponential.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ \"./node_modules/core-js/internals/this-number-value.js\");\nvar $repeat = __webpack_require__(/*! ../internals/string-repeat */ \"./node_modules/core-js/internals/string-repeat.js\");\nvar log10 = __webpack_require__(/*! ../internals/math-log10 */ \"./node_modules/core-js/internals/math-log10.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar RangeError = global.RangeError;\nvar String = global.String;\nvar isFinite = global.isFinite;\nvar abs = Math.abs;\nvar floor = Math.floor;\nvar pow = Math.pow;\nvar round = Math.round;\nvar un$ToExponential = uncurryThis(1.0.toExponential);\nvar repeat = uncurryThis($repeat);\nvar stringSlice = uncurryThis(''.slice);\n\n// Edge 17-\nvar ROUNDS_PROPERLY = un$ToExponential(-6.9e-11, 4) === '-6.9000e-11'\n  // IE11- && Edge 14-\n  && un$ToExponential(1.255, 2) === '1.25e+0'\n  // FF86-, V8 ~ Chrome 49-50\n  && un$ToExponential(12345, 3) === '1.235e+4'\n  // FF86-, V8 ~ Chrome 49-50\n  && un$ToExponential(25, 0) === '3e+1';\n\n// IE8-\nvar THROWS_ON_INFINITY_FRACTION = fails(function () {\n  un$ToExponential(1, Infinity);\n}) && fails(function () {\n  un$ToExponential(1, -Infinity);\n});\n\n// Safari <11 && FF <50\nvar PROPER_NON_FINITE_THIS_CHECK = !fails(function () {\n  un$ToExponential(Infinity, Infinity);\n}) && !fails(function () {\n  un$ToExponential(NaN, Infinity);\n});\n\nvar FORCED = !ROUNDS_PROPERLY || !THROWS_ON_INFINITY_FRACTION || !PROPER_NON_FINITE_THIS_CHECK;\n\n// `Number.prototype.toExponential` method\n// https://tc39.es/ecma262/#sec-number.prototype.toexponential\n$({ target: 'Number', proto: true, forced: FORCED }, {\n  toExponential: function toExponential(fractionDigits) {\n    var x = thisNumberValue(this);\n    if (fractionDigits === undefined) return un$ToExponential(x);\n    var f = toIntegerOrInfinity(fractionDigits);\n    if (!isFinite(x)) return String(x);\n    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation\n    if (f < 0 || f > 20) throw RangeError('Incorrect fraction digits');\n    if (ROUNDS_PROPERLY) return un$ToExponential(x, f);\n    var s = '';\n    var m = '';\n    var e = 0;\n    var c = '';\n    var d = '';\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x === 0) {\n      e = 0;\n      m = repeat('0', f + 1);\n    } else {\n      // this block is based on https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08\n      // TODO: improve accuracy with big fraction digits\n      var l = log10(x);\n      e = floor(l);\n      var n = 0;\n      var w = pow(10, e - f);\n      n = round(x / w);\n      if (2 * x >= (2 * n + 1) * w) {\n        n += 1;\n      }\n      if (n >= pow(10, f + 1)) {\n        n /= 10;\n        e += 1;\n      }\n      m = String(n);\n    }\n    if (f !== 0) {\n      m = stringSlice(m, 0, 1) + '.' + stringSlice(m, 1);\n    }\n    if (e === 0) {\n      c = '+';\n      d = '0';\n    } else {\n      c = e > 0 ? '+' : '-';\n      d = String(abs(e));\n    }\n    m += 'e' + c + d;\n    return s + m;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.to-exponential.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ \"./node_modules/core-js/internals/this-number-value.js\");\nvar $repeat = __webpack_require__(/*! ../internals/string-repeat */ \"./node_modules/core-js/internals/string-repeat.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar RangeError = global.RangeError;\nvar String = global.String;\nvar floor = Math.floor;\nvar repeat = uncurryThis($repeat);\nvar stringSlice = uncurryThis(''.slice);\nvar un$ToFixed = uncurryThis(1.0.toFixed);\n\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\n\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\nvar multiply = function (data, n, c) {\n  var index = -1;\n  var c2 = c;\n  while (++index < 6) {\n    c2 += n * data[index];\n    data[index] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\n\nvar divide = function (data, n) {\n  var index = 6;\n  var c = 0;\n  while (--index >= 0) {\n    c += data[index];\n    data[index] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\n\nvar dataToString = function (data) {\n  var index = 6;\n  var s = '';\n  while (--index >= 0) {\n    if (s !== '' || index === 0 || data[index] !== 0) {\n      var t = String(data[index]);\n      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;\n    }\n  } return s;\n};\n\nvar FORCED = fails(function () {\n  return un$ToFixed(0.00008, 3) !== '0.000' ||\n    un$ToFixed(0.9, 0) !== '1' ||\n    un$ToFixed(1.255, 2) !== '1.25' ||\n    un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';\n}) || !fails(function () {\n  // V8 ~ Android 4.3-\n  un$ToFixed({});\n});\n\n// `Number.prototype.toFixed` method\n// https://tc39.es/ecma262/#sec-number.prototype.tofixed\n$({ target: 'Number', proto: true, forced: FORCED }, {\n  toFixed: function toFixed(fractionDigits) {\n    var number = thisNumberValue(this);\n    var fractDigits = toIntegerOrInfinity(fractionDigits);\n    var data = [0, 0, 0, 0, 0, 0];\n    var sign = '';\n    var result = '0';\n    var e, z, j, k;\n\n    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation\n    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (number != number) return 'NaN';\n    if (number <= -1e21 || number >= 1e21) return String(number);\n    if (number < 0) {\n      sign = '-';\n      number = -number;\n    }\n    if (number > 1e-21) {\n      e = log(number * pow(2, 69, 1)) - 69;\n      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(data, 0, z);\n        j = fractDigits;\n        while (j >= 7) {\n          multiply(data, 1e7, 0);\n          j -= 7;\n        }\n        multiply(data, pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(data, 1 << 23);\n          j -= 23;\n        }\n        divide(data, 1 << j);\n        multiply(data, 1, 1);\n        divide(data, 2);\n        result = dataToString(data);\n      } else {\n        multiply(data, 0, z);\n        multiply(data, 1 << -e, 0);\n        result = dataToString(data) + repeat('0', fractDigits);\n      }\n    }\n    if (fractDigits > 0) {\n      k = result.length;\n      result = sign + (k <= fractDigits\n        ? '0.' + repeat('0', fractDigits - k) + result\n        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));\n    } else {\n      result = sign + result;\n    } return result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-precision.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-precision.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ \"./node_modules/core-js/internals/this-number-value.js\");\n\nvar un$ToPrecision = uncurryThis(1.0.toPrecision);\n\nvar FORCED = fails(function () {\n  // IE7-\n  return un$ToPrecision(1, undefined) !== '1';\n}) || !fails(function () {\n  // V8 ~ Android 4.3-\n  un$ToPrecision({});\n});\n\n// `Number.prototype.toPrecision` method\n// https://tc39.es/ecma262/#sec-number.prototype.toprecision\n$({ target: 'Number', proto: true, forced: FORCED }, {\n  toPrecision: function toPrecision(precision) {\n    return precision === undefined\n      ? un$ToPrecision(thisNumberValue(this))\n      : un$ToPrecision(thisNumberValue(this), precision);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js/internals/object-assign.js\");\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\n// eslint-disable-next-line es/no-object-assign -- required for testing\n$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {\n  assign: assign\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.create.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\n$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {\n  create: create\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-getter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-getter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ \"./node_modules/core-js/internals/object-prototype-accessors-forced.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\n// `Object.prototype.__defineGetter__` method\n// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__\nif (DESCRIPTORS) {\n  $({ target: 'Object', proto: true, forced: FORCED }, {\n    __defineGetter__: function __defineGetter__(P, getter) {\n      definePropertyModule.f(toObject(this), P, { get: aCallable(getter), enumerable: true, configurable: true });\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.define-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineProperties = (__webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\").f);\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\n$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {\n  defineProperties: defineProperties\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\n// eslint-disable-next-line es/no-object-defineproperty -- safe\n$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {\n  defineProperty: defineProperty\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-setter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-setter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ \"./node_modules/core-js/internals/object-prototype-accessors-forced.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\n// `Object.prototype.__defineSetter__` method\n// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__\nif (DESCRIPTORS) {\n  $({ target: 'Object', proto: true, forced: FORCED }, {\n    __defineSetter__: function __defineSetter__(P, setter) {\n      definePropertyModule.f(toObject(this), P, { set: aCallable(setter), enumerable: true, configurable: true });\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.define-setter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $entries = (__webpack_require__(/*! ../internals/object-to-array */ \"./node_modules/core-js/internals/object-to-array.js\").entries);\n\n// `Object.entries` method\n// https://tc39.es/ecma262/#sec-object.entries\n$({ target: 'Object', stat: true }, {\n  entries: function entries(O) {\n    return $entries(O);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.freeze.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar FREEZING = __webpack_require__(/*! ../internals/freezing */ \"./node_modules/core-js/internals/freezing.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar onFreeze = (__webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\").onFreeze);\n\n// eslint-disable-next-line es/no-object-freeze -- safe\nvar $freeze = Object.freeze;\nvar FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });\n\n// `Object.freeze` method\n// https://tc39.es/ecma262/#sec-object.freeze\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {\n  freeze: function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.from-entries.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.from-entries.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\n// `Object.fromEntries` method\n// https://github.com/tc39/proposal-object-from-entries\n$({ target: 'Object', stat: true }, {\n  fromEntries: function fromEntries(iterable) {\n    var obj = {};\n    iterate(iterable, function (k, v) {\n      createProperty(obj, k, v);\n    }, { AS_ENTRIES: true });\n    return obj;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });\nvar FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\n$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {\n    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\n// `Object.getOwnPropertyDescriptors` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors\n$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIndexedObject(object);\n    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var index = 0;\n    var key, descriptor;\n    while (keys.length > index) {\n      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);\n      if (descriptor !== undefined) createProperty(result, key, descriptor);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-names.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js/internals/object-get-own-property-names-external.js\").f);\n\n// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing\nvar FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {\n  getOwnPropertyNames: getOwnPropertyNames\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {\n  getPrototypeOf: function getPrototypeOf(it) {\n    return nativeGetPrototypeOf(toObject(it));\n  }\n});\n\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.has-own.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.has-own.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\n// `Object.hasOwn` method\n// https://github.com/tc39/proposal-accessible-object-hasownproperty\n$({ target: 'Object', stat: true }, {\n  hasOwn: hasOwn\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.has-own.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is-extensible.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is-extensible.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ \"./node_modules/core-js/internals/object-is-extensible.js\");\n\n// `Object.isExtensible` method\n// https://tc39.es/ecma262/#sec-object.isextensible\n// eslint-disable-next-line es/no-object-isextensible -- safe\n$({ target: 'Object', stat: true, forced: Object.isExtensible !== $isExtensible }, {\n  isExtensible: $isExtensible\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is-frozen.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is-frozen.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ \"./node_modules/core-js/internals/array-buffer-non-extensible.js\");\n\n// eslint-disable-next-line es/no-object-isfrozen -- safe\nvar $isFrozen = Object.isFrozen;\nvar FAILS_ON_PRIMITIVES = fails(function () { $isFrozen(1); });\n\n// `Object.isFrozen` method\n// https://tc39.es/ecma262/#sec-object.isfrozen\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE }, {\n  isFrozen: function isFrozen(it) {\n    if (!isObject(it)) return true;\n    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return true;\n    return $isFrozen ? $isFrozen(it) : false;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is-sealed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is-sealed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ \"./node_modules/core-js/internals/array-buffer-non-extensible.js\");\n\n// eslint-disable-next-line es/no-object-issealed -- safe\nvar $isSealed = Object.isSealed;\nvar FAILS_ON_PRIMITIVES = fails(function () { $isSealed(1); });\n\n// `Object.isSealed` method\n// https://tc39.es/ecma262/#sec-object.issealed\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE }, {\n  isSealed: function isSealed(it) {\n    if (!isObject(it)) return true;\n    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return true;\n    return $isSealed ? $isSealed(it) : false;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar is = __webpack_require__(/*! ../internals/same-value */ \"./node_modules/core-js/internals/same-value.js\");\n\n// `Object.is` method\n// https://tc39.es/ecma262/#sec-object.is\n$({ target: 'Object', stat: true }, {\n  is: is\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar nativeKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {\n  keys: function keys(it) {\n    return nativeKeys(toObject(it));\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.lookup-getter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.lookup-getter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ \"./node_modules/core-js/internals/object-prototype-accessors-forced.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\n\n// `Object.prototype.__lookupGetter__` method\n// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__\nif (DESCRIPTORS) {\n  $({ target: 'Object', proto: true, forced: FORCED }, {\n    __lookupGetter__: function __lookupGetter__(P) {\n      var O = toObject(this);\n      var key = toPropertyKey(P);\n      var desc;\n      do {\n        if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;\n      } while (O = getPrototypeOf(O));\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.lookup-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.lookup-setter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.lookup-setter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ \"./node_modules/core-js/internals/object-prototype-accessors-forced.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\n\n// `Object.prototype.__lookupSetter__` method\n// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__\nif (DESCRIPTORS) {\n  $({ target: 'Object', proto: true, forced: FORCED }, {\n    __lookupSetter__: function __lookupSetter__(P) {\n      var O = toObject(this);\n      var key = toPropertyKey(P);\n      var desc;\n      do {\n        if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;\n      } while (O = getPrototypeOf(O));\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.lookup-setter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.prevent-extensions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.prevent-extensions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar onFreeze = (__webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\").onFreeze);\nvar FREEZING = __webpack_require__(/*! ../internals/freezing */ \"./node_modules/core-js/internals/freezing.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-preventextensions -- safe\nvar $preventExtensions = Object.preventExtensions;\nvar FAILS_ON_PRIMITIVES = fails(function () { $preventExtensions(1); });\n\n// `Object.preventExtensions` method\n// https://tc39.es/ecma262/#sec-object.preventextensions\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {\n  preventExtensions: function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze(it)) : it;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.seal.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.seal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar onFreeze = (__webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\").onFreeze);\nvar FREEZING = __webpack_require__(/*! ../internals/freezing */ \"./node_modules/core-js/internals/freezing.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-seal -- safe\nvar $seal = Object.seal;\nvar FAILS_ON_PRIMITIVES = fails(function () { $seal(1); });\n\n// `Object.seal` method\n// https://tc39.es/ecma262/#sec-object.seal\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {\n  seal: function seal(it) {\n    return $seal && isObject(it) ? $seal(onFreeze(it)) : it;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.seal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n$({ target: 'Object', stat: true }, {\n  setPrototypeOf: setPrototypeOf\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js/internals/object-to-string.js\");\n\n// `Object.prototype.toString` method\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, 'toString', toString, { unsafe: true });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $values = (__webpack_require__(/*! ../internals/object-to-array */ \"./node_modules/core-js/internals/object-to-array.js\").values);\n\n// `Object.values` method\n// https://tc39.es/ecma262/#sec-object.values\n$({ target: 'Object', stat: true }, {\n  values: function values(O) {\n    return $values(O);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.object.values.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ \"./node_modules/core-js/internals/number-parse-float.js\");\n\n// `parseFloat` method\n// https://tc39.es/ecma262/#sec-parsefloat-string\n$({ global: true, forced: parseFloat != $parseFloat }, {\n  parseFloat: $parseFloat\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ \"./node_modules/core-js/internals/number-parse-int.js\");\n\n// `parseInt` method\n// https://tc39.es/ecma262/#sec-parseint-string-radix\n$({ global: true, forced: parseInt != $parseInt }, {\n  parseInt: $parseInt\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.all-settled.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.all-settled.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\n\n// `Promise.allSettled` method\n// https://tc39.es/ecma262/#sec-promise.allsettled\n$({ target: 'Promise', stat: true }, {\n  allSettled: function allSettled(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var promiseResolve = aCallable(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        remaining++;\n        call(promiseResolve, C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = { status: 'fulfilled', value: value };\n          --remaining || resolve(values);\n        }, function (error) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = { status: 'rejected', reason: error };\n          --remaining || resolve(values);\n        });\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.promise.all-settled.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.any.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.any.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\n\nvar PROMISE_ANY_ERROR = 'No one promise resolved';\n\n// `Promise.any` method\n// https://tc39.es/ecma262/#sec-promise.any\n$({ target: 'Promise', stat: true }, {\n  any: function any(iterable) {\n    var C = this;\n    var AggregateError = getBuiltIn('AggregateError');\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var promiseResolve = aCallable(C.resolve);\n      var errors = [];\n      var counter = 0;\n      var remaining = 1;\n      var alreadyResolved = false;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyRejected = false;\n        remaining++;\n        call(promiseResolve, C, promise).then(function (value) {\n          if (alreadyRejected || alreadyResolved) return;\n          alreadyResolved = true;\n          resolve(value);\n        }, function (error) {\n          if (alreadyRejected || alreadyResolved) return;\n          alreadyRejected = true;\n          errors[index] = error;\n          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));\n        });\n      });\n      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.promise.any.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.finally.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"./node_modules/core-js/internals/native-promise-constructor.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js/internals/promise-resolve.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\n// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829\nvar NON_GENERIC = !!NativePromise && fails(function () {\n  // eslint-disable-next-line unicorn/no-thenable -- required for testing\n  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });\n});\n\n// `Promise.prototype.finally` method\n// https://tc39.es/ecma262/#sec-promise.prototype.finally\n$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {\n  'finally': function (onFinally) {\n    var C = speciesConstructor(this, getBuiltIn('Promise'));\n    var isFunction = isCallable(onFinally);\n    return this.then(\n      isFunction ? function (x) {\n        return promiseResolve(C, onFinally()).then(function () { return x; });\n      } : onFinally,\n      isFunction ? function (e) {\n        return promiseResolve(C, onFinally()).then(function () { throw e; });\n      } : onFinally\n    );\n  }\n});\n\n// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`\nif (!IS_PURE && isCallable(NativePromise)) {\n  var method = getBuiltIn('Promise').prototype['finally'];\n  if (NativePromise.prototype['finally'] !== method) {\n    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });\n  }\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"./node_modules/core-js/internals/native-promise-constructor.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar task = (__webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\").set);\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"./node_modules/core-js/internals/microtask.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js/internals/promise-resolve.js\");\nvar hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ \"./node_modules/core-js/internals/host-report-errors.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js/internals/perform.js\");\nvar Queue = __webpack_require__(/*! ../internals/queue */ \"./node_modules/core-js/internals/queue.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ \"./node_modules/core-js/internals/engine-is-browser.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar PROMISE = 'Promise';\n\nvar getInternalState = InternalStateModule.getterFor(PROMISE);\nvar setInternalState = InternalStateModule.set;\nvar getInternalPromiseState = InternalStateModule.getterFor(PROMISE);\nvar NativePromisePrototype = NativePromise && NativePromise.prototype;\nvar PromiseConstructor = NativePromise;\nvar PromisePrototype = NativePromisePrototype;\nvar TypeError = global.TypeError;\nvar document = global.document;\nvar process = global.process;\nvar newPromiseCapability = newPromiseCapabilityModule.f;\nvar newGenericPromiseCapability = newPromiseCapability;\n\nvar DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);\nvar NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);\nvar UNHANDLED_REJECTION = 'unhandledrejection';\nvar REJECTION_HANDLED = 'rejectionhandled';\nvar PENDING = 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\nvar HANDLED = 1;\nvar UNHANDLED = 2;\nvar SUBCLASSING = false;\n\nvar Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;\n\nvar FORCED = isForced(PROMISE, function () {\n  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);\n  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);\n  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n  // We can't detect it synchronously, so just check versions\n  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;\n  // We need Promise#finally in the pure version for preventing prototype pollution\n  if (IS_PURE && !PromisePrototype['finally']) return true;\n  // We can't use @@species feature detection in V8 since it causes\n  // deoptimization and performance degradation\n  // https://github.com/zloirock/core-js/issues/679\n  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;\n  // Detect correctness of subclassing with @@species support\n  var promise = new PromiseConstructor(function (resolve) { resolve(1); });\n  var FakePromise = function (exec) {\n    exec(function () { /* empty */ }, function () { /* empty */ });\n  };\n  var constructor = promise.constructor = {};\n  constructor[SPECIES] = FakePromise;\n  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;\n  if (!SUBCLASSING) return true;\n  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;\n});\n\nvar INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {\n  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });\n});\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && isCallable(then = it.then) ? then : false;\n};\n\nvar callReaction = function (reaction, state) {\n  var value = state.value;\n  var ok = state.state == FULFILLED;\n  var handler = ok ? reaction.ok : reaction.fail;\n  var resolve = reaction.resolve;\n  var reject = reaction.reject;\n  var domain = reaction.domain;\n  var result, then, exited;\n  try {\n    if (handler) {\n      if (!ok) {\n        if (state.rejection === UNHANDLED) onHandleUnhandled(state);\n        state.rejection = HANDLED;\n      }\n      if (handler === true) result = value;\n      else {\n        if (domain) domain.enter();\n        result = handler(value); // can throw\n        if (domain) {\n          domain.exit();\n          exited = true;\n        }\n      }\n      if (result === reaction.promise) {\n        reject(TypeError('Promise-chain cycle'));\n      } else if (then = isThenable(result)) {\n        call(then, result, resolve, reject);\n      } else resolve(result);\n    } else reject(value);\n  } catch (error) {\n    if (domain && !exited) domain.exit();\n    reject(error);\n  }\n};\n\nvar notify = function (state, isReject) {\n  if (state.notified) return;\n  state.notified = true;\n  microtask(function () {\n    var reactions = state.reactions;\n    var reaction;\n    while (reaction = reactions.get()) {\n      callReaction(reaction, state);\n    }\n    state.notified = false;\n    if (isReject && !state.rejection) onUnhandled(state);\n  });\n};\n\nvar dispatchEvent = function (name, promise, reason) {\n  var event, handler;\n  if (DISPATCH_EVENT) {\n    event = document.createEvent('Event');\n    event.promise = promise;\n    event.reason = reason;\n    event.initEvent(name, false, true);\n    global.dispatchEvent(event);\n  } else event = { promise: promise, reason: reason };\n  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);\n  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);\n};\n\nvar onUnhandled = function (state) {\n  call(task, global, function () {\n    var promise = state.facade;\n    var value = state.value;\n    var IS_UNHANDLED = isUnhandled(state);\n    var result;\n    if (IS_UNHANDLED) {\n      result = perform(function () {\n        if (IS_NODE) {\n          process.emit('unhandledRejection', value, promise);\n        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;\n      if (result.error) throw result.value;\n    }\n  });\n};\n\nvar isUnhandled = function (state) {\n  return state.rejection !== HANDLED && !state.parent;\n};\n\nvar onHandleUnhandled = function (state) {\n  call(task, global, function () {\n    var promise = state.facade;\n    if (IS_NODE) {\n      process.emit('rejectionHandled', promise);\n    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);\n  });\n};\n\nvar bind = function (fn, state, unwrap) {\n  return function (value) {\n    fn(state, value, unwrap);\n  };\n};\n\nvar internalReject = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  state.value = value;\n  state.state = REJECTED;\n  notify(state, true);\n};\n\nvar internalResolve = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  try {\n    if (state.facade === value) throw TypeError(\"Promise can't be resolved itself\");\n    var then = isThenable(value);\n    if (then) {\n      microtask(function () {\n        var wrapper = { done: false };\n        try {\n          call(then, value,\n            bind(internalResolve, wrapper, state),\n            bind(internalReject, wrapper, state)\n          );\n        } catch (error) {\n          internalReject(wrapper, error, state);\n        }\n      });\n    } else {\n      state.value = value;\n      state.state = FULFILLED;\n      notify(state, false);\n    }\n  } catch (error) {\n    internalReject({ done: false }, error, state);\n  }\n};\n\n// constructor polyfill\nif (FORCED) {\n  // 25.4.3.1 Promise(executor)\n  PromiseConstructor = function Promise(executor) {\n    anInstance(this, PromisePrototype);\n    aCallable(executor);\n    call(Internal, this);\n    var state = getInternalState(this);\n    try {\n      executor(bind(internalResolve, state), bind(internalReject, state));\n    } catch (error) {\n      internalReject(state, error);\n    }\n  };\n  PromisePrototype = PromiseConstructor.prototype;\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  Internal = function Promise(executor) {\n    setInternalState(this, {\n      type: PROMISE,\n      done: false,\n      notified: false,\n      parent: false,\n      reactions: new Queue(),\n      rejection: false,\n      state: PENDING,\n      value: undefined\n    });\n  };\n  Internal.prototype = redefineAll(PromisePrototype, {\n    // `Promise.prototype.then` method\n    // https://tc39.es/ecma262/#sec-promise.prototype.then\n    // eslint-disable-next-line unicorn/no-thenable -- safe\n    then: function then(onFulfilled, onRejected) {\n      var state = getInternalPromiseState(this);\n      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));\n      state.parent = true;\n      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;\n      reaction.fail = isCallable(onRejected) && onRejected;\n      reaction.domain = IS_NODE ? process.domain : undefined;\n      if (state.state == PENDING) state.reactions.add(reaction);\n      else microtask(function () {\n        callReaction(reaction, state);\n      });\n      return reaction.promise;\n    },\n    // `Promise.prototype.catch` method\n    // https://tc39.es/ecma262/#sec-promise.prototype.catch\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    var state = getInternalState(promise);\n    this.promise = promise;\n    this.resolve = bind(internalResolve, state);\n    this.reject = bind(internalReject, state);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === PromiseConstructor || C === PromiseWrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n\n  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {\n    nativeThen = NativePromisePrototype.then;\n\n    if (!SUBCLASSING) {\n      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs\n      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {\n        var that = this;\n        return new PromiseConstructor(function (resolve, reject) {\n          call(nativeThen, that, resolve, reject);\n        }).then(onFulfilled, onRejected);\n      // https://github.com/zloirock/core-js/issues/640\n      }, { unsafe: true });\n\n      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`\n      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });\n    }\n\n    // make `.constructor === Promise` work for native promise-based APIs\n    try {\n      delete NativePromisePrototype.constructor;\n    } catch (error) { /* empty */ }\n\n    // make `instanceof Promise` work for native promise-based APIs\n    if (setPrototypeOf) {\n      setPrototypeOf(NativePromisePrototype, PromisePrototype);\n    }\n  }\n}\n\n$({ global: true, wrap: true, forced: FORCED }, {\n  Promise: PromiseConstructor\n});\n\nsetToStringTag(PromiseConstructor, PROMISE, false, true);\nsetSpecies(PROMISE);\n\nPromiseWrapper = getBuiltIn(PROMISE);\n\n// statics\n$({ target: PROMISE, stat: true, forced: FORCED }, {\n  // `Promise.reject` method\n  // https://tc39.es/ecma262/#sec-promise.reject\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    call(capability.reject, undefined, r);\n    return capability.promise;\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {\n  // `Promise.resolve` method\n  // https://tc39.es/ecma262/#sec-promise.resolve\n  resolve: function resolve(x) {\n    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {\n  // `Promise.all` method\n  // https://tc39.es/ecma262/#sec-promise.all\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aCallable(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        remaining++;\n        call($promiseResolve, C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  },\n  // `Promise.race` method\n  // https://tc39.es/ecma262/#sec-promise.race\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aCallable(C.resolve);\n      iterate(iterable, function (promise) {\n        call($promiseResolve, C, promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.apply.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar functionApply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// MS Edge argumentsList argument is optional\nvar OPTIONAL_ARGUMENTS_LIST = !fails(function () {\n  // eslint-disable-next-line es/no-reflect -- required for testing\n  Reflect.apply(function () { /* empty */ });\n});\n\n// `Reflect.apply` method\n// https://tc39.es/ecma262/#sec-reflect.apply\n$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {\n  apply: function apply(target, thisArgument, argumentsList) {\n    return functionApply(aCallable(target), thisArgument, anObject(argumentsList));\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"./node_modules/core-js/internals/function-bind.js\");\nvar aConstructor = __webpack_require__(/*! ../internals/a-constructor */ \"./node_modules/core-js/internals/a-constructor.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar nativeConstruct = getBuiltIn('Reflect', 'construct');\nvar ObjectPrototype = Object.prototype;\nvar push = [].push;\n\n// `Reflect.construct` method\n// https://tc39.es/ecma262/#sec-reflect.construct\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\n\nvar ARGS_BUG = !fails(function () {\n  nativeConstruct(function () { /* empty */ });\n});\n\nvar FORCED = NEW_TARGET_BUG || ARGS_BUG;\n\n$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {\n  construct: function construct(Target, args /* , newTarget */) {\n    aConstructor(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      apply(push, $args, args);\n      return new (apply(bind, Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : ObjectPrototype);\n    var result = apply(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\nvar ERROR_INSTEAD_OF_FALSE = fails(function () {\n  // eslint-disable-next-line es/no-reflect -- required for testing\n  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });\n});\n\n// `Reflect.defineProperty` method\n// https://tc39.es/ecma262/#sec-reflect.defineproperty\n$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    var key = toPropertyKey(propertyKey);\n    anObject(attributes);\n    try {\n      definePropertyModule.f(target, key, attributes);\n      return true;\n    } catch (error) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.delete-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.delete-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\n\n// `Reflect.deleteProperty` method\n// https://tc39.es/ecma262/#sec-reflect.deleteproperty\n$({ target: 'Reflect', stat: true }, {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);\n    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\n\n// `Reflect.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor\n$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\n// `Reflect.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-reflect.getprototypeof\n$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return objectGetPrototypeOf(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isDataDescriptor = __webpack_require__(/*! ../internals/is-data-descriptor */ \"./node_modules/core-js/internals/is-data-descriptor.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\n\n// `Reflect.get` method\n// https://tc39.es/ecma262/#sec-reflect.get\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var descriptor, prototype;\n  if (anObject(target) === receiver) return target[propertyKey];\n  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);\n  if (descriptor) return isDataDescriptor(descriptor)\n    ? descriptor.value\n    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);\n  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);\n}\n\n$({ target: 'Reflect', stat: true }, {\n  get: get\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.has.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.has.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\n// `Reflect.has` method\n// https://tc39.es/ecma262/#sec-reflect.has\n$({ target: 'Reflect', stat: true }, {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar $isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ \"./node_modules/core-js/internals/object-is-extensible.js\");\n\n// `Reflect.isExtensible` method\n// https://tc39.es/ecma262/#sec-reflect.isextensible\n$({ target: 'Reflect', stat: true }, {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible(target);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.own-keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.own-keys.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\n\n// `Reflect.ownKeys` method\n// https://tc39.es/ecma262/#sec-reflect.ownkeys\n$({ target: 'Reflect', stat: true }, {\n  ownKeys: ownKeys\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar FREEZING = __webpack_require__(/*! ../internals/freezing */ \"./node_modules/core-js/internals/freezing.js\");\n\n// `Reflect.preventExtensions` method\n// https://tc39.es/ecma262/#sec-reflect.preventextensions\n$({ target: 'Reflect', stat: true, sham: !FREEZING }, {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');\n      if (objectPreventExtensions) objectPreventExtensions(target);\n      return true;\n    } catch (error) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\");\nvar objectSetPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\n// `Reflect.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-reflect.setprototypeof\nif (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    anObject(target);\n    aPossiblePrototype(proto);\n    try {\n      objectSetPrototypeOf(target, proto);\n      return true;\n    } catch (error) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.set.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isDataDescriptor = __webpack_require__(/*! ../internals/is-data-descriptor */ \"./node_modules/core-js/internals/is-data-descriptor.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\n// `Reflect.set` method\n// https://tc39.es/ecma262/#sec-reflect.set\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);\n  var existingDescriptor, prototype, setter;\n  if (!ownDescriptor) {\n    if (isObject(prototype = getPrototypeOf(target))) {\n      return set(prototype, propertyKey, V, receiver);\n    }\n    ownDescriptor = createPropertyDescriptor(0);\n  }\n  if (isDataDescriptor(ownDescriptor)) {\n    if (ownDescriptor.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      definePropertyModule.f(receiver, propertyKey, existingDescriptor);\n    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));\n  } else {\n    setter = ownDescriptor.set;\n    if (setter === undefined) return false;\n    call(setter, receiver, V);\n  } return true;\n}\n\n// MS Edge 17-18 Reflect.set allows setting the property to object\n// with non-writable property on the prototype\nvar MS_EDGE_BUG = fails(function () {\n  var Constructor = function () { /* empty */ };\n  var object = definePropertyModule.f(new Constructor(), 'a', { configurable: true });\n  // eslint-disable-next-line es/no-reflect -- required for testing\n  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;\n});\n\n$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {\n  set: set\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\n$({ global: true }, { Reflect: {} });\n\n// Reflect[@@toStringTag] property\n// https://tc39.es/ecma262/#sec-reflect-@@tostringtag\nsetToStringTag(global.Reflect, 'Reflect', true);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.reflect.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").enforce);\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ \"./node_modules/core-js/internals/regexp-unsupported-dot-all.js\");\nvar UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ \"./node_modules/core-js/internals/regexp-unsupported-ncg.js\");\n\nvar MATCH = wellKnownSymbol('match');\nvar NativeRegExp = global.RegExp;\nvar RegExpPrototype = NativeRegExp.prototype;\nvar SyntaxError = global.SyntaxError;\nvar getFlags = uncurryThis(regExpFlags);\nvar exec = uncurryThis(RegExpPrototype.exec);\nvar charAt = uncurryThis(''.charAt);\nvar replace = uncurryThis(''.replace);\nvar stringIndexOf = uncurryThis(''.indexOf);\nvar stringSlice = uncurryThis(''.slice);\n// TODO: Use only propper RegExpIdentifierName\nvar IS_NCG = /^\\?<[^\\s\\d!#%&*+<=>@^][^\\s!#%&*+<=>@^]*>/;\nvar re1 = /a/g;\nvar re2 = /a/g;\n\n// \"new\" should create a new object, old webkit bug\nvar CORRECT_NEW = new NativeRegExp(re1) !== re1;\n\nvar MISSED_STICKY = stickyHelpers.MISSED_STICKY;\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;\n\nvar BASE_FORCED = DESCRIPTORS &&\n  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {\n    re2[MATCH] = false;\n    // RegExp constructor can alter flags and IsRegExp works correct with @@match\n    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';\n  }));\n\nvar handleDotAll = function (string) {\n  var length = string.length;\n  var index = 0;\n  var result = '';\n  var brackets = false;\n  var chr;\n  for (; index <= length; index++) {\n    chr = charAt(string, index);\n    if (chr === '\\\\') {\n      result += chr + charAt(string, ++index);\n      continue;\n    }\n    if (!brackets && chr === '.') {\n      result += '[\\\\s\\\\S]';\n    } else {\n      if (chr === '[') {\n        brackets = true;\n      } else if (chr === ']') {\n        brackets = false;\n      } result += chr;\n    }\n  } return result;\n};\n\nvar handleNCG = function (string) {\n  var length = string.length;\n  var index = 0;\n  var result = '';\n  var named = [];\n  var names = {};\n  var brackets = false;\n  var ncg = false;\n  var groupid = 0;\n  var groupname = '';\n  var chr;\n  for (; index <= length; index++) {\n    chr = charAt(string, index);\n    if (chr === '\\\\') {\n      chr = chr + charAt(string, ++index);\n    } else if (chr === ']') {\n      brackets = false;\n    } else if (!brackets) switch (true) {\n      case chr === '[':\n        brackets = true;\n        break;\n      case chr === '(':\n        if (exec(IS_NCG, stringSlice(string, index + 1))) {\n          index += 2;\n          ncg = true;\n        }\n        result += chr;\n        groupid++;\n        continue;\n      case chr === '>' && ncg:\n        if (groupname === '' || hasOwn(names, groupname)) {\n          throw new SyntaxError('Invalid capture group name');\n        }\n        names[groupname] = true;\n        named[named.length] = [groupname, groupid];\n        ncg = false;\n        groupname = '';\n        continue;\n    }\n    if (ncg) groupname += chr;\n    else result += chr;\n  } return [result, named];\n};\n\n// `RegExp` constructor\n// https://tc39.es/ecma262/#sec-regexp-constructor\nif (isForced('RegExp', BASE_FORCED)) {\n  var RegExpWrapper = function RegExp(pattern, flags) {\n    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);\n    var patternIsRegExp = isRegExp(pattern);\n    var flagsAreUndefined = flags === undefined;\n    var groups = [];\n    var rawPattern = pattern;\n    var rawFlags, dotAll, sticky, handled, result, state;\n\n    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {\n      return pattern;\n    }\n\n    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {\n      pattern = pattern.source;\n      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);\n    }\n\n    pattern = pattern === undefined ? '' : toString(pattern);\n    flags = flags === undefined ? '' : toString(flags);\n    rawPattern = pattern;\n\n    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {\n      dotAll = !!flags && stringIndexOf(flags, 's') > -1;\n      if (dotAll) flags = replace(flags, /s/g, '');\n    }\n\n    rawFlags = flags;\n\n    if (MISSED_STICKY && 'sticky' in re1) {\n      sticky = !!flags && stringIndexOf(flags, 'y') > -1;\n      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');\n    }\n\n    if (UNSUPPORTED_NCG) {\n      handled = handleNCG(pattern);\n      pattern = handled[0];\n      groups = handled[1];\n    }\n\n    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);\n\n    if (dotAll || sticky || groups.length) {\n      state = enforceInternalState(result);\n      if (dotAll) {\n        state.dotAll = true;\n        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);\n      }\n      if (sticky) state.sticky = true;\n      if (groups.length) state.groups = groups;\n    }\n\n    if (pattern !== rawPattern) try {\n      // fails in old engines, but we have no alternatives for unsupported regex syntax\n      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);\n    } catch (error) { /* empty */ }\n\n    return result;\n  };\n\n  var proxy = function (key) {\n    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {\n      configurable: true,\n      get: function () { return NativeRegExp[key]; },\n      set: function (it) { NativeRegExp[key] = it; }\n    });\n  };\n\n  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {\n    proxy(keys[index++]);\n  }\n\n  RegExpPrototype.constructor = RegExpWrapper;\n  RegExpWrapper.prototype = RegExpPrototype;\n  redefine(global, 'RegExp', RegExpWrapper);\n}\n\n// https://tc39.es/ecma262/#sec-get-regexp-@@species\nsetSpecies('RegExp');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.dot-all.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.dot-all.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ \"./node_modules/core-js/internals/regexp-unsupported-dot-all.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar getInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").get);\n\nvar RegExpPrototype = RegExp.prototype;\nvar TypeError = global.TypeError;\n\n// `RegExp.prototype.dotAll` getter\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall\nif (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {\n  defineProperty(RegExpPrototype, 'dotAll', {\n    configurable: true,\n    get: function () {\n      if (this === RegExpPrototype) return undefined;\n      // We can't use InternalStateModule.getterFor because\n      // we don't add metadata for regexps created by a literal.\n      if (classof(this) === 'RegExp') {\n        return !!getInternalState(this).dotAll;\n      }\n      throw TypeError('Incompatible receiver, RegExp required');\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.regexp.dot-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExp.prototype.exec` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.exec\n$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {\n  exec: exec\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.flags.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar objectDefinePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar RegExpPrototype = RegExp.prototype;\n\nvar FORCED = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n  return Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call({ dotAll: true, sticky: true }) !== 'sy';\n});\n\n// `RegExp.prototype.flags` getter\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags\nif (FORCED) objectDefinePropertyModule.f(RegExpPrototype, 'flags', {\n  configurable: true,\n  get: regExpFlags\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.sticky.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.sticky.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar MISSED_STICKY = (__webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\").MISSED_STICKY);\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar getInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").get);\n\nvar RegExpPrototype = RegExp.prototype;\nvar TypeError = global.TypeError;\n\n// `RegExp.prototype.sticky` getter\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky\nif (DESCRIPTORS && MISSED_STICKY) {\n  defineProperty(RegExpPrototype, 'sticky', {\n    configurable: true,\n    get: function () {\n      if (this === RegExpPrototype) return undefined;\n      // We can't use InternalStateModule.getterFor because\n      // we don't add metadata for regexps created by a literal.\n      if (classof(this) === 'RegExp') {\n        return !!getInternalState(this).sticky;\n      }\n      throw TypeError('Incompatible receiver, RegExp required');\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.regexp.sticky.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.test.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.test.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// TODO: Remove from `core-js@4` since it's moved to entry points\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar DELEGATES_TO_EXEC = function () {\n  var execCalled = false;\n  var re = /[ac]/;\n  re.exec = function () {\n    execCalled = true;\n    return /./.exec.apply(this, arguments);\n  };\n  return re.test('abc') === true && execCalled;\n}();\n\nvar Error = global.Error;\nvar un$Test = uncurryThis(/./.test);\n\n// `RegExp.prototype.test` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.test\n$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {\n  test: function (str) {\n    var exec = this.exec;\n    if (!isCallable(exec)) return un$Test(this, str);\n    var result = call(exec, this, str);\n    if (result !== null && !isObject(result)) {\n      throw new Error('RegExp exec method returned something other than an Object or null');\n    }\n    return !!result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.regexp.test.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").PROPER);\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar TO_STRING = 'toString';\nvar RegExpPrototype = RegExp.prototype;\nvar n$ToString = RegExpPrototype[TO_STRING];\nvar getFlags = uncurryThis(regExpFlags);\n\nvar NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });\n// FF44- RegExp#toString has a wrong name\nvar INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;\n\n// `RegExp.prototype.toString` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.tostring\nif (NOT_GENERIC || INCORRECT_NAME) {\n  redefine(RegExp.prototype, TO_STRING, function toString() {\n    var R = anObject(this);\n    var p = $toString(R.source);\n    var rf = R.flags;\n    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);\n    return '/' + p + '/' + f;\n  }, { unsafe: true });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar collection = __webpack_require__(/*! ../internals/collection */ \"./node_modules/core-js/internals/collection.js\");\nvar collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ \"./node_modules/core-js/internals/collection-strong.js\");\n\n// `Set` constructor\n// https://tc39.es/ecma262/#sec-set-objects\ncollection('Set', function (init) {\n  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };\n}, collectionStrong);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.anchor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.anchor.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.anchor` method\n// https://tc39.es/ecma262/#sec-string.prototype.anchor\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {\n  anchor: function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.anchor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.at-alternative.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.at-alternative.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar charAt = uncurryThis(''.charAt);\n\nvar FORCED = fails(function () {\n  return '𠮷'.at(-2) !== '\\uD842';\n});\n\n// `String.prototype.at` method\n// https://github.com/tc39/proposal-relative-indexing-method\n$({ target: 'String', proto: true, forced: FORCED }, {\n  at: function at(index) {\n    var S = toString(requireObjectCoercible(this));\n    var len = S.length;\n    var relativeIndex = toIntegerOrInfinity(index);\n    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;\n    return (k < 0 || k >= len) ? undefined : charAt(S, k);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.at-alternative.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.big.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.big.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.big` method\n// https://tc39.es/ecma262/#sec-string.prototype.big\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('big') }, {\n  big: function big() {\n    return createHTML(this, 'big', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.big.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.blink.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.blink.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.blink` method\n// https://tc39.es/ecma262/#sec-string.prototype.blink\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('blink') }, {\n  blink: function blink() {\n    return createHTML(this, 'blink', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.blink.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.bold.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.bold.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.bold` method\n// https://tc39.es/ecma262/#sec-string.prototype.bold\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('bold') }, {\n  bold: function bold() {\n    return createHTML(this, 'b', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.bold.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.code-point-at.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.code-point-at.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar codeAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").codeAt);\n\n// `String.prototype.codePointAt` method\n// https://tc39.es/ecma262/#sec-string.prototype.codepointat\n$({ target: 'String', proto: true }, {\n  codePointAt: function codePointAt(pos) {\n    return codeAt(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\n// eslint-disable-next-line es/no-string-prototype-endswith -- safe\nvar un$EndsWith = uncurryThis(''.endsWith);\nvar slice = uncurryThis(''.slice);\nvar min = Math.min;\n\nvar CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');\n// https://github.com/zloirock/core-js/pull/702\nvar MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {\n  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');\n  return descriptor && !descriptor.writable;\n}();\n\n// `String.prototype.endsWith` method\n// https://tc39.es/ecma262/#sec-string.prototype.endswith\n$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = toString(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = that.length;\n    var end = endPosition === undefined ? len : min(toLength(endPosition), len);\n    var search = toString(searchString);\n    return un$EndsWith\n      ? un$EndsWith(that, search, end)\n      : slice(that, end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.fixed.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.fixed.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.fixed` method\n// https://tc39.es/ecma262/#sec-string.prototype.fixed\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {\n  fixed: function fixed() {\n    return createHTML(this, 'tt', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.fontcolor.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.fontcolor.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.fontcolor` method\n// https://tc39.es/ecma262/#sec-string.prototype.fontcolor\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontcolor') }, {\n  fontcolor: function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.fontsize.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.fontsize.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.fontsize` method\n// https://tc39.es/ecma262/#sec-string.prototype.fontsize\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontsize') }, {\n  fontsize: function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.from-code-point.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.from-code-point.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nvar RangeError = global.RangeError;\nvar fromCharCode = String.fromCharCode;\n// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing\nvar $fromCodePoint = String.fromCodePoint;\nvar join = uncurryThis([].join);\n\n// length should be 1, old FF problem\nvar INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;\n\n// `String.fromCodePoint` method\n// https://tc39.es/ecma262/#sec-string.fromcodepoint\n$({ target: 'String', stat: true, forced: INCORRECT_LENGTH }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  fromCodePoint: function fromCodePoint(x) {\n    var elements = [];\n    var length = arguments.length;\n    var i = 0;\n    var code;\n    while (length > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');\n      elements[i] = code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);\n    } return join(elements, '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\nvar stringIndexOf = uncurryThis(''.indexOf);\n\n// `String.prototype.includes` method\n// https://tc39.es/ecma262/#sec-string.prototype.includes\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~stringIndexOf(\n      toString(requireObjectCoercible(this)),\n      toString(notARegExp(searchString)),\n      arguments.length > 1 ? arguments[1] : undefined\n    );\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.italics.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.italics.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.italics` method\n// https://tc39.es/ecma262/#sec-string.prototype.italics\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('italics') }, {\n  italics: function italics() {\n    return createHTML(this, 'i', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.italics.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar charAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt);\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: toString(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.link` method\n// https://tc39.es/ecma262/#sec-string.prototype.link\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {\n  link: function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.link.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match-all.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n/* eslint-disable es/no-string-prototype-matchall -- safe */\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js/internals/create-iterator-constructor.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar MATCH_ALL = wellKnownSymbol('matchAll');\nvar REGEXP_STRING = 'RegExp String';\nvar REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);\nvar RegExpPrototype = RegExp.prototype;\nvar TypeError = global.TypeError;\nvar getFlags = uncurryThis(regExpFlags);\nvar stringIndexOf = uncurryThis(''.indexOf);\nvar un$MatchAll = uncurryThis(''.matchAll);\n\nvar WORKS_WITH_NON_GLOBAL_REGEX = !!un$MatchAll && !fails(function () {\n  un$MatchAll('a', /./);\n});\n\nvar $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {\n  setInternalState(this, {\n    type: REGEXP_STRING_ITERATOR,\n    regexp: regexp,\n    string: string,\n    global: $global,\n    unicode: fullUnicode,\n    done: false\n  });\n}, REGEXP_STRING, function next() {\n  var state = getInternalState(this);\n  if (state.done) return { value: undefined, done: true };\n  var R = state.regexp;\n  var S = state.string;\n  var match = regExpExec(R, S);\n  if (match === null) return { value: undefined, done: state.done = true };\n  if (state.global) {\n    if (toString(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);\n    return { value: match, done: false };\n  }\n  state.done = true;\n  return { value: match, done: false };\n});\n\nvar $matchAll = function (string) {\n  var R = anObject(this);\n  var S = toString(string);\n  var C, flagsValue, flags, matcher, $global, fullUnicode;\n  C = speciesConstructor(R, RegExp);\n  flagsValue = R.flags;\n  if (flagsValue === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype)) {\n    flagsValue = getFlags(R);\n  }\n  flags = flagsValue === undefined ? '' : toString(flagsValue);\n  matcher = new C(C === RegExp ? R.source : R, flags);\n  $global = !!~stringIndexOf(flags, 'g');\n  fullUnicode = !!~stringIndexOf(flags, 'u');\n  matcher.lastIndex = toLength(R.lastIndex);\n  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);\n};\n\n// `String.prototype.matchAll` method\n// https://tc39.es/ecma262/#sec-string.prototype.matchall\n$({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {\n  matchAll: function matchAll(regexp) {\n    var O = requireObjectCoercible(this);\n    var flags, S, matcher, rx;\n    if (regexp != null) {\n      if (isRegExp(regexp)) {\n        flags = toString(requireObjectCoercible('flags' in RegExpPrototype\n          ? regexp.flags\n          : getFlags(regexp)\n        ));\n        if (!~stringIndexOf(flags, 'g')) throw TypeError('`.matchAll` does not allow non-global regexes');\n      }\n      if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);\n      matcher = getMethod(regexp, MATCH_ALL);\n      if (matcher === undefined && IS_PURE && classof(regexp) == 'RegExp') matcher = $matchAll;\n      if (matcher) return call(matcher, regexp, O);\n    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);\n    S = toString(O);\n    rx = new RegExp(regexp, 'g');\n    return IS_PURE ? call($matchAll, rx, S) : rx[MATCH_ALL](S);\n  }\n});\n\nIS_PURE || MATCH_ALL in RegExpPrototype || redefine(RegExpPrototype, MATCH_ALL, $matchAll);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.match-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\n\n// @@match logic\nfixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.es/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = requireObjectCoercible(this);\n      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);\n      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match\n    function (string) {\n      var rx = anObject(this);\n      var S = toString(string);\n      var res = maybeCallNative(nativeMatch, rx, S);\n\n      if (res.done) return res.value;\n\n      if (!rx.global) return regExpExec(rx, S);\n\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = toString(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.pad-end.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.pad-end.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $padEnd = (__webpack_require__(/*! ../internals/string-pad */ \"./node_modules/core-js/internals/string-pad.js\").end);\nvar WEBKIT_BUG = __webpack_require__(/*! ../internals/string-pad-webkit-bug */ \"./node_modules/core-js/internals/string-pad-webkit-bug.js\");\n\n// `String.prototype.padEnd` method\n// https://tc39.es/ecma262/#sec-string.prototype.padend\n$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.pad-start.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.pad-start.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $padStart = (__webpack_require__(/*! ../internals/string-pad */ \"./node_modules/core-js/internals/string-pad.js\").start);\nvar WEBKIT_BUG = __webpack_require__(/*! ../internals/string-pad-webkit-bug */ \"./node_modules/core-js/internals/string-pad-webkit-bug.js\");\n\n// `String.prototype.padStart` method\n// https://tc39.es/ecma262/#sec-string.prototype.padstart\n$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.raw.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar push = uncurryThis([].push);\nvar join = uncurryThis([].join);\n\n// `String.raw` method\n// https://tc39.es/ecma262/#sec-string.raw\n$({ target: 'String', stat: true }, {\n  raw: function raw(template) {\n    var rawTemplate = toIndexedObject(toObject(template).raw);\n    var literalSegments = lengthOfArrayLike(rawTemplate);\n    var argumentsLength = arguments.length;\n    var elements = [];\n    var i = 0;\n    while (literalSegments > i) {\n      push(elements, toString(rawTemplate[i++]));\n      if (i === literalSegments) return join(elements, '');\n      if (i < argumentsLength) push(elements, toString(arguments[i]));\n    }\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.raw.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.repeat.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.repeat.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar repeat = __webpack_require__(/*! ../internals/string-repeat */ \"./node_modules/core-js/internals/string-repeat.js\");\n\n// `String.prototype.repeat` method\n// https://tc39.es/ecma262/#sec-string.prototype.repeat\n$({ target: 'String', proto: true }, {\n  repeat: repeat\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace-all.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ \"./node_modules/core-js/internals/get-substitution.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar REPLACE = wellKnownSymbol('replace');\nvar RegExpPrototype = RegExp.prototype;\nvar TypeError = global.TypeError;\nvar getFlags = uncurryThis(regExpFlags);\nvar indexOf = uncurryThis(''.indexOf);\nvar replace = uncurryThis(''.replace);\nvar stringSlice = uncurryThis(''.slice);\nvar max = Math.max;\n\nvar stringIndexOf = function (string, searchValue, fromIndex) {\n  if (fromIndex > string.length) return -1;\n  if (searchValue === '') return fromIndex;\n  return indexOf(string, searchValue, fromIndex);\n};\n\n// `String.prototype.replaceAll` method\n// https://tc39.es/ecma262/#sec-string.prototype.replaceall\n$({ target: 'String', proto: true }, {\n  replaceAll: function replaceAll(searchValue, replaceValue) {\n    var O = requireObjectCoercible(this);\n    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;\n    var position = 0;\n    var endOfLastMatch = 0;\n    var result = '';\n    if (searchValue != null) {\n      IS_REG_EXP = isRegExp(searchValue);\n      if (IS_REG_EXP) {\n        flags = toString(requireObjectCoercible('flags' in RegExpPrototype\n          ? searchValue.flags\n          : getFlags(searchValue)\n        ));\n        if (!~indexOf(flags, 'g')) throw TypeError('`.replaceAll` does not allow non-global regexes');\n      }\n      replacer = getMethod(searchValue, REPLACE);\n      if (replacer) {\n        return call(replacer, searchValue, O, replaceValue);\n      } else if (IS_PURE && IS_REG_EXP) {\n        return replace(toString(O), searchValue, replaceValue);\n      }\n    }\n    string = toString(O);\n    searchString = toString(searchValue);\n    functionalReplace = isCallable(replaceValue);\n    if (!functionalReplace) replaceValue = toString(replaceValue);\n    searchLength = searchString.length;\n    advanceBy = max(1, searchLength);\n    position = stringIndexOf(string, searchString, 0);\n    while (position !== -1) {\n      replacement = functionalReplace\n        ? toString(replaceValue(searchString, position, string))\n        : getSubstitution(searchString, string, position, [], undefined, replaceValue);\n      result += stringSlice(string, endOfLastMatch, position) + replacement;\n      endOfLastMatch = position + searchLength;\n      position = stringIndexOf(string, searchString, position + advanceBy);\n    }\n    if (endOfLastMatch < string.length) {\n      result += stringSlice(string, endOfLastMatch);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.replace-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ \"./node_modules/core-js/internals/get-substitution.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar REPLACE = wellKnownSymbol('replace');\nvar max = Math.max;\nvar min = Math.min;\nvar concat = uncurryThis([].concat);\nvar push = uncurryThis([].push);\nvar stringIndexOf = uncurryThis(''.indexOf);\nvar stringSlice = uncurryThis(''.slice);\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// IE <= 11 replaces $0 with the whole match, as if it was $&\n// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0\nvar REPLACE_KEEPS_$0 = (function () {\n  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing\n  return 'a'.replace(/./, '$0') === '$0';\n})();\n\n// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string\nvar REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {\n  if (/./[REPLACE]) {\n    return /./[REPLACE]('a', '$0') === '';\n  }\n  return false;\n})();\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive\n  return ''.replace(re, '$<a>') !== '7';\n});\n\n// @@replace logic\nfixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {\n  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';\n\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.es/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = requireObjectCoercible(this);\n      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);\n      return replacer\n        ? call(replacer, searchValue, O, replaceValue)\n        : call(nativeReplace, toString(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace\n    function (string, replaceValue) {\n      var rx = anObject(this);\n      var S = toString(string);\n\n      if (\n        typeof replaceValue == 'string' &&\n        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&\n        stringIndexOf(replaceValue, '$<') === -1\n      ) {\n        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);\n        if (res.done) return res.value;\n      }\n\n      var functionalReplace = isCallable(replaceValue);\n      if (!functionalReplace) replaceValue = toString(replaceValue);\n\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n\n        push(results, result);\n        if (!global) break;\n\n        var matchStr = toString(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n\n        var matched = toString(result[0]);\n        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = concat([matched], captures, position, S);\n          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);\n          var replacement = toString(apply(replaceValue, undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + stringSlice(S, nextSourcePosition);\n    }\n  ];\n}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar sameValue = __webpack_require__(/*! ../internals/same-value */ \"./node_modules/core-js/internals/same-value.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\n\n// @@search logic\nfixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.es/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = requireObjectCoercible(this);\n      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);\n      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search\n    function (string) {\n      var rx = anObject(this);\n      var S = toString(string);\n      var res = maybeCallNative(nativeSearch, rx, S);\n\n      if (res.done) return res.value;\n\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.small.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.small.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.small` method\n// https://tc39.es/ecma262/#sec-string.prototype.small\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {\n  small: function small() {\n    return createHTML(this, 'small', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.small.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\nvar callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;\nvar MAX_UINT32 = 0xFFFFFFFF;\nvar min = Math.min;\nvar $push = [].push;\nvar exec = uncurryThis(/./.exec);\nvar push = uncurryThis($push);\nvar stringSlice = uncurryThis(''.slice);\n\n// Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n// Weex JS has frozen built-in prototypes, so use try / catch wrapper\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  // eslint-disable-next-line regexp/no-empty-group -- required for testing\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\n// @@split logic\nfixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'.split(/(b)*/)[1] == 'c' ||\n    // eslint-disable-next-line regexp/no-empty-group -- required for testing\n    'test'.split(/(?:)/, -1).length != 4 ||\n    'ab'.split(/(?:ab)*/).length != 2 ||\n    '.'.split(/(.?)(.?)/).length != 4 ||\n    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing\n    '.'.split(/()()/).length > 1 ||\n    ''.split(/.?/).length\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = toString(requireObjectCoercible(this));\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (separator === undefined) return [string];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) {\n        return call(nativeSplit, string, separator, lim);\n      }\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = call(regexpExec, separatorCopy, string)) {\n        lastIndex = separatorCopy.lastIndex;\n        if (lastIndex > lastLastIndex) {\n          push(output, stringSlice(string, lastLastIndex, match.index));\n          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));\n          lastLength = match[0].length;\n          lastLastIndex = lastIndex;\n          if (output.length >= lim) break;\n        }\n        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string.length) {\n        if (lastLength || !exec(separatorCopy, '')) push(output, '');\n      } else push(output, stringSlice(string, lastLastIndex));\n      return output.length > lim ? arraySlice(output, 0, lim) : output;\n    };\n  // Chakra, V8\n  } else if ('0'.split(undefined, 0).length) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);\n    };\n  } else internalSplit = nativeSplit;\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.es/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = requireObjectCoercible(this);\n      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);\n      return splitter\n        ? call(splitter, separator, O, limit)\n        : call(internalSplit, toString(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (string, limit) {\n      var rx = anObject(this);\n      var S = toString(string);\n      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);\n\n      if (res.done) return res.value;\n\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (UNSUPPORTED_Y ? 'g' : 'y');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;\n        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);\n        var e;\n        if (\n          z === null ||\n          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          push(A, stringSlice(S, p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            push(A, z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      push(A, stringSlice(S, p));\n      return A;\n    }\n  ];\n}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\n// eslint-disable-next-line es/no-string-prototype-startswith -- safe\nvar un$StartsWith = uncurryThis(''.startsWith);\nvar stringSlice = uncurryThis(''.slice);\nvar min = Math.min;\n\nvar CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');\n// https://github.com/zloirock/core-js/pull/702\nvar MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {\n  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');\n  return descriptor && !descriptor.writable;\n}();\n\n// `String.prototype.startsWith` method\n// https://tc39.es/ecma262/#sec-string.prototype.startswith\n$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = toString(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = toString(searchString);\n    return un$StartsWith\n      ? un$StartsWith(that, search, index)\n      : stringSlice(that, index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.strike.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.strike.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.strike` method\n// https://tc39.es/ecma262/#sec-string.prototype.strike\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('strike') }, {\n  strike: function strike() {\n    return createHTML(this, 'strike', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.strike.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.sub.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.sub.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.sub` method\n// https://tc39.es/ecma262/#sec-string.prototype.sub\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sub') }, {\n  sub: function sub() {\n    return createHTML(this, 'sub', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.sub.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.substr.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.substr.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar stringSlice = uncurryThis(''.slice);\nvar max = Math.max;\nvar min = Math.min;\n\n// eslint-disable-next-line unicorn/prefer-string-slice -- required for testing\nvar FORCED = !''.substr || 'ab'.substr(-1) !== 'b';\n\n// `String.prototype.substr` method\n// https://tc39.es/ecma262/#sec-string.prototype.substr\n$({ target: 'String', proto: true, forced: FORCED }, {\n  substr: function substr(start, length) {\n    var that = toString(requireObjectCoercible(this));\n    var size = that.length;\n    var intStart = toIntegerOrInfinity(start);\n    var intLength, intEnd;\n    if (intStart === Infinity) intStart = 0;\n    if (intStart < 0) intStart = max(size + intStart, 0);\n    intLength = length === undefined ? size : toIntegerOrInfinity(length);\n    if (intLength <= 0 || intLength === Infinity) return '';\n    intEnd = min(intStart + intLength, size);\n    return intStart >= intEnd ? '' : stringSlice(that, intStart, intEnd);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.substr.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.sup.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.sup.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createHTML = __webpack_require__(/*! ../internals/create-html */ \"./node_modules/core-js/internals/create-html.js\");\nvar forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ \"./node_modules/core-js/internals/string-html-forced.js\");\n\n// `String.prototype.sup` method\n// https://tc39.es/ecma262/#sec-string.prototype.sup\n$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sup') }, {\n  sup: function sup() {\n    return createHTML(this, 'sup', '', '');\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.sup.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $trimEnd = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").end);\nvar forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ \"./node_modules/core-js/internals/string-trim-forced.js\");\n\nvar FORCED = forcedStringTrimMethod('trimEnd');\n\nvar trimEnd = FORCED ? function trimEnd() {\n  return $trimEnd(this);\n// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe\n} : ''.trimEnd;\n\n// `String.prototype.{ trimEnd, trimRight }` methods\n// https://tc39.es/ecma262/#sec-string.prototype.trimend\n// https://tc39.es/ecma262/#String.prototype.trimright\n$({ target: 'String', proto: true, name: 'trimEnd', forced: FORCED }, {\n  trimEnd: trimEnd,\n  trimRight: trimEnd\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.trim-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $trimStart = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").start);\nvar forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ \"./node_modules/core-js/internals/string-trim-forced.js\");\n\nvar FORCED = forcedStringTrimMethod('trimStart');\n\nvar trimStart = FORCED ? function trimStart() {\n  return $trimStart(this);\n// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe\n} : ''.trimStart;\n\n// `String.prototype.{ trimStart, trimLeft }` methods\n// https://tc39.es/ecma262/#sec-string.prototype.trimstart\n// https://tc39.es/ecma262/#String.prototype.trimleft\n$({ target: 'String', proto: true, name: 'trimStart', forced: FORCED }, {\n  trimStart: trimStart,\n  trimLeft: trimStart\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.trim-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $trim = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim);\nvar forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ \"./node_modules/core-js/internals/string-trim-forced.js\");\n\n// `String.prototype.trim` method\n// https://tc39.es/ecma262/#sec-string.prototype.trim\n$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {\n  trim: function trim() {\n    return $trim(this);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.async-iterator.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.async-iterator.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.asyncIterator` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.asynciterator\ndefineWellKnownSymbol('asyncIterator');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// `Symbol.prototype.description` getter\n// https://tc39.es/ecma262/#sec-symbol.prototype.description\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar NativeSymbol = global.Symbol;\nvar SymbolPrototype = NativeSymbol && NativeSymbol.prototype;\n\nif (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||\n  // Safari 12 bug\n  NativeSymbol().description !== undefined\n)) {\n  var EmptyStringDescriptionStore = {};\n  // wrap Symbol constructor for correct work with undefined description\n  var SymbolWrapper = function Symbol() {\n    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);\n    var result = isPrototypeOf(SymbolPrototype, this)\n      ? new NativeSymbol(description)\n      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'\n      : description === undefined ? NativeSymbol() : NativeSymbol(description);\n    if (description === '') EmptyStringDescriptionStore[result] = true;\n    return result;\n  };\n\n  copyConstructorProperties(SymbolWrapper, NativeSymbol);\n  SymbolWrapper.prototype = SymbolPrototype;\n  SymbolPrototype.constructor = SymbolWrapper;\n\n  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';\n  var symbolToString = uncurryThis(SymbolPrototype.toString);\n  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);\n  var regexp = /^Symbol\\((.*)\\)[^)]+$/;\n  var replace = uncurryThis(''.replace);\n  var stringSlice = uncurryThis(''.slice);\n\n  defineProperty(SymbolPrototype, 'description', {\n    configurable: true,\n    get: function description() {\n      var symbol = symbolValueOf(this);\n      var string = symbolToString(symbol);\n      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';\n      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');\n      return desc === '' ? undefined : desc;\n    }\n  });\n\n  $({ global: true, forced: true }, {\n    Symbol: SymbolWrapper\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.has-instance.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.has-instance.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.hasInstance` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.hasinstance\ndefineWellKnownSymbol('hasInstance');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.isConcatSpreadable` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable\ndefineWellKnownSymbol('isConcatSpreadable');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js/internals/well-known-symbol-wrapped.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach);\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\n\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];\nvar TypeError = global.TypeError;\nvar QObject = global.QObject;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar push = uncurryThis([].push);\n\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\n\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPropertyKey(P);\n  anObject(Attributes);\n  if (hasOwn(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPropertyKey(V);\n  var enumerable = call(nativePropertyIsEnumerable, this, P);\n  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]\n    ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPropertyKey(P);\n  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {\n      push(result, AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.es/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);\n      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  SymbolPrototype = $Symbol[PROTOTYPE];\n\n  redefine(SymbolPrototype, 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  redefine($Symbol, 'withoutSetter', function (description) {\n    return wrap(uid(description), description);\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  definePropertiesModule.f = $defineProperties;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty(SymbolPrototype, 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n}\n\n$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Symbol.for` method\n  // https://tc39.es/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = $toString(key);\n    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.es/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.es/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.es/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.es/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.es/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n});\n\n// `JSON.stringify` method behavior with symbols\n// https://tc39.es/ecma262/#sec-json.stringify\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol();\n    // MS Edge converts symbol values to JSON as {}\n    return $stringify([symbol]) != '[null]'\n      // WebKit converts symbol values to JSON as null\n      || $stringify({ a: symbol }) != '{}'\n      // V8 throws on boxed symbols\n      || $stringify(Object(symbol)) != '{}';\n  });\n\n  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {\n    // eslint-disable-next-line no-unused-vars -- required for `.length`\n    stringify: function stringify(it, replacer, space) {\n      var args = arraySlice(arguments);\n      var $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (isCallable($replacer)) value = call($replacer, this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return apply($stringify, null, args);\n    }\n  });\n}\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive\nif (!SymbolPrototype[TO_PRIMITIVE]) {\n  var valueOf = SymbolPrototype.valueOf;\n  // eslint-disable-next-line no-unused-vars -- required for .length\n  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {\n    // TODO: improve hint logic\n    return call(valueOf, this);\n  });\n}\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.match-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.match-all.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.matchAll` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.matchall\ndefineWellKnownSymbol('matchAll');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.match-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.match.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.match` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.match\ndefineWellKnownSymbol('match');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.replace.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.replace` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.replace\ndefineWellKnownSymbol('replace');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.search` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.search\ndefineWellKnownSymbol('search');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.species` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.species\ndefineWellKnownSymbol('species');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.split.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.split` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.split\ndefineWellKnownSymbol('split');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.to-primitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-primitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.toPrimitive` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.toprimitive\ndefineWellKnownSymbol('toPrimitive');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.to-string-tag.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-string-tag.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.toStringTag` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.tostringtag\ndefineWellKnownSymbol('toStringTag');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.unscopables.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.unscopables.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.unscopables` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.unscopables\ndefineWellKnownSymbol('unscopables');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.symbol.unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.at.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.at.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.at` method\n// https://github.com/tc39/proposal-relative-indexing-method\nexportTypedArrayMethod('at', function at(index) {\n  var O = aTypedArray(this);\n  var len = lengthOfArrayLike(O);\n  var relativeIndex = toIntegerOrInfinity(index);\n  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;\n  return (k < 0 || k >= len) ? undefined : O[k];\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.copy-within.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.copy-within.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $ArrayCopyWithin = __webpack_require__(/*! ../internals/array-copy-within */ \"./node_modules/core-js/internals/array-copy-within.js\");\n\nvar u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.copyWithin` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin\nexportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {\n  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.every.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.every.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $every = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").every);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.every` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every\nexportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {\n  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.fill.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.fill.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar $fill = __webpack_require__(/*! ../internals/array-fill */ \"./node_modules/core-js/internals/array-fill.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.fill` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill\nexportTypedArrayMethod('fill', function fill(value /* , start, end */) {\n  var length = arguments.length;\n  return call(\n    $fill,\n    aTypedArray(this),\n    value,\n    length > 1 ? arguments[1] : undefined,\n    length > 2 ? arguments[2] : undefined\n  );\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.filter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $filter = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").filter);\nvar fromSpeciesAndList = __webpack_require__(/*! ../internals/typed-array-from-species-and-list */ \"./node_modules/core-js/internals/typed-array-from-species-and-list.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.filter` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter\nexportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {\n  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  return fromSpeciesAndList(this, list);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").findIndex);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.findIndex` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex\nexportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {\n  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $find = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").find);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.find` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find\nexportTypedArrayMethod('find', function find(predicate /* , thisArg */) {\n  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float32-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float32-array.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Float32Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Float32', function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.float32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float64-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float64-array.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Float64Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Float64', function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.float64-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.for-each.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.for-each.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.forEach` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach\nexportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {\n  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.from.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.from.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ \"./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js\");\nvar exportTypedArrayStaticMethod = (__webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\").exportTypedArrayStaticMethod);\nvar typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ \"./node_modules/core-js/internals/typed-array-from.js\");\n\n// `%TypedArray%.from` method\n// https://tc39.es/ecma262/#sec-%typedarray%.from\nexportTypedArrayStaticMethod('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.includes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $includes = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").includes);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.includes` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes\nexportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {\n  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.indexOf` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof\nexportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {\n  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int16-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int16-array.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Int16Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Int16', function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.int16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int32-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int32-array.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Int32Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Int32', function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.int32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int8-array.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int8-array.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Int8Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Int8', function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.int8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.iterator.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar Uint8Array = global.Uint8Array;\nvar arrayValues = uncurryThis(ArrayIterators.values);\nvar arrayKeys = uncurryThis(ArrayIterators.keys);\nvar arrayEntries = uncurryThis(ArrayIterators.entries);\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar TypedArrayPrototype = Uint8Array && Uint8Array.prototype;\n\nvar GENERIC = !fails(function () {\n  TypedArrayPrototype[ITERATOR].call([1]);\n});\n\nvar ITERATOR_IS_VALUES = !!TypedArrayPrototype\n  && TypedArrayPrototype.values\n  && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values\n  && TypedArrayPrototype.values.name === 'values';\n\nvar typedArrayValues = function values() {\n  return arrayValues(aTypedArray(this));\n};\n\n// `%TypedArray%.prototype.entries` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries\nexportTypedArrayMethod('entries', function entries() {\n  return arrayEntries(aTypedArray(this));\n}, GENERIC);\n// `%TypedArray%.prototype.keys` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys\nexportTypedArrayMethod('keys', function keys() {\n  return arrayKeys(aTypedArray(this));\n}, GENERIC);\n// `%TypedArray%.prototype.values` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values\nexportTypedArrayMethod('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });\n// `%TypedArray%.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator\nexportTypedArrayMethod(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.join.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.join.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar $join = uncurryThis([].join);\n\n// `%TypedArray%.prototype.join` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join\nexportTypedArrayMethod('join', function join(separator) {\n  return $join(aTypedArray(this), separator);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.last-index-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.last-index-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar $lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ \"./node_modules/core-js/internals/array-last-index-of.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.lastIndexOf` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof\nexportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {\n  var length = arguments.length;\n  return apply($lastIndexOf, aTypedArray(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $map = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").map);\nvar typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ \"./node_modules/core-js/internals/typed-array-species-constructor.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.map` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map\nexportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {\n  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {\n    return new (typedArraySpeciesConstructor(O))(length);\n  });\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.of.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ \"./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js\");\n\nvar aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;\nvar exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod;\n\n// `%TypedArray%.of` method\n// https://tc39.es/ecma262/#sec-%typedarray%.of\nexportTypedArrayStaticMethod('of', function of(/* ...items */) {\n  var index = 0;\n  var length = arguments.length;\n  var result = new (aTypedArrayConstructor(this))(length);\n  while (length > index) result[index] = arguments[index++];\n  return result;\n}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce-right.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $reduceRight = (__webpack_require__(/*! ../internals/array-reduce */ \"./node_modules/core-js/internals/array-reduce.js\").right);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.reduceRicht` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright\nexportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {\n  var length = arguments.length;\n  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $reduce = (__webpack_require__(/*! ../internals/array-reduce */ \"./node_modules/core-js/internals/array-reduce.js\").left);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.reduce` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce\nexportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {\n  var length = arguments.length;\n  return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reverse.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar floor = Math.floor;\n\n// `%TypedArray%.prototype.reverse` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse\nexportTypedArrayMethod('reverse', function reverse() {\n  var that = this;\n  var length = aTypedArray(that).length;\n  var middle = floor(length / 2);\n  var index = 0;\n  var value;\n  while (index < middle) {\n    value = that[index];\n    that[index++] = that[--length];\n    that[length] = value;\n  } return that;\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.reverse.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.set.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.set.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar toOffset = __webpack_require__(/*! ../internals/to-offset */ \"./node_modules/core-js/internals/to-offset.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar RangeError = global.RangeError;\nvar Int8Array = global.Int8Array;\nvar Int8ArrayPrototype = Int8Array && Int8Array.prototype;\nvar $set = Int8ArrayPrototype && Int8ArrayPrototype.set;\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\nvar WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function () {\n  // eslint-disable-next-line es/no-typed-arrays -- required for testing\n  var array = new Uint8ClampedArray(2);\n  call($set, array, { length: 1, 0: 3 }, 1);\n  return array[1] !== 3;\n});\n\n// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other\nvar TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {\n  var array = new Int8Array(2);\n  array.set(1);\n  array.set('2', 1);\n  return array[0] !== 0 || array[1] !== 2;\n});\n\n// `%TypedArray%.prototype.set` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set\nexportTypedArrayMethod('set', function set(arrayLike /* , offset */) {\n  aTypedArray(this);\n  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);\n  var src = toIndexedObject(arrayLike);\n  if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);\n  var length = this.length;\n  var len = lengthOfArrayLike(src);\n  var index = 0;\n  if (len + offset > length) throw RangeError('Wrong length');\n  while (index < len) this[offset + index] = src[index++];\n}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.slice.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ \"./node_modules/core-js/internals/typed-array-species-constructor.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\nvar FORCED = fails(function () {\n  // eslint-disable-next-line es/no-typed-arrays -- required for testing\n  new Int8Array(1).slice();\n});\n\n// `%TypedArray%.prototype.slice` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice\nexportTypedArrayMethod('slice', function slice(start, end) {\n  var list = arraySlice(aTypedArray(this), start, end);\n  var C = typedArraySpeciesConstructor(this);\n  var index = 0;\n  var length = list.length;\n  var result = new C(length);\n  while (length > index) result[index] = list[index++];\n  return result;\n}, FORCED);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.some.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.some.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar $some = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").some);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.some` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some\nexportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {\n  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.sort.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.sort.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar internalSort = __webpack_require__(/*! ../internals/array-sort */ \"./node_modules/core-js/internals/array-sort.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar FF = __webpack_require__(/*! ../internals/engine-ff-version */ \"./node_modules/core-js/internals/engine-ff-version.js\");\nvar IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ \"./node_modules/core-js/internals/engine-is-ie-or-edge.js\");\nvar V8 = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ \"./node_modules/core-js/internals/engine-webkit-version.js\");\n\nvar Array = global.Array;\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar Uint16Array = global.Uint16Array;\nvar un$Sort = Uint16Array && uncurryThis(Uint16Array.prototype.sort);\n\n// WebKit\nvar ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails(function () {\n  un$Sort(new Uint16Array(2), null);\n}) && fails(function () {\n  un$Sort(new Uint16Array(2), {});\n}));\n\nvar STABLE_SORT = !!un$Sort && !fails(function () {\n  // feature detection can be too slow, so check engines versions\n  if (V8) return V8 < 74;\n  if (FF) return FF < 67;\n  if (IE_OR_EDGE) return true;\n  if (WEBKIT) return WEBKIT < 602;\n\n  var array = new Uint16Array(516);\n  var expected = Array(516);\n  var index, mod;\n\n  for (index = 0; index < 516; index++) {\n    mod = index % 4;\n    array[index] = 515 - index;\n    expected[index] = index - 2 * mod + 3;\n  }\n\n  un$Sort(array, function (a, b) {\n    return (a / 4 | 0) - (b / 4 | 0);\n  });\n\n  for (index = 0; index < 516; index++) {\n    if (array[index] !== expected[index]) return true;\n  }\n});\n\nvar getSortCompare = function (comparefn) {\n  return function (x, y) {\n    if (comparefn !== undefined) return +comparefn(x, y) || 0;\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (y !== y) return -1;\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (x !== x) return 1;\n    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;\n    return x > y;\n  };\n};\n\n// `%TypedArray%.prototype.sort` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort\nexportTypedArrayMethod('sort', function sort(comparefn) {\n  if (comparefn !== undefined) aCallable(comparefn);\n  if (STABLE_SORT) return un$Sort(this, comparefn);\n\n  return internalSort(aTypedArray(this), getSortCompare(comparefn));\n}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.subarray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.subarray.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ \"./node_modules/core-js/internals/typed-array-species-constructor.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\n// `%TypedArray%.prototype.subarray` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray\nexportTypedArrayMethod('subarray', function subarray(begin, end) {\n  var O = aTypedArray(this);\n  var length = O.length;\n  var beginIndex = toAbsoluteIndex(begin, length);\n  var C = typedArraySpeciesConstructor(O);\n  return new C(\n    O.buffer,\n    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,\n    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)\n  );\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.subarray.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-locale-string.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\n\nvar Int8Array = global.Int8Array;\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar $toLocaleString = [].toLocaleString;\n\n// iOS Safari 6.x fails here\nvar TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {\n  $toLocaleString.call(new Int8Array(1));\n});\n\nvar FORCED = fails(function () {\n  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();\n}) || !fails(function () {\n  Int8Array.prototype.toLocaleString.call([1, 2]);\n});\n\n// `%TypedArray%.prototype.toLocaleString` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring\nexportTypedArrayMethod('toLocaleString', function toLocaleString() {\n  return apply(\n    $toLocaleString,\n    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),\n    arraySlice(arguments)\n  );\n}, FORCED);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.to-locale-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-string.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar exportTypedArrayMethod = (__webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\").exportTypedArrayMethod);\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar Uint8Array = global.Uint8Array;\nvar Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};\nvar arrayToString = [].toString;\nvar join = uncurryThis([].join);\n\nif (fails(function () { arrayToString.call({}); })) {\n  arrayToString = function toString() {\n    return join(this);\n  };\n}\n\nvar IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;\n\n// `%TypedArray%.prototype.toString` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring\nexportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint16-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint16-array.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Uint16Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Uint16', function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.uint16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint32-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint32-array.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Uint32Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Uint32', function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.uint32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-array.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Uint8Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Uint8', function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\");\n\n// `Uint8ClampedArray` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\ncreateTypedArrayConstructor('Uint8', function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.unescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.unescape.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar fromCharCode = String.fromCharCode;\nvar charAt = uncurryThis(''.charAt);\nvar exec = uncurryThis(/./.exec);\nvar stringSlice = uncurryThis(''.slice);\n\nvar hex2 = /^[\\da-f]{2}$/i;\nvar hex4 = /^[\\da-f]{4}$/i;\n\n// `unescape` method\n// https://tc39.es/ecma262/#sec-unescape-string\n$({ global: true }, {\n  unescape: function unescape(string) {\n    var str = toString(string);\n    var result = '';\n    var length = str.length;\n    var index = 0;\n    var chr, part;\n    while (index < length) {\n      chr = charAt(str, index++);\n      if (chr === '%') {\n        if (charAt(str, index) === 'u') {\n          part = stringSlice(str, index + 1, index + 5);\n          if (exec(hex4, part)) {\n            result += fromCharCode(parseInt(part, 16));\n            index += 5;\n            continue;\n          }\n        } else {\n          part = stringSlice(str, index, index + 2);\n          if (exec(hex2, part)) {\n            result += fromCharCode(parseInt(part, 16));\n            index += 2;\n            continue;\n          }\n        }\n      }\n      result += chr;\n    } return result;\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.unescape.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-map.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-map.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\nvar InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\");\nvar collection = __webpack_require__(/*! ../internals/collection */ \"./node_modules/core-js/internals/collection.js\");\nvar collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ \"./node_modules/core-js/internals/collection-weak.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ \"./node_modules/core-js/internals/object-is-extensible.js\");\nvar enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").enforce);\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\n\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar InternalWeakMap;\n\nvar wrapper = function (init) {\n  return function WeakMap() {\n    return init(this, arguments.length ? arguments[0] : undefined);\n  };\n};\n\n// `WeakMap` constructor\n// https://tc39.es/ecma262/#sec-weakmap-constructor\nvar $WeakMap = collection('WeakMap', wrapper, collectionWeak);\n\n// IE11 WeakMap frozen keys fix\n// We can't use feature detection because it crash some old IE builds\n// https://github.com/zloirock/core-js/issues/485\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);\n  InternalMetadataModule.enable();\n  var WeakMapPrototype = $WeakMap.prototype;\n  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);\n  var nativeHas = uncurryThis(WeakMapPrototype.has);\n  var nativeGet = uncurryThis(WeakMapPrototype.get);\n  var nativeSet = uncurryThis(WeakMapPrototype.set);\n  redefineAll(WeakMapPrototype, {\n    'delete': function (key) {\n      if (isObject(key) && !isExtensible(key)) {\n        var state = enforceInternalState(this);\n        if (!state.frozen) state.frozen = new InternalWeakMap();\n        return nativeDelete(this, key) || state.frozen['delete'](key);\n      } return nativeDelete(this, key);\n    },\n    has: function has(key) {\n      if (isObject(key) && !isExtensible(key)) {\n        var state = enforceInternalState(this);\n        if (!state.frozen) state.frozen = new InternalWeakMap();\n        return nativeHas(this, key) || state.frozen.has(key);\n      } return nativeHas(this, key);\n    },\n    get: function get(key) {\n      if (isObject(key) && !isExtensible(key)) {\n        var state = enforceInternalState(this);\n        if (!state.frozen) state.frozen = new InternalWeakMap();\n        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);\n      } return nativeGet(this, key);\n    },\n    set: function set(key, value) {\n      if (isObject(key) && !isExtensible(key)) {\n        var state = enforceInternalState(this);\n        if (!state.frozen) state.frozen = new InternalWeakMap();\n        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);\n      } else nativeSet(this, key, value);\n      return this;\n    }\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-set.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-set.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar collection = __webpack_require__(/*! ../internals/collection */ \"./node_modules/core-js/internals/collection.js\");\nvar collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ \"./node_modules/core-js/internals/collection-weak.js\");\n\n// `WeakSet` constructor\n// https://tc39.es/ecma262/#sec-weakset-constructor\ncollection('WeakSet', function (init) {\n  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };\n}, collectionWeak);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/es.weak-set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ \"./node_modules/core-js/internals/dom-token-list-prototype.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar handlePrototype = function (CollectionPrototype) {\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n};\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  if (DOMIterables[COLLECTION_NAME]) {\n    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);\n  }\n}\n\nhandlePrototype(DOMTokenListPrototype);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ \"./node_modules/core-js/internals/dom-token-list-prototype.js\");\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nvar handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n};\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);\n}\n\nhandlePrototype(DOMTokenListPrototype, 'DOMTokenList');\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-exception.constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-exception.constructor.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar tryNodeRequire = __webpack_require__(/*! ../internals/try-node-require */ \"./node_modules/core-js/internals/try-node-require.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar defineProperties = (__webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\").f);\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar errorToString = __webpack_require__(/*! ../internals/error-to-string */ \"./node_modules/core-js/internals/error-to-string.js\");\nvar normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ \"./node_modules/core-js/internals/normalize-string-argument.js\");\nvar DOMExceptionConstants = __webpack_require__(/*! ../internals/dom-exception-constants */ \"./node_modules/core-js/internals/dom-exception-constants.js\");\nvar clearErrorStack = __webpack_require__(/*! ../internals/clear-error-stack */ \"./node_modules/core-js/internals/clear-error-stack.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar DOM_EXCEPTION = 'DOMException';\nvar DATA_CLONE_ERR = 'DATA_CLONE_ERR';\nvar Error = getBuiltIn('Error');\n// NodeJS < 17.0 does not expose `DOMException` to global\nvar NativeDOMException = getBuiltIn(DOM_EXCEPTION) || (function () {\n  try {\n    // NodeJS < 15.0 does not expose `MessageChannel` to global\n    var MessageChannel = getBuiltIn('MessageChannel') || tryNodeRequire('worker_threads').MessageChannel;\n    // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe\n    new MessageChannel().port1.postMessage(new WeakMap());\n  } catch (error) {\n    if (error.name == DATA_CLONE_ERR && error.code == 25) return error.constructor;\n  }\n})();\nvar NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype;\nvar ErrorPrototype = Error.prototype;\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION);\nvar HAS_STACK = 'stack' in Error(DOM_EXCEPTION);\n\nvar codeFor = function (name) {\n  return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;\n};\n\nvar $DOMException = function DOMException() {\n  anInstance(this, DOMExceptionPrototype);\n  var argumentsLength = arguments.length;\n  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);\n  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');\n  var code = codeFor(name);\n  setInternalState(this, {\n    type: DOM_EXCEPTION,\n    name: name,\n    message: message,\n    code: code\n  });\n  if (!DESCRIPTORS) {\n    this.name = name;\n    this.message = message;\n    this.code = code;\n  }\n  if (HAS_STACK) {\n    var error = Error(message);\n    error.name = DOM_EXCEPTION;\n    defineProperty(this, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));\n  }\n};\n\nvar DOMExceptionPrototype = $DOMException.prototype = create(ErrorPrototype);\n\nvar createGetterDescriptor = function (get) {\n  return { enumerable: true, configurable: true, get: get };\n};\n\nvar getterFor = function (key) {\n  return createGetterDescriptor(function () {\n    return getInternalState(this)[key];\n  });\n};\n\nif (DESCRIPTORS) defineProperties(DOMExceptionPrototype, {\n  name: getterFor('name'),\n  message: getterFor('message'),\n  code: getterFor('code')\n});\n\ndefineProperty(DOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, $DOMException));\n\n// FF36- DOMException is a function, but can't be constructed\nvar INCORRECT_CONSTRUCTOR = fails(function () {\n  return !(new NativeDOMException() instanceof Error);\n});\n\n// Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs\nvar INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function () {\n  return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== '2: 1';\n});\n\n// Deno 1.6.3- DOMException.prototype.code just missed\nvar INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function () {\n  return new NativeDOMException(1, 'DataCloneError').code !== 25;\n});\n\n// Deno 1.6.3- DOMException constants just missed\nvar MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR\n  || NativeDOMException[DATA_CLONE_ERR] !== 25\n  || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;\n\nvar FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;\n\n// `DOMException` constructor\n// https://webidl.spec.whatwg.org/#idl-DOMException\n$({ global: true, forced: FORCED_CONSTRUCTOR }, {\n  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException\n});\n\nvar PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);\nvar PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;\n\nif (INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException)) {\n  redefine(PolyfilledDOMExceptionPrototype, 'toString', errorToString);\n}\n\nif (INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException) {\n  defineProperty(PolyfilledDOMExceptionPrototype, 'code', createGetterDescriptor(function () {\n    return codeFor(anObject(this).name);\n  }));\n}\n\nfor (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {\n  var constant = DOMExceptionConstants[key];\n  var constantName = constant.s;\n  var descriptor = createPropertyDescriptor(6, constant.c);\n  if (!hasOwn(PolyfilledDOMException, constantName)) {\n    defineProperty(PolyfilledDOMException, constantName, descriptor);\n  }\n  if (!hasOwn(PolyfilledDOMExceptionPrototype, constantName)) {\n    defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor);\n  }\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.dom-exception.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-exception.stack.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-exception.stack.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\nvar normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ \"./node_modules/core-js/internals/normalize-string-argument.js\");\nvar DOMExceptionConstants = __webpack_require__(/*! ../internals/dom-exception-constants */ \"./node_modules/core-js/internals/dom-exception-constants.js\");\nvar clearErrorStack = __webpack_require__(/*! ../internals/clear-error-stack */ \"./node_modules/core-js/internals/clear-error-stack.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar DOM_EXCEPTION = 'DOMException';\nvar Error = getBuiltIn('Error');\nvar NativeDOMException = getBuiltIn(DOM_EXCEPTION);\n\nvar $DOMException = function DOMException() {\n  anInstance(this, DOMExceptionPrototype);\n  var argumentsLength = arguments.length;\n  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);\n  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');\n  var that = new NativeDOMException(message, name);\n  var error = Error(message);\n  error.name = DOM_EXCEPTION;\n  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));\n  inheritIfRequired(that, this, $DOMException);\n  return that;\n};\n\nvar DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;\n\nvar ERROR_HAS_STACK = 'stack' in Error(DOM_EXCEPTION);\nvar DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);\nvar FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !DOM_EXCEPTION_HAS_STACK;\n\n// `DOMException` constructor patch for `.stack` where it's required\n// https://webidl.spec.whatwg.org/#es-DOMException-specialness\n$({ global: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic\n  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException\n});\n\nvar PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);\nvar PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;\n\nif (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {\n  if (!IS_PURE) {\n    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));\n  }\n\n  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {\n    var constant = DOMExceptionConstants[key];\n    var constantName = constant.s;\n    if (!hasOwn(PolyfilledDOMException, constantName)) {\n      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));\n    }\n  }\n}\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.dom-exception.stack.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-exception.to-string-tag.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-exception.to-string-tag.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar DOM_EXCEPTION = 'DOMException';\n\nsetToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.dom-exception.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar task = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\");\n\nvar FORCED = !global.setImmediate || !global.clearImmediate;\n\n// http://w3c.github.io/setImmediate/\n$({ global: true, bind: true, enumerable: true, forced: FORCED }, {\n  // `setImmediate` method\n  // http://w3c.github.io/setImmediate/#si-setImmediate\n  setImmediate: task.set,\n  // `clearImmediate` method\n  // http://w3c.github.io/setImmediate/#si-clearImmediate\n  clearImmediate: task.clear\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.queue-microtask.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/web.queue-microtask.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"./node_modules/core-js/internals/microtask.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar process = global.process;\n\n// `queueMicrotask` method\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask\n$({ global: true, enumerable: true, noTargetGet: true }, {\n  queueMicrotask: function queueMicrotask(fn) {\n    var domain = IS_NODE && process.domain;\n    microtask(domain ? domain.bind(fn) : fn);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.queue-microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.structured-clone.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/web.structured-clone.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltin = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js/internals/validate-arguments-length.js\");\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar ERROR_STACK_INSTALLABLE = __webpack_require__(/*! ../internals/error-stack-installable */ \"./node_modules/core-js/internals/error-stack-installable.js\");\n\nvar Object = global.Object;\nvar Date = global.Date;\nvar Error = global.Error;\nvar EvalError = global.EvalError;\nvar RangeError = global.RangeError;\nvar ReferenceError = global.ReferenceError;\nvar SyntaxError = global.SyntaxError;\nvar TypeError = global.TypeError;\nvar URIError = global.URIError;\nvar PerformanceMark = global.PerformanceMark;\nvar WebAssembly = global.WebAssembly;\nvar CompileError = WebAssembly && WebAssembly.CompileError || Error;\nvar LinkError = WebAssembly && WebAssembly.LinkError || Error;\nvar RuntimeError = WebAssembly && WebAssembly.RuntimeError || Error;\nvar DOMException = getBuiltin('DOMException');\nvar Set = getBuiltin('Set');\nvar Map = getBuiltin('Map');\nvar MapPrototype = Map.prototype;\nvar mapHas = uncurryThis(MapPrototype.has);\nvar mapGet = uncurryThis(MapPrototype.get);\nvar mapSet = uncurryThis(MapPrototype.set);\nvar setAdd = uncurryThis(Set.prototype.add);\nvar objectKeys = getBuiltin('Object', 'keys');\nvar push = uncurryThis([].push);\nvar booleanValueOf = uncurryThis(true.valueOf);\nvar numberValueOf = uncurryThis(1.0.valueOf);\nvar stringValueOf = uncurryThis(''.valueOf);\nvar getFlags = uncurryThis(regExpFlags);\nvar getTime = uncurryThis(Date.prototype.getTime);\nvar PERFORMANCE_MARK = uid('structuredClone');\nvar DATA_CLONE_ERROR = 'DataCloneError';\nvar TRANSFERRING = 'Transferring';\n\nvar checkBasicSemantic = function (structuredCloneImplementation) {\n  return !fails(function () {\n    var set1 = new global.Set([7]);\n    var set2 = structuredCloneImplementation(set1);\n    var number = structuredCloneImplementation(Object(7));\n    return set2 == set1 || !set2.has(7) || typeof number != 'object' || number != 7;\n  }) && structuredCloneImplementation;\n};\n\n// https://github.com/whatwg/html/pull/5749\nvar checkNewErrorsSemantic = function (structuredCloneImplementation) {\n  return !fails(function () {\n    var test = structuredCloneImplementation(new global.AggregateError([1], PERFORMANCE_MARK, { cause: 3 }));\n    return test.name != 'AggregateError' || test.errors[0] != 1 || test.message != PERFORMANCE_MARK || test.cause != 3;\n  }) && structuredCloneImplementation;\n};\n\n// FF94+, Safari TP134+, Chrome Canary 98+, NodeJS 17.0+, Deno 1.13+\n// current FF and Safari implementations can't clone errors\n// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604\n// no one of current implementations supports new (html/5749) error cloning semantic\nvar nativeStructuredClone = global.structuredClone;\n\nvar FORCED_REPLACEMENT = IS_PURE || !checkNewErrorsSemantic(nativeStructuredClone);\n\n// Chrome 82+, Safari 14.1+, Deno 1.11+\n// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`\n// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround\n// current Safari implementation can't clone errors\n// Deno 1.2-1.10 implementations too naive\n// NodeJS 16.0+ does not have `PerformanceMark` constructor, structured cloning implementation\n//   from `performance.mark` is too naive and can't clone, for example, `RegExp` or some boxed primitives\n//   https://github.com/nodejs/node/issues/40840\n// no one of current implementations supports new (html/5749) error cloning semantic\nvar structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {\n  return new PerformanceMark(PERFORMANCE_MARK, { detail: value }).detail;\n});\n\nvar nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;\n\nvar throwUncloneable = function (type) {\n  throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);\n};\n\nvar throwUnpolyfillable = function (type, kind) {\n  throw new DOMException((kind || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);\n};\n\nvar structuredCloneInternal = function (value, map) {\n  if (isSymbol(value)) throwUncloneable('Symbol');\n  if (!isObject(value)) return value;\n  // effectively preserves circular references\n  if (map) {\n    if (mapHas(map, value)) return mapGet(map, value);\n  } else map = new Map();\n\n  var type = classof(value);\n  var deep = false;\n  var C, name, cloned, dataTransfer, i, length, keys, key, source, target;\n\n  switch (type) {\n    case 'Array':\n      cloned = [];\n      deep = true;\n      break;\n    case 'Object':\n      cloned = {};\n      deep = true;\n      break;\n    case 'Map':\n      cloned = new Map();\n      deep = true;\n      break;\n    case 'Set':\n      cloned = new Set();\n      deep = true;\n      break;\n    case 'RegExp':\n      // in this block because of a Safari 14.1 bug\n      // old FF does not clone regexes passed to the constructor, so get the source and flags directly\n      cloned = new RegExp(value.source, 'flags' in value ? value.flags : getFlags(value));\n      break;\n    case 'Error':\n      name = value.name;\n      switch (name) {\n        case 'AggregateError':\n          cloned = getBuiltin('AggregateError')([]);\n          break;\n        case 'EvalError':\n          cloned = EvalError();\n          break;\n        case 'RangeError':\n          cloned = RangeError();\n          break;\n        case 'ReferenceError':\n          cloned = ReferenceError();\n          break;\n        case 'SyntaxError':\n          cloned = SyntaxError();\n          break;\n        case 'TypeError':\n          cloned = TypeError();\n          break;\n        case 'URIError':\n          cloned = URIError();\n          break;\n        case 'CompileError':\n          cloned = CompileError();\n          break;\n        case 'LinkError':\n          cloned = LinkError();\n          break;\n        case 'RuntimeError':\n          cloned = RuntimeError();\n          break;\n        default:\n          cloned = Error();\n      }\n      deep = true;\n      break;\n    case 'DOMException':\n      cloned = new DOMException(value.message, value.name);\n      deep = true;\n      break;\n    case 'DataView':\n    case 'Int8Array':\n    case 'Uint8Array':\n    case 'Uint8ClampedArray':\n    case 'Int16Array':\n    case 'Uint16Array':\n    case 'Int32Array':\n    case 'Uint32Array':\n    case 'Float32Array':\n    case 'Float64Array':\n    case 'BigInt64Array':\n    case 'BigUint64Array':\n      C = global[type];\n      // in some old engines like Safari 9, typeof C is 'object'\n      // on Uint8ClampedArray or some other constructors\n      if (!isObject(C)) throwUnpolyfillable(type);\n      cloned = new C(\n        // this is safe, since arraybuffer cannot have circular references\n        structuredCloneInternal(value.buffer, map),\n        value.byteOffset,\n        type === 'DataView' ? value.byteLength : value.length\n      );\n      break;\n    case 'DOMQuad':\n      try {\n        cloned = new DOMQuad(\n          structuredCloneInternal(value.p1, map),\n          structuredCloneInternal(value.p2, map),\n          structuredCloneInternal(value.p3, map),\n          structuredCloneInternal(value.p4, map)\n        );\n      } catch (error) {\n        if (nativeRestrictedStructuredClone) {\n          cloned = nativeRestrictedStructuredClone(value);\n        } else throwUnpolyfillable(type);\n      }\n      break;\n    case 'FileList':\n      C = global.DataTransfer;\n      if (isConstructor(C)) {\n        dataTransfer = new C();\n        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {\n          dataTransfer.items.add(structuredCloneInternal(value[i], map));\n        }\n        cloned = dataTransfer.files;\n      } else if (nativeRestrictedStructuredClone) {\n        cloned = nativeRestrictedStructuredClone(value);\n      } else throwUnpolyfillable(type);\n      break;\n    case 'ImageData':\n      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'\n      try {\n        cloned = new ImageData(\n          structuredCloneInternal(value.data, map),\n          value.width,\n          value.height,\n          { colorSpace: value.colorSpace }\n        );\n      } catch (error) {\n        if (nativeRestrictedStructuredClone) {\n          cloned = nativeRestrictedStructuredClone(value);\n        } else throwUnpolyfillable(type);\n      } break;\n    default:\n      if (nativeRestrictedStructuredClone) {\n        cloned = nativeRestrictedStructuredClone(value);\n      } else switch (type) {\n        case 'BigInt':\n          // can be a 3rd party polyfill\n          cloned = Object(value.valueOf());\n          break;\n        case 'Boolean':\n          cloned = Object(booleanValueOf(value));\n          break;\n        case 'Number':\n          cloned = Object(numberValueOf(value));\n          break;\n        case 'String':\n          cloned = Object(stringValueOf(value));\n          break;\n        case 'Date':\n          cloned = new Date(getTime(value));\n          break;\n        case 'ArrayBuffer':\n          C = global.DataView;\n          // `ArrayBuffer#slice` is not available in IE10\n          // `ArrayBuffer#slice` and `DataView` are not available in old FF\n          if (!C && typeof value.slice != 'function') throwUnpolyfillable(type);\n          // detached buffers throws in `DataView` and `.slice`\n          try {\n            if (typeof value.slice == 'function') {\n              cloned = value.slice(0);\n            } else {\n              length = value.byteLength;\n              cloned = new ArrayBuffer(length);\n              source = new C(value);\n              target = new C(cloned);\n              for (i = 0; i < length; i++) {\n                target.setUint8(i, source.getUint8(i));\n              }\n            }\n          } catch (error) {\n            throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);\n          } break;\n        case 'SharedArrayBuffer':\n          // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original\n          cloned = value;\n          break;\n        case 'Blob':\n          try {\n            cloned = value.slice(0, value.size, value.type);\n          } catch (error) {\n            throwUnpolyfillable(type);\n          } break;\n        case 'DOMPoint':\n        case 'DOMPointReadOnly':\n          C = global[type];\n          try {\n            cloned = C.fromPoint\n              ? C.fromPoint(value)\n              : new C(value.x, value.y, value.z, value.w);\n          } catch (error) {\n            throwUnpolyfillable(type);\n          } break;\n        case 'DOMRect':\n        case 'DOMRectReadOnly':\n          C = global[type];\n          try {\n            cloned = C.fromRect\n              ? C.fromRect(value)\n              : new C(value.x, value.y, value.width, value.height);\n          } catch (error) {\n            throwUnpolyfillable(type);\n          } break;\n        case 'DOMMatrix':\n        case 'DOMMatrixReadOnly':\n          C = global[type];\n          try {\n            cloned = C.fromMatrix\n              ? C.fromMatrix(value)\n              : new C(value);\n          } catch (error) {\n            throwUnpolyfillable(type);\n          } break;\n        case 'AudioData':\n        case 'VideoFrame':\n          if (!isCallable(value.clone)) throwUnpolyfillable(type);\n          try {\n            cloned = value.clone();\n          } catch (error) {\n            throwUncloneable(type);\n          } break;\n        case 'File':\n          try {\n            cloned = new File([value], value.name, value);\n          } catch (error) {\n            throwUnpolyfillable(type);\n          } break;\n        case 'CryptoKey':\n        case 'GPUCompilationMessage':\n        case 'GPUCompilationInfo':\n        case 'ImageBitmap':\n        case 'RTCCertificate':\n        case 'WebAssembly.Module':\n          throwUnpolyfillable(type);\n          // break omitted\n        default:\n          throwUncloneable(type);\n      }\n  }\n\n  mapSet(map, value, cloned);\n\n  if (deep) switch (type) {\n    case 'Array':\n    case 'Object':\n      keys = objectKeys(value);\n      for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {\n        key = keys[i];\n        createProperty(cloned, key, structuredCloneInternal(value[key], map));\n      } break;\n    case 'Map':\n      value.forEach(function (v, k) {\n        mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));\n      });\n      break;\n    case 'Set':\n      value.forEach(function (v) {\n        setAdd(cloned, structuredCloneInternal(v, map));\n      });\n      break;\n    case 'Error':\n      createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));\n      if (hasOwn(value, 'cause')) {\n        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));\n      }\n      if (name == 'AggregateError') {\n        cloned.errors = structuredCloneInternal(value.errors, map);\n      } // break omitted\n    case 'DOMException':\n      if (ERROR_STACK_INSTALLABLE) {\n        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));\n      }\n  }\n\n  return cloned;\n};\n\nvar PROPER_TRANSFER = nativeStructuredClone && !fails(function () {\n  var buffer = new ArrayBuffer(8);\n  var clone = nativeStructuredClone(buffer, { transfer: [buffer] });\n  return buffer.byteLength != 0 || clone.byteLength != 8;\n});\n\nvar tryToTransfer = function (rawTransfer, map) {\n  if (!isObject(rawTransfer)) throw TypeError('Transfer option cannot be converted to a sequence');\n\n  var transfer = [];\n\n  iterate(rawTransfer, function (value) {\n    push(transfer, anObject(value));\n  });\n\n  var i = 0;\n  var length = lengthOfArrayLike(transfer);\n  var value, type, C, transferredArray, transferred, canvas, context;\n\n  if (PROPER_TRANSFER) {\n    transferredArray = nativeStructuredClone(transfer, { transfer: transfer });\n    while (i < length) mapSet(map, transfer[i], transferredArray[i++]);\n  } else while (i < length) {\n    value = transfer[i++];\n    if (mapHas(map, value)) throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);\n\n    type = classof(value);\n\n    switch (type) {\n      case 'ImageBitmap':\n        C = global.OffscreenCanvas;\n        if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);\n        try {\n          canvas = new C(value.width, value.height);\n          context = canvas.getContext('bitmaprenderer');\n          context.transferFromImageBitmap(value);\n          transferred = canvas.transferToImageBitmap();\n        } catch (error) { /* empty */ }\n        break;\n      case 'AudioData':\n      case 'VideoFrame':\n        if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);\n        try {\n          transferred = value.clone();\n          value.close();\n        } catch (error) { /* empty */ }\n        break;\n      case 'ArrayBuffer':\n      case 'MessagePort':\n      case 'OffscreenCanvas':\n      case 'ReadableStream':\n      case 'TransformStream':\n      case 'WritableStream':\n        throwUnpolyfillable(type, TRANSFERRING);\n    }\n\n    if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);\n    mapSet(map, value, transferred);\n  }\n};\n\n$({ global: true, enumerable: true, sham: !PROPER_TRANSFER, forced: FORCED_REPLACEMENT }, {\n  structuredClone: function structuredClone(value /* , { transfer } */) {\n    var options = validateArgumentsLength(arguments.length, 1) > 1 ? anObject(arguments[1]) : undefined;\n    var transfer = options ? options.transfer : undefined;\n    var map;\n\n    if (transfer !== undefined) {\n      map = new Map();\n      tryToTransfer(transfer, map);\n    }\n\n    return structuredCloneInternal(value, map);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.structured-clone.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\n\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar Function = global.Function;\n\nvar wrap = function (scheduler) {\n  return function (handler, timeout /* , ...arguments */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? arraySlice(arguments, 2) : undefined;\n    return scheduler(boundArgs ? function () {\n      apply(isCallable(handler) ? handler : Function(handler), this, args);\n    } : handler, timeout);\n  };\n};\n\n// ie9- setTimeout & setInterval additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers\n$({ global: true, bind: true, forced: MSIE }, {\n  // `setTimeout` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout\n  setTimeout: wrap(global.setTimeout),\n  // `setInterval` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`\n__webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ \"./node_modules/core-js/internals/native-url.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js/internals/create-iterator-constructor.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js/internals/validate-arguments-length.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar arraySort = __webpack_require__(/*! ../internals/array-sort */ \"./node_modules/core-js/internals/array-sort.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar URL_SEARCH_PARAMS = 'URLSearchParams';\nvar URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);\nvar getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);\n\nvar n$Fetch = getBuiltIn('fetch');\nvar N$Request = getBuiltIn('Request');\nvar Headers = getBuiltIn('Headers');\nvar RequestPrototype = N$Request && N$Request.prototype;\nvar HeadersPrototype = Headers && Headers.prototype;\nvar RegExp = global.RegExp;\nvar TypeError = global.TypeError;\nvar decodeURIComponent = global.decodeURIComponent;\nvar encodeURIComponent = global.encodeURIComponent;\nvar charAt = uncurryThis(''.charAt);\nvar join = uncurryThis([].join);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar shift = uncurryThis([].shift);\nvar splice = uncurryThis([].splice);\nvar split = uncurryThis(''.split);\nvar stringSlice = uncurryThis(''.slice);\n\nvar plus = /\\+/g;\nvar sequences = Array(4);\n\nvar percentSequence = function (bytes) {\n  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\\\da-f]{2}){' + bytes + '})', 'gi'));\n};\n\nvar percentDecode = function (sequence) {\n  try {\n    return decodeURIComponent(sequence);\n  } catch (error) {\n    return sequence;\n  }\n};\n\nvar deserialize = function (it) {\n  var result = replace(it, plus, ' ');\n  var bytes = 4;\n  try {\n    return decodeURIComponent(result);\n  } catch (error) {\n    while (bytes) {\n      result = replace(result, percentSequence(bytes--), percentDecode);\n    }\n    return result;\n  }\n};\n\nvar find = /[!'()~]|%20/g;\n\nvar replacements = {\n  '!': '%21',\n  \"'\": '%27',\n  '(': '%28',\n  ')': '%29',\n  '~': '%7E',\n  '%20': '+'\n};\n\nvar replacer = function (match) {\n  return replacements[match];\n};\n\nvar serialize = function (it) {\n  return replace(encodeURIComponent(it), find, replacer);\n};\n\nvar URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {\n  setInternalState(this, {\n    type: URL_SEARCH_PARAMS_ITERATOR,\n    iterator: getIterator(getInternalParamsState(params).entries),\n    kind: kind\n  });\n}, 'Iterator', function next() {\n  var state = getInternalIteratorState(this);\n  var kind = state.kind;\n  var step = state.iterator.next();\n  var entry = step.value;\n  if (!step.done) {\n    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];\n  } return step;\n}, true);\n\nvar URLSearchParamsState = function (init) {\n  this.entries = [];\n  this.url = null;\n\n  if (init !== undefined) {\n    if (isObject(init)) this.parseObject(init);\n    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));\n  }\n};\n\nURLSearchParamsState.prototype = {\n  type: URL_SEARCH_PARAMS,\n  bindURL: function (url) {\n    this.url = url;\n    this.update();\n  },\n  parseObject: function (object) {\n    var iteratorMethod = getIteratorMethod(object);\n    var iterator, next, step, entryIterator, entryNext, first, second;\n\n    if (iteratorMethod) {\n      iterator = getIterator(object, iteratorMethod);\n      next = iterator.next;\n      while (!(step = call(next, iterator)).done) {\n        entryIterator = getIterator(anObject(step.value));\n        entryNext = entryIterator.next;\n        if (\n          (first = call(entryNext, entryIterator)).done ||\n          (second = call(entryNext, entryIterator)).done ||\n          !call(entryNext, entryIterator).done\n        ) throw TypeError('Expected sequence with length 2');\n        push(this.entries, { key: $toString(first.value), value: $toString(second.value) });\n      }\n    } else for (var key in object) if (hasOwn(object, key)) {\n      push(this.entries, { key: key, value: $toString(object[key]) });\n    }\n  },\n  parseQuery: function (query) {\n    if (query) {\n      var attributes = split(query, '&');\n      var index = 0;\n      var attribute, entry;\n      while (index < attributes.length) {\n        attribute = attributes[index++];\n        if (attribute.length) {\n          entry = split(attribute, '=');\n          push(this.entries, {\n            key: deserialize(shift(entry)),\n            value: deserialize(join(entry, '='))\n          });\n        }\n      }\n    }\n  },\n  serialize: function () {\n    var entries = this.entries;\n    var result = [];\n    var index = 0;\n    var entry;\n    while (index < entries.length) {\n      entry = entries[index++];\n      push(result, serialize(entry.key) + '=' + serialize(entry.value));\n    } return join(result, '&');\n  },\n  update: function () {\n    this.entries.length = 0;\n    this.parseQuery(this.url.query);\n  },\n  updateURL: function () {\n    if (this.url) this.url.update();\n  }\n};\n\n// `URLSearchParams` constructor\n// https://url.spec.whatwg.org/#interface-urlsearchparams\nvar URLSearchParamsConstructor = function URLSearchParams(/* init */) {\n  anInstance(this, URLSearchParamsPrototype);\n  var init = arguments.length > 0 ? arguments[0] : undefined;\n  setInternalState(this, new URLSearchParamsState(init));\n};\n\nvar URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;\n\nredefineAll(URLSearchParamsPrototype, {\n  // `URLSearchParams.prototype.append` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-append\n  append: function append(name, value) {\n    validateArgumentsLength(arguments.length, 2);\n    var state = getInternalParamsState(this);\n    push(state.entries, { key: $toString(name), value: $toString(value) });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.delete` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete\n  'delete': function (name) {\n    validateArgumentsLength(arguments.length, 1);\n    var state = getInternalParamsState(this);\n    var entries = state.entries;\n    var key = $toString(name);\n    var index = 0;\n    while (index < entries.length) {\n      if (entries[index].key === key) splice(entries, index, 1);\n      else index++;\n    }\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.get` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-get\n  get: function get(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = $toString(name);\n    var index = 0;\n    for (; index < entries.length; index++) {\n      if (entries[index].key === key) return entries[index].value;\n    }\n    return null;\n  },\n  // `URLSearchParams.prototype.getAll` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall\n  getAll: function getAll(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = $toString(name);\n    var result = [];\n    var index = 0;\n    for (; index < entries.length; index++) {\n      if (entries[index].key === key) push(result, entries[index].value);\n    }\n    return result;\n  },\n  // `URLSearchParams.prototype.has` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-has\n  has: function has(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = $toString(name);\n    var index = 0;\n    while (index < entries.length) {\n      if (entries[index++].key === key) return true;\n    }\n    return false;\n  },\n  // `URLSearchParams.prototype.set` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-set\n  set: function set(name, value) {\n    validateArgumentsLength(arguments.length, 1);\n    var state = getInternalParamsState(this);\n    var entries = state.entries;\n    var found = false;\n    var key = $toString(name);\n    var val = $toString(value);\n    var index = 0;\n    var entry;\n    for (; index < entries.length; index++) {\n      entry = entries[index];\n      if (entry.key === key) {\n        if (found) splice(entries, index--, 1);\n        else {\n          found = true;\n          entry.value = val;\n        }\n      }\n    }\n    if (!found) push(entries, { key: key, value: val });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.sort` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort\n  sort: function sort() {\n    var state = getInternalParamsState(this);\n    arraySort(state.entries, function (a, b) {\n      return a.key > b.key ? 1 : -1;\n    });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.forEach` method\n  forEach: function forEach(callback /* , thisArg */) {\n    var entries = getInternalParamsState(this).entries;\n    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);\n    var index = 0;\n    var entry;\n    while (index < entries.length) {\n      entry = entries[index++];\n      boundFunction(entry.value, entry.key, this);\n    }\n  },\n  // `URLSearchParams.prototype.keys` method\n  keys: function keys() {\n    return new URLSearchParamsIterator(this, 'keys');\n  },\n  // `URLSearchParams.prototype.values` method\n  values: function values() {\n    return new URLSearchParamsIterator(this, 'values');\n  },\n  // `URLSearchParams.prototype.entries` method\n  entries: function entries() {\n    return new URLSearchParamsIterator(this, 'entries');\n  }\n}, { enumerable: true });\n\n// `URLSearchParams.prototype[@@iterator]` method\nredefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });\n\n// `URLSearchParams.prototype.toString` method\n// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior\nredefine(URLSearchParamsPrototype, 'toString', function toString() {\n  return getInternalParamsState(this).serialize();\n}, { enumerable: true });\n\nsetToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);\n\n$({ global: true, forced: !USE_NATIVE_URL }, {\n  URLSearchParams: URLSearchParamsConstructor\n});\n\n// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`\nif (!USE_NATIVE_URL && isCallable(Headers)) {\n  var headersHas = uncurryThis(HeadersPrototype.has);\n  var headersSet = uncurryThis(HeadersPrototype.set);\n\n  var wrapRequestOptions = function (init) {\n    if (isObject(init)) {\n      var body = init.body;\n      var headers;\n      if (classof(body) === URL_SEARCH_PARAMS) {\n        headers = init.headers ? new Headers(init.headers) : new Headers();\n        if (!headersHas(headers, 'content-type')) {\n          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');\n        }\n        return create(init, {\n          body: createPropertyDescriptor(0, $toString(body)),\n          headers: createPropertyDescriptor(0, headers)\n        });\n      }\n    } return init;\n  };\n\n  if (isCallable(n$Fetch)) {\n    $({ global: true, enumerable: true, forced: true }, {\n      fetch: function fetch(input /* , init */) {\n        return n$Fetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});\n      }\n    });\n  }\n\n  if (isCallable(N$Request)) {\n    var RequestConstructor = function Request(input /* , init */) {\n      anInstance(this, RequestPrototype);\n      return new N$Request(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});\n    };\n\n    RequestPrototype.constructor = RequestConstructor;\n    RequestConstructor.prototype = RequestPrototype;\n\n    $({ global: true, forced: true }, {\n      Request: RequestConstructor\n    });\n  }\n}\n\nmodule.exports = {\n  URLSearchParams: URLSearchParamsConstructor,\n  getState: getInternalParamsState\n};\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.url-search-params.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ \"./node_modules/core-js/internals/native-url.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar defineProperties = (__webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\").f);\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js/internals/object-assign.js\");\nvar arrayFrom = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js/internals/array-from.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\nvar codeAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").codeAt);\nvar toASCII = __webpack_require__(/*! ../internals/string-punycode-to-ascii */ \"./node_modules/core-js/internals/string-punycode-to-ascii.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ \"./node_modules/core-js/modules/web.url-search-params.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar getInternalURLState = InternalStateModule.getterFor('URL');\nvar URLSearchParams = URLSearchParamsModule.URLSearchParams;\nvar getInternalSearchParamsState = URLSearchParamsModule.getState;\n\nvar NativeURL = global.URL;\nvar TypeError = global.TypeError;\nvar parseInt = global.parseInt;\nvar floor = Math.floor;\nvar pow = Math.pow;\nvar charAt = uncurryThis(''.charAt);\nvar exec = uncurryThis(/./.exec);\nvar join = uncurryThis([].join);\nvar numberToString = uncurryThis(1.0.toString);\nvar pop = uncurryThis([].pop);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar shift = uncurryThis([].shift);\nvar split = uncurryThis(''.split);\nvar stringSlice = uncurryThis(''.slice);\nvar toLowerCase = uncurryThis(''.toLowerCase);\nvar unshift = uncurryThis([].unshift);\n\nvar INVALID_AUTHORITY = 'Invalid authority';\nvar INVALID_SCHEME = 'Invalid scheme';\nvar INVALID_HOST = 'Invalid host';\nvar INVALID_PORT = 'Invalid port';\n\nvar ALPHA = /[a-z]/i;\n// eslint-disable-next-line regexp/no-obscure-range -- safe\nvar ALPHANUMERIC = /[\\d+-.a-z]/i;\nvar DIGIT = /\\d/;\nvar HEX_START = /^0x/i;\nvar OCT = /^[0-7]+$/;\nvar DEC = /^\\d+$/;\nvar HEX = /^[\\da-f]+$/i;\n/* eslint-disable regexp/no-control-character -- safe */\nvar FORBIDDEN_HOST_CODE_POINT = /[\\0\\t\\n\\r #%/:<>?@[\\\\\\]^|]/;\nvar FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\\0\\t\\n\\r #/:<>?@[\\\\\\]^|]/;\nvar LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\\u0000-\\u0020]+|[\\u0000-\\u0020]+$/g;\nvar TAB_AND_NEW_LINE = /[\\t\\n\\r]/g;\n/* eslint-enable regexp/no-control-character -- safe */\nvar EOF;\n\n// https://url.spec.whatwg.org/#ipv4-number-parser\nvar parseIPv4 = function (input) {\n  var parts = split(input, '.');\n  var partsLength, numbers, index, part, radix, number, ipv4;\n  if (parts.length && parts[parts.length - 1] == '') {\n    parts.length--;\n  }\n  partsLength = parts.length;\n  if (partsLength > 4) return input;\n  numbers = [];\n  for (index = 0; index < partsLength; index++) {\n    part = parts[index];\n    if (part == '') return input;\n    radix = 10;\n    if (part.length > 1 && charAt(part, 0) == '0') {\n      radix = exec(HEX_START, part) ? 16 : 8;\n      part = stringSlice(part, radix == 8 ? 1 : 2);\n    }\n    if (part === '') {\n      number = 0;\n    } else {\n      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;\n      number = parseInt(part, radix);\n    }\n    push(numbers, number);\n  }\n  for (index = 0; index < partsLength; index++) {\n    number = numbers[index];\n    if (index == partsLength - 1) {\n      if (number >= pow(256, 5 - partsLength)) return null;\n    } else if (number > 255) return null;\n  }\n  ipv4 = pop(numbers);\n  for (index = 0; index < numbers.length; index++) {\n    ipv4 += numbers[index] * pow(256, 3 - index);\n  }\n  return ipv4;\n};\n\n// https://url.spec.whatwg.org/#concept-ipv6-parser\n// eslint-disable-next-line max-statements -- TODO\nvar parseIPv6 = function (input) {\n  var address = [0, 0, 0, 0, 0, 0, 0, 0];\n  var pieceIndex = 0;\n  var compress = null;\n  var pointer = 0;\n  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;\n\n  var chr = function () {\n    return charAt(input, pointer);\n  };\n\n  if (chr() == ':') {\n    if (charAt(input, 1) != ':') return;\n    pointer += 2;\n    pieceIndex++;\n    compress = pieceIndex;\n  }\n  while (chr()) {\n    if (pieceIndex == 8) return;\n    if (chr() == ':') {\n      if (compress !== null) return;\n      pointer++;\n      pieceIndex++;\n      compress = pieceIndex;\n      continue;\n    }\n    value = length = 0;\n    while (length < 4 && exec(HEX, chr())) {\n      value = value * 16 + parseInt(chr(), 16);\n      pointer++;\n      length++;\n    }\n    if (chr() == '.') {\n      if (length == 0) return;\n      pointer -= length;\n      if (pieceIndex > 6) return;\n      numbersSeen = 0;\n      while (chr()) {\n        ipv4Piece = null;\n        if (numbersSeen > 0) {\n          if (chr() == '.' && numbersSeen < 4) pointer++;\n          else return;\n        }\n        if (!exec(DIGIT, chr())) return;\n        while (exec(DIGIT, chr())) {\n          number = parseInt(chr(), 10);\n          if (ipv4Piece === null) ipv4Piece = number;\n          else if (ipv4Piece == 0) return;\n          else ipv4Piece = ipv4Piece * 10 + number;\n          if (ipv4Piece > 255) return;\n          pointer++;\n        }\n        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;\n        numbersSeen++;\n        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;\n      }\n      if (numbersSeen != 4) return;\n      break;\n    } else if (chr() == ':') {\n      pointer++;\n      if (!chr()) return;\n    } else if (chr()) return;\n    address[pieceIndex++] = value;\n  }\n  if (compress !== null) {\n    swaps = pieceIndex - compress;\n    pieceIndex = 7;\n    while (pieceIndex != 0 && swaps > 0) {\n      swap = address[pieceIndex];\n      address[pieceIndex--] = address[compress + swaps - 1];\n      address[compress + --swaps] = swap;\n    }\n  } else if (pieceIndex != 8) return;\n  return address;\n};\n\nvar findLongestZeroSequence = function (ipv6) {\n  var maxIndex = null;\n  var maxLength = 1;\n  var currStart = null;\n  var currLength = 0;\n  var index = 0;\n  for (; index < 8; index++) {\n    if (ipv6[index] !== 0) {\n      if (currLength > maxLength) {\n        maxIndex = currStart;\n        maxLength = currLength;\n      }\n      currStart = null;\n      currLength = 0;\n    } else {\n      if (currStart === null) currStart = index;\n      ++currLength;\n    }\n  }\n  if (currLength > maxLength) {\n    maxIndex = currStart;\n    maxLength = currLength;\n  }\n  return maxIndex;\n};\n\n// https://url.spec.whatwg.org/#host-serializing\nvar serializeHost = function (host) {\n  var result, index, compress, ignore0;\n  // ipv4\n  if (typeof host == 'number') {\n    result = [];\n    for (index = 0; index < 4; index++) {\n      unshift(result, host % 256);\n      host = floor(host / 256);\n    } return join(result, '.');\n  // ipv6\n  } else if (typeof host == 'object') {\n    result = '';\n    compress = findLongestZeroSequence(host);\n    for (index = 0; index < 8; index++) {\n      if (ignore0 && host[index] === 0) continue;\n      if (ignore0) ignore0 = false;\n      if (compress === index) {\n        result += index ? ':' : '::';\n        ignore0 = true;\n      } else {\n        result += numberToString(host[index], 16);\n        if (index < 7) result += ':';\n      }\n    }\n    return '[' + result + ']';\n  } return host;\n};\n\nvar C0ControlPercentEncodeSet = {};\nvar fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {\n  ' ': 1, '\"': 1, '<': 1, '>': 1, '`': 1\n});\nvar pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {\n  '#': 1, '?': 1, '{': 1, '}': 1\n});\nvar userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {\n  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\\\': 1, ']': 1, '^': 1, '|': 1\n});\n\nvar percentEncode = function (chr, set) {\n  var code = codeAt(chr, 0);\n  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);\n};\n\n// https://url.spec.whatwg.org/#special-scheme\nvar specialSchemes = {\n  ftp: 21,\n  file: null,\n  http: 80,\n  https: 443,\n  ws: 80,\n  wss: 443\n};\n\n// https://url.spec.whatwg.org/#windows-drive-letter\nvar isWindowsDriveLetter = function (string, normalized) {\n  var second;\n  return string.length == 2 && exec(ALPHA, charAt(string, 0))\n    && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));\n};\n\n// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter\nvar startsWithWindowsDriveLetter = function (string) {\n  var third;\n  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (\n    string.length == 2 ||\n    ((third = charAt(string, 2)) === '/' || third === '\\\\' || third === '?' || third === '#')\n  );\n};\n\n// https://url.spec.whatwg.org/#single-dot-path-segment\nvar isSingleDot = function (segment) {\n  return segment === '.' || toLowerCase(segment) === '%2e';\n};\n\n// https://url.spec.whatwg.org/#double-dot-path-segment\nvar isDoubleDot = function (segment) {\n  segment = toLowerCase(segment);\n  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';\n};\n\n// States:\nvar SCHEME_START = {};\nvar SCHEME = {};\nvar NO_SCHEME = {};\nvar SPECIAL_RELATIVE_OR_AUTHORITY = {};\nvar PATH_OR_AUTHORITY = {};\nvar RELATIVE = {};\nvar RELATIVE_SLASH = {};\nvar SPECIAL_AUTHORITY_SLASHES = {};\nvar SPECIAL_AUTHORITY_IGNORE_SLASHES = {};\nvar AUTHORITY = {};\nvar HOST = {};\nvar HOSTNAME = {};\nvar PORT = {};\nvar FILE = {};\nvar FILE_SLASH = {};\nvar FILE_HOST = {};\nvar PATH_START = {};\nvar PATH = {};\nvar CANNOT_BE_A_BASE_URL_PATH = {};\nvar QUERY = {};\nvar FRAGMENT = {};\n\nvar URLState = function (url, isBase, base) {\n  var urlString = $toString(url);\n  var baseState, failure, searchParams;\n  if (isBase) {\n    failure = this.parse(urlString);\n    if (failure) throw TypeError(failure);\n    this.searchParams = null;\n  } else {\n    if (base !== undefined) baseState = new URLState(base, true);\n    failure = this.parse(urlString, null, baseState);\n    if (failure) throw TypeError(failure);\n    searchParams = getInternalSearchParamsState(new URLSearchParams());\n    searchParams.bindURL(this);\n    this.searchParams = searchParams;\n  }\n};\n\nURLState.prototype = {\n  type: 'URL',\n  // https://url.spec.whatwg.org/#url-parsing\n  // eslint-disable-next-line max-statements -- TODO\n  parse: function (input, stateOverride, base) {\n    var url = this;\n    var state = stateOverride || SCHEME_START;\n    var pointer = 0;\n    var buffer = '';\n    var seenAt = false;\n    var seenBracket = false;\n    var seenPasswordToken = false;\n    var codePoints, chr, bufferCodePoints, failure;\n\n    input = $toString(input);\n\n    if (!stateOverride) {\n      url.scheme = '';\n      url.username = '';\n      url.password = '';\n      url.host = null;\n      url.port = null;\n      url.path = [];\n      url.query = null;\n      url.fragment = null;\n      url.cannotBeABaseURL = false;\n      input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');\n    }\n\n    input = replace(input, TAB_AND_NEW_LINE, '');\n\n    codePoints = arrayFrom(input);\n\n    while (pointer <= codePoints.length) {\n      chr = codePoints[pointer];\n      switch (state) {\n        case SCHEME_START:\n          if (chr && exec(ALPHA, chr)) {\n            buffer += toLowerCase(chr);\n            state = SCHEME;\n          } else if (!stateOverride) {\n            state = NO_SCHEME;\n            continue;\n          } else return INVALID_SCHEME;\n          break;\n\n        case SCHEME:\n          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {\n            buffer += toLowerCase(chr);\n          } else if (chr == ':') {\n            if (stateOverride && (\n              (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||\n              (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||\n              (url.scheme == 'file' && !url.host)\n            )) return;\n            url.scheme = buffer;\n            if (stateOverride) {\n              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;\n              return;\n            }\n            buffer = '';\n            if (url.scheme == 'file') {\n              state = FILE;\n            } else if (url.isSpecial() && base && base.scheme == url.scheme) {\n              state = SPECIAL_RELATIVE_OR_AUTHORITY;\n            } else if (url.isSpecial()) {\n              state = SPECIAL_AUTHORITY_SLASHES;\n            } else if (codePoints[pointer + 1] == '/') {\n              state = PATH_OR_AUTHORITY;\n              pointer++;\n            } else {\n              url.cannotBeABaseURL = true;\n              push(url.path, '');\n              state = CANNOT_BE_A_BASE_URL_PATH;\n            }\n          } else if (!stateOverride) {\n            buffer = '';\n            state = NO_SCHEME;\n            pointer = 0;\n            continue;\n          } else return INVALID_SCHEME;\n          break;\n\n        case NO_SCHEME:\n          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;\n          if (base.cannotBeABaseURL && chr == '#') {\n            url.scheme = base.scheme;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n            url.fragment = '';\n            url.cannotBeABaseURL = true;\n            state = FRAGMENT;\n            break;\n          }\n          state = base.scheme == 'file' ? FILE : RELATIVE;\n          continue;\n\n        case SPECIAL_RELATIVE_OR_AUTHORITY:\n          if (chr == '/' && codePoints[pointer + 1] == '/') {\n            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n            pointer++;\n          } else {\n            state = RELATIVE;\n            continue;\n          } break;\n\n        case PATH_OR_AUTHORITY:\n          if (chr == '/') {\n            state = AUTHORITY;\n            break;\n          } else {\n            state = PATH;\n            continue;\n          }\n\n        case RELATIVE:\n          url.scheme = base.scheme;\n          if (chr == EOF) {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n          } else if (chr == '/' || (chr == '\\\\' && url.isSpecial())) {\n            state = RELATIVE_SLASH;\n          } else if (chr == '?') {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = '';\n            state = QUERY;\n          } else if (chr == '#') {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n            url.fragment = '';\n            state = FRAGMENT;\n          } else {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.path.length--;\n            state = PATH;\n            continue;\n          } break;\n\n        case RELATIVE_SLASH:\n          if (url.isSpecial() && (chr == '/' || chr == '\\\\')) {\n            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n          } else if (chr == '/') {\n            state = AUTHORITY;\n          } else {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            state = PATH;\n            continue;\n          } break;\n\n        case SPECIAL_AUTHORITY_SLASHES:\n          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;\n          pointer++;\n          break;\n\n        case SPECIAL_AUTHORITY_IGNORE_SLASHES:\n          if (chr != '/' && chr != '\\\\') {\n            state = AUTHORITY;\n            continue;\n          } break;\n\n        case AUTHORITY:\n          if (chr == '@') {\n            if (seenAt) buffer = '%40' + buffer;\n            seenAt = true;\n            bufferCodePoints = arrayFrom(buffer);\n            for (var i = 0; i < bufferCodePoints.length; i++) {\n              var codePoint = bufferCodePoints[i];\n              if (codePoint == ':' && !seenPasswordToken) {\n                seenPasswordToken = true;\n                continue;\n              }\n              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);\n              if (seenPasswordToken) url.password += encodedCodePoints;\n              else url.username += encodedCodePoints;\n            }\n            buffer = '';\n          } else if (\n            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||\n            (chr == '\\\\' && url.isSpecial())\n          ) {\n            if (seenAt && buffer == '') return INVALID_AUTHORITY;\n            pointer -= arrayFrom(buffer).length + 1;\n            buffer = '';\n            state = HOST;\n          } else buffer += chr;\n          break;\n\n        case HOST:\n        case HOSTNAME:\n          if (stateOverride && url.scheme == 'file') {\n            state = FILE_HOST;\n            continue;\n          } else if (chr == ':' && !seenBracket) {\n            if (buffer == '') return INVALID_HOST;\n            failure = url.parseHost(buffer);\n            if (failure) return failure;\n            buffer = '';\n            state = PORT;\n            if (stateOverride == HOSTNAME) return;\n          } else if (\n            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||\n            (chr == '\\\\' && url.isSpecial())\n          ) {\n            if (url.isSpecial() && buffer == '') return INVALID_HOST;\n            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;\n            failure = url.parseHost(buffer);\n            if (failure) return failure;\n            buffer = '';\n            state = PATH_START;\n            if (stateOverride) return;\n            continue;\n          } else {\n            if (chr == '[') seenBracket = true;\n            else if (chr == ']') seenBracket = false;\n            buffer += chr;\n          } break;\n\n        case PORT:\n          if (exec(DIGIT, chr)) {\n            buffer += chr;\n          } else if (\n            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||\n            (chr == '\\\\' && url.isSpecial()) ||\n            stateOverride\n          ) {\n            if (buffer != '') {\n              var port = parseInt(buffer, 10);\n              if (port > 0xFFFF) return INVALID_PORT;\n              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;\n              buffer = '';\n            }\n            if (stateOverride) return;\n            state = PATH_START;\n            continue;\n          } else return INVALID_PORT;\n          break;\n\n        case FILE:\n          url.scheme = 'file';\n          if (chr == '/' || chr == '\\\\') state = FILE_SLASH;\n          else if (base && base.scheme == 'file') {\n            if (chr == EOF) {\n              url.host = base.host;\n              url.path = arraySlice(base.path);\n              url.query = base.query;\n            } else if (chr == '?') {\n              url.host = base.host;\n              url.path = arraySlice(base.path);\n              url.query = '';\n              state = QUERY;\n            } else if (chr == '#') {\n              url.host = base.host;\n              url.path = arraySlice(base.path);\n              url.query = base.query;\n              url.fragment = '';\n              state = FRAGMENT;\n            } else {\n              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {\n                url.host = base.host;\n                url.path = arraySlice(base.path);\n                url.shortenPath();\n              }\n              state = PATH;\n              continue;\n            }\n          } else {\n            state = PATH;\n            continue;\n          } break;\n\n        case FILE_SLASH:\n          if (chr == '/' || chr == '\\\\') {\n            state = FILE_HOST;\n            break;\n          }\n          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {\n            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);\n            else url.host = base.host;\n          }\n          state = PATH;\n          continue;\n\n        case FILE_HOST:\n          if (chr == EOF || chr == '/' || chr == '\\\\' || chr == '?' || chr == '#') {\n            if (!stateOverride && isWindowsDriveLetter(buffer)) {\n              state = PATH;\n            } else if (buffer == '') {\n              url.host = '';\n              if (stateOverride) return;\n              state = PATH_START;\n            } else {\n              failure = url.parseHost(buffer);\n              if (failure) return failure;\n              if (url.host == 'localhost') url.host = '';\n              if (stateOverride) return;\n              buffer = '';\n              state = PATH_START;\n            } continue;\n          } else buffer += chr;\n          break;\n\n        case PATH_START:\n          if (url.isSpecial()) {\n            state = PATH;\n            if (chr != '/' && chr != '\\\\') continue;\n          } else if (!stateOverride && chr == '?') {\n            url.query = '';\n            state = QUERY;\n          } else if (!stateOverride && chr == '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr != EOF) {\n            state = PATH;\n            if (chr != '/') continue;\n          } break;\n\n        case PATH:\n          if (\n            chr == EOF || chr == '/' ||\n            (chr == '\\\\' && url.isSpecial()) ||\n            (!stateOverride && (chr == '?' || chr == '#'))\n          ) {\n            if (isDoubleDot(buffer)) {\n              url.shortenPath();\n              if (chr != '/' && !(chr == '\\\\' && url.isSpecial())) {\n                push(url.path, '');\n              }\n            } else if (isSingleDot(buffer)) {\n              if (chr != '/' && !(chr == '\\\\' && url.isSpecial())) {\n                push(url.path, '');\n              }\n            } else {\n              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {\n                if (url.host) url.host = '';\n                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter\n              }\n              push(url.path, buffer);\n            }\n            buffer = '';\n            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {\n              while (url.path.length > 1 && url.path[0] === '') {\n                shift(url.path);\n              }\n            }\n            if (chr == '?') {\n              url.query = '';\n              state = QUERY;\n            } else if (chr == '#') {\n              url.fragment = '';\n              state = FRAGMENT;\n            }\n          } else {\n            buffer += percentEncode(chr, pathPercentEncodeSet);\n          } break;\n\n        case CANNOT_BE_A_BASE_URL_PATH:\n          if (chr == '?') {\n            url.query = '';\n            state = QUERY;\n          } else if (chr == '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr != EOF) {\n            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);\n          } break;\n\n        case QUERY:\n          if (!stateOverride && chr == '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr != EOF) {\n            if (chr == \"'\" && url.isSpecial()) url.query += '%27';\n            else if (chr == '#') url.query += '%23';\n            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);\n          } break;\n\n        case FRAGMENT:\n          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);\n          break;\n      }\n\n      pointer++;\n    }\n  },\n  // https://url.spec.whatwg.org/#host-parsing\n  parseHost: function (input) {\n    var result, codePoints, index;\n    if (charAt(input, 0) == '[') {\n      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;\n      result = parseIPv6(stringSlice(input, 1, -1));\n      if (!result) return INVALID_HOST;\n      this.host = result;\n    // opaque host\n    } else if (!this.isSpecial()) {\n      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;\n      result = '';\n      codePoints = arrayFrom(input);\n      for (index = 0; index < codePoints.length; index++) {\n        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);\n      }\n      this.host = result;\n    } else {\n      input = toASCII(input);\n      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;\n      result = parseIPv4(input);\n      if (result === null) return INVALID_HOST;\n      this.host = result;\n    }\n  },\n  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port\n  cannotHaveUsernamePasswordPort: function () {\n    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';\n  },\n  // https://url.spec.whatwg.org/#include-credentials\n  includesCredentials: function () {\n    return this.username != '' || this.password != '';\n  },\n  // https://url.spec.whatwg.org/#is-special\n  isSpecial: function () {\n    return hasOwn(specialSchemes, this.scheme);\n  },\n  // https://url.spec.whatwg.org/#shorten-a-urls-path\n  shortenPath: function () {\n    var path = this.path;\n    var pathSize = path.length;\n    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {\n      path.length--;\n    }\n  },\n  // https://url.spec.whatwg.org/#concept-url-serializer\n  serialize: function () {\n    var url = this;\n    var scheme = url.scheme;\n    var username = url.username;\n    var password = url.password;\n    var host = url.host;\n    var port = url.port;\n    var path = url.path;\n    var query = url.query;\n    var fragment = url.fragment;\n    var output = scheme + ':';\n    if (host !== null) {\n      output += '//';\n      if (url.includesCredentials()) {\n        output += username + (password ? ':' + password : '') + '@';\n      }\n      output += serializeHost(host);\n      if (port !== null) output += ':' + port;\n    } else if (scheme == 'file') output += '//';\n    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';\n    if (query !== null) output += '?' + query;\n    if (fragment !== null) output += '#' + fragment;\n    return output;\n  },\n  // https://url.spec.whatwg.org/#dom-url-href\n  setHref: function (href) {\n    var failure = this.parse(href);\n    if (failure) throw TypeError(failure);\n    this.searchParams.update();\n  },\n  // https://url.spec.whatwg.org/#dom-url-origin\n  getOrigin: function () {\n    var scheme = this.scheme;\n    var port = this.port;\n    if (scheme == 'blob') try {\n      return new URLConstructor(scheme.path[0]).origin;\n    } catch (error) {\n      return 'null';\n    }\n    if (scheme == 'file' || !this.isSpecial()) return 'null';\n    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');\n  },\n  // https://url.spec.whatwg.org/#dom-url-protocol\n  getProtocol: function () {\n    return this.scheme + ':';\n  },\n  setProtocol: function (protocol) {\n    this.parse($toString(protocol) + ':', SCHEME_START);\n  },\n  // https://url.spec.whatwg.org/#dom-url-username\n  getUsername: function () {\n    return this.username;\n  },\n  setUsername: function (username) {\n    var codePoints = arrayFrom($toString(username));\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    this.username = '';\n    for (var i = 0; i < codePoints.length; i++) {\n      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);\n    }\n  },\n  // https://url.spec.whatwg.org/#dom-url-password\n  getPassword: function () {\n    return this.password;\n  },\n  setPassword: function (password) {\n    var codePoints = arrayFrom($toString(password));\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    this.password = '';\n    for (var i = 0; i < codePoints.length; i++) {\n      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);\n    }\n  },\n  // https://url.spec.whatwg.org/#dom-url-host\n  getHost: function () {\n    var host = this.host;\n    var port = this.port;\n    return host === null ? ''\n      : port === null ? serializeHost(host)\n      : serializeHost(host) + ':' + port;\n  },\n  setHost: function (host) {\n    if (this.cannotBeABaseURL) return;\n    this.parse(host, HOST);\n  },\n  // https://url.spec.whatwg.org/#dom-url-hostname\n  getHostname: function () {\n    var host = this.host;\n    return host === null ? '' : serializeHost(host);\n  },\n  setHostname: function (hostname) {\n    if (this.cannotBeABaseURL) return;\n    this.parse(hostname, HOSTNAME);\n  },\n  // https://url.spec.whatwg.org/#dom-url-port\n  getPort: function () {\n    var port = this.port;\n    return port === null ? '' : $toString(port);\n  },\n  setPort: function (port) {\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    port = $toString(port);\n    if (port == '') this.port = null;\n    else this.parse(port, PORT);\n  },\n  // https://url.spec.whatwg.org/#dom-url-pathname\n  getPathname: function () {\n    var path = this.path;\n    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';\n  },\n  setPathname: function (pathname) {\n    if (this.cannotBeABaseURL) return;\n    this.path = [];\n    this.parse(pathname, PATH_START);\n  },\n  // https://url.spec.whatwg.org/#dom-url-search\n  getSearch: function () {\n    var query = this.query;\n    return query ? '?' + query : '';\n  },\n  setSearch: function (search) {\n    search = $toString(search);\n    if (search == '') {\n      this.query = null;\n    } else {\n      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);\n      this.query = '';\n      this.parse(search, QUERY);\n    }\n    this.searchParams.update();\n  },\n  // https://url.spec.whatwg.org/#dom-url-searchparams\n  getSearchParams: function () {\n    return this.searchParams.facade;\n  },\n  // https://url.spec.whatwg.org/#dom-url-hash\n  getHash: function () {\n    var fragment = this.fragment;\n    return fragment ? '#' + fragment : '';\n  },\n  setHash: function (hash) {\n    hash = $toString(hash);\n    if (hash == '') {\n      this.fragment = null;\n      return;\n    }\n    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);\n    this.fragment = '';\n    this.parse(hash, FRAGMENT);\n  },\n  update: function () {\n    this.query = this.searchParams.serialize() || null;\n  }\n};\n\n// `URL` constructor\n// https://url.spec.whatwg.org/#url-class\nvar URLConstructor = function URL(url /* , base */) {\n  var that = anInstance(this, URLPrototype);\n  var base = arguments.length > 1 ? arguments[1] : undefined;\n  var state = setInternalState(that, new URLState(url, false, base));\n  if (!DESCRIPTORS) {\n    that.href = state.serialize();\n    that.origin = state.getOrigin();\n    that.protocol = state.getProtocol();\n    that.username = state.getUsername();\n    that.password = state.getPassword();\n    that.host = state.getHost();\n    that.hostname = state.getHostname();\n    that.port = state.getPort();\n    that.pathname = state.getPathname();\n    that.search = state.getSearch();\n    that.searchParams = state.getSearchParams();\n    that.hash = state.getHash();\n  }\n};\n\nvar URLPrototype = URLConstructor.prototype;\n\nvar accessorDescriptor = function (getter, setter) {\n  return {\n    get: function () {\n      return getInternalURLState(this)[getter]();\n    },\n    set: setter && function (value) {\n      return getInternalURLState(this)[setter](value);\n    },\n    configurable: true,\n    enumerable: true\n  };\n};\n\nif (DESCRIPTORS) {\n  defineProperties(URLPrototype, {\n    // `URL.prototype.href` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-href\n    href: accessorDescriptor('serialize', 'setHref'),\n    // `URL.prototype.origin` getter\n    // https://url.spec.whatwg.org/#dom-url-origin\n    origin: accessorDescriptor('getOrigin'),\n    // `URL.prototype.protocol` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-protocol\n    protocol: accessorDescriptor('getProtocol', 'setProtocol'),\n    // `URL.prototype.username` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-username\n    username: accessorDescriptor('getUsername', 'setUsername'),\n    // `URL.prototype.password` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-password\n    password: accessorDescriptor('getPassword', 'setPassword'),\n    // `URL.prototype.host` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-host\n    host: accessorDescriptor('getHost', 'setHost'),\n    // `URL.prototype.hostname` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-hostname\n    hostname: accessorDescriptor('getHostname', 'setHostname'),\n    // `URL.prototype.port` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-port\n    port: accessorDescriptor('getPort', 'setPort'),\n    // `URL.prototype.pathname` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-pathname\n    pathname: accessorDescriptor('getPathname', 'setPathname'),\n    // `URL.prototype.search` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-search\n    search: accessorDescriptor('getSearch', 'setSearch'),\n    // `URL.prototype.searchParams` getter\n    // https://url.spec.whatwg.org/#dom-url-searchparams\n    searchParams: accessorDescriptor('getSearchParams'),\n    // `URL.prototype.hash` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-hash\n    hash: accessorDescriptor('getHash', 'setHash')\n  });\n}\n\n// `URL.prototype.toJSON` method\n// https://url.spec.whatwg.org/#dom-url-tojson\nredefine(URLPrototype, 'toJSON', function toJSON() {\n  return getInternalURLState(this).serialize();\n}, { enumerable: true });\n\n// `URL.prototype.toString` method\n// https://url.spec.whatwg.org/#URL-stringification-behavior\nredefine(URLPrototype, 'toString', function toString() {\n  return getInternalURLState(this).serialize();\n}, { enumerable: true });\n\nif (NativeURL) {\n  var nativeCreateObjectURL = NativeURL.createObjectURL;\n  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;\n  // `URL.createObjectURL` method\n  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL\n  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));\n  // `URL.revokeObjectURL` method\n  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL\n  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));\n}\n\nsetToStringTag(URLConstructor, 'URL');\n\n$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {\n  URL: URLConstructor\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.url.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.url.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.to-json.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\n// `URL.prototype.toJSON` method\n// https://url.spec.whatwg.org/#dom-url-tojson\n$({ target: 'URL', proto: true, enumerable: true }, {\n  toJSON: function toJSON() {\n    return call(URL.prototype.toString, this);\n  }\n});\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/modules/web.url.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/stable/index.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/stable/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n__webpack_require__(/*! ../modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n__webpack_require__(/*! ../modules/es.symbol.async-iterator */ \"./node_modules/core-js/modules/es.symbol.async-iterator.js\");\n__webpack_require__(/*! ../modules/es.symbol.has-instance */ \"./node_modules/core-js/modules/es.symbol.has-instance.js\");\n__webpack_require__(/*! ../modules/es.symbol.is-concat-spreadable */ \"./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js\");\n__webpack_require__(/*! ../modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n__webpack_require__(/*! ../modules/es.symbol.match */ \"./node_modules/core-js/modules/es.symbol.match.js\");\n__webpack_require__(/*! ../modules/es.symbol.match-all */ \"./node_modules/core-js/modules/es.symbol.match-all.js\");\n__webpack_require__(/*! ../modules/es.symbol.replace */ \"./node_modules/core-js/modules/es.symbol.replace.js\");\n__webpack_require__(/*! ../modules/es.symbol.search */ \"./node_modules/core-js/modules/es.symbol.search.js\");\n__webpack_require__(/*! ../modules/es.symbol.species */ \"./node_modules/core-js/modules/es.symbol.species.js\");\n__webpack_require__(/*! ../modules/es.symbol.split */ \"./node_modules/core-js/modules/es.symbol.split.js\");\n__webpack_require__(/*! ../modules/es.symbol.to-primitive */ \"./node_modules/core-js/modules/es.symbol.to-primitive.js\");\n__webpack_require__(/*! ../modules/es.symbol.to-string-tag */ \"./node_modules/core-js/modules/es.symbol.to-string-tag.js\");\n__webpack_require__(/*! ../modules/es.symbol.unscopables */ \"./node_modules/core-js/modules/es.symbol.unscopables.js\");\n__webpack_require__(/*! ../modules/es.error.cause */ \"./node_modules/core-js/modules/es.error.cause.js\");\n__webpack_require__(/*! ../modules/es.error.to-string */ \"./node_modules/core-js/modules/es.error.to-string.js\");\n__webpack_require__(/*! ../modules/es.aggregate-error */ \"./node_modules/core-js/modules/es.aggregate-error.js\");\n__webpack_require__(/*! ../modules/es.aggregate-error.cause */ \"./node_modules/core-js/modules/es.aggregate-error.cause.js\");\n__webpack_require__(/*! ../modules/es.array.at */ \"./node_modules/core-js/modules/es.array.at.js\");\n__webpack_require__(/*! ../modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n__webpack_require__(/*! ../modules/es.array.copy-within */ \"./node_modules/core-js/modules/es.array.copy-within.js\");\n__webpack_require__(/*! ../modules/es.array.every */ \"./node_modules/core-js/modules/es.array.every.js\");\n__webpack_require__(/*! ../modules/es.array.fill */ \"./node_modules/core-js/modules/es.array.fill.js\");\n__webpack_require__(/*! ../modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n__webpack_require__(/*! ../modules/es.array.find */ \"./node_modules/core-js/modules/es.array.find.js\");\n__webpack_require__(/*! ../modules/es.array.find-index */ \"./node_modules/core-js/modules/es.array.find-index.js\");\n__webpack_require__(/*! ../modules/es.array.flat */ \"./node_modules/core-js/modules/es.array.flat.js\");\n__webpack_require__(/*! ../modules/es.array.flat-map */ \"./node_modules/core-js/modules/es.array.flat-map.js\");\n__webpack_require__(/*! ../modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n__webpack_require__(/*! ../modules/es.array.from */ \"./node_modules/core-js/modules/es.array.from.js\");\n__webpack_require__(/*! ../modules/es.array.includes */ \"./node_modules/core-js/modules/es.array.includes.js\");\n__webpack_require__(/*! ../modules/es.array.index-of */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n__webpack_require__(/*! ../modules/es.array.is-array */ \"./node_modules/core-js/modules/es.array.is-array.js\");\n__webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n__webpack_require__(/*! ../modules/es.array.last-index-of */ \"./node_modules/core-js/modules/es.array.last-index-of.js\");\n__webpack_require__(/*! ../modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n__webpack_require__(/*! ../modules/es.array.of */ \"./node_modules/core-js/modules/es.array.of.js\");\n__webpack_require__(/*! ../modules/es.array.reduce */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n__webpack_require__(/*! ../modules/es.array.reduce-right */ \"./node_modules/core-js/modules/es.array.reduce-right.js\");\n__webpack_require__(/*! ../modules/es.array.reverse */ \"./node_modules/core-js/modules/es.array.reverse.js\");\n__webpack_require__(/*! ../modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n__webpack_require__(/*! ../modules/es.array.some */ \"./node_modules/core-js/modules/es.array.some.js\");\n__webpack_require__(/*! ../modules/es.array.sort */ \"./node_modules/core-js/modules/es.array.sort.js\");\n__webpack_require__(/*! ../modules/es.array.species */ \"./node_modules/core-js/modules/es.array.species.js\");\n__webpack_require__(/*! ../modules/es.array.splice */ \"./node_modules/core-js/modules/es.array.splice.js\");\n__webpack_require__(/*! ../modules/es.array.unscopables.flat */ \"./node_modules/core-js/modules/es.array.unscopables.flat.js\");\n__webpack_require__(/*! ../modules/es.array.unscopables.flat-map */ \"./node_modules/core-js/modules/es.array.unscopables.flat-map.js\");\n__webpack_require__(/*! ../modules/es.array-buffer.constructor */ \"./node_modules/core-js/modules/es.array-buffer.constructor.js\");\n__webpack_require__(/*! ../modules/es.array-buffer.is-view */ \"./node_modules/core-js/modules/es.array-buffer.is-view.js\");\n__webpack_require__(/*! ../modules/es.array-buffer.slice */ \"./node_modules/core-js/modules/es.array-buffer.slice.js\");\n__webpack_require__(/*! ../modules/es.data-view */ \"./node_modules/core-js/modules/es.data-view.js\");\n__webpack_require__(/*! ../modules/es.date.get-year */ \"./node_modules/core-js/modules/es.date.get-year.js\");\n__webpack_require__(/*! ../modules/es.date.now */ \"./node_modules/core-js/modules/es.date.now.js\");\n__webpack_require__(/*! ../modules/es.date.set-year */ \"./node_modules/core-js/modules/es.date.set-year.js\");\n__webpack_require__(/*! ../modules/es.date.to-gmt-string */ \"./node_modules/core-js/modules/es.date.to-gmt-string.js\");\n__webpack_require__(/*! ../modules/es.date.to-iso-string */ \"./node_modules/core-js/modules/es.date.to-iso-string.js\");\n__webpack_require__(/*! ../modules/es.date.to-json */ \"./node_modules/core-js/modules/es.date.to-json.js\");\n__webpack_require__(/*! ../modules/es.date.to-primitive */ \"./node_modules/core-js/modules/es.date.to-primitive.js\");\n__webpack_require__(/*! ../modules/es.date.to-string */ \"./node_modules/core-js/modules/es.date.to-string.js\");\n__webpack_require__(/*! ../modules/es.escape */ \"./node_modules/core-js/modules/es.escape.js\");\n__webpack_require__(/*! ../modules/es.function.bind */ \"./node_modules/core-js/modules/es.function.bind.js\");\n__webpack_require__(/*! ../modules/es.function.has-instance */ \"./node_modules/core-js/modules/es.function.has-instance.js\");\n__webpack_require__(/*! ../modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n__webpack_require__(/*! ../modules/es.global-this */ \"./node_modules/core-js/modules/es.global-this.js\");\n__webpack_require__(/*! ../modules/es.json.stringify */ \"./node_modules/core-js/modules/es.json.stringify.js\");\n__webpack_require__(/*! ../modules/es.json.to-string-tag */ \"./node_modules/core-js/modules/es.json.to-string-tag.js\");\n__webpack_require__(/*! ../modules/es.map */ \"./node_modules/core-js/modules/es.map.js\");\n__webpack_require__(/*! ../modules/es.math.acosh */ \"./node_modules/core-js/modules/es.math.acosh.js\");\n__webpack_require__(/*! ../modules/es.math.asinh */ \"./node_modules/core-js/modules/es.math.asinh.js\");\n__webpack_require__(/*! ../modules/es.math.atanh */ \"./node_modules/core-js/modules/es.math.atanh.js\");\n__webpack_require__(/*! ../modules/es.math.cbrt */ \"./node_modules/core-js/modules/es.math.cbrt.js\");\n__webpack_require__(/*! ../modules/es.math.clz32 */ \"./node_modules/core-js/modules/es.math.clz32.js\");\n__webpack_require__(/*! ../modules/es.math.cosh */ \"./node_modules/core-js/modules/es.math.cosh.js\");\n__webpack_require__(/*! ../modules/es.math.expm1 */ \"./node_modules/core-js/modules/es.math.expm1.js\");\n__webpack_require__(/*! ../modules/es.math.fround */ \"./node_modules/core-js/modules/es.math.fround.js\");\n__webpack_require__(/*! ../modules/es.math.hypot */ \"./node_modules/core-js/modules/es.math.hypot.js\");\n__webpack_require__(/*! ../modules/es.math.imul */ \"./node_modules/core-js/modules/es.math.imul.js\");\n__webpack_require__(/*! ../modules/es.math.log10 */ \"./node_modules/core-js/modules/es.math.log10.js\");\n__webpack_require__(/*! ../modules/es.math.log1p */ \"./node_modules/core-js/modules/es.math.log1p.js\");\n__webpack_require__(/*! ../modules/es.math.log2 */ \"./node_modules/core-js/modules/es.math.log2.js\");\n__webpack_require__(/*! ../modules/es.math.sign */ \"./node_modules/core-js/modules/es.math.sign.js\");\n__webpack_require__(/*! ../modules/es.math.sinh */ \"./node_modules/core-js/modules/es.math.sinh.js\");\n__webpack_require__(/*! ../modules/es.math.tanh */ \"./node_modules/core-js/modules/es.math.tanh.js\");\n__webpack_require__(/*! ../modules/es.math.to-string-tag */ \"./node_modules/core-js/modules/es.math.to-string-tag.js\");\n__webpack_require__(/*! ../modules/es.math.trunc */ \"./node_modules/core-js/modules/es.math.trunc.js\");\n__webpack_require__(/*! ../modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n__webpack_require__(/*! ../modules/es.number.epsilon */ \"./node_modules/core-js/modules/es.number.epsilon.js\");\n__webpack_require__(/*! ../modules/es.number.is-finite */ \"./node_modules/core-js/modules/es.number.is-finite.js\");\n__webpack_require__(/*! ../modules/es.number.is-integer */ \"./node_modules/core-js/modules/es.number.is-integer.js\");\n__webpack_require__(/*! ../modules/es.number.is-nan */ \"./node_modules/core-js/modules/es.number.is-nan.js\");\n__webpack_require__(/*! ../modules/es.number.is-safe-integer */ \"./node_modules/core-js/modules/es.number.is-safe-integer.js\");\n__webpack_require__(/*! ../modules/es.number.max-safe-integer */ \"./node_modules/core-js/modules/es.number.max-safe-integer.js\");\n__webpack_require__(/*! ../modules/es.number.min-safe-integer */ \"./node_modules/core-js/modules/es.number.min-safe-integer.js\");\n__webpack_require__(/*! ../modules/es.number.parse-float */ \"./node_modules/core-js/modules/es.number.parse-float.js\");\n__webpack_require__(/*! ../modules/es.number.parse-int */ \"./node_modules/core-js/modules/es.number.parse-int.js\");\n__webpack_require__(/*! ../modules/es.number.to-exponential */ \"./node_modules/core-js/modules/es.number.to-exponential.js\");\n__webpack_require__(/*! ../modules/es.number.to-fixed */ \"./node_modules/core-js/modules/es.number.to-fixed.js\");\n__webpack_require__(/*! ../modules/es.number.to-precision */ \"./node_modules/core-js/modules/es.number.to-precision.js\");\n__webpack_require__(/*! ../modules/es.object.assign */ \"./node_modules/core-js/modules/es.object.assign.js\");\n__webpack_require__(/*! ../modules/es.object.create */ \"./node_modules/core-js/modules/es.object.create.js\");\n__webpack_require__(/*! ../modules/es.object.define-getter */ \"./node_modules/core-js/modules/es.object.define-getter.js\");\n__webpack_require__(/*! ../modules/es.object.define-properties */ \"./node_modules/core-js/modules/es.object.define-properties.js\");\n__webpack_require__(/*! ../modules/es.object.define-property */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n__webpack_require__(/*! ../modules/es.object.define-setter */ \"./node_modules/core-js/modules/es.object.define-setter.js\");\n__webpack_require__(/*! ../modules/es.object.entries */ \"./node_modules/core-js/modules/es.object.entries.js\");\n__webpack_require__(/*! ../modules/es.object.freeze */ \"./node_modules/core-js/modules/es.object.freeze.js\");\n__webpack_require__(/*! ../modules/es.object.from-entries */ \"./node_modules/core-js/modules/es.object.from-entries.js\");\n__webpack_require__(/*! ../modules/es.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n__webpack_require__(/*! ../modules/es.object.get-own-property-names */ \"./node_modules/core-js/modules/es.object.get-own-property-names.js\");\n__webpack_require__(/*! ../modules/es.object.get-prototype-of */ \"./node_modules/core-js/modules/es.object.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es.object.has-own */ \"./node_modules/core-js/modules/es.object.has-own.js\");\n__webpack_require__(/*! ../modules/es.object.is */ \"./node_modules/core-js/modules/es.object.is.js\");\n__webpack_require__(/*! ../modules/es.object.is-extensible */ \"./node_modules/core-js/modules/es.object.is-extensible.js\");\n__webpack_require__(/*! ../modules/es.object.is-frozen */ \"./node_modules/core-js/modules/es.object.is-frozen.js\");\n__webpack_require__(/*! ../modules/es.object.is-sealed */ \"./node_modules/core-js/modules/es.object.is-sealed.js\");\n__webpack_require__(/*! ../modules/es.object.keys */ \"./node_modules/core-js/modules/es.object.keys.js\");\n__webpack_require__(/*! ../modules/es.object.lookup-getter */ \"./node_modules/core-js/modules/es.object.lookup-getter.js\");\n__webpack_require__(/*! ../modules/es.object.lookup-setter */ \"./node_modules/core-js/modules/es.object.lookup-setter.js\");\n__webpack_require__(/*! ../modules/es.object.prevent-extensions */ \"./node_modules/core-js/modules/es.object.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es.object.seal */ \"./node_modules/core-js/modules/es.object.seal.js\");\n__webpack_require__(/*! ../modules/es.object.set-prototype-of */ \"./node_modules/core-js/modules/es.object.set-prototype-of.js\");\n__webpack_require__(/*! ../modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../modules/es.object.values */ \"./node_modules/core-js/modules/es.object.values.js\");\n__webpack_require__(/*! ../modules/es.parse-float */ \"./node_modules/core-js/modules/es.parse-float.js\");\n__webpack_require__(/*! ../modules/es.parse-int */ \"./node_modules/core-js/modules/es.parse-int.js\");\n__webpack_require__(/*! ../modules/es.promise */ \"./node_modules/core-js/modules/es.promise.js\");\n__webpack_require__(/*! ../modules/es.promise.all-settled */ \"./node_modules/core-js/modules/es.promise.all-settled.js\");\n__webpack_require__(/*! ../modules/es.promise.any */ \"./node_modules/core-js/modules/es.promise.any.js\");\n__webpack_require__(/*! ../modules/es.promise.finally */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n__webpack_require__(/*! ../modules/es.reflect.apply */ \"./node_modules/core-js/modules/es.reflect.apply.js\");\n__webpack_require__(/*! ../modules/es.reflect.construct */ \"./node_modules/core-js/modules/es.reflect.construct.js\");\n__webpack_require__(/*! ../modules/es.reflect.define-property */ \"./node_modules/core-js/modules/es.reflect.define-property.js\");\n__webpack_require__(/*! ../modules/es.reflect.delete-property */ \"./node_modules/core-js/modules/es.reflect.delete-property.js\");\n__webpack_require__(/*! ../modules/es.reflect.get */ \"./node_modules/core-js/modules/es.reflect.get.js\");\n__webpack_require__(/*! ../modules/es.reflect.get-own-property-descriptor */ \"./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es.reflect.get-prototype-of */ \"./node_modules/core-js/modules/es.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es.reflect.has */ \"./node_modules/core-js/modules/es.reflect.has.js\");\n__webpack_require__(/*! ../modules/es.reflect.is-extensible */ \"./node_modules/core-js/modules/es.reflect.is-extensible.js\");\n__webpack_require__(/*! ../modules/es.reflect.own-keys */ \"./node_modules/core-js/modules/es.reflect.own-keys.js\");\n__webpack_require__(/*! ../modules/es.reflect.prevent-extensions */ \"./node_modules/core-js/modules/es.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es.reflect.set */ \"./node_modules/core-js/modules/es.reflect.set.js\");\n__webpack_require__(/*! ../modules/es.reflect.set-prototype-of */ \"./node_modules/core-js/modules/es.reflect.set-prototype-of.js\");\n__webpack_require__(/*! ../modules/es.reflect.to-string-tag */ \"./node_modules/core-js/modules/es.reflect.to-string-tag.js\");\n__webpack_require__(/*! ../modules/es.regexp.constructor */ \"./node_modules/core-js/modules/es.regexp.constructor.js\");\n__webpack_require__(/*! ../modules/es.regexp.dot-all */ \"./node_modules/core-js/modules/es.regexp.dot-all.js\");\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n__webpack_require__(/*! ../modules/es.regexp.flags */ \"./node_modules/core-js/modules/es.regexp.flags.js\");\n__webpack_require__(/*! ../modules/es.regexp.sticky */ \"./node_modules/core-js/modules/es.regexp.sticky.js\");\n__webpack_require__(/*! ../modules/es.regexp.test */ \"./node_modules/core-js/modules/es.regexp.test.js\");\n__webpack_require__(/*! ../modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n__webpack_require__(/*! ../modules/es.set */ \"./node_modules/core-js/modules/es.set.js\");\n__webpack_require__(/*! ../modules/es.string.at-alternative */ \"./node_modules/core-js/modules/es.string.at-alternative.js\");\n__webpack_require__(/*! ../modules/es.string.code-point-at */ \"./node_modules/core-js/modules/es.string.code-point-at.js\");\n__webpack_require__(/*! ../modules/es.string.ends-with */ \"./node_modules/core-js/modules/es.string.ends-with.js\");\n__webpack_require__(/*! ../modules/es.string.from-code-point */ \"./node_modules/core-js/modules/es.string.from-code-point.js\");\n__webpack_require__(/*! ../modules/es.string.includes */ \"./node_modules/core-js/modules/es.string.includes.js\");\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.match */ \"./node_modules/core-js/modules/es.string.match.js\");\n__webpack_require__(/*! ../modules/es.string.match-all */ \"./node_modules/core-js/modules/es.string.match-all.js\");\n__webpack_require__(/*! ../modules/es.string.pad-end */ \"./node_modules/core-js/modules/es.string.pad-end.js\");\n__webpack_require__(/*! ../modules/es.string.pad-start */ \"./node_modules/core-js/modules/es.string.pad-start.js\");\n__webpack_require__(/*! ../modules/es.string.raw */ \"./node_modules/core-js/modules/es.string.raw.js\");\n__webpack_require__(/*! ../modules/es.string.repeat */ \"./node_modules/core-js/modules/es.string.repeat.js\");\n__webpack_require__(/*! ../modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n__webpack_require__(/*! ../modules/es.string.replace-all */ \"./node_modules/core-js/modules/es.string.replace-all.js\");\n__webpack_require__(/*! ../modules/es.string.search */ \"./node_modules/core-js/modules/es.string.search.js\");\n__webpack_require__(/*! ../modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n__webpack_require__(/*! ../modules/es.string.starts-with */ \"./node_modules/core-js/modules/es.string.starts-with.js\");\n__webpack_require__(/*! ../modules/es.string.substr */ \"./node_modules/core-js/modules/es.string.substr.js\");\n__webpack_require__(/*! ../modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n__webpack_require__(/*! ../modules/es.string.trim-end */ \"./node_modules/core-js/modules/es.string.trim-end.js\");\n__webpack_require__(/*! ../modules/es.string.trim-start */ \"./node_modules/core-js/modules/es.string.trim-start.js\");\n__webpack_require__(/*! ../modules/es.string.anchor */ \"./node_modules/core-js/modules/es.string.anchor.js\");\n__webpack_require__(/*! ../modules/es.string.big */ \"./node_modules/core-js/modules/es.string.big.js\");\n__webpack_require__(/*! ../modules/es.string.blink */ \"./node_modules/core-js/modules/es.string.blink.js\");\n__webpack_require__(/*! ../modules/es.string.bold */ \"./node_modules/core-js/modules/es.string.bold.js\");\n__webpack_require__(/*! ../modules/es.string.fixed */ \"./node_modules/core-js/modules/es.string.fixed.js\");\n__webpack_require__(/*! ../modules/es.string.fontcolor */ \"./node_modules/core-js/modules/es.string.fontcolor.js\");\n__webpack_require__(/*! ../modules/es.string.fontsize */ \"./node_modules/core-js/modules/es.string.fontsize.js\");\n__webpack_require__(/*! ../modules/es.string.italics */ \"./node_modules/core-js/modules/es.string.italics.js\");\n__webpack_require__(/*! ../modules/es.string.link */ \"./node_modules/core-js/modules/es.string.link.js\");\n__webpack_require__(/*! ../modules/es.string.small */ \"./node_modules/core-js/modules/es.string.small.js\");\n__webpack_require__(/*! ../modules/es.string.strike */ \"./node_modules/core-js/modules/es.string.strike.js\");\n__webpack_require__(/*! ../modules/es.string.sub */ \"./node_modules/core-js/modules/es.string.sub.js\");\n__webpack_require__(/*! ../modules/es.string.sup */ \"./node_modules/core-js/modules/es.string.sup.js\");\n__webpack_require__(/*! ../modules/es.typed-array.float32-array */ \"./node_modules/core-js/modules/es.typed-array.float32-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.float64-array */ \"./node_modules/core-js/modules/es.typed-array.float64-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.int8-array */ \"./node_modules/core-js/modules/es.typed-array.int8-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.int16-array */ \"./node_modules/core-js/modules/es.typed-array.int16-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.int32-array */ \"./node_modules/core-js/modules/es.typed-array.int32-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.uint8-array */ \"./node_modules/core-js/modules/es.typed-array.uint8-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.uint8-clamped-array */ \"./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.uint16-array */ \"./node_modules/core-js/modules/es.typed-array.uint16-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.uint32-array */ \"./node_modules/core-js/modules/es.typed-array.uint32-array.js\");\n__webpack_require__(/*! ../modules/es.typed-array.at */ \"./node_modules/core-js/modules/es.typed-array.at.js\");\n__webpack_require__(/*! ../modules/es.typed-array.copy-within */ \"./node_modules/core-js/modules/es.typed-array.copy-within.js\");\n__webpack_require__(/*! ../modules/es.typed-array.every */ \"./node_modules/core-js/modules/es.typed-array.every.js\");\n__webpack_require__(/*! ../modules/es.typed-array.fill */ \"./node_modules/core-js/modules/es.typed-array.fill.js\");\n__webpack_require__(/*! ../modules/es.typed-array.filter */ \"./node_modules/core-js/modules/es.typed-array.filter.js\");\n__webpack_require__(/*! ../modules/es.typed-array.find */ \"./node_modules/core-js/modules/es.typed-array.find.js\");\n__webpack_require__(/*! ../modules/es.typed-array.find-index */ \"./node_modules/core-js/modules/es.typed-array.find-index.js\");\n__webpack_require__(/*! ../modules/es.typed-array.for-each */ \"./node_modules/core-js/modules/es.typed-array.for-each.js\");\n__webpack_require__(/*! ../modules/es.typed-array.from */ \"./node_modules/core-js/modules/es.typed-array.from.js\");\n__webpack_require__(/*! ../modules/es.typed-array.includes */ \"./node_modules/core-js/modules/es.typed-array.includes.js\");\n__webpack_require__(/*! ../modules/es.typed-array.index-of */ \"./node_modules/core-js/modules/es.typed-array.index-of.js\");\n__webpack_require__(/*! ../modules/es.typed-array.iterator */ \"./node_modules/core-js/modules/es.typed-array.iterator.js\");\n__webpack_require__(/*! ../modules/es.typed-array.join */ \"./node_modules/core-js/modules/es.typed-array.join.js\");\n__webpack_require__(/*! ../modules/es.typed-array.last-index-of */ \"./node_modules/core-js/modules/es.typed-array.last-index-of.js\");\n__webpack_require__(/*! ../modules/es.typed-array.map */ \"./node_modules/core-js/modules/es.typed-array.map.js\");\n__webpack_require__(/*! ../modules/es.typed-array.of */ \"./node_modules/core-js/modules/es.typed-array.of.js\");\n__webpack_require__(/*! ../modules/es.typed-array.reduce */ \"./node_modules/core-js/modules/es.typed-array.reduce.js\");\n__webpack_require__(/*! ../modules/es.typed-array.reduce-right */ \"./node_modules/core-js/modules/es.typed-array.reduce-right.js\");\n__webpack_require__(/*! ../modules/es.typed-array.reverse */ \"./node_modules/core-js/modules/es.typed-array.reverse.js\");\n__webpack_require__(/*! ../modules/es.typed-array.set */ \"./node_modules/core-js/modules/es.typed-array.set.js\");\n__webpack_require__(/*! ../modules/es.typed-array.slice */ \"./node_modules/core-js/modules/es.typed-array.slice.js\");\n__webpack_require__(/*! ../modules/es.typed-array.some */ \"./node_modules/core-js/modules/es.typed-array.some.js\");\n__webpack_require__(/*! ../modules/es.typed-array.sort */ \"./node_modules/core-js/modules/es.typed-array.sort.js\");\n__webpack_require__(/*! ../modules/es.typed-array.subarray */ \"./node_modules/core-js/modules/es.typed-array.subarray.js\");\n__webpack_require__(/*! ../modules/es.typed-array.to-locale-string */ \"./node_modules/core-js/modules/es.typed-array.to-locale-string.js\");\n__webpack_require__(/*! ../modules/es.typed-array.to-string */ \"./node_modules/core-js/modules/es.typed-array.to-string.js\");\n__webpack_require__(/*! ../modules/es.unescape */ \"./node_modules/core-js/modules/es.unescape.js\");\n__webpack_require__(/*! ../modules/es.weak-map */ \"./node_modules/core-js/modules/es.weak-map.js\");\n__webpack_require__(/*! ../modules/es.weak-set */ \"./node_modules/core-js/modules/es.weak-set.js\");\n__webpack_require__(/*! ../modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom-exception.constructor */ \"./node_modules/core-js/modules/web.dom-exception.constructor.js\");\n__webpack_require__(/*! ../modules/web.dom-exception.stack */ \"./node_modules/core-js/modules/web.dom-exception.stack.js\");\n__webpack_require__(/*! ../modules/web.dom-exception.to-string-tag */ \"./node_modules/core-js/modules/web.dom-exception.to-string-tag.js\");\n__webpack_require__(/*! ../modules/web.immediate */ \"./node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ../modules/web.queue-microtask */ \"./node_modules/core-js/modules/web.queue-microtask.js\");\n__webpack_require__(/*! ../modules/web.structured-clone */ \"./node_modules/core-js/modules/web.structured-clone.js\");\n__webpack_require__(/*! ../modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ../modules/web.url */ \"./node_modules/core-js/modules/web.url.js\");\n__webpack_require__(/*! ../modules/web.url.to-json */ \"./node_modules/core-js/modules/web.url.to-json.js\");\n__webpack_require__(/*! ../modules/web.url-search-params */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\n\n\n//# sourceURL=webpack://leaderboard/./node_modules/core-js/stable/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100vw;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n  color: #333;\\r\\n  background-color: cadetblue;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  margin: 20px 40px;\\r\\n  font-size: 52px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 30px;\\r\\n  color: #fff;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style-type: none;\\r\\n  padding: 10px;\\r\\n  color: brown;\\r\\n  background-color: #333;\\r\\n  font-family: 'Franklin Gothic Medium', sans-serif;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nsection::before {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  background-color: #333;\\r\\n  width: 100%;\\r\\n  height: 2px;\\r\\n  transform: scaleX(0);\\r\\n  transform-origin: left;\\r\\n  transition: transform 250ms ease-in;\\r\\n}\\r\\n\\r\\nsection:hover::before {\\r\\n  transform: scaleX(1);\\r\\n  transform-origin: right;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  width: 100px;\\r\\n  height: 42px;\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  font-weight: bolder;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  cursor: pointer;\\r\\n  filter: invert(85%);\\r\\n}\\r\\n\\r\\n.scores > header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 18px;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  max-width: 960px;\\r\\n  align-self: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.row > section {\\r\\n  min-width: 400px;\\r\\n  margin: 14px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 250px;\\r\\n  margin-top: 18px;\\r\\n}\\r\\n\\r\\n.form > button {\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n#display-score {\\r\\n  border: 2px solid #555;\\r\\n}\\r\\n\\r\\n#display-score > li:nth-child(even) {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  outline-offset: 5px;\\r\\n  outline: 2px solid #333;\\r\\n  margin: 16px 0;\\r\\n  border: none;\\r\\n  font-size: 20px;\\r\\n  border-radius: 6px;\\r\\n  padding: 2px 0;\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/board-api.js":
/*!**************************!*\
  !*** ./src/board-api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage */ \"./src/local_storage.js\");\n\n\nconst url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\n\nconst createGame = async () => {\n  const game = {\n    name: 'Tetris',\n  };\n\n  const response = await fetch(`${url}games/`, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify(game),\n  });\n\n  const gameID = await response.json();\n\n  const str = gameID.result.match(/(?<=:\\s)\\w+/g)[0];\n  _local_storage__WEBPACK_IMPORTED_MODULE_0__.storage.save({ gameID: str });\n\n  return str;\n};\n\nif (_local_storage__WEBPACK_IMPORTED_MODULE_0__.storage.retrieve() === null) {\n  createGame();\n}\n\nconst scoreDisp = () => document.querySelector('#display-score');\nconst checkEmpty = () => {\n  if (scoreDisp().innerHTML === '') {\n    const listItem = document.createElement('li');\n    listItem.textContent = 'Recorded No Scores';\n    scoreDisp().appendChild(listItem);\n  }\n};\nconst displayScores = (scores) => {\n  scores.forEach((scoreObject) => {\n    const listItem = document.createElement('li');\n    listItem.textContent = `${scoreObject.user}: ${scoreObject.score}`;\n    scoreDisp().appendChild(listItem);\n  });\n};\n\nconst scoresUrl = () => `${url}games/${_local_storage__WEBPACK_IMPORTED_MODULE_0__.storage.retrieve()}/scores/`;\nconst getScoreObjects = async () => {\n  const response = await fetch(scoresUrl());\n  const scores = (await response.json()).result;\n\n  displayScores(scores);\n};\n\nconst refresh = async () => {\n  scoreDisp().innerHTML = '';\n  await getScoreObjects();\n  checkEmpty();\n};\n\nconst addRefresh = () => {\n  const button = document.querySelector('#refresh');\n  button.addEventListener('click', () => {\n    refresh();\n  });\n};\nwindow.addEventListener('load', () => {\n  refresh();\n});\naddRefresh();\n\nconst postScore = (scoreObject) => {\n  fetch(scoresUrl(), {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify(scoreObject),\n\n  });\n};\nconst addSubmit = () => {\n  const form = document.querySelector('form');\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const formData = new FormData(form);\n    const object = {\n      user: formData.get('user'),\n      score: formData.get('score'),\n    };\n    form.reset();\n\n    postScore(object);\n  });\n};\n\naddSubmit();\n\n\n//# sourceURL=webpack://leaderboard/./src/board-api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable */ \"./node_modules/core-js/stable/index.js\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _board_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board-api */ \"./src/board-api.js\");\n\r\n\r\n\r\n// import 'regenerator-runtime/runtime';\r\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/local_storage.js":
/*!******************************!*\
  !*** ./src/local_storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageManager),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\nclass LocalStorageManager {\n  save = (object) => {\n    const stringObject = JSON.stringify(object);\n    window.localStorage.setItem('object', stringObject);\n  }\n\n  retrieve = () => {\n    const serialObject = window.localStorage.getItem('object');\n    const object = JSON.parse(serialObject) || null;\n    return (object === null) ? null : object.gameID;\n  }\n}\n\nconst storage = new LocalStorageManager();\n\n//# sourceURL=webpack://leaderboard/./src/local_storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;