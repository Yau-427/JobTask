import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.logoContainer}>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M12 4.33334V8.33334H4.00001V4.33334C4.00001 2.1242 5.79087 0.333336 8.00001 0.333336C10.2091 0.333336 12 2.1242 12 4.33334ZM1.00001 12C0.56615 11.4938 0.566403 11.4936 0.566665 11.4934L0.567235 11.4929L0.56854 11.4918L0.571806 11.489L0.580958 11.4813C0.588225 11.4753 0.597826 11.4675 0.60976 11.4579C0.633626 11.4387 0.66683 11.4127 0.709383 11.3807C0.794477 11.3169 0.91701 11.2296 1.077 11.1267C1.39697 10.921 1.86708 10.6531 2.4874 10.3873C3.72968 9.8548 5.56871 9.33333 8.00001 9.33333C10.4313 9.33333 12.2703 9.8548 13.5126 10.3873C14.1329 10.6531 14.6031 10.921 14.923 11.1267C15.083 11.2296 15.2055 11.3169 15.2906 11.3807C15.3332 11.4127 15.3664 11.4387 15.3903 11.4579C15.4022 11.4675 15.4118 11.4753 15.4191 11.4813L15.4282 11.489L15.4315 11.4918L15.4328 11.4929L15.4333 11.4934C15.4336 11.4936 15.4339 11.4938 15 12L15.4339 11.4938L15.6667 11.6934V15.6667H0.333344V11.6934L0.566665 11.4934L1.00001 12Z" fill="white"/>
          </Svg>
        </View>
        <Text style={styles.title}>Charlotte</Text>
        <Svg width="7" height="10" viewBox="0 0 7 10" fill="none">
          <Path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5"/>
        </Svg>
      </View>
      <View style={styles.rightContainer}>
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path fillRule="evenodd" clipRule="evenodd" d="M0.833336 0.833336H7.5V2.5H2.5V7.5H0.833336V0.833336ZM4.16667 9.16667V8.33334V5V4.16667H5H8.33334H9.16667V9.16667H4.16667ZM5.83334 7.5H7.5V5.83334H5.83334V7.5ZM10.8333 9.16667V4.16667H11.6667H15H15.8333V9.16667H10.8333ZM12.5 7.5H14.1667V5.83334H12.5V7.5ZM4.16667 15V15.8333H9.16667V10.8333H4.16667V11.6667V15ZM7.5 14.1667H5.83334V12.5H7.5V14.1667ZM1.66667 19.1667H0.833336V12.5H2.5V17.5H7.5V19.1667H1.66667ZM19.1667 0.833336V7.5H17.5V2.5H12.5V0.833336H19.1667ZM19.1667 18.3333V19.1667H12.5V17.5H17.5V12.5H19.1667V18.3333ZM10.8333 10.8333V15.8333H16.0417V14.1667H12.5V10.8333H10.8333ZM14.1667 10.8333V12.5H15.8333V10.8333H14.1667Z" fill="white"/>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical:16,
    backgroundColor: '#060503',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0f0f0f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 8,
  },
  rightContainer: {
    // пусто
  },
});