import { useMemo } from "react";

export default function TheOaksWebsite() {
  const galleryImages = useMemo(
    () => [
      "Bright Living Space",
      "Accent Wall Detail",
      "Kitchen and Dining Area",
      "Modern Apartment Kitchen",
      "Kitchen Sink and Countertop",
      "Comfortable Bedroom",
      "Bedroom with Twin Bed",
      "Updated Bathroom",
    ],
    [],
  );

  const amenities = [
    "One- and two-bedroom apartment rentals",
    "Washer and dryer appliances in select units",
    "Garage rentals for added convenience and protection",
    "Community grills for outdoor cooking and gatherings",
    "Playground for residents and families",
    "Resident-only parking",
  ];

  const faqs = [
    {
      q: "Are the apartments smoke-free?",
      a: "Yes. All apartment units are smoke-free, and residents may use designated outdoor smoking areas.",
    },
    {
      q: "Are pets allowed?",
      a: "Yes. Pets are allowed with up-to-date vaccination records, a non-refundable pet deposit, and an additional monthly pet fee.",
    },
    {
      q: "Do you require renters insurance?",
      a: "Yes. The current property FAQs state that renters insurance or the required liability coverage is expected for residents.",
    },
    {
      q: "Are the apartments furnished?",
      a: "No. Apartments are not furnished, which gives residents the flexibility to decorate and furnish their space however they prefer.",
    },
    {
      q: "How do I schedule a tour?",
      a: "You can call the leasing team at 515-895-4020 or submit a contact request to schedule a tour by appointment.",
    },
    {
      q: "What are the leasing hours?",
      a: "The current website lists leasing hours as by appointment only from 9:00 AM to 4:00 PM.",
    },
  ];

  const nearby = [
    "Army Post Plaza",
    "Southridge Mall",
    "Southridge Square",
    "Hy-Vee",
    "Target",
    "Hobby Lobby",
    "Starbucks",
    "DMACC",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white shadow-sm">
              O
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">The Oaks</div>
              <div className="text-sm text-slate-500">Apartment rentals in Des Moines, IA</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 xl:flex">
            <a href="#home" className="transition hover:text-slate-900">Home</a>
            <a href="#floor-plans" className="transition hover:text-slate-900">Floor Plans</a>
            <a href="#amenities" className="transition hover:text-slate-900">Amenities</a>
            <a href="#location" className="transition hover:text-slate-900">Location</a>
            <a href="#gallery" className="transition hover:text-slate-900">Gallery</a>
            <a href="#faqs" className="transition hover:text-slate-900">FAQs</a>
            <a href="#availability" className="transition hover:text-slate-900">Check Availability</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact Us</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://livlavender.appfolio.com/connect/users/sign_in"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              Resident Portal
            </a>
            <a
              href="tel:5158954020"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              515-895-4020
            </a>
            <a
              href="#availability"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Apply Today
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(226,232,240,0.9),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,212,216,0.75),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                Comfortable and affordable apartment living
              </div>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                Gorgeous apartment rentals at <span className="text-slate-500">The Oaks</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Discover one- and two-bedroom apartment homes in Des Moines with practical amenities, a convenient location near Route 69 and I-235, and a leasing team ready to help you find the right fit.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#availability"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:opacity-90"
                >
                  Check Availability
                </a>
                <a
                  href="#gallery"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  View Gallery
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">1 & 2</div>
                  <div className="mt-1 text-sm text-slate-500">Bedroom layouts</div>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">Select</div>
                  <div className="mt-1 text-sm text-slate-500">Washer and dryer units</div>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold">By Appt.</div>
                  <div className="mt-1 text-sm text-slate-500">Easy tour scheduling</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-6">
              <div className="rounded-[2rem] bg-[linear-gradient(145deg,#dbe4ee,#eef2f7)] p-4 shadow-xl shadow-slate-200/70">
                <div className="flex min-h-[250px] h-full items-end rounded-[1.5rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.85))] p-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Gallery Preview</div>
                    <div className="mt-2 text-2xl font-semibold">Bright living spaces</div>
                    <p className="mt-2 text-sm text-slate-600">A cleaner, more modern first impression for future residents.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 rounded-[2rem] bg-[linear-gradient(145deg,#f5f5f4,#e7e5e4)] p-4 shadow-xl shadow-stone-200/70">
                <div className="flex min-h-[320px] h-full items-end rounded-[1.5rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.9))] p-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Comfort</div>
                    <div className="mt-2 text-2xl font-semibold">Kitchens, bedrooms, and baths with style</div>
                    <p className="mt-2 text-sm text-slate-600">Structured to feel more premium without losing clarity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-8">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Quick Snapshot</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Why renters consider The Oaks</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {nearby.map((item) => (
                  <div key={item} className="rounded-2xl bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="floor-plans" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Floor Plans</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Designed for comfort and convenience</h2>
            <p className="mt-5 text-lg text-slate-600">
              The Oaks offers one- and two-bedroom apartment layouts created to support everyday living, whether you are relaxing at home, hosting guests, or settling into a routine that fits your lifestyle.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { title: "Smart Layouts", text: "Open living areas with comfortable flow between kitchen, dining, and lounge spaces." },
              { title: "Functional Bedrooms", text: "Well proportioned bedrooms with room to unwind and settle in with ease." },
              { title: "Modern Bathrooms", text: "Clean, updated bathrooms designed with a fresh and simple aesthetic." },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="amenities" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Amenities</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Features that make home feel better</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  The Oaks offers practical amenities designed to make daily life more convenient, comfortable, and connected.
                </p>
              </div>

              <div className="grid gap-4">
                {amenities.map((item) => (
                  <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Location</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Close to what matters most</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The Oaks is located at 6209 SE 5th St., Des Moines, IA 50315, just minutes from Route 69 and I-235 with convenient access to shopping, dining, schools, and the energy of the city.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Nearby shopping</p>
                  <p className="mt-3 text-slate-700">Army Post Plaza, Southridge Mall, Southridge Square, Hy-Vee, Target, and Hobby Lobby.</p>
                </div>
                <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Dining and schools</p>
                  <p className="mt-3 text-slate-700">Starbucks, Twisted Bean Coffee Company, Primos Tex Mex Bar & Grill, Popeyes, Applebee’s, DMACC, Grand View University, and Drake University.</p>
                </div>
              </div>
              <div className="mt-8 rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Address and leasing contact</p>
                <div className="mt-3 text-lg font-semibold text-slate-900">6209 SE 5th St. Des Moines, IA 50315</div>
                <a href="tel:5158954020" className="mt-2 inline-block text-2xl font-semibold text-slate-900">
                  515-895-4020
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-stone-200 bg-[linear-gradient(145deg,#fafaf9,#e7e5e4)] p-8 shadow-sm">
              <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-dashed border-stone-300 bg-white text-center text-slate-500">
                6209 SE 5th St.
                <br />
                Des Moines, IA 50315
                <br />
                Replace with embedded Google Map
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Gallery</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">See life at The Oaks</h2>
                <p className="mt-4 max-w-2xl text-slate-600">
                  This version keeps the gallery section more polished than the current site. The source site exposes the gallery section and image placeholders, but it does not surface direct image file links in a way I can reliably package from here, so this build keeps clean premium placeholders ready for the real property photos.
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Take a Virtual Tour
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-64 items-end bg-[linear-gradient(145deg,#dbe4ee,#f8fafc)] p-5">
                    <div className="rounded-2xl bg-white/85 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur">
                      {name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">FAQs</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Answers to common questions</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="availability" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Check Availability</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Ready to make The Oaks your next home?</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Contact the leasing team to learn about current availability, schedule a personal tour, or begin your application.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:opacity-90"
                >
                  Schedule a Tour
                </a>
                <a
                  href="https://www.theoaksdsm.com/contact-us/"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Apply Today
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Contact Us</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Contact us today to schedule a tour</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We would love to help you find the right apartment home. The leasing office is currently available by appointment only from 9:00 AM to 4:00 PM.
              </p>
              <div className="mt-8 space-y-4">
                <a href="tel:5158954020" className="block text-2xl font-semibold text-slate-900">
                  515-895-4020
                </a>
                <div className="text-slate-600">6209 SE 5th St. Des Moines, IA 50315</div>
                <div className="text-slate-600">Emergency maintenance: 515-218-9398</div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:5158954020"
                    className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://livlavender.appfolio.com/connect/users/sign_in"
                    className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    Resident Portal
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
              <div className="grid gap-4">
                <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-5 text-slate-500">
                  Contact form integration area
                </div>
                <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-5 text-slate-500">
                  Leasing hours: By Appointment Only, 9:00 AM to 4:00 PM
                </div>
                <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-5 text-slate-500">
                  Add quick links for privacy policy, sitemap, and accessibility statement
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 The Oaks. All Rights Reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="transition hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="transition hover:text-slate-900">Sitemap</a>
            <a href="#" className="transition hover:text-slate-900">Accessibility Statement</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
