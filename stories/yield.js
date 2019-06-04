import React from 'react';
import {storiesOf} from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import Yield from '../src/components/Yield';

const stories = storiesOf('Storybook Knobs', module);

storiesOf('Yield Details', module).add('with test data', () => (
    <Yield/>
));
