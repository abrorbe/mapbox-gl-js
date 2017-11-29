// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
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

class CircleOpacityPaintVertexStructArray extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    geta_circle_opacity(index: number) {
        return this.float32[index * 1 + 0];
    }
    emplaceBack(v0: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o4 = i * 1;
        this.float32[o4 + 0] = v0;

        return i;
    }

    static deserialize(input: SerializedStructArray): CircleOpacityPaintVertexStructArray {
        const structArray = Object.create(CircleOpacityPaintVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(CircleOpacityPaintVertexStructArray: any).serialize = StructArray.serialize;

CircleOpacityPaintVertexStructArray.prototype.members = [{"name":"a_circle_opacity", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
CircleOpacityPaintVertexStructArray.prototype.bytesPerElement = 4;
CircleOpacityPaintVertexStructArray.prototype._usedTypes = ["Uint8", "Float32"];
CircleOpacityPaintVertexStructArray.prototype.StructType = CircleOpacityPaintVertexStruct;


register(CircleOpacityPaintVertexStructArray);

module.exports = CircleOpacityPaintVertexStructArray;
