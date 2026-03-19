interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
        <h2 className="text-base font-semibold text-white">
          {title}
        </h2>
      </div>
      <p className="text-sm text-slate-400 font-normal max-w-xl">
        {subtitle}
      </p>
    </div>
  );
}
