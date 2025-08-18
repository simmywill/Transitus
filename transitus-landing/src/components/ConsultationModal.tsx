"use client";

import { Card, Input, Select, TextArea, Checkbox } from "./ui";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur">
      <Card className="w-full max-w-2xl p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium">Request a Consultation</h3>
          <button 
            onClick={onClose} 
            className="text-white/60 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
        
        <form className="mt-4 grid md:grid-cols-2 gap-4">
          <Input label="Full Name" required />
          <Input type="email" label="Business Email" required />
          <Input label="Company" />
          <Input label="Role" />
          <Input label="Phone" />
          
          <Select label="Primary Interest" defaultValue="cyber">
            <option className="text-black"  value="cyber">Cybersecurity</option>
            <option className="text-black" value="software">Software Development</option>
            <option className="text-black" value="advisory">Advisory</option>
          </Select>
          
          <Select label="Budget" defaultValue="2" className="text-black">
            <option className="text-black" value="1">Under $50k</option>
            <option className="text-black" value="2">$50k–$250k</option>
            <option className="text-black"  value="3">$250k+</option>
          </Select>
          
          <div className="md:col-span-2">
            <span className="text-sm text-black/80">Services</span>
            <div className="mt-2 grid md:grid-cols-3 gap-3 rounded-xl border border-white/10 p-4">
              <Checkbox label="SOCaaS" />
              <Checkbox label="Pen Test" />
              <Checkbox label="Incident Response" />
              <Checkbox label="GRC" />
              <Checkbox label="Cloud Security" />
              <Checkbox label="Training" />
              <Checkbox label="Enterprise Eng." />
              <Checkbox label="SaaS Build" />
              <Checkbox label="DevSecOps" />
            </div>
          </div>
          
          <TextArea 
            label="Project Details / Objectives" 
            rows={5} 
            className="md:col-span-2"
            placeholder="What problem are we solving? Current stack? Key outcomes? Timelines?"
          />
          
          <div className="md:col-span-2 flex items-center justify-between">
            <div className="text-xs text-white/60">We'll reply within one business day.</div>
            <button 
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
            >
              Send Request
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}