"use client";

import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="w-full max-w-2xl rounded-2xl border border-gray-200 p-12 shadow-sm text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Let’s Build Something Solid
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            If you’re looking for a developer who values clean architecture,
            long-term maintainability, and thoughtful engineering, I’d love to
            connect.
          </p>

          {/* SUCCESS STATE */}
          {success ? (
            <div className="mt-10 rounded-xl border border-green-200 bg-green-50 p-8">
              <h3 className="text-xl font-semibold text-green-800">
                ✅ Thank you for contacting me!
              </h3>
              <p className="mt-3 text-green-700">
                I’ve received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            /* FORM */
            <form
              className="mt-10 grid gap-6 text-left"
              action="https://formsubmit.co/ashishanand8824@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New message from portfolio"
              />
              <input
                type="hidden"
                name="_next"
                value="https://ashish-anand.vercel.app/#contact?success=true"
              />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                required
                className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition font-medium"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
