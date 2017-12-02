// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class FillOpacityPaintVertexStruct extends Struct {
    a_fill_opacity: number;
}

(Object.defineProperty: any)(
    FillOpacityPaintVertexStruct.prototype,
    'a_fill_opacity',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class FillOpacityPaintVertexStructArray extends StructArrayLayout {
    geta_fill_opacity(index: number) { return this.float32[index * 1 + 0]; }
}

(FillOpacityPaintVertexStructArray: any).serialize = StructArray.serialize;

FillOpacityPaintVertexStructArray.prototype.members = [{"name":"a_fill_opacity", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
FillOpacityPaintVertexStructArray.prototype.StructType = FillOpacityPaintVertexStruct;

register(FillOpacityPaintVertexStructArray);

module.exports = FillOpacityPaintVertexStructArray;
