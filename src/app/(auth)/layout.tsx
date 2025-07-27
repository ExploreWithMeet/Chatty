export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen w-full bg-slate-950 flex items-center justify-center">
      {children}
    </section>
  );
}
