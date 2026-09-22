export default function StatusBadge({ status, dark = false }: { status: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-2xl border px-3 py-1 font-heading text-xs font-semibold ${
        dark ? 'border-silver/30 text-silver' : 'border-silver/40 text-navy'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-electric" />
      {status}
    </span>
  );
}
