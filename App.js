import { View } from "react-native";
import Image from "./src/assets/fake-masculino.jpg";
import InfoProfile from "./src/components/InfoProfile";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <InfoProfile image={Image} publi={250} followers={1230} following={5} />
    </View>
  );
}
