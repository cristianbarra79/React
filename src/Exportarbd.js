import firebase from 'firebase'

import { listado } from './data/data.js'

const exportarbd = () => {

    console.log(listado);


    firebase.initializeApp({
        apiKey: "AIzaSyBR8BUx1kr2R0i_0VJb_oiu9ZK_WjC-ZRs",
        authDomain: "barragan-ecommerce.firebaseapp.com",
        projectId: "barragan-ecommerce",
        storageBucket: "barragan-ecommerce.appspot.com",
        messagingSenderId: "654911467793",
        appId: "1:654911467793:web:6f1dd987f9444f102bdcb0"
    });
      
    var db = firebase.firestore();


    listado.forEach(function(item) {
        db.collection("items").add({
            cantidad: item.rating.count,
            categoria:item.category,
            descripcion:item.description,
            imagen:item.image,
            precio:item.price,
            titulo:item.title
        }).then(function(docRef) {
            console.log("Document written with id: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    })
    

    return (
        <div>
            <h1>exportar</h1>
        </div>
    )
}

export default exportarbd
