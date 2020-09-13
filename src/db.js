import firebase from '@/firebase';

export default firebase.firestore();

const { moods } = firebase.firestore;
export { moods };
