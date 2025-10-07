import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

const buttons = [
  {
    svg: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2118_15606)">
<path opacity="0.2" d="M12.5 0.5C5.87258 0.5 0.5 5.87258 0.5 12.5C0.5 19.1274 5.87258 24.5 12.5 24.5C19.1274 24.5 24.5 19.1274 24.5 12.5C24.5 5.87258 19.1274 0.5 12.5 0.5Z" fill="#FE5900"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8041 13.2363L15.5001 15.9801V24.1219C20.6758 22.7898 24.5001 18.0915 24.5001 12.5C24.5001 9.88763 23.6653 7.47024 22.248 5.5H16.0486C13.5365 5.5 11.5001 7.53641 11.5001 10.0485C11.5001 11.2409 11.9684 12.3857 12.8041 13.2363ZM0.666016 14.5H6.50009C8.70923 14.5 10.5001 16.2909 10.5001 18.5V24.3341C5.47509 23.491 1.50905 19.525 0.666016 14.5Z" fill="#FE5900"/>
</g>
<defs>
<clipPath id="clip0_2118_15606">
<rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
</clipPath>
</defs>
</svg>`,
    label: 'Travel',
  },
  {
    svg: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2118_15612)">
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.5 7.5H8.5V18.5H20.5V7.5H9.5Z" fill="#FE5900"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 15.5H13.5V13.5H17.5V15.5Z" fill="#FE5900"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.20718 3.07227L3.70718 0.572266L2.29297 1.98648L4.50009 4.1936L4.50056 18.6706C3.33511 19.0823 2.50008 20.1937 2.50008 21.5001C2.50008 23.1569 3.84322 24.5001 5.50008 24.5001C6.80629 24.5001 7.91753 23.6653 8.32937 22.5001H19.5859L21.293 24.2072L22.7072 22.793L20.7072 20.793L20.4143 20.5001H8.32937C8.02814 19.6478 7.35274 18.9723 6.50056 18.671L6.50008 3.77934L6.50006 3.36515L6.20718 3.07227Z" fill="#FE5900"/>
</g>
<defs>
<clipPath id="clip0_2118_15612">
<rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
</clipPath>
</defs>
</svg>`,
    label: 'Delivery',
  },
  {
    svg: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.5C7.5 4.39543 8.39543 3.5 9.5 3.5C10.6046 3.5 11.5 4.39543 11.5 5.5V8H13.5V5.5C13.5 4.39543 14.3954 3.5 15.5 3.5C16.6046 3.5 17.5 4.39543 17.5 5.5C17.5 5.72614 17.3203 6.58463 16.4453 7.16795L14.9453 8.16795L16.0547 9.83205L17.5547 8.83205C19.0797 7.81537 19.5 6.27386 19.5 5.5C19.5 3.29086 17.7091 1.5 15.5 1.5C14.3053 1.5 13.2329 2.02376 12.5 2.85418C11.7671 2.02376 10.6947 1.5 9.5 1.5C7.29086 1.5 5.5 3.29086 5.5 5.5C5.5 6.27386 5.92027 7.81537 7.4453 8.83205L8.9453 9.83205L10.0547 8.16795L8.5547 7.16795C7.67973 6.58463 7.5 5.72614 7.5 5.5Z" fill="#FE5900"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M1.5 7.5H23.5V13H22.5V23.5H2.5V13H1.5V7.5Z" fill="#FE5900"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 13H2.5V15H11.5V23.5H13.5V15H22.5V13Z" fill="#FE5900"/>
</svg>
`,
    label: 'Bonuses',
  },
  {
    svg: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2118_15626)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 8.5C6.5 5.18629 9.18629 2.5 12.5 2.5C15.8137 2.5 18.5 5.18629 18.5 8.5V16.5C18.5 18.9853 16.4853 21 14 21H13.5V19.5H11.5V24.5H13.5V23H14C17.5899 23 20.5 20.0898 20.5 16.5V8.5C20.5 4.08172 16.9183 0.5 12.5 0.5C8.08172 0.5 4.5 4.08172 4.5 8.5V17.5H6.5V8.5Z" fill="#FE5900"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 8.5H0.5V17.5H6.5V8.5Z" fill="#FE5900"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M24.5 8.5H18.5V17.5H24.5V8.5Z" fill="#FE5900"/>
</g>
<defs>
<clipPath id="clip0_2118_15626">
<rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
</clipPath>
</defs>
</svg>`,
    label: 'Support',
  },
];

function HomePanelButtons() {
  return (
    <View style={styles.panel}>
      {buttons.map((button, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <SvgXml xml={button.svg} width={25} height={25} />
          <Text style={styles.label}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop:24
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#Ffffff', // или другой цвет, но в SVG уже #FE5900
  },
});

export default HomePanelButtons;