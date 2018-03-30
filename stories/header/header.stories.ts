import { storiesOf, addDecorator } from '@storybook/angular';
//import { withViewport } from '@storybook/addon-viewport';
import { HeaderComponent } from '../../src/app/modules/ui-common/header/header.component';

storiesOf('Header component', module)
	.add('Header white', () => ({
		component: HeaderComponent,
		props: {}
	}))
	.add('Header transparent', () => ({
		component: HeaderComponent,
		props: {
			isTransparent: true
		}
	}));

// storiesOf('Header component Mobile', module)
// 	.addDecorator(withViewport('iphone6'))
// 	.add('Header white', () => ({
// 		component: HeaderComponent
// 	}));
