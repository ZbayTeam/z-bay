import { DateTime, Settings } from 'luxon'
import BigNumber from 'bignumber.js'

import { messages as zbayMessages } from '../zbay'

Settings.defaultZoneName = 'utc'

export const now = DateTime.utc(2019, 3, 7, 13, 3, 48)

export const createChannel = id => ({
  id: id,
  name: `Channel ${id}`,
  private: Boolean(id % 2),
  hash: `test-hash-${id}`,
  address: `zs1testaddress${id}`,
  unread: id,
  description: id % 2 === 0 ? '' : `Channel about ${id}`,
  keys: {
    ivk: `incoming-viewing-key-${id}`
  }
})

export const channels = {
  createChannel
}

export const createMessage = (
  id,
  createdAt = now.minus({ hours: id }).toISO()
) => ({
  id,
  type: zbayMessages.messageType.BASIC,
  createdAt,
  message: `This is some message ${id}`,
  spent: new BigNumber('23.23'),
  sender: {
    replyTo: 'zs1z7rejlpsa98s2rrrfkwmaxu53e4ue0ulcrw0h4x5g8jl04tak0d3mm47vdtahatqrlkngh9sly'
  }
})

export const messages = {
  createMessage
}

export const createTransfer = ({
  txid,
  amount = '0.0001',
  memo = '',
  change = false
}) => ({
  txid,
  amount,
  memo,
  change
})

export const transfers = {
  createTransfer
}

export default {
  transfers,
  channels,
  messages
}
