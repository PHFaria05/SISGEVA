// Importa os módulos necessários
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuração do Firebase (copie do console)
const firebaseConfig = {
  apiKey: "AIzaSyDVGnaJ2EAcAXw3CrrKslGo4UaYjhzZ1cA",
  authDomain: "sisgeva-fd017.firebaseapp.com",
  projectId: "sisgeva-fd017",
  storageBucket: "sisgeva-fd017.appspot.com", // cuidado: estava errado no seu código
  messagingSenderId: "232132752005",
  appId: "1:232132752005:web:d3c384d327060e5506efec"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Conexão com Firestore e Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
