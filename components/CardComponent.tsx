import { ImageBackground, Dimensions, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

const { width: screenWidth } = Dimensions.get('window');

const CardComponent = () => {
    const mastercardSvg = `<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M8 0C9.89239 0 11.6302 0.658406 13 1.75684C11.1717 3.22298 10 5.47411 10 8C10 10.5257 11.172 12.776 13 14.2422C11.6302 15.3408 9.89261 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM18 0C22.4183 0 26 3.58172 26 8C26 12.4183 22.4183 16 18 16C16.1074 16 14.3698 15.3408 13 14.2422C14.828 12.776 16 10.5257 16 8C16 5.47411 14.8283 3.22298 13 1.75684C14.3698 0.658406 16.1076 0 18 0Z" fill="white"/>
</svg>`;

    const plusSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="8.25" y1="1" x2="8.25" y2="15" stroke="white" stroke-width="1.5"/>
<line x1="15" y1="7.75" x2="1" y2="7.75" stroke="white" stroke-width="1.5"/>
</svg>`;

    // Рассчитываем ширину карточки с учетом отступов
    const cardWidth = (screenWidth - 16) / 2.66; // 32px горизонтальных отступов + 32px для двух gap между тремя карточками

    return (
        <ThemedView style={{ paddingHorizontal: 16, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 8 }}>
            <ImageBackground
                source={require('@/assets/images/card1bg.jpg')}
                style={{
                    width: cardWidth,
                    height: cardWidth * 0.7, // Соотношение сторон как у банковской карты
                    borderRadius: 16
                }}
                imageStyle={{ borderRadius: 16 }}
            >
                <View style={{ flex: 1, padding: 12, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <SvgXml xml={mastercardSvg} />
                    <View>
                        <ThemedText style={{ fontWeight: '600', fontSize: 18, textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2, textShadowColor: 'rgba(0,0,0,0.12)' }}>$4,098.12</ThemedText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                            <ThemedText style={{ fontWeight: '400', fontSize: 14 }}>Debit</ThemedText>
                            <ThemedText style={{ fontWeight: '400', fontSize: 14 }}>•• 4385</ThemedText>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('@/assets/images/card2bg.png')}
                style={{
                    width: cardWidth,
                    height: cardWidth * 0.7,
                    borderRadius: 16

                }}
                imageStyle={{ borderRadius: 16 }}
            >
                <View style={{ flex: 1, padding: 12, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <SvgXml xml={mastercardSvg} />
                    <View>
                        <ThemedText style={{ fontWeight: '600', fontSize: 18, textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2, textShadowColor: 'rgba(0,0,0,0.12)' }}>$14.71</ThemedText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                            <ThemedText style={{ fontWeight: '400', fontSize: 14 }}>Virtual</ThemedText>
                            <ThemedText style={{ fontWeight: '400', fontSize: 14 }}>•• 9081</ThemedText>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            <View
                style={{
                    width: 40,
                    height: cardWidth * 0.7,
                    borderRadius: 16,
                    backgroundColor: '#0F0F0F'
                }}
            >
                <View style={{ flex: 1, padding: 12, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={plusSvg} />
                </View>
            </View>
        </ThemedView>
    );
};

export default CardComponent;