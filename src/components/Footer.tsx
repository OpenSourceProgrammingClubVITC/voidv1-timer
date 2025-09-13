export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-white/70 text-sm max-w-md leading-relaxed">
              Questions about <span className="font-semibold text-white">VOID Hackathon</span>? Reach out at{" "}
              <a
                href="mailto:mail@void25.site"
                className="text-white hover:text-white/80 underline underline-offset-2 transition-colors"
              >
                mail@void25.site
              </a>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-4">
            <div className="space-y-2">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} VOID:v1 | All rights reserved.
              </p>
              <p className="text-white/60 text-sm">
                Organized by{" "}
                <a 
                  href="https://www.ospcvitc.club"
                  className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
                >
                  OSPC
                </a>
                {" "}× BIC
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}