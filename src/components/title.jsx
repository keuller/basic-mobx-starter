import { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Title extends Component {

  constructor(props) {
    super(props)
  }

  changeTitleHandler = (ev) => {
    ev.preventDefault()
    this.props.model.changeTitle('Mobx/React Starter - Changed!')
  }

  render() {
    return (
      <div>
        <h3>{this.props.model.title}</h3>
        <button onClick={this.changeTitleHandler}>Change Title</button>
      </div>
    )
  }
}

export default Title
