module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  mongoURI: 'mongodb+srv://feelfunny:feelfunny123@feelfunny-jfu4v.mongodb.net/test?retryWrites=true',\n  DB: {\n    DEFAULT_COUNT: 0,\n    DEFAULT_CONTENT_TYPE: 1,\n    //1-images 2- videos\n    DEFAULT_TRUE: true,\n    DEFAULT_FALSE: false,\n    DEFAULT_ACCOUNT_TYPE: 0,\n    //0 - Normal , 1- Google, 2- Facebook\n    GENDER: {\n      MALE: 1,\n      FEMALE: 2,\n      OTHER: 3\n    },\n    BADGETS: {\n      NOOBIE: 1,\n      PRO: 2\n    }\n  }\n});\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./server/controllers/admin.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/admin.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_genres_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/genres.model */ \"./server/models/genres.model.js\");\n/* harmony import */ var _models_movies_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/movies.model */ \"./server/models/movies.model.js\");\n/* harmony import */ var _helpers_db_errors_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/db_errors_handler */ \"./server/helpers/db_errors_handler.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  listGenres: function () {\n    var _listGenres = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(req, res) {\n      var listObject, genres;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              listObject = {};\n\n              if (req.query['name'] && req.query['name'] !== null) {\n                listObject['name'] = req.query['name'].trim().toLowerCase();\n              }\n\n              _context.prev = 2;\n              _context.next = 5;\n              return _models_genres_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n                $match: listObject\n              }]).sort({\n                created: -1\n              });\n\n            case 5:\n              genres = _context.sent;\n              res.status(200).send({\n                data: genres\n              });\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](2);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 9]]);\n    }));\n\n    function listGenres(_x, _x2) {\n      return _listGenres.apply(this, arguments);\n    }\n\n    return listGenres;\n  }(),\n  addGenre: function () {\n    var _addGenre = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(req, res) {\n      var genreObject, genre, result;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              genreObject = {\n                name: req.body['name'] ? req.body['name'].trim() : ''\n              };\n              _context2.prev = 1;\n              genre = new _models_genres_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"](genreObject);\n              _context2.next = 5;\n              return genre.save();\n\n            case 5:\n              result = _context2.sent;\n              res.status(200).send({\n                data: result\n              });\n              _context2.next = 12;\n              break;\n\n            case 9:\n              _context2.prev = 9;\n              _context2.t0 = _context2[\"catch\"](1);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 9]]);\n    }));\n\n    function addGenre(_x3, _x4) {\n      return _addGenre.apply(this, arguments);\n    }\n\n    return addGenre;\n  }(),\n  updateGenre: function () {\n    var _updateGenre = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(req, res) {\n      var toUpdateSeachKey, toUpdateSeachValue, updateObject, result;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              toUpdateSeachKey = req.body['seach_key'] ? req.body['seach_key'].trim() : '';\n              toUpdateSeachValue = req.body['seach_value'] ? req.body['seach_value'].trim() : '';\n\n              if (typeof toUpdateSeachValue == 'string') {\n                toUpdateSeachValue = toUpdateSeachValue.toLowerCase();\n              }\n\n              updateObject = {};\n\n              if (req.body['name'] && req.body['name'] !== null) {\n                updateObject['name'] = req.body['name'].trim();\n              }\n\n              _context3.prev = 5;\n              _context3.next = 8;\n              return _models_genres_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate(_defineProperty({}, toUpdateSeachKey, toUpdateSeachValue), updateObject, {\n                new: true\n              });\n\n            case 8:\n              result = _context3.sent;\n              res.status(200).send({\n                data: result\n              });\n              _context3.next = 16;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3[\"catch\"](5);\n              console.log(_context3.t0);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 16:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[5, 12]]);\n    }));\n\n    function updateGenre(_x5, _x6) {\n      return _updateGenre.apply(this, arguments);\n    }\n\n    return updateGenre;\n  }(),\n  deleteGenre: function () {\n    var _deleteGenre = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee4(req, res) {\n      var deleteKey, deleteValue, result;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              deleteKey = req.body['delete_key'] ? req.body['delete_key'].trim() : '';\n              deleteValue = req.body['delete_value'] ? req.body['delete_value'].trim() : '';\n              _context4.prev = 2;\n              _context4.next = 5;\n              return _models_genres_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(_defineProperty({}, deleteKey, deleteValue));\n\n            case 5:\n              result = _context4.sent;\n              res.status(200).send({\n                data: result\n              });\n              _context4.next = 12;\n              break;\n\n            case 9:\n              _context4.prev = 9;\n              _context4.t0 = _context4[\"catch\"](2);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 12:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[2, 9]]);\n    }));\n\n    function deleteGenre(_x7, _x8) {\n      return _deleteGenre.apply(this, arguments);\n    }\n\n    return deleteGenre;\n  }(),\n  addGenerations: function () {\n    var _addGenerations = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee5(req, res) {\n      var genresListObject, result;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              genresListObject = [{\n                name: 'action'\n              }, {\n                name: 'adventure'\n              }, {\n                name: 'sci-fi'\n              }, {\n                name: 'fiction'\n              }, {\n                name: 'suspense'\n              }, {\n                name: 'thriller'\n              }, {\n                name: 'comedy'\n              }, {\n                name: 'romance'\n              }, {\n                name: 'biopics'\n              }];\n              _context5.prev = 1;\n              _context5.next = 4;\n              return _models_genres_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].insertMany(genresListObject);\n\n            case 4:\n              result = _context5.sent;\n              res.status(200).send({\n                data: result\n              });\n              _context5.next = 11;\n              break;\n\n            case 8:\n              _context5.prev = 8;\n              _context5.t0 = _context5[\"catch\"](1);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 11:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, null, [[1, 8]]);\n    }));\n\n    function addGenerations(_x9, _x10) {\n      return _addGenerations.apply(this, arguments);\n    }\n\n    return addGenerations;\n  }(),\n  //ROUTES ACTIONS FOR MOVIES\n  addNewMovie: function () {\n    var _addNewMovie = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee6(req, res) {\n      var movieTitle, movieYear, movieDirector, movieGenre, movieObject, movie, result;\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              movieTitle = req.body['movie_title'] ? req.body['movie_title'].trim() : '', movieYear = req.body['movie_year'] ? req.body['movie_year'].trim() : '', movieDirector = req.body['movie_director'] ? req.body['movie_director'].trim() : '', movieGenre = req.body['movie_genre'] ? req.body['movie_genre'].trim() : '';\n              movieObject = {\n                title: movieTitle,\n                year: movieYear,\n                director: movieDirector,\n                genre: movieGenre\n              };\n              _context6.prev = 2;\n              movie = new _models_movies_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](movieObject);\n              _context6.next = 6;\n              return movie.save();\n\n            case 6:\n              result = _context6.sent;\n              res.status(200).send({\n                data: result\n              });\n              _context6.next = 14;\n              break;\n\n            case 10:\n              _context6.prev = 10;\n              _context6.t0 = _context6[\"catch\"](2);\n              console.log(_context6.t0);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 14:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6, null, [[2, 10]]);\n    }));\n\n    function addNewMovie(_x11, _x12) {\n      return _addNewMovie.apply(this, arguments);\n    }\n\n    return addNewMovie;\n  }(),\n  updateMovie: function () {\n    var _updateMovie = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee7(req, res) {\n      var toUpdateSeachKey, toUpdateSeachValue, updateObject, result;\n      return regeneratorRuntime.wrap(function _callee7$(_context7) {\n        while (1) {\n          switch (_context7.prev = _context7.next) {\n            case 0:\n              toUpdateSeachKey = req.body['seach_key'] ? req.body['seach_key'].trim() : '';\n              toUpdateSeachValue = req.body['seach_value'] ? req.body['seach_value'].trim() : '';\n\n              if (typeof toUpdateSeachValue == 'string') {\n                toUpdateSeachValue = toUpdateSeachValue.toLowerCase();\n              }\n\n              updateObject = {};\n\n              if (req.body['movie_title'] && req.body['movie_title'] !== null) {\n                updateObject['title'] = req.body['movie_title'].trim();\n              }\n\n              if (req.body['movie_year'] && req.body['movie_year'] !== null) {\n                updateObject['year'] = req.body['movie_year'].trim();\n              }\n\n              if (req.body['movie_director'] && req.body['movie_director'] !== null) {\n                updateObject['director'] = req.body['movie_director'].trim();\n              }\n\n              if (req.body['movie_genre'] && req.body['movie_genre'] !== null) {\n                updateObject['genre'] = req.body['movie_genre'].trim();\n              }\n\n              _context7.prev = 8;\n              _context7.next = 11;\n              return _models_movies_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate(_defineProperty({}, toUpdateSeachKey, toUpdateSeachValue), updateObject, {\n                new: true\n              });\n\n            case 11:\n              result = _context7.sent;\n              res.status(200).send({\n                data: result\n              });\n              _context7.next = 19;\n              break;\n\n            case 15:\n              _context7.prev = 15;\n              _context7.t0 = _context7[\"catch\"](8);\n              console.log(_context7.t0);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 19:\n            case \"end\":\n              return _context7.stop();\n          }\n        }\n      }, _callee7, null, [[8, 15]]);\n    }));\n\n    function updateMovie(_x13, _x14) {\n      return _updateMovie.apply(this, arguments);\n    }\n\n    return updateMovie;\n  }(),\n  listMovies: function () {\n    var _listMovies = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee8(req, res) {\n      var listObject, movies;\n      return regeneratorRuntime.wrap(function _callee8$(_context8) {\n        while (1) {\n          switch (_context8.prev = _context8.next) {\n            case 0:\n              listObject = {};\n\n              if (req.query['title'] && req.query['title'] !== null) {\n                listObject['title'] = req.query['title'].trim().toLowerCase();\n              }\n\n              if (req.query['year'] && req.query['year'] !== null) {\n                listObject['year'] = req.query['year'].trim().toLowerCase();\n              }\n\n              if (req.query['director'] && req.query['director'] !== null) {\n                listObject['director'] = req.query['director'].trim().toLowerCase();\n              }\n\n              if (req.query['genre'] && req.query['genre'] !== null) {\n                listObject['genre'] = req.query['genre'].trim().toLowerCase();\n              }\n\n              _context8.prev = 5;\n              _context8.next = 8;\n              return _models_movies_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].aggregate([{\n                $match: listObject\n              }]).sort({\n                created: -1\n              });\n\n            case 8:\n              movies = _context8.sent;\n              res.status(200).send({\n                data: movies\n              });\n              _context8.next = 15;\n              break;\n\n            case 12:\n              _context8.prev = 12;\n              _context8.t0 = _context8[\"catch\"](5);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 15:\n            case \"end\":\n              return _context8.stop();\n          }\n        }\n      }, _callee8, null, [[5, 12]]);\n    }));\n\n    function listMovies(_x15, _x16) {\n      return _listMovies.apply(this, arguments);\n    }\n\n    return listMovies;\n  }(),\n  deleteMovies: function () {\n    var _deleteMovies = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee9(req, res) {\n      var listObject, result;\n      return regeneratorRuntime.wrap(function _callee9$(_context9) {\n        while (1) {\n          switch (_context9.prev = _context9.next) {\n            case 0:\n              listObject = {};\n\n              if (req.body['title'] && req.body['title'] !== null) {\n                listObject['title'] = req.body['title'].trim().toLowerCase();\n              }\n\n              if (req.body['year'] && req.body['year'] !== null) {\n                listObject['year'] = req.body['year'].trim().toLowerCase();\n              }\n\n              if (req.body['director'] && req.body['director'] !== null) {\n                listObject['director'] = req.body['director'].trim().toLowerCase();\n              }\n\n              if (req.body['genre'] && req.body['genre'] !== null) {\n                listObject['genre'] = req.body['genre'].trim().toLowerCase();\n              }\n\n              _context9.prev = 5;\n              _context9.next = 8;\n              return _models_movies_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(listObject);\n\n            case 8:\n              result = _context9.sent;\n              res.status(200).send({\n                data: result\n              });\n              _context9.next = 15;\n              break;\n\n            case 12:\n              _context9.prev = 12;\n              _context9.t0 = _context9[\"catch\"](5);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ERRORS[100]\n              });\n\n            case 15:\n            case \"end\":\n              return _context9.stop();\n          }\n        }\n      }, _callee9, null, [[5, 12]]);\n    }));\n\n    function deleteMovies(_x17, _x18) {\n      return _deleteMovies.apply(this, arguments);\n    }\n\n    return deleteMovies;\n  }() // uploadUsers : async (req, res)=>{\n  //        // let usersList = fakeUsers.data;\n  //        // let count = 1;\n  //        // for(let x in usersList){\n  //        // \t   usersList[x]['name'] = usersList[x]['name'].toLowerCase();\n  //        // \t   usersList[x]['email'] = count+\"@gmail.com\";\n  //        //     ++count;\n  //        // }\n  //        // //const result = await User.find({account_type: -1}).remove();\n  //        // const result = await User.insertMany(usersList)\n  //        // res.send({\n  //        // \t  data : result\n  //        // })\n  // },\n  // listUsers : async (req, res)=>{\n  //       const users = await User.find({}).sort({created: 1});\n  //       res.send({\n  //       \t  data: users\n  //       })\n  // }\n\n});\n\n//# sourceURL=webpack:///./server/controllers/admin.controller.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/admin.route */ \"./server/routes/admin.route.js\");\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\napp.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use('/api', _routes_admin_route__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.get('/', function (req, res) {\n  res.send({\n    key: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nihil minima deserunt magni, deleniti beatae consectetur illum blanditiis, veniam quaerat accusantium! Iste praesentium saepe vitae voluptas nostrum quidem reiciendis provident?\"\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/db_errors_handler.js":
/*!*********************************************!*\
  !*** ./server/helpers/db_errors_handler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * Get unique error field name\n */\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n  var output;\n\n  try {\n    var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n/**\n * Get the error message from error object\n */\n\n\nvar getErrorMessage = function getErrorMessage(err) {\n  var message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (var errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getErrorMessage: getErrorMessage\n});\n\n//# sourceURL=webpack:///./server/helpers/db_errors_handler.js?");

/***/ }),

/***/ "./server/models/genres.model.js":
/*!***************************************!*\
  !*** ./server/models/genres.model.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar Genres = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    lowecase: true\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comments: {\n    type: String\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('genres', Genres));\n\n//# sourceURL=webpack:///./server/models/genres.model.js?");

/***/ }),

/***/ "./server/models/movies.model.js":
/*!***************************************!*\
  !*** ./server/models/movies.model.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar Movies = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  year: {\n    type: String,\n    trim: true\n  },\n  director: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  genre: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comments: {\n    type: String\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('movies', Movies));\n\n//# sourceURL=webpack:///./server/models/movies.model.js?");

/***/ }),

/***/ "./server/routes/admin.route.js":
/*!**************************************!*\
  !*** ./server/routes/admin.route.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/admin.controller */ \"./server/controllers/admin.controller.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/sample-gene', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addGenerations);\nrouter.get('/genre', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listGenres);\nrouter.post('/genre', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addGenre);\nrouter.put('/genre', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateGenre);\nrouter.delete('/genre', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteGenre);\nrouter.get('/movie', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listMovies);\nrouter.post('/movie', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addNewMovie);\nrouter.put('/movie', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateMovie);\nrouter.delete('/movie', _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteMovies); // router.get('/upload-users', adminController.uploadUsers)\n// router.get('/list-users', adminController.listUsers)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/admin.route.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoURI, {\n  useNewUrlParser: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', function () {\n  throw new Error('unable to connect to database');\n});\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, function (err) {\n  if (err) console.log(err);\n  console.log(\"server is running on port %s\", _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshusavita/Documents/Companies/mverge/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });