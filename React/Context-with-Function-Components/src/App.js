import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

// To use multiple contexts, parent node should be encapsulated with each context providers like Navbar
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
        </AuthContextProvider> 
        <BookList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
