(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/wasm_game_of_life.js":
/*!***********************************!*\
  !*** ../pkg/wasm_game_of_life.js ***!
  \***********************************/
/*! exports provided: Cell, Universe, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,Alive:1, });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    insert_glider(row, column) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_insert_glider\"](this.ptr, row, column);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    toggle_cell(row, column) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_toggle_cell\"](this.ptr, row, column);\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    */\n    tick() {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * @returns {Universe}\n    */\n    static new() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"]();\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](8, this.ptr);\n            var r0 = getInt32Memory0()[8 / 4 + 0];\n            var r1 = getInt32Memory0()[8 / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_universe_free, universe_insert_glider, universe_toggle_cell, universe_height, universe_width, universe_cells, universe_tick, universe_new, universe_render, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_game_of_life.js */ \"../pkg/wasm_game_of_life.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n/* harmony import */ var wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-game-of-life/wasm_game_of_life_bg */ \"../pkg/wasm_game_of_life_bg.wasm\");\n\n\n\nconst CELL_SIZE = 5; // px\nconst GRID_COLOR = \"#CCCCCC\";\nconst DEAD_COLOR = \"#FFFFFF\";\nconst ALIVE_COLOR = \"#000000\";\nconst universe = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new();\nconst width = universe.width();\nconst height = universe.height();\n\nconst canvas = document.getElementById(\"game-of-life-canvas\")\ncanvas.height = (CELL_SIZE + 1) * height + 1;\ncanvas.width = (CELL_SIZE + 1) * width + 1;\nconst ctx = canvas.getContext('2d');\nconst getIndex = (row, column) => {\n    return row * width + column;\n};\nconst drawGrid = () => {\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COLOR;\n\n    // Vertical lines.\n    for (let i = 0; i <= width; i++) {\n        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n    }\n\n    // Horizontal lines.\n    for (let j = 0; j <= height; j++) {\n        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n    }\n\n    ctx.stroke();\n};\nconst drawCells = () => {\n    const cellsPtr = universe.cells();\n    const cells = new Uint8Array(wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, cellsPtr, width * height);\n\n    ctx.beginPath();\n\n    for (let row = 0; row < height; row++) {\n        for (let col = 0; col < width; col++) {\n            const idx = getIndex(row, col);\n\n            ctx.fillStyle = cells[idx] === wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Dead\n                ? DEAD_COLOR\n                : ALIVE_COLOR;\n\n            ctx.fillRect(\n                col * (CELL_SIZE + 1) + 1,\n                row * (CELL_SIZE + 1) + 1,\n                CELL_SIZE,\n                CELL_SIZE\n            );\n        }\n    }\n\n    ctx.stroke();\n};\ncanvas.addEventListener(\"click\", event => {\n    const boundingRect = canvas.getBoundingClientRect();\n\n    const scaleX = canvas.width / boundingRect.width;\n    const scaleY = canvas.height / boundingRect.height;\n\n    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n    const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);\n    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);\n\n    if (event.shiftKey) {\n        universe.insert_glider(row, col)\n    } else {\n        universe.toggle_cell(row, col);\n    }\n\n    drawGrid();\n    drawCells();\n});\n\nlet animationID = null;\nconst button = document.getElementById(\"play-pause-button\");\nbutton.addEventListener(\"click\", e => {\n    if (animationID) {\n        stop();\n    } else {\n        play();\n    }\n})\n\nconst play = () => {\n    button.textContent = \"■\"\n    renderLoop();\n}\nconst stop = () => {\n    cancelAnimationFrame(animationID);\n    animationID = null;\n    button.textContent = \"▶️\"\n}\n\nconst renderLoop = () => {\n    universe.tick();\n    drawGrid();\n    drawCells();\n    animationID = requestAnimationFrame(renderLoop);\n};\n\nplay();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);