import { App } from 'vue'

import registerElementIcons from './regiter-element-icons'

export function globalRegister(app: App): void {
    app.use(registerElementIcons)
}