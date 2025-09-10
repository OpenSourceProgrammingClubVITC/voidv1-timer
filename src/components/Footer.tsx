export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-white/70 text-sm max-w-md">
              Questions about VOID Hackathon? Reach out at
              <a href="mailto:team@void.hack" className="text-white ml-1 underline underline-offset-4">
                team@void.hack
              </a>
            </p>
          </div>
          <div className="flex sm:justify-end items-end">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} VOID Hackathon</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


