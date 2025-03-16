import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("appointment", "routes/appointment.jsx"),
    route("about", "routes/about.jsx"),
];