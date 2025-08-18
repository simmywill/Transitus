import { Section, Card, Stat, Pill } from "./ui";

export default function About() {
  return (
    <Section id="about" eyebrow="Who We Are" title="Security-first innovation, delivered by veterans.">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <h3 className="text-xl font-medium">Mission & Vision</h3>
          <p className="mt-3 text-white/70">
            Our mission is to secure and accelerate organizations with uncompromising engineering. We architect, build, and defend systems that power the world's most demanding teams.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <Stat value="15+" label="Years Operating" />
            <Stat value="25" label="Countries Served" />
            <Stat value="98%" label="Client Retention" />
          </div>
        </Card>
        
        <Card className="p-8">
          <h3 className="text-xl font-medium">Leadership</h3>
          <p className="mt-3 text-white/70">
            Industry veterans from Fortune 500, defense, and hypergrowth startups. Hands-on, accountable, and delivery-obsessed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Pill>ISO 27001 Lead Implementers</Pill>
            <Pill>OSCP / OSCE</Pill>
            <Pill>AWSSAP / CKA</Pill>
            <Pill>PCI DSS Practitioners</Pill>
          </div>
        </Card>
      </div>
    </Section>
  );
}