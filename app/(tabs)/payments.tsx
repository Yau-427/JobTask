import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import Svg, { Circle, Polyline } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';

import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { usePaymentForm } from '@/features/payments/hooks/usePaymentForm';
import { TransactionType } from '@/types';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPolyline = Animated.createAnimatedComponent(Polyline);

export default function PaymentsScreen() {
   const { form, updateForm, pickImage, clearImage, imageUri, submitForm, transactionTypes } = usePaymentForm();
   const [modalVisible, setModalVisible] = useState(false);
   const [showTypeModal, setShowTypeModal] = useState(false);
   const [successVisible, setSuccessVisible] = useState(false);

   const circleDashOffset = useSharedValue(1000);
   const checkDashOffset = useSharedValue(-100);

   useEffect(() => {
     if (successVisible) {
       circleDashOffset.value = withTiming(0, { duration: 900 });
       setTimeout(() => {
         checkDashOffset.value = withTiming(900, { duration: 900 });
       }, 350);
     }
   }, [successVisible, circleDashOffset, checkDashOffset]);

   const animatedCircleProps = useAnimatedProps(() => ({
     strokeDashoffset: circleDashOffset.value,
   }));

   const animatedCheckProps = useAnimatedProps(() => ({
     strokeDashoffset: checkDashOffset.value,
   }));

   const handleSubmit = async () => {
     const success = await submitForm();
     if (success) {
       setModalVisible(false);
       clearImage();
       setSuccessVisible(true);
       setTimeout(() => setSuccessVisible(false), 2000);
     }
   };

  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#FE5900',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 20,
        }}
        onPress={() => setModalVisible(true)}
      >
        <ThemedText style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Make Payment +</ThemedText>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView intensity={50} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ThemedView style={{ width: '80%', padding: 20, borderRadius: 16, backgroundColor: '#1a1a1a' }}>
            <ThemedText style={{ fontSize: 20, marginBottom: 20, color: '#fff' }}>Add Transaction</ThemedText>


            <ThemedText style={{ fontSize: 16, marginBottom: 5, color: '#fff' }}>Name</ThemedText>
            <TextInput
              placeholder="Transaction name"
              placeholderTextColor="#ccc"
              value={form.name}
              onChangeText={(text) => updateForm({ name: text })}
              style={{ backgroundColor: '#0F0F0F', padding: 10, marginBottom: 10, borderRadius: 16, color: '#fff' }}
            />

            <ThemedText style={{ fontSize: 16, marginBottom: 5, color: '#fff' }}>Price</ThemedText>
            <TextInput
              placeholder="0.00"
              placeholderTextColor="#ccc"
              value={form.price.toString()}
              onChangeText={(text) => updateForm({ price: parseFloat(text) || 0 })}
              keyboardType="numeric"
              style={{ backgroundColor: '#0F0F0F', padding: 10, marginBottom: 10, borderRadius: 16, color: '#fff' }}
            />

            <ThemedText style={{ fontSize: 16, marginBottom: 5, color: '#fff' }}>Type</ThemedText>
            <TouchableOpacity
              onPress={() => setShowTypeModal(true)}
              style={{ backgroundColor: '#0F0F0F', padding: 10, borderRadius: 16, marginBottom: 10 }}
            >
              <ThemedText style={{ color: form.type ? '#fff' : '#ccc' }}>
                {form.type || 'Select type'}
              </ThemedText>
            </TouchableOpacity>

            <ThemedText style={{ fontSize: 16, marginBottom: 5, color: '#fff' }}>Image</ThemedText>
            {imageUri ? (
              <View style={{ marginBottom: 20, alignItems: 'center' }}>
                <Image source={{ uri: imageUri }} style={{ width: 80, height: 80, borderRadius: 12, marginBottom: 10 }} />
                <TouchableOpacity
                  style={{
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: '#FE5900',
                    padding: 5,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}
                  onPress={clearImage}
                >
                  <ThemedText style={{ color: '#FE5900', fontSize: 12 }}>Clear</ThemedText>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: '#0F0F0F',
                  padding: 10,
                  marginBottom: 20,
                  borderRadius: 16,
                  alignItems: 'center',
                }}
                onPress={pickImage}
              >
                <ThemedText style={{ color: '#FE5900' }}>Upload Image</ThemedText>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={{
                backgroundColor: '#FE5900',
                padding: 12,
                borderRadius: 16,
                alignItems: 'center',
              }}
              onPress={handleSubmit}
            >
              <ThemedText style={{ color: 'white', fontSize: 16 }}>Submit</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 10, alignItems: 'center' }}
              onPress={() => setModalVisible(false)}
            >
              <ThemedText style={{ color: '#888' }}>Cancel</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </BlurView>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showTypeModal}
        onRequestClose={() => setShowTypeModal(false)}
      >
        <BlurView intensity={50} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ThemedView style={{ width: '70%', padding: 20, borderRadius: 16, backgroundColor: '#1a1a1a' }}>
            <ThemedText style={{ fontSize: 18, marginBottom: 20, color: '#fff', textAlign: 'center' }}>Select Type</ThemedText>
             {transactionTypes.map((type: TransactionType) => (
               <TouchableOpacity
                 key={type}
                 onPress={() => {
                   updateForm({ type });
                   setShowTypeModal(false);
                 }}
                 style={{ padding: 10, marginBottom: 10, backgroundColor: '#0F0F0F', borderRadius: 8, alignItems: 'center' }}
               >
                 <ThemedText style={{ color: '#fff' }}>{type}</ThemedText>
               </TouchableOpacity>
             ))}
            <TouchableOpacity
              onPress={() => setShowTypeModal(false)}
              style={{ padding: 10, marginTop: 10, alignItems: 'center' }}
            >
              <ThemedText style={{ color: '#888' }}>Cancel</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </BlurView>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={successVisible}
        onRequestClose={() => setSuccessVisible(false)}
      >
        <BlurView intensity={50} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Svg width="130" height="130" viewBox="0 0 130.2 130.2">
              <AnimatedCircle
                cx="65.1"
                cy="65.1"
                r="62.1"
                fill="none"
                stroke="#FE5900"
                strokeWidth="6"
                strokeMiterlimit="10"
                strokeDasharray="1000"
                animatedProps={animatedCircleProps}
              />
              <AnimatedPolyline
                points="100.2,40.2 51.5,88.8 29.8,67.5"
                fill="none"
                stroke="#FE5900"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="1000"
                animatedProps={animatedCheckProps}
              />
            </Svg>
            <ThemedText style={{ marginTop: 20, fontSize: 18, color: '#FE5900' }}>Success!</ThemedText>
          </View>
        </BlurView>
      </Modal>
    </ThemedView>
  );
}