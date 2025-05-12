import { Alertas } from "../../../precentacion/pages/private/alertas";
import { Icon } from "../../../precentacion/shared/icons";
import { Denuncias } from "../../../precentacion/pages/private/denuncias";
import { Graficas } from "../../../precentacion/pages/private/graficas";
import { Users } from "../../../precentacion/pages/private/users";
import { Contactos } from "../../../precentacion/pages/private/contactos";
import { Violentometro } from "../../../precentacion/pages/private/volentometro";
import { Login } from "../../../precentacion/pages/public/login";

export interface routesType {
  path: string;
  name: string;
  component: React.FC;
  icon?: React.ReactElement;
}

export const privateRouter: routesType[] = [
  {
    path: "/admin/graphics",
    name: "Gráficas",
    component: Graficas,
    icon: <Icon name="ChartBar" size={18} />,
  },
  {
    path: "/admin/alerts",
    name: "Alertas",
    component: Alertas,
    icon: <Icon name="Bell" size={18} />,
  },
  {
    path: "/admin/denuncias",
    name: "Denuncias",
    component: Denuncias,
    icon: <Icon name="FileWarning" size={18} />,
  },

  {
    path: "/admin/users",
    name: "Usuarios",
    component: Users,
    icon: <Icon name="Users" size={18} />,
  },
  {
    path: "/admin/contacts",
    name: "Contactos",
    component: Contactos,
    icon: <Icon name="ContactRound" size={18} />,
  },
  {
    path: "/admin/violentometro",
    name: "Violentómetro",
    component: Violentometro,
    icon: <Icon name="VolumeOff" size={18} />,
  },
];

export const publicRouter: routesType[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];
