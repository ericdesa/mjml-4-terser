import { HeadComponent } from 'mjml-core-4-terser'

export default class MjHead extends HeadComponent {
  static componentName = 'mj-head'

  handler() {
    return this.handlerChildren()
  }
}
