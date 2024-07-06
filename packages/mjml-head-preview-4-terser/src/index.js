import { HeadComponent } from 'mjml-core-4-terser'

export default class MjPreview extends HeadComponent {
  static componentName = 'mj-preview'

  static endingTag = true

  handler() {
    const { add } = this.context

    add('preview', this.getContent())
  }
}
