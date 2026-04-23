import { GitHub, Language } from "@mui/icons-material";

export default function ProjectCard({ title, description, link, link2, date, stack = [], impact = [], featured = false }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-black">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{date}</p>
        </div>
        {featured && (
          <span className="rounded-full border border-slate-300 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Featured
          </span>
        )}
      </div>

      <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">{description}</p>

      <ul className="mt-4 space-y-2">
        {impact.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500 dark:bg-slate-300" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 flex justify-end gap-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500" aria-label={`${title} GitHub repository`}>
          <GitHub />
        </a>
        {link2 && (
          <a href={link2} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500" aria-label={`${title} live demo`}>
            <Language />
          </a>
        )}
      </div>
    </article>
  );
}
