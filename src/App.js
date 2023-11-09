import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

import Footer from "./components/Footer";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Kontrakan from "./pages/Kontrakan";
import Kosan from "./pages/Kosan";

import ResetPassword from "./pages/ResetPassword";
import ProductDetailKosan from "./pages/ProductDetail/ProductDetailKosan";
import ProductDetailKontrakan from "./pages/ProductDetail/ProductDetailKontrakan";
import ProductDetailNearby from "./pages/ProductDetail/ProductDetailNearby";
import TelyuNearby from "./pages/TelyuNearby";
import NotFound from "./pages/NotFound";
import HelpSignup from "./pages/HelpPages/AuthHelp/HelpSignup";
import HelpLogin from "./pages/HelpPages/AuthHelp/HelpLogin";
import HelpForgotPwd from "./pages/HelpPages/AuthHelp/HelpForgotPwd";
import HelpFindKs from "./pages/HelpPages/KosanHelp/HelpFindKs";
import HelpFilterKs from "./pages/HelpPages/KosanHelp/HelpFilterKs";
import HelpContactKs from "./pages/HelpPages/KosanHelp/HelpContactKs";
import HelpFindKt from "./pages/HelpPages/KontrakanHelp/HelpFindKt";
import HelpFilterKt from "./pages/HelpPages/KontrakanHelp/HelpFilterKt";
import HelpContactKt from "./pages/HelpPages/KontrakanHelp/HelpContactKt";
import HelpFindNb from "./pages/HelpPages/NearbyHelp/HelpFindNb";
import HelpContactNb from "./pages/HelpPages/NearbyHelp/HelpContactNb";

function App() {
  return (
    <div className="z-auto mx-auto max-w-[1920px] ">
      <Router>
        <NavigationBar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/kosan" element={<Kosan />}></Route>
            <Route path="/kontrakan" element={<Kontrakan />}></Route>
            <Route path="/telyuNearby" element={<TelyuNearby />}></Route>
            <Route
              path="/productDetailKosan/:idKosan/:idRoom"
              element={<ProductDetailKosan />}
            ></Route>
            <Route
              path="/productDetailNearby/:idNearby"
              element={<ProductDetailNearby />}
            ></Route>
            <Route
              path="/productDetailKontrakan/:idKontrakan"
              element={<ProductDetailKontrakan />}
            ></Route>
            <Route path="/resetPassword" element={<ResetPassword />}></Route>
            <Route path="/helpSignup" element={<HelpSignup />}></Route>
            <Route path="/helpLogin" element={<HelpLogin />}></Route>
            <Route path="/helpForgotPwd" element={<HelpForgotPwd />}></Route>
            <Route path="/helpFindKosan" element={<HelpFindKs />}></Route>
            <Route path="/helpFilterKosan" element={<HelpFilterKs />}></Route>
            <Route path="/helpContactKosan" element={<HelpContactKs />}></Route>
            <Route path="/helpFindKontrakan" element={<HelpFindKt />}></Route>
            <Route
              path="/helpFilterKontrakan"
              element={<HelpFilterKt />}
            ></Route>
            <Route
              path="/helpContactKontrakan"
              element={<HelpContactKt />}
            ></Route>
            <Route path="/helpFindNearby" element={<HelpFindNb />}></Route>
            <Route
              path="/helpContactNearby"
              element={<HelpContactNb />}
            ></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
