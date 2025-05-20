import { GraphProvider } from "./context/GraphProvider";
import { Home } from "./components/Home";

function App() {
    return (
        <GraphProvider>
            <Home />
        </GraphProvider>
    );
}

export default App;
