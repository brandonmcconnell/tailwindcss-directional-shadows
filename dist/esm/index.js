import plugin from 'tailwindcss/plugin';
module.exports = plugin(function ({ addUtilities, matchUtilities, theme }) {
    // Directional shadows
    ['sm', '', 'md', 'lg', 'xl', '2xl'].forEach((suffix) => {
        ['b', 'r', 't', 'l'].forEach((dir, i) => {
            const isEven = i % 2 === 0;
            const baseStyleString = theme(`boxShadow.${suffix || 'DEFAULT'}`);
            const styleString = baseStyleString
                .split(', ')
                .map((basePart) => basePart
                .split(' ')
                .slice(0, 2)
                .map((l, j) => (j === 1 && i > 1 ? `-${l}` : l))[isEven ? 'slice' : 'reverse']()
                .concat(basePart.split(' ').slice(2, 4))
                .join(' '))
                .map((p) => `${p} var(--tw-shadow-color, rgb(0 0 0 / 0.1))`)
                .join(', ');
            addUtilities({
                [`.shadow-${dir}${suffix ? `-${suffix}` : ''}`]: {
                    '--tw-shadow': styleString,
                    '--tw-shadow-colored': styleString,
                    'box-shadow': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
                },
            });
        });
    });
    // Shadows as borders (useful with `position: sticky` on tables)
    matchUtilities({
        'shadow-border': (value) => ({
            boxShadow: `inset 0 0 0 ${value} var(--tw-shadow-color, ${theme('colors.gray.200')})`,
        }),
        'shadow-border-x': (value) => ({
            boxShadow: `inset ${value} 0 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')}), inset -${value} 0 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')})`,
        }),
        'shadow-border-y': (value) => ({
            boxShadow: `inset 0 ${value} 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')}), inset 0 -${value} 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')})`,
        }),
        'shadow-border-t': (value) => ({
            boxShadow: `inset 0 ${value} 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')})`,
        }),
        'shadow-border-b': (value) => ({
            boxShadow: `inset 0 -${value} 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')})`,
        }),
        'shadow-border-l': (value) => ({
            boxShadow: `inset ${value} 0 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')})`,
        }),
        'shadow-border-r': (value) => ({
            boxShadow: `inset -${value} 0 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')})`,
        }),
    }, { values: theme('borderWidth') });
});
