import { Route } from "wouter";
import { HomePage } from "./pages/Home/HomePage";
import { SettingsPage } from "./pages/Settings/SettingsPage";

export const Routes = () => {
    return <>
        <Route path="/" component={HomePage} />
        <Route path="/settings" component={SettingsPage} />
    </>
}
