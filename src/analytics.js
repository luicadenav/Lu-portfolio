import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-JZESZRPTCR"); // Reemplaza con tu Measurement ID
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
