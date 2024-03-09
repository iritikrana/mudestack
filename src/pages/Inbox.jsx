import React from "react";
import { Inbox as InboxComponent } from "../components";
import MainLayout from "../Layouts/Main/MainLayout";

function Inbox() {
  return (
    <MainLayout>
      <InboxComponent defaultSelectedKey="2"/>
    </MainLayout>
  );
}

export default Inbox;
