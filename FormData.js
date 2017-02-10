/**
 * This is the babel (https://babeljs.io/repl) converted file 
 * of the original source.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var map = new WeakMap();
var wm = function wm(o) {
	return map.get(o);
};

function normilizeValue(_ref) {
	var _ref2 = _slicedToArray(_ref, 2),
	value = _ref2[0],
	filename = _ref2[1];
	
	if (value instanceof Blob) value = new File([value], filename, {
		type: value.type,
		lastModified: value.lastModified
	});
	
	return value;
}

function stringify(name) {
	if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
	
	return [name + ''];
}

function normilizeArgs(name, value, filename) {
	if (arguments.length < 2) throw new TypeError('2 arguments required, but only ' + arguments.length + ' present.');
	
	return value instanceof Blob ? [name + '', value, filename !== undefined ? filename + '' : value[Symbol.toStringTag] === 'File' ? value.name : 'Blob'] : [name + '', value + ''];
}

/**
 * @implements {Iterable}
 */

var FormDataPolyfill = function () {
	
	/**
	 * FormData class
	 *
	 * @param {HTMLElement=} form
	 */
	function FormDataPolyfill(form) {
		_classCallCheck(this, FormDataPolyfill);
		
		map.set(this, Object.create(null));
		
		if (!form) return this;
		
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;
		
		try {
			for (var _iterator = form.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _ref4 = _step.value;
				var name = _ref4.name,
				type = _ref4.type,
				value = _ref4.value,
				files = _ref4.files,
				checked = _ref4.checked,
				selectedOptions = _ref4.selectedOptions;
				
				if (!name) continue;
				
				if (type === 'file') {
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;
					
					try {
						for (var _iterator2 = files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var _file = _step2.value;
							
							this.append(name, _file);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				} else if (type === 'select-multiple' || type === 'select-one') {
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;
					
					try {
						for (var _iterator3 = selectedOptions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var _elm = _step3.value;
							
							this.append(name, _elm.value);
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
				} else if (type === 'checkbox' && checked) this.append(name, value);else this.append(name, value);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
	
	/**
	 * Append a field
	 *
	 * @param   {String}           name      field name
	 * @param   {String|Blob|File} value     string / blob / file
	 * @param   {String=}          filename  filename to use with blob
	 * @return  {Undefined}
	 */
	
	
	_createClass(FormDataPolyfill, [{
		key: 'append',
		value: function append(name, value, filename) {
			var map = wm(this);
			
			if (!map[name]) map[name] = [];
				 
				 map[name].push([value, filename]);
		}
		
		/**
		 * Delete all fields values given name
		 *
		 * @param   {String}  name  Field name
		 * @return  {Undefined}
		 */
		
	}, {
		key: 'delete',
		value: function _delete(name) {
			delete wm(this)[name];
		}
		
		/**
		 * Iterate over all fields as [name, value]
		 *
		 * @return {Iterator}
		 */
		
	}, {
		key: 'entries',
		value: regeneratorRuntime.mark(function entries() {
			var map, name, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, value;
			
			return regeneratorRuntime.wrap(function entries$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							map = wm(this);
							_context.t0 = regeneratorRuntime.keys(map);
							
						case 2:
							if ((_context.t1 = _context.t0()).done) {
								_context.next = 32;
								break;
							}
							
							name = _context.t1.value;
							_iteratorNormalCompletion4 = true;
							_didIteratorError4 = false;
							_iteratorError4 = undefined;
							_context.prev = 7;
							_iterator4 = map[name][Symbol.iterator]();
							
						case 9:
							if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
								_context.next = 16;
								break;
							}
							
							value = _step4.value;
							_context.next = 13;
							return [name, normilizeValue(value)];
							
						case 13:
							_iteratorNormalCompletion4 = true;
							_context.next = 9;
							break;
							
						case 16:
							_context.next = 22;
							break;
							
						case 18:
							_context.prev = 18;
							_context.t2 = _context['catch'](7);
							_didIteratorError4 = true;
							_iteratorError4 = _context.t2;
							
						case 22:
							_context.prev = 22;
							_context.prev = 23;
							
							if (!_iteratorNormalCompletion4 && _iterator4.return) {
								_iterator4.return();
							}
							
						case 25:
							_context.prev = 25;
							
							if (!_didIteratorError4) {
								_context.next = 28;
								break;
							}
							
							throw _iteratorError4;
							
						case 28:
							return _context.finish(25);
							
						case 29:
							return _context.finish(22);
							
						case 30:
							_context.next = 2;
							break;
							
						case 32:
						case 'end':
							return _context.stop();
					}
				}
			}, entries, this, [[7, 18, 22, 30], [23,, 25, 29]]);
		})
		
		/**
		 * Iterate over all fields
		 *
		 * @param   {Function}  callback  Executed for each item with parameters (value, name, thisArg)
		 * @param   {Object=}   thisArg   `this` context for callback function
		 * @return  {Undefined}
		 */
		
	}, {
		key: 'forEach',
		value: function forEach(callback, thisArg) {
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;
			
			try {
				for (var _iterator5 = this[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var _step5$value = _slicedToArray(_step5.value, 2),
				 name = _step5$value[0],
			  value = _step5$value[1];
			  
			  callback.call(thisArg, value, name, this);
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}
		}
		
		/**
		 * Return first field value given name
		 *
		 * @param   {String}  name  Field name
		 * @return  {String|File}   value Fields value
		 */
		
	}, {
		key: 'get',
		value: function get(name) {
			var map = wm(this);
			return map[name] ? normilizeValue(map[name][0]) : null;
		}
		
		/**
		 * Return all fields values given name
		 *
		 * @param   {String}  name  Fields name
		 * @return  {Array}         [value, value]
		 */
		
	}, {
		key: 'getAll',
		value: function getAll(name) {
			return (wm(this)[name] || []).map(normilizeValue);
		}
		
		/**
		 * Check for field name existence
		 *
		 * @param   {String}   name  Field name
		 * @return  {boolean}
		 */
		
	}, {
		key: 'has',
		value: function has(name) {
			return name in wm(this);
		}
		
		/**
		 * Iterate over all fields name
		 *
		 * @return {Iterator}
		 */
		
	}, {
		key: 'keys',
		value: regeneratorRuntime.mark(function keys() {
			var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _step6$value, name;
			
			return regeneratorRuntime.wrap(function keys$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_iteratorNormalCompletion6 = true;
							_didIteratorError6 = false;
							_iteratorError6 = undefined;
							_context2.prev = 3;
							_iterator6 = this[Symbol.iterator]();
							
						case 5:
							if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
								_context2.next = 12;
								break;
							}
							
							_step6$value = _slicedToArray(_step6.value, 1), name = _step6$value[0];
							_context2.next = 9;
							return name;
							
						case 9:
							_iteratorNormalCompletion6 = true;
							_context2.next = 5;
							break;
							
						case 12:
							_context2.next = 18;
							break;
							
						case 14:
							_context2.prev = 14;
							_context2.t0 = _context2['catch'](3);
							_didIteratorError6 = true;
							_iteratorError6 = _context2.t0;
							
						case 18:
							_context2.prev = 18;
							_context2.prev = 19;
							
							if (!_iteratorNormalCompletion6 && _iterator6.return) {
								_iterator6.return();
							}
							
						case 21:
							_context2.prev = 21;
							
							if (!_didIteratorError6) {
								_context2.next = 24;
								break;
							}
							
							throw _iteratorError6;
							
						case 24:
							return _context2.finish(21);
							
						case 25:
							return _context2.finish(18);
							
						case 26:
						case 'end':
							return _context2.stop();
					}
				}
			}, keys, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
		
		/**
		 * Overwrite all values given name
		 *
		 * @param   {String}    name      Filed name
		 * @param   {String}    value     Field value
		 * @param   {String=}   filename  Filename (optional)
		 * @return  {Undefined}
		 */
		
	}, {
		key: 'set',
		value: function set(name, value, filename) {
			wm(this)[name] = [[value, filename]];
		}
		
		/**
		 * Iterate over all fields
		 *
		 * @return {Iterator}
		 */
		
	}, {
		key: 'values',
		value: regeneratorRuntime.mark(function values() {
			var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _step7$value, name, value;
			
			return regeneratorRuntime.wrap(function values$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_iteratorNormalCompletion7 = true;
							_didIteratorError7 = false;
							_iteratorError7 = undefined;
							_context3.prev = 3;
							_iterator7 = this[Symbol.iterator]();
							
						case 5:
							if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
								_context3.next = 12;
								break;
							}
							
							_step7$value = _slicedToArray(_step7.value, 2), name = _step7$value[0], value = _step7$value[1];
							_context3.next = 9;
							return value;
							
						case 9:
							_iteratorNormalCompletion7 = true;
							_context3.next = 5;
							break;
							
						case 12:
							_context3.next = 18;
							break;
							
						case 14:
							_context3.prev = 14;
							_context3.t0 = _context3['catch'](3);
							_didIteratorError7 = true;
							_iteratorError7 = _context3.t0;
							
						case 18:
							_context3.prev = 18;
							_context3.prev = 19;
							
							if (!_iteratorNormalCompletion7 && _iterator7.return) {
								_iterator7.return();
							}
							
						case 21:
							_context3.prev = 21;
							
							if (!_didIteratorError7) {
								_context3.next = 24;
								break;
							}
							
							throw _iteratorError7;
							
						case 24:
							return _context3.finish(21);
							
						case 25:
							return _context3.finish(18);
							
						case 26:
						case 'end':
							return _context3.stop();
					}
				}
			}, values, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
		
		/**
		 * Non standard but it has been proposed: https://github.com/w3c/FileAPI/issues/40
		 *
		 * @return {ReadableStream}
		 */
		
	}, {
		key: 'stream',
		value: function stream() {
			try {
				return this._blob().stream();
			} catch (e) {
				throw new Error('Include https://github.com/jimmywarting/Screw-FileReader for streaming support');
			}
		}
		
		/**
		 * Return a native (perhaps degraded) FormData with only a `append` method
		 * Can throw if it's not supported
		 *
		 * @return {FormData}
		 */
		
	}, {
		key: '_asNative',
		value: function _asNative() {
			var fd = new FormData();
			
			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;
			
			try {
				for (var _iterator8 = this[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var _step8$value = _slicedToArray(_step8.value, 2),
				 name = _step8$value[0],
			  value = _step8$value[1];
			  
			  fd.append(name, value);
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8.return) {
						_iterator8.return();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}
			
			return fd;
		}
		
		/**
		 * [_blob description]
		 *
		 * @return {Blob} [description]
		 */
		
	}, {
		key: '_blob',
		value: function _blob() {
			var boundary = '----FormDataPolyfill' + Math.random();
			var chunks = [];
			
			var _iteratorNormalCompletion9 = true;
			var _didIteratorError9 = false;
			var _iteratorError9 = undefined;
			
			try {
				for (var _iterator9 = this[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
					var _step9$value = _slicedToArray(_step9.value, 2),
				 name = _step9$value[0],
			  value = _step9$value[1];
			  
			  chunks.push('--' + boundary + '\r\n');
			  
			  if (value[Symbol.toStringTag] === 'File') {
				  chunks.push('Content-Disposition: form-data; name="' + name + '"; filename="' + value.name + '"\r\n', 'Content-Type: ' + value.type + '\r\n\r\n', value, '\r\n');
			  } else {
				  chunks.push('Content-Disposition: form-data; name="' + name + '"\r\n\r\n' + value + '\r\n');
			  }
				}
			} catch (err) {
				_didIteratorError9 = true;
				_iteratorError9 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion9 && _iterator9.return) {
						_iterator9.return();
					}
				} finally {
					if (_didIteratorError9) {
						throw _iteratorError9;
					}
				}
			}
			
			chunks.push('--' + boundary + '--');
			
			return new Blob(chunks, { type: 'multipart/form-data; boundary=' + boundary });
		}
		
		/**
		 * The class itself is iterable
		 * alias for formdata.entries()
		 *
		 * @return  {Iterator}
		 */
		
	}, {
		key: Symbol.iterator,
		value: function value() {
			return this.entries();
		}
		
		/**
		 * Create the default string description.
		 * It is accessed internally by the Object.prototype.toString().
		 *
		 * @return {String} FormData
		 */
		
	}, {
		key: Symbol.toStringTag,
		get: function get() {
			return 'FormData';
		}
	}]);
	
	return FormDataPolyfill;
}();

var _arr = [['append', normilizeArgs], ['delete', stringify], ['get', stringify], ['getAll', stringify], ['has', stringify], ['set', normilizeArgs]];

var _loop = function _loop() {
	var _arr$_i = _slicedToArray(_arr[_i], 2),
	method = _arr$_i[0],
	overide = _arr$_i[1];
	
	var orig = FormDataPolyfill.prototype[method];
	FormDataPolyfill.prototype[method] = function () {
		return orig.apply(this, overide.apply(undefined, arguments));
	};
};

for (var _i = 0; _i < _arr.length; _i++) {
	_loop();
}

module.exports = FormDataPolyfill;
