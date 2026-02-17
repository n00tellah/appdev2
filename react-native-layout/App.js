import { StatusBar } from 'expo-status-bar';
import Login from './screens/Login';
// import Signup from './screens/Signup';

export default function App() {
  return (
    <>
      <Login />
      {/* <Signup /> */}
      <StatusBar style="auto" />
    </>
  );
}
