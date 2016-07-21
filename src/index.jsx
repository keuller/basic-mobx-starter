import 'index.css'
import { render } from 'react-dom'
import Title from 'components/title'
import DemoModel from 'models/demo'

let model$ = new DemoModel()

let Demo = (props) => {
  return <Title model={model$} />
}

document.addEventListener('DOMContentLoaded', (evt) => {
  console.log('React/Mobx starter project')
  render(<Demo />, document.querySelector('#app'))
})
