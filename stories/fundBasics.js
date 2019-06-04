import React from 'react';
import {storiesOf} from '@storybook/react';

import FundBasics from '../src/components/FundBasics';

storiesOf('Fund Details', module).add('with test data', () => (
    <FundBasics/>
));
