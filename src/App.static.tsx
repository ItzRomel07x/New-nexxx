import StaticLanding from "@/pages/static-landing";
import { ThemeProvider } from "@/contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <StaticLanding />
    </ThemeProvider>
  );
}

export default App;