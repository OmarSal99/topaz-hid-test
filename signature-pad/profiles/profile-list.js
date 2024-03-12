import { DefaultProfile } from "./default-profile.js";
import { TopazSignaturePadTLBK460Pofile } from "./topaz-signature-pad-T-LBK460-profile.js";
import { TopazSignaturePadHSXPofile } from "./topaz-signature-pad-HSX-profile.js";

export const profiles = [
  Object.freeze({
    LABEL: "Topaz-signature-pad-T-LBK460",
    PROFILE: TopazSignaturePadTLBK460Pofile,
  }),
  Object.freeze({
    LABEL: "Topaz-signature-pad-HSX",
    PROFILE: TopazSignaturePadHSXPofile,
  }),
  Object.freeze({
    LABEL: "default profile",
    PROFILE: DefaultProfile,
  }),
];
