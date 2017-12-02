// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class FillExtrusionBasePaintVertexStruct extends Struct {
    a_fill_extrusion_base: number;
}

(Object.defineProperty: any)(
    FillExtrusionBasePaintVertexStruct.prototype,
    'a_fill_extrusion_base',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class FillExtrusionBasePaintVertexStructArray extends StructArrayLayout {
    geta_fill_extrusion_base(index: number) { return this.float32[index * 1 + 0]; }
}

(FillExtrusionBasePaintVertexStructArray: any).serialize = StructArray.serialize;

FillExtrusionBasePaintVertexStructArray.prototype.members = [{"name":"a_fill_extrusion_base", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
FillExtrusionBasePaintVertexStructArray.prototype.StructType = FillExtrusionBasePaintVertexStruct;

register(FillExtrusionBasePaintVertexStructArray);

module.exports = FillExtrusionBasePaintVertexStructArray;
