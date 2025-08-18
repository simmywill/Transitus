import { BookOpen, ArrowRight } from "lucide-react";
import { Section, Card } from "./ui";

export default function Insights() {
  const insights = [
    { title: "Zero Trust beyond the perimeter", category: "Strategy" },
    { title: "RAG for enterprise security analytics", category: "AI/ML" },
    { title: "DevSecOps in regulated industries", category: "DevSecOps" },
  ];

  return (
    <Section id="insights" eyebrow="Insights" title="Thought leadership & research">
      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((insight, i) => (
          <Card key={i} className="p-6 hover:bg-white/10">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <BookOpen className="size-4" /> {insight.category}
            </div>
            <h4 className="mt-2 text-lg font-medium">{insight.title}</h4>
            <p className="mt-2 text-sm text-white/70">
              Executive-grade breakdown with actionable steps, templates, and checklists.
            </p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              Read article <ArrowRight className="size-4" />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}