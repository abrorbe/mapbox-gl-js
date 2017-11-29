// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class CircleColorPaintVertexStruct extends Struct {
    a_circle_color0: number;
    a_circle_color1: number;
}

(Object.defineProperty: any)(
    CircleColorPaintVertexStruct.prototype,
    'a_circle_color0',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    CircleColorPaintVertexStruct.prototype,
    'a_circle_color1',
    {
        get: function () { return this._structArray.float32[this._pos4 + 1]; },
        set: function (x) { this._structArray.float32[this._pos4 + 1] = x; }
    }
);

class CircleColorPaintVertexStructArray extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    geta_circle_color0(index: number) {
        return this.float32[index * 2 + 0];
    }
    geta_circle_color1(index: number) {
        return this.float32[index * 2 + 1];
    }
    emplaceBack(v0: number, v1: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o4 = i * 2;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;

        return i;
    }

    static deserialize(input: SerializedStructArray): CircleColorPaintVertexStructArray {
        const structArray = Object.create(CircleColorPaintVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(CircleColorPaintVertexStructArray: any).serialize = StructArray.serialize;

CircleColorPaintVertexStructArray.prototype.members = [{"name":"a_circle_color", "type":"Float32", "components":2, "offset":0, "size":4, "view":"float32"}];
CircleColorPaintVertexStructArray.prototype.bytesPerElement = 8;
CircleColorPaintVertexStructArray.prototype._usedTypes = ["Uint8", "Float32"];
CircleColorPaintVertexStructArray.prototype.StructType = CircleColorPaintVertexStruct;


register(CircleColorPaintVertexStructArray);

module.exports = CircleColorPaintVertexStructArray;
