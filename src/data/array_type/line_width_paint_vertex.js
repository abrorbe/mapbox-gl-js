// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class LineWidthPaintVertexStruct extends Struct {
    a_line_width: number;
}

(Object.defineProperty: any)(
    LineWidthPaintVertexStruct.prototype,
    'a_line_width',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class LineWidthPaintVertexStructArray extends StructArrayLayout {
    geta_line_width(index: number) { return this.float32[index * 1 + 0]; }
}

(LineWidthPaintVertexStructArray: any).serialize = StructArray.serialize;

LineWidthPaintVertexStructArray.prototype.members = [{"name":"a_line_width", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
LineWidthPaintVertexStructArray.prototype.StructType = LineWidthPaintVertexStruct;

register(LineWidthPaintVertexStructArray);

module.exports = LineWidthPaintVertexStructArray;
