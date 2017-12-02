// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class LineBlurPaintVertexStruct extends Struct {
    a_line_blur: number;
}

(Object.defineProperty: any)(
    LineBlurPaintVertexStruct.prototype,
    'a_line_blur',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class LineBlurPaintVertexStructArray extends StructArrayLayout {
    geta_line_blur(index: number) { return this.float32[index * 1 + 0]; }
}

(LineBlurPaintVertexStructArray: any).serialize = StructArray.serialize;

LineBlurPaintVertexStructArray.prototype.members = [{"name":"a_line_blur", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
LineBlurPaintVertexStructArray.prototype.StructType = LineBlurPaintVertexStruct;

register(LineBlurPaintVertexStructArray);

module.exports = LineBlurPaintVertexStructArray;
