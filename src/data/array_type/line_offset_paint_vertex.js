// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class LineOffsetPaintVertexStruct extends Struct {
    a_line_offset: number;
}

(Object.defineProperty: any)(
    LineOffsetPaintVertexStruct.prototype,
    'a_line_offset',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class LineOffsetPaintVertexStructArray extends StructArrayLayout {
    geta_line_offset(index: number) { return this.float32[index * 1 + 0]; }
}

(LineOffsetPaintVertexStructArray: any).serialize = StructArray.serialize;

LineOffsetPaintVertexStructArray.prototype.members = [{"name":"a_line_offset", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
LineOffsetPaintVertexStructArray.prototype.StructType = LineOffsetPaintVertexStruct;

register(LineOffsetPaintVertexStructArray);

module.exports = LineOffsetPaintVertexStructArray;
