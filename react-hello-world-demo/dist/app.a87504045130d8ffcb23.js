/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * check to see if my es6 is tranpiled to es5
	 */
	
	// variable declaration - const
	
	var myString = [];
	// myString = 'hello' //error!
	myString.push(5);
	
	// variable declaration let
	
	var myNumber = 5;
	myNumber = 'hello';
	
	// scope of let and const
	function shouldPrint(isPrint) {
	    if (isPrint) {
	        var _message = 'hello world';
	    }
	    console.log(message);
	}
	// shouldPrint(true); // will output an error
	
	// class
	
	var Pokemon = function () {
	    function Pokemon() {
	        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pikachu';
	
	        _classCallCheck(this, Pokemon);
	
	        this.name = name;
	    }
	
	    _createClass(Pokemon, [{
	        key: 'sayHello',
	        value: function sayHello() {
	            console.log('hello');
	        }
	    }]);

	    return Pokemon;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=app.a87504045130d8ffcb23.js.map