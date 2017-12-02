// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class CircleBlurPaintVertexStruct extends Struct {
    a_circle_blur: number;
}

(Object.defineProperty: any)(
    CircleBlurPaintVertexStruct.prototype,
    'a_circle_blur',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class CircleBlurPaintVertexStructArray extends StructArrayLayout {
    geta_circle_blur(index: number) { return this.float32[index * 1 + 0]; }
}

(CircleBlurPaintVertexStructArray: any).serialize = StructArray.serialize;

CircleBlurPaintVertexStructArray.prototype.members = [{"name":"a_circle_blur", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
CircleBlurPaintVertexStructArray.prototype.StructType = CircleBlurPaintVertexStruct;

register(CircleBlurPaintVertexStructArray);

module.exports = CircleBlurPaintVertexStructArray;
