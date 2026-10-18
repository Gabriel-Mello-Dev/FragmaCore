import { MemberLayout } from "@/members/_shared/MemberLayout";
import { profile } from "./profile";
// Para personalizar: crie componentes em ./sections e passe em "extra".
// Ex.: import { Destaques } from "./sections/Destaques";  →  extra={<Destaques />}

export function GabrielMelloPage() {
  return <MemberLayout member={profile} />;
}
