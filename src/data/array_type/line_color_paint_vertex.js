// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_2f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class LineColorPaintVertexStruct extends Struct {
    a_line_color0: number;
    a_line_color1: number;
}

(Object.defineProperty: any)(
    LineColorPaintVertexStruct.prototype,
    'a_line_color0',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    LineColorPaintVertexStruct.prototype,
    'a_line_color1',
    {
        get: function () { return this._structArray.float32[this._pos4 + 1]; },
        set: function (x) { this._structArray.float32[this._pos4 + 1] = x; }
    }
);

class LineColorPaintVertexStructArray extends StructArrayLayout {
    geta_line_color0(index: number) { return this.float32[index * 2 + 0]; }
    geta_line_color1(index: number) { return this.float32[index * 2 + 1]; }
}

(LineColorPaintVertexStructArray: any).serialize = StructArray.serialize;

LineColorPaintVertexStructArray.prototype.members = [{"name":"a_line_color", "type":"Float32", "components":2, "offset":0, "size":4, "view":"float32"}];
LineColorPaintVertexStructArray.prototype.StructType = LineColorPaintVertexStruct;

register(LineColorPaintVertexStructArray);

module.exports = LineColorPaintVertexStructArray;
