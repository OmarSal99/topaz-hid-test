import { DefaultProfile } from "./default-profile.js";
import { TopazSignaturePadTLBK460BSBProfile } from "./topaz-signature-pad-T-LBK460-profile.js";
import { TopazSignaturePadTLBKHSXProfile } from "./topaz-signature-pad-HSX-profile.js";
import { TopazSignaturePadTLBK57GCBHSBProfile } from "./topaz-signature-pad-TLBK57GC-BHSB-R-profile.js";
import { TopazSignaturePadTLBK755BHSBProfile } from "./topaz-signature-pad-T-LBK755-BHSB-profile.js";
import { TopazSignaturePadTLBK57GCBHSXProfile } from "./topaz-signature-pad-T-LBK57GC-BHSX-profile.js";
import { TopazSignaturePadTLBK766SEBHSXProfile } from "./topaz-signature-pad-T-LBK766SE-BHSX-profile.js";
import { TopazSignaturePadTLBK462BSBProfile } from "./topaz-signature-pad-T-LBK462-BSB-profile.js";
import { TopazSignaturePadTLBK755SEBHSBProfile } from "./topaz-signature-pad-T-LBK755SE-BHSB-profile.js";

export const profiles = [
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK460-BSB",
    PROFILE: TopazSignaturePadTLBK460BSBProfile,
  }),
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK-HSX",
    PROFILE: TopazSignaturePadTLBKHSXProfile,
  }),
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK57GC-BHSB",
    PROFILE: TopazSignaturePadTLBK57GCBHSBProfile,
  }),
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK755-BHSB",
    PROFILE: TopazSignaturePadTLBK755BHSBProfile,
  }),
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK57GC-BHSX",
    PROFILE: TopazSignaturePadTLBK57GCBHSXProfile,
  }),
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK766SE-BHSX",
    PROFILE: TopazSignaturePadTLBK766SEBHSXProfile,
  }),
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK462-BSB",
    PROFILE: TopazSignaturePadTLBK462BSBProfile,
  }),
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK755SE-BHSB",
    PROFILE: TopazSignaturePadTLBK755SEBHSBProfile,
  }),
  Object.freeze({
    LABEL: "default profile",
    PROFILE: DefaultProfile,
  }),
];
