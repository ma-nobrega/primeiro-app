import { StyleSheet, View } from "react-native";
import InfoProfile from "../components/InfoProfile";
import MyPosts from "../components/MyPosts";
import Fake from "../assets/fake-masculino.jpg";
import Post from "../assets/post-example.png";

export default function Profile() {
  return (
    <View style={styles.container}>
      <InfoProfile image={Fake} publi={215} followers={2450} following={5} />
      <MyPosts image={Post} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 36,
    marginHorizontal: 16,
  },
});
