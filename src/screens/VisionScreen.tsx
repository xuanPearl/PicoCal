import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { colors } from "../theme/colors";

export function VisionScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  const isFocused = useIsFocused();

  if (!permission) {
    // Camera permissions are still loading.
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>我们需要您的相机权限来识别食物</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>授予权限</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        setIsScanning(true);
        const photo = await cameraRef.current.takePictureAsync();
        // TODO: Send photo to AI service for recognition
        console.log("Photo taken:", photo?.uri);
        Alert.alert("咔嚓！", "已捕获图片，AI 识别功能开发中...");
      } catch (error) {
        console.error("Failed to take picture:", error);
      } finally {
        setIsScanning(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      {isFocused && (
        <CameraView style={styles.camera} ref={cameraRef}>
          <View style={styles.overlay}>
            <View style={styles.header}>
              <Text style={styles.headerText}>AI 食物识别</Text>
            </View>
            <View style={styles.controls}>
              <TouchableOpacity
                style={[styles.captureBtn, isScanning && styles.captureBtnActive]}
                onPress={takePicture}
                disabled={isScanning}
              >
                <Ionicons name="camera" size={32} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
    color: colors.textPrimary,
  },
  button: {
    alignSelf: "center",
    backgroundColor: colors.accentOrange,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  header: {
    paddingTop: 60,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 40,
  },
  captureBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.accentOrange,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.3)",
  },
  captureBtnActive: {
    backgroundColor: colors.textMuted,
  },
});
