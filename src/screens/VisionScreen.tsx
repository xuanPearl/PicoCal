import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { colors } from "../theme/colors";
import { NutritionCard } from "../components/NutritionCard";
import { spacing } from "../theme/spacing";

export function VisionScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  const isFocused = useIsFocused();

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
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
        
        if (photo?.uri) {
          setCapturedImage(photo.uri);
          // Simulate AI processing delay
          setTimeout(() => {
            setShowResult(true);
            setIsScanning(false);
          }, 1500);
        }
      } catch (error) {
        console.error("Failed to take picture:", error);
        setIsScanning(false);
      }
    }
  };

  const resetScanner = () => {
    setShowResult(false);
    setCapturedImage(null);
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
                style={[
                  styles.captureBtn,
                  isScanning && styles.captureBtnActive,
                ]}
                onPress={takePicture}
                disabled={isScanning}
              >
                {isScanning ? (
                  <Ionicons name="hourglass" size={32} color="white" />
                ) : (
                  <Ionicons name="camera" size={32} color="white" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </CameraView>
      )}

      {/* Result Modal */}
      <Modal visible={showResult} transparent animationType="slide">
        <View style={styles.modalContainer}>
          {capturedImage && (
            <ImageBackground
              source={{ uri: capturedImage }}
              style={styles.modalBackground}
              blurRadius={10}
            >
              <View style={styles.modalContent}>
                <NutritionCard
                  foodName="香煎鸡胸肉沙拉"
                  calories={342}
                  healthScore={9}
                  nutrients={{
                    protein: 35,
                    carbs: 12,
                    fat: 8,
                  }}
                />
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={resetScanner}
                >
                  <Ionicons name="close-circle" size={48} color="white" />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          )}
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  closeBtn: {
    marginTop: spacing.xl,
  },
});
