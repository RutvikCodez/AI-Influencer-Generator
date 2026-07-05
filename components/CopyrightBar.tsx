const CopyrightBar = () => {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm md:flex-row lg:px-8">
        {/* Copyright */}
        <p className="text-center text-muted-foreground md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">Faux</span>. All
          rights reserved.
        </p>
      </div>
    </section>
  );
};

export default CopyrightBar;
