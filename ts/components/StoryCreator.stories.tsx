// Copyright 2022 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { PropsType } from './StoryCreator';
import enMessages from '../../_locales/en/messages.json';
import { StoryCreator } from './StoryCreator';
import { fakeAttachment } from '../test-both/helpers/fakeAttachment';
import { getDefaultConversation } from '../test-both/helpers/getDefaultConversation';
import { getFakeDistributionLists } from '../test-both/helpers/getFakeDistributionLists';
import { setupI18n } from '../util/setupI18n';

const i18n = setupI18n('en', enMessages);

export default {
  title: 'Components/StoryCreator',
  component: StoryCreator,
  argTypes: {
    debouncedMaybeGrabLinkPreview: { action: true },
    distributionLists: { defaultValue: getFakeDistributionLists() },
    linkPreview: {
      defaultValue: undefined,
    },
    i18n: { defaultValue: i18n },
    me: {
      defaultValue: getDefaultConversation(),
    },
    onClose: { action: true },
    onSend: { action: true },
    signalConnections: {
      defaultValue: Array.from(Array(42), getDefaultConversation),
    },
  },
} as Meta;

const Template: Story<PropsType> = args => <StoryCreator {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.story = {
  name: 'w/o Link Preview available',
};

export const LinkPreview = Template.bind({});
LinkPreview.args = {
  linkPreview: {
    domain: 'www.catsandkittens.lolcats',
    image: fakeAttachment({
      url: '/fixtures/kitten-4-112-112.jpg',
    }),
    title: 'Cats & Kittens LOL',
    url: 'https://www.catsandkittens.lolcats/kittens/page/1',
  },
};
LinkPreview.story = {
  name: 'with Link Preview ready to be applied',
};
