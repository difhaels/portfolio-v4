import AboutMe from "@/components/AboutMe";
import ClientReviews from "@/components/ClientReviews";
import MyServices from "@/components/MyServices";
import PageContainer from "@/components/PageContainer";
import React from "react";

export default function page() {
  return (
    <PageContainer>
      <AboutMe />
      <MyServices />
      <ClientReviews />
    </PageContainer>
  );
}
