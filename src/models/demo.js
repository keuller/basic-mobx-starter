import { observable, action } from 'mobx'

class Demo {
  @observable title = 'Mobx/React Starter';

  @action changeTitle(value) {
    this.title = value
  }

}

export default Demo
