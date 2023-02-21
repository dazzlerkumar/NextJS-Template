module.exports = {
    reactStrictMode: false,
    /* Config for SVG support */
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    /* using images from external domains */
    images: {
        domains: [],
    },

    env: { base_url: "/" },
};
