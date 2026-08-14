import { STATUS_STYLES, statusLabel } from "@/data/modules";
import type { SystemStatus } from "@/data/modules";

export default function EngineStatus({
  status,
  className,
}: {
  status: SystemStatus;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-widest ${
        className ?? ""
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${STATUS_STYLES[status]}`} />
      {statusLabel(status)}
    </span>
  );
}
