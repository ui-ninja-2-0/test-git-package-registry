import {configure, addParameters} from '@storybook/react';

addParameters({viewport: {}});


function loadStories() {
    require('../stories/fundBasics');
    require('../stories/yield');
}

configure(loadStories, module);
