import { CallSimulator } from "./components/CallSimulator";
import { Header } from "./components/Header";
import { Plans } from "./components/Plans";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global"
import { PlansProvider } from "./PlansContext";

export function App() {
  return (
    <>
      <Header/>
      <PlansProvider>
        <CallSimulator/>
        <Plans/>
      </PlansProvider>
      <Footer/>
      <GlobalStyle/>
    </>
  );
}
