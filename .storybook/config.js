import { configure } from '@storybook/angular';
import '../src/styles.scss';
import '../stories/header/header.scss';

function loadStories() {
  require('../stories/index.ts');
}

configure(loadStories, module);