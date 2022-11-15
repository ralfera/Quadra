import { NavigationContainer as Navigation } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export default function Routes() {
  return (
    <Navigation>
      <AppRoutes />
    </Navigation>
  );
}