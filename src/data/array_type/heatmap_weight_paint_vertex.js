// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class HeatmapWeightPaintVertexStruct extends Struct {
    a_heatmap_weight: number;
}

(Object.defineProperty: any)(
    HeatmapWeightPaintVertexStruct.prototype,
    'a_heatmap_weight',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);

class HeatmapWeightPaintVertexStructArray extends StructArrayLayout {
    geta_heatmap_weight(index: number) { return this.float32[index * 1 + 0]; }
}

(HeatmapWeightPaintVertexStructArray: any).serialize = StructArray.serialize;

HeatmapWeightPaintVertexStructArray.prototype.members = [{"name":"a_heatmap_weight", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
HeatmapWeightPaintVertexStructArray.prototype.StructType = HeatmapWeightPaintVertexStruct;

register(HeatmapWeightPaintVertexStructArray);

module.exports = HeatmapWeightPaintVertexStructArray;
