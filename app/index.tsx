import { Text } from '../ui/text'
import { View } from 'react-native'

export default function HomePage() {
  return (
    <View style={{ padding: 70 }}>
      <View>
        <Text variant="title">Title</Text>
      </View>
      <View>
        <Text variant="body">Body</Text>
      </View>
    </View>
  )
}
