import { Phone, Mail, MapPin } from "lucide-react";
import { Section, Card, Input, Select, TextArea, Checkbox } from "./ui";

export default function ContactForm() {
  return (
    <Section id="contact" eyebrow="Get Started" title="Tell us what you need. We'll make it happen.">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <Card className="p-8 md:col-span-1">
          <h4 className="text-lg font-medium">Talk to a human</h4>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <Phone className="size-4" /> +1 (800) 555‑0199
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-4" /> hello@transitus-sec.com
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-4" /> NYC • London • Port of Spain
            </div>
          </div>
          
          <div className="mt-6 border-t border-white/10 pt-6">
            <h5 className="text-sm text-white/70">Trusted by</h5>
            <div className="mt-3 grid grid-cols-3 gap-3 opacity-80">
              {["ALPHA", "NOVA", "HELIOS"].map((company) => (
                <div key={company} className="rounded-xl border border-white/10 bg-white/5 py-3 text-center text-xs">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Form */}
        <Card className="p-8 md:col-span-2">
          <form className="grid md:grid-cols-2 gap-4">
            <Input label="Full Name" required />
            <Input type="email" label="Business Email" required />
            <Input label="Company" />
            <Input label="Job Title / Role" />
            <Input label="Phone" />
            
            <Select label="Urgency" defaultValue="1">
              <option value="1">Immediate</option>
              <option value="2">1–3 months</option>
              <option value="3">6+ months</option>
            </Select>
            
            <Select label="Project Budget Range" defaultValue="2">
              <option value="1">Under $50k</option>
              <option value="2">$50k–$250k</option>
              <option value="3">$250k+</option>
            </Select>
            
            <div className="md:col-span-2">
              <span className="text-sm text-white/80">Services Interested In</span>
              <div className="mt-2 grid md:grid-cols-3 gap-3 rounded-xl border border-white/10 p-4">
                <Checkbox label="Managed Security (SOCaaS)" />
                <Checkbox label="Penetration Testing" />
                <Checkbox label="Incident Response" />
                <Checkbox label="GRC / Compliance" />
                <Checkbox label="Cloud Security Architecture" />
                <Checkbox label="Security Training" />
                <Checkbox label="Enterprise Software" />
                <Checkbox label="SaaS Product" />
                <Checkbox label="DevSecOps" />
                <Checkbox label="AI/ML & Analytics" />
                <Checkbox label="Cloud-Native & Migrations" />
                <Checkbox label="Data Platforms" />
                <Checkbox label="CISO-as-a-Service" />
                <Checkbox label="IT & Cloud Audits" />
                <Checkbox label="Compliance Roadmaps" />
              </div>
            </div>

            {/* Service-specific prompts */}
            <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
              <Select label="Industry" defaultValue="tech">
                <option value="tech">Technology</option>
                <option value="fin">Finance</option>
                <option value="hc">Healthcare</option>
                <option value="gov">Public Sector</option>
                <option value="manu">Manufacturing</option>
              </Select>
              
              <Select label="Compliance Needs">
                <option>ISO 27001</option>
                <option>SOC 2</option>
                <option>HIPAA</option>
                <option>GDPR</option>
                <option>PCI DSS</option>
              </Select>
              
              <Select label="Solution Type (Software)" defaultValue="web">
                <option value="web">Web App</option>
                <option value="mobile">Mobile App</option>
                <option value="saas">SaaS</option>
                <option value="migration">Cloud Migration</option>
                <option value="ai">AI/ML</option>
              </Select>
              
              <Select label="Users / Scale">
                <option>Team (≤100)</option>
                <option>Enterprise (≤10k)</option>
                <option>Global (10k+)</option>
              </Select>
            </div>

            <TextArea 
              label="Project Details" 
              rows={5} 
              placeholder="What problem are we solving? Current stack? Key outcomes? Timelines?" 
            />
            
            <TextArea 
              label="Existing Infrastructure" 
              rows={5} 
              placeholder="Cloud provider(s), security tools, repos, environments…" 
            />

            <div className="md:col-span-2 flex items-center justify-between">
              <div className="text-xs text-white/60">By submitting, you agree to our privacy policy.</div>
              <button 
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
              >
                Submit Request
              </button>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}