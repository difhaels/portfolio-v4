import PageContainer from "@/components/PageContainer";
import React from "react";
import MySkills from "@/components/MySkills";
import MyResume from "@/components/MyResume";

export default function page() {
  return (
    <PageContainer>
      <MySkills />
      <MyResume />
    </PageContainer>
  );
}
