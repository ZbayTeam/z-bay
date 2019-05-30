import React from 'react'
import * as R from 'ramda'

import MuiMenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    height: 8,
    width: 80,
    paddingLeft: 2.5 * theme.spacing.unit,
    paddingRight: 2.5 * theme.spacing.unit,
    fontSize: '0.75rem'
  }
})

export const MenuActionItem = ({ classes, onClick, title }) => {
  return (
    <MuiMenuItem onClick={onClick} className={classes.root} key={title}>
      {title}
    </MuiMenuItem>
  )
}

export default R.compose(
  React.memo,
  withStyles(styles)
)(MenuActionItem)