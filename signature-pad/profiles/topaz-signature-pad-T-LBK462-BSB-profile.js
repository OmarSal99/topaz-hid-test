import { BaseProfile } from "./base-profile.js";
// an example of new profile that made just for Topaz Signature Pad TLBK462-BSB
// x and y for this device don't start from 0
// overriding the decode function and the canvas height and width will do the trick
export class TopazSignaturePadTLBK462BSBProfile extends BaseProfile {
  // on this signature pad x values are always between 500 and 2280, left most is 500 and right most is 2280
  static leftCoordinate = 500;
  static rightCoordinate = 2280;

  // same apply for y, always between 450 and 980
  static topCoordinate = 450;
  static bottomCoordinate = 980;

  // set the filter to only accept this device
  static filter = (vid, pid) => {
    return false;
    // return vid == 0x0403 && pid == 0x6001;
  };

  // width is the diffrence between right and left
  static canvasWidth = this.rightCoordinate - this.leftCoordinate;

  // height is the difference between bottom and top
  static canvasHeight = this.bottomCoordinate - this.topCoordinate;

  static decodeFunction = (bytes) => {
    if (bytes[0] != 0xe5 && bytes[0] != 0xe4)
      return { x: null, y: null, invalid: true, ignore: true };
    if (bytes[0] != 0xe5) return { x: null, y: null, invalid: true };

    let bytesObj = super.decodeFunction(bytes);
    if (bytesObj.x != null) bytesObj.x = bytesObj.x - this.leftCoordinate;
    if (bytesObj.y != null) bytesObj.y = bytesObj.y - this.topCoordinate;
    return bytesObj;
  };
}
