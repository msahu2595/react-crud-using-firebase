import firebase from "firebase";
export default () => {
  console.log()
  if (firebase.apps.length ===0) {
    firebase.initializeApp({
      apiKey: "AIzaSyDjaSWTf7KJjdHPbc1S0p7bjfCLObUXjN8",
      // authDomain: 'test.firebase.com',
      projectId: "test-f7a33"
    });
  }
  
  const db = firebase.firestore();
  return db
};
