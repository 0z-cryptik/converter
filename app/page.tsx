import { App } from "./ui/app";
import { StateProvider } from "./globalState/stateProvider";

export default function Home() {
  return (
    <main>
      <StateProvider>
        <App />
      </StateProvider>
    </main>
  );
}
