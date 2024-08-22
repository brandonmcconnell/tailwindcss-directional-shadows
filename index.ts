import plugin from 'tailwindcss/plugin.js';

export default plugin(function ({ addUtilities, matchUtilities, theme, e }) {
  // Directional shadows
  const isVertical = (dir: string) => dir === 't' || dir === 'b';
  const useNegative = (dir: string) => dir === 'l' || dir === 't';
  function processDir(dir: string, size: string) {
    const baseStyleString = theme(`boxShadow.${size || 'DEFAULT'}`) as string;
    return baseStyleString
      .split(', ')
      .map((basePart: string) =>
        basePart
          .split(' ')
          .slice(0, 2)
          .map((l, j) => (j === 1 && useNegative(dir) ? `-${l}` : l))
          [isVertical(dir) ? 'slice' : 'reverse']()
          .concat(basePart.split(' ').slice(2, 4))
          .join(' ')
      )
      .map((p) => `${p} var(--tw-shadow-color, rgb(0 0 0 / 0.1))`)
      .join(', ');
  }
  ['sm', '', 'md', 'lg', 'xl', '2xl'].forEach((size) => {
    ['t', 'r', 'b', 'l', 'x', 'y', '*'].forEach((dir: string) => {
      const dirs = dir === '*' ? ['t', 'r', 'b', 'l'] : dir === 'x' ? ['l', 'r'] : dir === 'y' ? ['t', 'b'] : [dir];
      const styleStrings = dirs.map((dir: string) => processDir(dir, size));
      const styleString = styleStrings.join(', ');
      addUtilities({
        [`.${e(`shadow-${dir}${size ? `-${size}` : ''}`)}`]: {
          '--tw-shadow': styleString,
          '--tw-shadow-colored': styleString,
          'box-shadow': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
        },
      });
    });
  });
  // Shadows as borders (useful with `position: sticky` on tables)
  matchUtilities(
    {
      'shadow-border': (value) => ({
        boxShadow: `inset 0 0 0 ${value} var(--tw-shadow-color, ${theme('colors.gray.200')})`,
      }),
      'shadow-border-x': (value) => ({
        boxShadow: `inset ${value} 0 0 0 var(--tw-shadow-color, ${theme(
          'colors.gray.200'
        )}), inset -${value} 0 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')})`,
      }),
      'shadow-border-y': (value) => ({
        boxShadow: `inset 0 ${value} 0 0 var(--tw-shadow-color, ${theme(
          'colors.gray.200'
        )}), inset 0 -${value} 0 0 var(--tw-shadow-color, ${theme('colors.gray.200')})`,
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
    },
    { values: theme('borderWidth') }
  );
});
