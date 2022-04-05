import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css'
import TuiGrid from 'tui-grid'

TuiGrid.setLanguage('ko')
TuiGrid.applyTheme('default', {
  outline: { border: '#eeeeee', showVerticalBorder: true },
  row: {
    even: { background: '#f5f5f5' },
    odd: { background: '#ffffff' }
  },
  cell: {
    header: { background: '#f8f8f8', border: '#eeeeee', showVerticalBorder: true, showHorizontalBorder: true },
    normal: { border: '#eeeeee', showVerticalBorder: true, showHorizontalBorder: true }
  }
})
