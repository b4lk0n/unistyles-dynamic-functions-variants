import { UnistylesRegistry } from 'react-native-unistyles'

import { light } from './light'

type AppThemes = {
  light: typeof light
}

declare module 'react-native-unistyles' {
  interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light,
})

UnistylesRegistry.addConfig({
  adaptiveThemes: true,
})
