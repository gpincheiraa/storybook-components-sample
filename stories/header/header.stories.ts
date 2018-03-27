import { storiesOf } from '@storybook/angular';
import { HeaderComponent } from '../../src/app/modules/ui-common/header/header.component';

storiesOf('Header component', module)
	.add('Header Transparent', () => ({
		component: HeaderComponent,
		props: {}
	}));
