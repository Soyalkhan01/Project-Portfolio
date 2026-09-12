import footerData from "../../data/footer";

function Footer() {
    return (
        <footer
            aria-labelledby="footer-heading"
            className="px-4 sm:px-6 py-10 md:py-12 bg-indigo-950 border-t border-indigo-900"
        >
            {/* Footer Identity */}
            <div className="text-center mb-6">
                <h2
                    id="footer-heading"
                    className="text-xl sm:text-2xl font-bold text-white"
                >
                    {footerData.title}
                </h2>

                <p className="mt-2 text-sm sm:text-base text-indigo-200">
                    {footerData.description}
                </p>
            </div>

            {/* Social Links */}
            <nav
                aria-label="Social media links"
                className="flex justify-center flex-wrap gap-3 mt-6 px-2"
            >
                {footerData.socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit Soyal Khan's ${social.name} profile`}
                            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-800 text-indigo-100 hover:text-white hover:border-indigo-400 hover:bg-indigo-900/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
                        >
                            <Icon
                                aria-hidden="true"
                                className="text-lg group-hover:scale-110 transition-transform duration-300"
                            />

                            <span className="text-sm font-medium">
                                {social.name}
                            </span>
                        </a>
                    );
                })}
            </nav>

            {/* Divider */}
            <div className="max-w-4xl mx-auto border-t border-indigo-900/70 mt-8 pt-6"></div>

            {/* Copyright */}
            <p className="text-center text-sm sm:text-base text-white">
                © {new Date().getFullYear()} {footerData.copyrightName}. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;