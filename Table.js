
import React, { Component } from 'react'
import _ from 'lodash'
import {
  MJMLColumnElement,
  elements,
  registerElement,
} from 'mjml'

const {
  text: MjText,
} = elements;

const NAME = 'table'

@MJMLColumnElement({
  tagName: 'mj-table',
  content: '',

  attributes: {
    'align': 'left',
    'color': '#000',
    'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'line-height': '22px',
    'padding': '10px 25px'
  }
})
class Table extends Component {

  getStyles() {
    const { mjAttribute, color } = this.props

    return _.merge({}, this.constructor.baseStyles, {
      table: {
        color: mjAttribute('color'),
        fontFamily: mjAttribute('font-family'),
        fontSize: mjAttribute('font-size'),
        lineHeight: mjAttribute('line-height')
      }
    })
  }

  render() {
    const css = this.getStyles(),
          { mjContent } = this.props

    return (
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        dangerouslySetInnerHTML={{__html: mjContent() }}
        style={css.table}
			/>
    )
  }
}

registerElement('table', Table, { endingTag: true })
export default Table
