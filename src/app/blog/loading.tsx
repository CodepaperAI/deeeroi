export default function BlogLoading() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground pb-24 pt-40 text-white md:pb-32 md:pt-48">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.7)_45%,rgba(10,10,10,0.3)_100%)]" />
        <div className="container-main relative z-10">
          <div className="h-4 w-44 rounded bg-white/16" />
          <div className="mt-6 h-16 max-w-3xl rounded bg-white/12 md:h-24" />
          <div className="mt-6 h-6 max-w-2xl rounded bg-white/12" />
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="container-main grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[420px] animate-pulse rounded-lg border border-border bg-background"
            />
          ))}
        </div>
      </section>
    </>
  );
}
