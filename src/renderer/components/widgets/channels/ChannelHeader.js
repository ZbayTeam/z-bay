import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import * as R from 'ramda'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import ChannelMenuAction from '../../../containers/widgets/channels/ChannelMenuAction'
import ChannelInfoModal from '../../../containers/widgets/channels/ChannelInfoModal'
import DirectMessagesInfoModal from '../../../containers/widgets/channels/DirectMessagesInfoModal'

const styles = theme => ({
  root: {
    minHeight: '100%',
    paddingTop: 16,
    paddingBottom: 36,
    paddingLeft: 20,
    paddingRight: 24
  },
  title: {
    fontSize: '1rem',
    lineHeight: '1.66'
  },
  subtitle: {
    fontSize: '0.8rem'
  },
  spendButton: {
    fontSize: 13
  },
  actions: {
    width: 180
  }
})

// TODO: [reafactoring] we should have channel stats for unread and members count
export const ChannelHeader = ({ classes, channel, directMessage, offer, members }) => {
  return (
    <Grid
      container
      alignItems='center'
      justify='space-between'
      className={classes.root}
      direction='row'
    >
      <Grid item>
        <Typography variant='subtitle1' className={classes.title}>
          {channel.get('name')}
        </Typography>
        {!R.isNil(members) ? (
          <Typography variant='caption' className={classes.subtitle}>
            {members.size} Members
          </Typography>
        ) : null}
      </Grid>
      <Grid item container className={classes.actions} justify='flex-end' alignItems='center'>
        <Grid item>
          <ChannelMenuAction directMessage={directMessage} offer={offer} />
          {directMessage ? <DirectMessagesInfoModal /> : <ChannelInfoModal />}
        </Grid>
      </Grid>
    </Grid>
  )
}

ChannelHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  directMessage: PropTypes.bool.isRequired,
  channel: PropTypes.instanceOf(Immutable.Map).isRequired,
  members: PropTypes.instanceOf(Set)
}

ChannelHeader.defaultProps = {
  channel: Immutable.Map(),
  directMessage: false
}

export default R.compose(
  React.memo,
  withStyles(styles)
)(ChannelHeader)
