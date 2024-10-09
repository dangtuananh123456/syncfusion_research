import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BillInputCompo from "./Pages/BillTemplateDemo/BillInputCompo";

import Dynamic from "./Pages/Dynamic";
import NormalEdit from "./Pages/GridSyncCustom/InputGrid";
import { registerLicense } from '@syncfusion/ej2-base';
const syncfusionLicenseKey = "Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXdfcHVVQ2JeWUV0WEs=";
registerLicense(syncfusionLicenseKey)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<App />} />
          <Route path="/normal" element={<NormalEdit />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/ph-compo" element={<BillInputCompo />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

