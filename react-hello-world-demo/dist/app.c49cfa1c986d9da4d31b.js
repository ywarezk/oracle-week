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
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	// inheritance
	
	var Person = function (_Pokemon) {
	    _inherits(Person, _Pokemon);
	
	    function Person() {
	        _classCallCheck(this, Person);
	
	        return _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this, 'yariv'));
	    }
	
	    _createClass(Person, [{
	        key: 'sayHello',
	        value: function sayHello() {
	            _get(Person.prototype.__proto__ || Object.getPrototypeOf(Person.prototype), 'sayHello', this).call(this);
	        }
	    }]);
	
	    return Person;
	}(Pokemon);

/***/ }
/******/ ]);
//# sourceMappingURL=app.c49cfa1c986d9da4d31b.js.map