import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SupportPage from "./pages/SupportPage";
import TermsPage from "./pages/TermsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="delete-account" element={<DeleteAccountPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
}
