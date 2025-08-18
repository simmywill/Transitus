import { Section, Card, Input, TextArea } from "./ui";

export default function Careers() {
  const openRoles = [
    "Senior Security Engineer (SOC)",
    "Penetration Tester (Red Team)",
    "DevSecOps Engineer",
    "Principal Software Architect"
  ];

  const benefits = [
    "Impactful global clients",
    "Education & certification budget", 
    "Remote-first, async culture",
    "Ownership & autonomy"
  ];

  return (
    <Section id="careers" eyebrow="We're Hiring" title="Build what matters. Secure what matters more.">
      <Card className="p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-medium">Open Roles</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
              {openRoles.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium">Why Join</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <form className="grid gap-3">
            <h4 className="text-lg font-medium">Quick Apply</h4>
            <Input label="Full Name" required />
            <Input type="email" label="Email" required />
            <Input label="Phone" />
            <Input type="url" label="Portfolio / GitHub" placeholder="https://" />
            <TextArea label="Short Cover Note" rows={3} placeholder="Tell us why you're a fit…" />
            <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600">
              Submit
            </button>
          </form>
        </div>
      </Card>
    </Section>
  );
}