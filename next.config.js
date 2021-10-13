/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        localeDetection: true,
        defaultLocale: "en-US",
        locales: ["en-US", "ru-RU", "pl-PL"],
    },
    images: {
        domains: [
            "www.wit.edu.pl"
        ]
    }



}
