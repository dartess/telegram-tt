import React, { FC, memo } from '../../lib/teact/teact';
import { Bundles } from '../../util/moduleLoader';

import { OwnProps } from './BotTrustModal';

import useModuleLoader from '../../hooks/useModuleLoader';

const BotTrustModalAsync: FC<OwnProps> = (props) => {
  const { bot } = props;
  const BotTrustModal = useModuleLoader(Bundles.Extra, 'BotTrustModal', !bot);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return BotTrustModal ? <BotTrustModal {...props} /> : undefined;
};

export default memo(BotTrustModalAsync);
