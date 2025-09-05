import React from "react";

function StrawberryCircleWebsite() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            {/* Top bar / nav */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="#hero" className="flex items-center gap-3">
                        <Logo className="w-12 h-12" />
                        <div>
                            <div className="text-lg font-semibold leading-none">Strawberry Circle LLC</div>
                            <div className="text-xs text-green-800/80">Home Builder & Developer</div>
                        </div>
                    </a>

                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#services" className="hover:text-strawberry-600">Services</a>
                        <a href="#portfolio" className="hover:text-strawberry-600">Portfolio</a>
                        <a href="#about" className="hover:text-strawberry-600">About</a>
                        <a href="#contact" className="bg-strawberry-600 text-white px-4 py-2 rounded-md shadow-sm hover:opacity-95">Contact</a>
                    </nav>

                    <div className="md:hidden">
                        <MobileMenuButton />
                    </div>
                </div>
            </header>

            {/* Hero */}
            <main>
                <section id="hero" className="pt-12 pb-20 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Building homes.
                            <br /> Creating communities.
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Strawberry Circle LLC is a boutique home builder and developer focused on thoughtful neighborhoods
                            and high-quality, livable homes. We combine smart design, sustainable choices, and hands-on
                            craftsmanship to deliver places people love to live.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <a href="#contact" className="inline-block bg-strawberry-600 text-white px-5 py-3 rounded-md font-medium shadow">Get a quote</a>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-md mx-auto">
                            <Metric label="Years" value="12+" />
                            <Metric label="Design Partners" value="10+" />
                            <Metric label="Service Area" value="San Francisco Bay Area" />
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center">Our Services</h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center">From single-family homes to small multi-family developments, we offer full-service building and development.</p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ServiceCard title="Custom Home Building" desc="Site evaluation, design coordination, high-quality construction, and warranty support." />
                            <ServiceCard title="Development & Planning" desc="Land acquisition, entitlement, civil coordination, and community design." />
                            <ServiceCard title="Renovation & Restoration" desc="Thoughtful remodels that preserve character and add modern performance." />
                        </div>
                    </div>
                </section>

                {/* Portfolio */}
                <section id="portfolio" className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center">Selected Projects</h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center">A small selection of homes we've delivered.</p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sampleProjects.map((p) => (
                                <article key={p.title} className="rounded-lg overflow-hidden shadow-sm border">
                                    <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.05)), url('${p.image}')` }} />
                                    <div className="p-4">
                                        <h3 className="font-semibold">{p.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                                        <div className="mt-3 text-xs text-gray-500">Completed: {p.year}</div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About */}
                <section id="about" className="py-16 bg-green-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold">About Strawberry Circle</h2>
                                <p className="mt-4 text-gray-700">We are a regional home builder and developer committed to building beautiful, efficient homes and long-lasting h. Our small, experienced team keeps projects personal and delivers hands-on expertise from site to close.</p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                    <li>✓ Client-first design process</li>
                                    <li>✓ Energy-efficient construction</li>
                                    <li>✓ Strong local subcontractor relationships</li>
                                    <li>✓ Clear communication and budgeting</li>
                                </ul>
                            </div>

                            <div>
                                <div className="rounded-lg p-6 bg-white shadow">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-strawberry-600/10 flex items-center justify-center">
                                            <Logo className="w-10 h-10 text-strawberry-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Managing Partner</div>
                                            <div className="font-semibold">Lia Sorokina</div>
                                            <div className="text-sm text-gray-500">olya.u.sorokina@gmail.com • (415) 987-4964</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-sm text-gray-600">We work with homeowners, investors, and municipalities to design and deliver quality housing.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-16">
                    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-3xl font-bold">Contact Us</h2>
                            <p className="mt-2 text-gray-600">Reach out to discuss a project, request a quote, or schedule a site visit.</p>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-start gap-4">
                                    <svg className="w-6 h-6 text-strawberry-600 mt-1" viewBox="0 0 24 24" fill="none"><path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    <div>
                                        <div className="text-sm text-gray-600">Email</div>
                                        <div className="font-semibold">olya.u.sorokina@gmail.com</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <svg className="w-6 h-6 text-green-800 mt-1" viewBox="0 0 24 24" fill="none"><path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    <div>
                                        <div className="text-sm text-gray-600">Phone</div>
                                        <div className="font-semibold">(415) 987-4964</div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <form onSubmit={(e) => { e.preventDefault(); alert('Contact form submitted (demo)'); }} className="grid grid-cols-1 gap-3">
                                        <input required placeholder="Your name" className="border rounded-md px-3 py-2" />
                                        <input required type="email" placeholder="Your email" className="border rounded-md px-3 py-2" />
                                        <textarea required placeholder="Brief project description" className="border rounded-md px-3 py-2 h-28" />
                                        <button className="inline-block bg-strawberry-600 text-white px-4 py-2 rounded-md">Send message</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="rounded-lg overflow-hidden border shadow">
                                <div className="p-6">
                                    <h3 className="font-semibold">Office</h3>
                                    <p className="mt-2 text-sm text-gray-600">881 E El Camino Real<br />Mountain View, CA 94040</p>

                                    <div className="mt-6">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6341.252140347235!2d-122.0624447240536!3d37.37502383508642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6e7e441fb5b%3A0x5d7680029c8f897!2s881%20E%20El%20Camino%20Real%2C%20Mountain%20View%2C%20CA%2094040!5e0!3m2!1sen!2sus!4v1757103244753!5m2!1sen!2sus"
                                            width="100%"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t py-6 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Logo className="w-10 h-10" />
                        <div>
                            <div className="font-semibold">Strawberry Circle LLC</div>
                            <div className="text-xs text-gray-500">© {new Date().getFullYear()} Strawberry Circle LLC. All rights reserved.</div>
                        </div>
                    </div>

                    <div className="text-sm text-gray-600">Licensed builder • Insured • Serving the local region</div>
                </div>
            </footer>

            <style jsx>{`
        .text-strawberry-600 { color: #b92c2f; }
        .bg-strawberry-600 { background-color: #b92c2f; }
        .bg-strawberry-50 { background-color: #fff2f3; }
      `}</style>
        </div>
    );
}

function Logo({ className = "w-12 h-12" }) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="64" height="64" rx="12" fill="#ffffff" />
            <g transform="translate(6,8)">
                <path d="M8 28 V14 L24 4 L40 14 V28 H8 Z" fill="none" stroke="#0b3b2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <g transform="translate(18,14)">
                    <ellipse cx="0" cy="6" rx="8" ry="6.5" fill="#b92c2f" />
                    <path d="M-6 0 C -4 -6, 4 -6, 6 0" fill="#0b3b2e" transform="translate(0,-8)" />
                    <circle cx="-3" cy="4" r="0.9" fill="#7a0f12" />
                    <circle cx="1" cy="2" r="0.9" fill="#7a0f12" />
                    <circle cx="4" cy="6" r="0.9" fill="#7a0f12" />
                </g>
            </g>
        </svg>
    );
}

function Metric({ label, value }) {
    return (
        <div className="border rounded-md p-3 bg-white shadow-sm">
            <div className="text-xs text-gray-500">{label}</div>
            <div className="text-lg font-semibold">{value}</div>
        </div>
    );
}

function ServiceCard({ title, desc }) {
    return (
        <div className="rounded-lg border p-5 bg-white shadow-sm">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
        </div>
    );
}

function MobileMenuButton() {
    return (
        <button aria-label="menu" className="inline-flex items-center justify-center w-10 h-10 rounded-md border">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
    );
}

const sampleProjects = [
    { title: 'Mill Valley Modern', description: '4-bed 3.5 bath energy-smart home in a dream family neighborhood.', year: 2025, image: 'https://drive.google.com/file/d/13yOMsmA2xK1kLba92tAQL7e2MXdnUfDt/view?usp=sharing' },
    { title: 'Channel Drive Bayside', description: '3 bed bayside dream with own dock and spacious backyard.', year: 2025, image: 'https://drive.google.com/file/d/144uS7-kuyMBfOtQCfTsgrBzadcb5XM99/view?usp=sharing' },
    { title: 'Corte Madera Family Oasis', description: 'Whole-house restoration with updated systems.', year: 2024, image: 'https://photos.zillowstatic.com/fp/065e1acce93330c57d910493135f04ea-cc_ft_1536.webp' },
];

export default StrawberryCircleWebsite;
