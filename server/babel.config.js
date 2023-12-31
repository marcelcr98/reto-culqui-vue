module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
    ],
    plugins: [
        ["@babel/plugin-transform-flow-strip-types"],
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
        ["@babel/plugin-proposal-class-properties", {"loose": true}],
        ["@babel/plugin-transform-private-property-in-object", {"loose": true}],
        ["@babel/plugin-transform-class-properties", {"loose": true}],
    ]
};