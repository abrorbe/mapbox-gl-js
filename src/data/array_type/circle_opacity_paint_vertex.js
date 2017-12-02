// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class CircleOpacityPaintVertexStruct extends Struct {
    a_circle_opacity: number;
}

(Object.defineProperty: any)(
    CircleOpacityPaintVertexStruct.prototype,
    'a_circle_opacity',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class CircleOpacityPaintVertexStructArray extends StructArrayLayout {
    geta_circle_opacity(index: number) { return this.float32[index * 1 + 0]; }
}

(CircleOpacityPaintVertexStructArray: any).serialize = StructArray.serialize;

CircleOpacityPaintVertexStructArray.prototype.members = [{"name":"a_circle_opacity", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
CircleOpacityPaintVertexStructArray.prototype.StructType = CircleOpacityPaintVertexStruct;

register(CircleOpacityPaintVertexStructArray);

module.exports = CircleOpacityPaintVertexStructArray;
