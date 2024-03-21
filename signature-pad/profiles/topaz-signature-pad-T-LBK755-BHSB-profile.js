import { BaseProfile } from "./base-profile.js";
// an example of new profile that made just for Topaz Signature Pad TLBK755-BHSB
// x and y for this device don't start from 0
// overriding the decode function and the canvas height and width will do the trick
export class TopazSignaturePadTLBK755BHSBProfile extends BaseProfile {
  // on this signature pad x values are always between 500 and 2280, left most is 500 and right most is 2280
  static leftCoordinate = 700;
  static rightCoordinate = 2470;

  // same apply for y, always between 700 and 1640
  static topCoordinate = 700;
  static bottomCoordinate = 1640;

  // set the filter to only accept this device
  static filter = (vid, pid) => {
    // return vid == 0x06a8 && pid == 0x0043;
    return false
  };
  static chunkSize = 6;

  // width is the diffrence between right and left
  static canvasWidth = this.rightCoordinate - this.leftCoordinate;

  // height is the difference between bottom and top
  static canvasHeight = this.bottomCoordinate - this.topCoordinate;

  static decodeFunction = (bytes) => {
    bytes = bytes.slice(1);
    if (bytes[0] != 0xe4) {
      return { x: null, y: null, invalid: true, ignore: true };
    }
    let bytesObj = super.decodeFunction(bytes);
    if (bytesObj.x != null) bytesObj.x = bytesObj.x - this.leftCoordinate;
    if (bytesObj.y != null) bytesObj.y = bytesObj.y - this.topCoordinate;
    return bytesObj;
  };
}
