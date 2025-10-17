const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-purple-200">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get In Touch
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm always open to discussing new opportunities, creative projects, or
          just having a chat about technology. Feel free to reach out!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">
                      ojoaaron93@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800 font-medium">
                      +234 7089196155 OR +234 9169305821
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800 font-medium">Ibadan, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Aaron-ojo"
                    className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white md:p-3 text-base md:text-lg p-2 rounded-lg hover:bg-pink-700 transition"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Simple Message */}
            <div className="bg-purple-100 p-8 rounded-lg shadow-lg shadow-purple-400 ">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Send me a message
              </h3>
              <p className="text-gray-600 mb-6">
                Prefer to email directly? Feel free to send me a message at{" "}
                <a
                  href="mailto:ojoaaron93@.com"
                  className="text-blue-600 hover:underline"
                >
                  ojoaaron93@gmail.com
                </a>
                . I'll get back to you as soon as possible!
              </p>
              <a
                href="mailto:your.email@example.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
