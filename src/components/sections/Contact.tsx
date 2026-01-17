export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Contact Card */}
        <div className="w-full max-w-2xl rounded-2xl border border-gray-200 p-12 shadow-sm text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Let’s Build Something Solid
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            If you’re looking for a developer who values clean architecture,
            long-term maintainability, and thoughtful engineering, I’d love to
            connect.
          </p>

          {/* Contact Form */}
          <form
            className="mt-10 grid gap-6 text-left"
            action="https://formsubmit.co/ashishanand8824@gmail.com"
            method="POST"
          >
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Email subject */}
            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio"
            />

            {/* Redirect after submit (optional) */}
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/#contact"
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
        </div>
      </div>
    </section>
  );
}
