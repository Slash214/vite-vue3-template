import type { App } from 'vue'

import { Edit, Search, CoffeeCup, Eleme, Position,Right, Folder, ColdDrink } from '@element-plus/icons-vue'

export const icons = [Edit, Search, Position, Eleme, Right, Folder, CoffeeCup, ColdDrink]

//按需导出图标组件
export default function (app: App): void {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
