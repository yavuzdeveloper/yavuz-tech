import { PERSONAL } from "@/app/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-24 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-tertiary">
          © {new Date().getFullYear()} {PERSONAL.name}
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs text-acid">
            {PERSONAL.availability}
          </span>
        </div>
      </div>
    </footer>
  );
}
