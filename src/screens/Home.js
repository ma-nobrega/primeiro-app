import { ScrollView } from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Fake from "../assets/fake-feminino.jpg";
import PostImage from "../assets/post-example.png";

export default function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        marginTop: 32,
        marginHorizontal: 8,
      }}
    >
      <Header />
      <Stories />
      <Post
        profileImage={Fake}
        postImage={PostImage}
        profileName="Fulana da Silva"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi porta, eros at luctus pretium, felis ex feugiat augue, quis mollis
         magna risus a felis. Vivamus nunc neque, laoreet posuere scelerisque ac,
          interdum nec dolor. Quisque ultricies tincidunt nisl, nec accumsan dolor sodales ut."
      />
      <Post
        profileImage={Fake}
        postImage={PostImage}
        profileName="Fulana da Silva"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi porta, eros at luctus pretium, felis ex feugiat augue, quis mollis
         magna risus a felis. Vivamus nunc neque, laoreet posuere scelerisque ac,
          interdum nec dolor. Quisque ultricies tincidunt nisl, nec accumsan dolor sodales ut."
      />
      <Post
        profileImage={Fake}
        postImage={PostImage}
        profileName="Fulana da Silva"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi porta, eros at luctus pretium, felis ex feugiat augue, quis mollis
         magna risus a felis. Vivamus nunc neque, laoreet posuere scelerisque ac,
          interdum nec dolor. Quisque ultricies tincidunt nisl, nec accumsan dolor sodales ut."
      />
    </ScrollView>
  );
}
