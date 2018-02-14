import { configure } from '@storybook/angular';
import '../src/styles.scss';

function loadStories() {
  require('../stories/index.ts');
}

configure(loadStories, module);