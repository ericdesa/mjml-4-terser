import mjml2html, { components, assignComponents } from 'mjml-core-4-terser'
import { dependencies, assignDependencies } from 'mjml-validator-4-terser'
import presetCore from 'mjml-preset-core-4-terser'

assignComponents(components, presetCore.components)
assignDependencies(dependencies, presetCore.dependencies)

export default mjml2html
