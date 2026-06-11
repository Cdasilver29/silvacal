import type { LegalContent } from '@/data/legal';

export default function LegalPage({ content }: { content: LegalContent }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy sm:text-5xl">{content.title}</h1>
        <p className="mt-2 text-sm text-body/60">{content.lastUpdated}</p>
        <p className="mt-6 text-body/80">{content.intro}</p>

        <div className="mt-10 flex flex-col gap-8">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-xl font-semibold text-navy">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-body/80">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-body/80">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
