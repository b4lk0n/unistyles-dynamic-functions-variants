import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

type TextProps = NativeTextProps & {
  variant?: 'body' | 'title'
  color?: 'neutral' | 'primary'
}

export function Text({ variant = 'body', color = 'neutral', ...props }: TextProps) {
  const { styles } = useStyles(stylesheet, {
    variant,
    color,
  })

  return <NativeText {...props} style={styles.root} />
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    fontStyle: 'italic',

    variants: {
      variant: {
        title: {
          fontSize: 90,
        },
        body: {
          fontSize: 18,
        },
      },
      color: {
        neutral: {
          color: '#000000',
        },
        primary: {
          color: '#3c244c',
        },
      },
    },
  },
}))
