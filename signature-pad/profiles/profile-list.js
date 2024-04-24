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
    LABEL: "T-LBK460-BSB-R",
    PROFILE: TopazSignaturePadTLBK460BSBProfile,
  }),
  Object.freeze({
    LABEL: "T-LBK-HSX",
    PROFILE: TopazSignaturePadTLBKHSXProfile,
  }),
  Object.freeze({
    LABEL: "T-LBK57GC-BHSB-R",
    PROFILE: TopazSignaturePadTLBK57GCBHSBProfile,
  }),
  Object.freeze({
    LABEL: "T-LBK755-BHSB-R",
    PROFILE: TopazSignaturePadTLBK755BHSBProfile,
  }),
  Object.freeze({
    LABEL: "T-LBK57GC-BHSX-R",
    PROFILE: TopazSignaturePadTLBK57GCBHSXProfile,
  }),
  Object.freeze({
    LABEL: "T-LBK766SE-BHSX-R",
    PROFILE: TopazSignaturePadTLBK766SEBHSXProfile,
  }),
  Object.freeze({
    LABEL: "T-LBK462-BSB-R",
    PROFILE: TopazSignaturePadTLBK462BSBProfile,
  }),
  Object.freeze({
    LABEL: "T-LBK755SE-BHSB-R",
    PROFILE: TopazSignaturePadTLBK755SEBHSBProfile,
  }),
  Object.freeze({
    LABEL: "T-LBK57GC-BBSB-R",
    PROFILE: TopazSignaturePadTLBK57GCBBSBProfile,
  }),
  Object.freeze({
    LABEL: "default profile",
    PROFILE: DefaultProfile,
  }),
];
