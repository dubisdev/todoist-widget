import { Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Routes } from "./Routes";
import { AppLayout } from "./components/AppLayout";

function App() {
  return (
    <Router hook={useHashLocation}>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  );
}

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
})

document.addEventListener("keydown", (e) => {

  if (e.key === "F12" || (e.ctrlKey && e.key === "i")) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.key === "F5" || (e.ctrlKey && e.key === "r")) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.key === "F11") {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.key === "F1") {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.key === "F2") {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.key === "F3") {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.key === "F7") {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }


});

export default App;
