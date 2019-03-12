const firebase = require('@firebase/testing');

setTimeout(async function() {
  try {
    firebase.initializeAdminApp({projectId: 'firestore-emulator-hello-world'});
    const app = firebase.apps()[0];
    const firestore = app.firestore();

    const document = firestore.doc('posts/intro-to-firestore');

    await document.set({
      title: 'Welcome to Firestore',
      body: 'Hello World',
    });

    const doc = await document.get();

    console.log(doc.data());
  } catch (error) {
    console.error(error);
  }

  Promise.all(firebase.apps().map(app => app.delete()));
}, 0);
