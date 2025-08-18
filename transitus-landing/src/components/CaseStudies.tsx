import { ArrowRight } from "lucide-react";
import { Section, Card } from "./ui";

export default function CaseStudies() {
  const caseStudies = [
    "Global Fintech",
    "Healthcare Network", 
    "Logistics Unicorn"
  ];

  return (
    <Section id="case-studies" eyebrow="Proof" title="Outcomes that speak for themselves.">
      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((name, i) => (
          <Card key={i} className="p-6 hover:bg-white/10">
            <div className="text-sm text-white/60">{name}</div>
            <h4 className="mt-1 text-lg font-medium">End-to-end security revamp</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
              <li>85% reduction in ransomware risk</li>
              <li>MTTR cut from 6h to 34m</li>
              <li>SOC 2 achieved in 90 days</li>
            </ul>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              Read case study <ArrowRight className="size-4" />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}