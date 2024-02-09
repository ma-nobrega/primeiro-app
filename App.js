import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Logo from "./src/assets/instagram-logo.png";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image style={{ width: 150, height: 50 }} source={Logo} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Feather name="heart" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8 }}>
            <Feather name="message-circle" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          gap: 8,
          height: 100,
        }}
        horizontal
        style={{ flexDirection: "row" }}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
