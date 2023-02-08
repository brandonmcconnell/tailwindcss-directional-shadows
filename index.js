const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
  ['sm', '', 'md', 'lg', 'xl', '2xl'].forEach((suffix) => {
    ['b', 'r', 't', 'l'].forEach((dir, i) => {
      const isEven = i % 2 === 0
      const baseStyleString = theme(`boxShadow.${suffix || 'DEFAULT'}`)
      const styleString = baseStyleString.split(', ').map((basePart) =>
        basePart
          .split(' ')
          .slice(0, 2)
          .map((l, j) => (j === 1 && i > 1 ? `-${l}` : l))
          [isEven ? 'slice' : 'reverse']()
          .concat(basePart.split(' ').slice(2, 4))
          .join(' ')
      ).map((p) => `${p} var(--tw-shadow-color, rgb(0 0 0 / 0.1))`).join(', ');
      addUtilities({
        [`.shadow-${dir}${suffix ? `-${suffix}` : ''}`]: {
          '--tw-shadow': styleString,
          '--tw-shadow-colored': styleString,
          'box-shadow':
            'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
        },
      })
    })
  });
});