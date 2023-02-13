import { Modal, View, Pressable, Text, StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onOpenCamera: () => void;
  onOpenGallery: () => void;
}

const ImageImportTypeModal = ({ visible, onCancel, onOpenCamera, onOpenGallery }: Props) => {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.popupContainer}>
        <View style={styles.modal}>
          <Pressable onPress={onOpenCamera} style={styles.modalButton}>
            <Text style={styles.modalText}>Neem een foto</Text>
          </Pressable>
          <Pressable onPress={onOpenGallery} style={styles.modalButton}>
            <Text style={styles.modalText}>Open gallerij</Text>
          </Pressable>
          <Pressable onPress={onCancel} style={styles.modalButtonCancel}>
            <Text style={styles.modalText}>Annuleren</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(176, 175, 175, 0.584)',
  },
  modal: {
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: '#6ac580',
    borderRadius: 10,
    minWidth: '70%',
    height: 50,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  modalButtonCancel: {
    backgroundColor: '#e16161',
    borderRadius: 10,
    minWidth: '70%',
    height: 50,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ImageImportTypeModal;
