import { DefaultProfile } from "./default-profile.js";
import { TopazSignaturePadTLBK460BSBProfile } from "./TLBK460-BSB-profile.js";
import { TopazSignaturePadTLBK755BHSBProfile } from "./TLBK755-BHSB-profile.js";
import { TopazSignaturePadTLBK57GCBHSXProfile } from "./TLBK57GC-BHSX-profile.js";
import { TopazSignaturePadTLBK766SEBHSXProfile } from "./TLBK766SE-BHSX-profile.js";
import { TopazSignaturePadTLBK462BSBProfile } from "./TLBK462-BSB-profile.js";
import { TopazSignaturePadTLBK755SEBHSBProfile } from "./TLBK755SE-BHSB-profile.js";
import { TopazSignaturePadTLBK57GCBBSBProfile } from "./TLBK57GC-BBSB-profile.js";
import { TopazSignaturePadTLBKHSXProfile } from "./HSX-profile.js";
import { TopazSignaturePadTLBK57GCBHSBProfile } from "./TLBK57GC-BHSB-R-profile.js";

export const profiles = [
  Object.freeze({
    LABEL: "TLBK460-BSB",
    PROFILE: TopazSignaturePadTLBK460BSBProfile,
  }),
  Object.freeze({
    LABEL: "TLBK-HSX",
    PROFILE: TopazSignaturePadTLBKHSXProfile,
  }),
  Object.freeze({
    LABEL: "TLBK57GC-BHSB",
    PROFILE: TopazSignaturePadTLBK57GCBHSBProfile,
  }),
  Object.freeze({
    LABEL: "TLBK755-BHSB",
    PROFILE: TopazSignaturePadTLBK755BHSBProfile,
  }),
  Object.freeze({
    LABEL: "TLBK57GC-BHSX",
    PROFILE: TopazSignaturePadTLBK57GCBHSXProfile,
  }),
  Object.freeze({
    LABEL: "TLBK766SE-BHSX",
    PROFILE: TopazSignaturePadTLBK766SEBHSXProfile,
  }),
  Object.freeze({
    LABEL: "TLBK462-BSB",
    PROFILE: TopazSignaturePadTLBK462BSBProfile,
  }),
  Object.freeze({
    LABEL: "TLBK755SE-BHSB",
    PROFILE: TopazSignaturePadTLBK755SEBHSBProfile,
  }),
  Object.freeze({
    LABEL: "TLBK57GC-BBSB",
    PROFILE: TopazSignaturePadTLBK57GCBBSBProfile,
  }),
  Object.freeze({
    LABEL: "default profile",
    PROFILE: DefaultProfile,
  }),
];
