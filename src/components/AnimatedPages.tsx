import React, { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { OnDemand } from "./../layouts/solutions/onDemand";
import { Power } from "./../layouts/solutions/power";
import { Platform } from "./../layouts/solutions/platform";
import { Contact } from "./../pages/Contact";
import { Homepage } from "./../pages/Homepage";
import { Solutions } from "./../pages/Solutions";
import { About } from "./../pages/About";
import { Energy } from "./../layouts/solutions/energy";
import { AnimatePresence } from "framer-motion";
import { Calendly } from "../layouts/contact/calendly";

export const AnimatedPages: FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<Homepage />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Solutions />} path="/solutions">
          <Route element={<Power />} path="powerlineinspectionservices" />
          <Route element={<Energy />} path="solarandwindinspectionservices" />
          <Route element={<Platform />} path="aisoftware" />
          <Route element={<OnDemand />} path="ondemand" />
        </Route>

        <Route element={<Contact />} path="/contact" />
        <Route element={<Calendly />} path="/calendly" />
      </Routes>
    </AnimatePresence>
  );
};
