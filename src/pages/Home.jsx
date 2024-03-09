import React from "react";
import { Home as HomeComponent } from "../components";
import MainLayout from "../Layouts/Main/MainLayout";

function Home() {
  return (
    <MainLayout>
      <HomeComponent defaultSelectedKey="1" />
    </MainLayout>
  );
}

export default Home;
