import { ReactNode } from "react";

// ---- Helper UI Components ----
export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Section = ({ 
  id, 
  title, 
  eyebrow, 
  children, 
  className = "" 
}: { 
  id?: string; 
  title?: string; 
  eyebrow?: string; 
  children: ReactNode; 
  className?: string 
}) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <Container>
      {(title || eyebrow) && (
        <div className="mb-10 md:mb-14">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight text-white">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </Container>
  </section>
);

export const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-center">
    <div className="text-3xl md:text-4xl font-semibold text-white">{value}</div>
    <div className="mt-2 text-sm text-white/70">{label}</div>
  </div>
);

export const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-2xl bg-white/5 border border-white/10 shadow-2xl shadow-black/40 ${className}`}>{children}</div>
);

export const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/80">{children}</span>
);

// ---- Form Components ----
export const Input = ({ label, type = "text", placeholder, required, className = "", ...props }: any) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}{required && <span className="text-cyan-400"> *</span>}</span>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className={`mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${className}`}
      {...props}
    />
  </label>
);

export const Select = ({ label, children, required, className = "", ...props }: any) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}{required && <span className="text-cyan-400"> *</span>}</span>
    <select
      className={`mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${className}`}
      {...props}
    >
      {children}
    </select>
  </label>
);

export const TextArea = ({ label, rows = 4, className = "", ...props }: any) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}</span>
    <textarea
      rows={rows}
      className={`mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${className}`}
      {...props}
    />
  </label>
);

export const Checkbox = ({ label, ...props }: any) => (
  <label className="flex items-center gap-3 text-white/90">
    <input type="checkbox" className="size-4 rounded border-white/20 bg-white/5" {...props} />
    <span className="text-sm">{label}</span>
  </label>
);