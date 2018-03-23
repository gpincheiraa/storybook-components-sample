import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { VideoPosterComponent } from '../src/app/modules/ui-common/video-poster/video-poster.component';

import '../src/styles.scss';

storiesOf('Video Poster component', module)
  .add('Video Poster with author info, custom title and subtitle', () => ({
    component: VideoPosterComponent,
    props: {
      title: "Cinemagraph With Custom title",
      subtitle: "This is a custom subtitle!"
    }
  }))
  .add('Video Poster without author info', () => ({
    component: VideoPosterComponent,
    props: {
      showAuthorInfo: false
    }
  }))
  .add('Video Poster Watermarked with author info, custom title and subtitle', () => ({
    component: VideoPosterComponent,
    props: {
      isWatermarked: true
    }
  }))
  .add('Video Poster Watermarked without author info', () => ({
    component: VideoPosterComponent,
    props: {
      isWatermarked: true,
      showAuthorInfo: false
    }
  }));