import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const buttons = [
  {
    svg: `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.625 8.25385L11 0.00384521L1.375 8.25385V19.1666H20.625V8.25385Z" fill="currentColor"/>
</svg>`,
    label: 'Home',
    route: 'index',
  },
  {
    svg: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2533_114)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9972 0.0675659L15.4198 1.49015L19.6601 5.73045L20.2493 6.3197L19.6601 6.90895L15.4198 11.1493L13.9972 12.5719V9.1101H8.7784V3.52931H13.9972V0.0675659ZM7.00278 7.42434L5.58019 8.84694L1.33991 13.0872L0.750648 13.6764L1.33991 14.2657L5.58019 18.506L7.00278 19.9286V16.4669H12.2216V10.8861H7.00278V7.42434Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2533_114">
<rect width="20" height="20" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>`,
    label: 'Payments',
    route: 'payments',
  },
  {
    svg: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49498 0.666504C7.06431 0.666504 4.73314 1.63228 3.01437 3.35136C1.2956 5.07045 0.330002 7.40206 0.330002 9.83315C0.330002 12.2643 1.2956 14.5959 3.01437 16.315C4.73314 18.0341 7.06431 18.9998 9.49498 18.9998C11.9257 18.9998 14.2569 18.0341 15.9757 16.315C17.6944 14.5959 18.66 12.2643 18.66 9.83315C18.66 7.40206 17.6944 5.07045 15.9757 3.35136C14.2569 1.63228 11.9257 0.666504 9.49498 0.666504ZM8.6618 4.83331V10.6666H12.8277V8.99998H10.3282V4.83331H8.6618Z" fill="currentColor"/>
</svg>`,
    label: 'History',
    route: 'history',
  },
  {
    svg: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2533_125)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3335 0.00854492H12.1668C16.7645 0.00854492 20.4917 3.73571 20.4917 8.33342V9.16675H19.6583H12.1668H11.3335V0.00854492ZM0.544769 11.6305C0.544769 7.03283 4.27193 3.30567 8.86959 3.30567H9.70293V4.139V10.7972H16.3612H17.1945V11.6305C17.1945 16.2283 13.4673 19.9554 8.86959 19.9554C4.27193 19.9554 0.544769 16.2283 0.544769 11.6305Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2533_125">
<rect width="20" height="20" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>`,
    label: 'Analytics',
    route: 'analytics',
  },
  {
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2533_130)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C7.34783 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34783 0 10C0 11.5498 0.359787 13.0626 1.03304 14.4265L0.153875 19.8411L5.60459 18.9823C6.39386 19.3684 7.23252 19.6499 8.09902 19.8177C7.87033 19.6331 7.65053 19.4357 7.44077 19.2259C5.87797 17.6631 5 15.5435 5 13.3333C5 11.1232 5.87797 9.00358 7.44077 7.44077C9.00358 5.87797 11.1232 5 13.3333 5C15.5435 5 17.6631 5.87797 19.2259 7.44077C19.4357 7.65053 19.6331 7.87033 19.8177 8.09903C19.4412 6.15434 18.492 4.34985 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM18.0474 8.61925C16.7972 7.36904 15.1014 6.66667 13.3333 6.66667C11.5652 6.66667 9.8695 7.36904 8.61925 8.61925C7.36904 9.8695 6.66667 11.5652 6.66667 13.3333C6.66667 15.1014 7.36904 16.7972 8.61925 18.0474C9.8695 19.2976 11.5652 20 13.3333 20C14.3587 20 15.3597 19.7638 16.2636 19.3215L19.8974 19.8941L19.3113 16.2843C19.7602 15.3751 20 14.3666 20 13.3333C20 11.5652 19.2976 9.8695 18.0474 8.61925Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2533_130">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`,
    label: 'Chats',
    route: 'chats',
  },
];

function PanelButtons({ state, navigation }: BottomTabBarProps) {
  const activeIndex = state.index;
  return (
    <View style={styles.panel}>
      {buttons.map((button, index) => {
        const isActive = activeIndex === index;
        return (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(button.route)} style={styles.button}>
            <SvgXml xml={button.svg} width={22} height={20} color={isActive ? '#FE5900' : 'white'} />
            <Text style={{ color: isActive ? '#FE5900' : 'white', fontWeight: '400', fontSize: 12 }}>{button.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#060503',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
});

export default PanelButtons;