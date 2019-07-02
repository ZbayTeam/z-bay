import { createSelector } from 'reselect'

import zcashChannels from '../../zcash/channels'
import nodeSelectors from './node'

const store = s => s

const channels = createSelector(store, state => state.get('channels'))
const data = createSelector(channels, ch => ch.data)
const loader = createSelector(channels, ch => ch.loader)
const errors = createSelector(channels, c => c.get('errors'))

const generalChannelId = createSelector(
  data,
  nodeSelectors.network,
  (ch, network) => ch.find(
    c => c.get('address') === zcashChannels.general[network].address
  ).get('id')
)

export default {
  generalChannelId,
  channels,
  loader,
  data,
  errors
}
