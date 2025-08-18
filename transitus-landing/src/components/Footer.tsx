import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            {/* Replace with your Transitus logo PNG */}
            <div className="size-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center">
              <ShieldCheck className="size-4" />
            </div>
            <span className="font-semibold">Transitus</span>
          </div>
          <p className="mt-3 text-white/60 max-w-xs">
            We secure and build mission-critical systems for the world's most demanding teams.
          </p>
        </div>
        
        <div>
          <div className="text-white/70 mb-2">Company</div>
          <ul className="space-y-2 text-white/60">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#careers" className="hover:text-white">Careers</a></li>
            <li><a href="#insights" className="hover:text-white">Insights</a></li>
          </ul>
        </div>
        
        <div>
          <div className="text-white/70 mb-2">Services</div>
          <ul className="space-y-2 text-white/60">
            <li>Managed Security</li>
            <li>Penetration Testing</li>
            <li>DevSecOps</li>
            <li>Enterprise Engineering</li>
          </ul>
        </div>
        
        <div>
          <div className="text-white/70 mb-2">Contact</div>
          <ul className="space-y-2 text-white/60">
            <li className="flex items-center gap-2">
              <Phone className="size-4" /> +1 (800) 555‑0199
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4" /> hello@transitus-sec.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4" /> NYC • London • Port of Spain
            </li>
          </ul>
        </div>
      </Container>
      
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Transitus Security & Build. All rights reserved.
      </div>
    </footer>
  );
}