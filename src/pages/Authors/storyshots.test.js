import initStoryshots from '@storybook/addon-storyshots';

// Getting automatic snapshots for Storybook stories seems like a win-win.
// Limiting storyshots to work on a component by component basis, for better
// insight into what broke and who (CODEOWNERS) may need to know.

initStoryshots({
  storyKindRegex: /^Authors($|\/)/,
});
