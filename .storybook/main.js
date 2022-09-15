// .storybook/main.js
module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        "../components/**/*.stories.tsx",
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: "@storybook/react",
}
