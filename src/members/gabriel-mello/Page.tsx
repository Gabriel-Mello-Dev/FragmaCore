import { MemberLayout } from "@/members/_shared/MemberLayout";
import { profile } from "./profile";
// Conteúdo estruturado: edite "sections" em ./profile.ts.
// Conteúdo totalmente livre: crie componentes em ./sections e passe em "extra".

export function GabrielMelloPage() {
  return <MemberLayout member={profile} />;
}
