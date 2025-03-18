import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("appointment", "routes/appointment.jsx"),
    route("about", "routes/about.jsx"),
    route("services", "routes/Services.jsx"),
    route("business-setup", "components/molecules/ServicesSection/business-setup.jsx"),
    route("visa-services", "components/molecules/ServicesSection/visa-services.jsx"),
    route("bank-account", "components/molecules/ServicesSection/bank-account.jsx"),
    route("company-liquidation", "components/molecules/ServicesSection/company-liquidation.jsx"),

];