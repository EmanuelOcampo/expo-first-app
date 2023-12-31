import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router"
import { COLORS, SIZES, icons, images } from "../constants";
import { ScreenHeaderBtn, Welcome, Popularjobs, Nearbyjobs } from "../components";

const Home = () => {
  const router = useRouter();

 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* <Text>Home</Text> */}
      <Stack.Screen
        options={{
          headerTitle:"",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile }
              dimension="100%"
            />
          )
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome

          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>



    </SafeAreaView>
  )
}

export default Home