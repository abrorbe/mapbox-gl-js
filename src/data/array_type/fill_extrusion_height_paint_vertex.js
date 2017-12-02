// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class FillExtrusionHeightPaintVertexStruct extends Struct {
    a_fill_extrusion_height: number;
}

(Object.defineProperty: any)(
    FillExtrusionHeightPaintVertexStruct.prototype,
    'a_fill_extrusion_height',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class FillExtrusionHeightPaintVertexStructArray extends StructArrayLayout {
    geta_fill_extrusion_height(index: number) { return this.float32[index * 1 + 0]; }
}

(FillExtrusionHeightPaintVertexStructArray: any).serialize = StructArray.serialize;

FillExtrusionHeightPaintVertexStructArray.prototype.members = [{"name":"a_fill_extrusion_height", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
FillExtrusionHeightPaintVertexStructArray.prototype.StructType = FillExtrusionHeightPaintVertexStruct;

register(FillExtrusionHeightPaintVertexStructArray);

module.exports = FillExtrusionHeightPaintVertexStructArray;
