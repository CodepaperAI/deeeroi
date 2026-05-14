import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-[clamp(8rem,20vw,14rem)] font-[800] leading-none tracking-tight text-accent">
          404
        </p>

        <h1 className="mt-4 font-display text-2xl font-[700] tracking-tight text-foreground sm:text-3xl">
          Page not found
        </h1>

        <p className="mt-3 max-w-md mx-auto text-muted text-base sm:text-lg leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 px-8 py-3.5 bg-accent text-white text-sm font-[600] tracking-wide uppercase rounded-sm transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02]"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
