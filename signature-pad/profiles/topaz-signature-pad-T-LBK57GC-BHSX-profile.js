import { BaseProfile } from "./base-profile.js";
// an example of new profile that made just for Topaz Signature Pad TLBK57GC-BHSX
// x and y for this device don't start from 0
// overriding the decode function and the canvas height and width will do the trick
export class TopazSignaturePadTLBK57GCBHSXProfile extends BaseProfile {
  // on this signature pad x values are always between 400 and 2240
  static leftCoordinate = 400;
  static rightCoordinate = 2240;

  // same apply for y, always between 470 and 1830
  static topCoordinate = 470;
  static bottomCoordinate = 1830;

  // set the filter to only accept this device
  static filter = (vid, pid) => {
    return vid == 0x06a8 && pid == 0x0057;
  };

  static chunkSize = 6;

  // width is the diffrence between right and left
  static canvasWidth = this.rightCoordinate - this.leftCoordinate;

  // height is the difference between bottom and top
  static canvasHeight = this.bottomCoordinate - this.topCoordinate;

  static decodeFunction = (bytes) => {
    bytes = bytes.slice(1);
    if (bytes[0] != 0xc1 && bytes[0] != 0xc0)
      return { x: null, y: null, invalid: true, ignore: true };
    if (bytes[0] != 0xc1) return { x: null, y: null, invalid: true };
    let bytesObj = super.decodeFunction(bytes);
    if (bytesObj.x != null) bytesObj.x = bytesObj.x - this.leftCoordinate;
    if (bytesObj.y != null) bytesObj.y = bytesObj.y - this.topCoordinate;
    return bytesObj;
  };
}
