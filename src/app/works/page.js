import MyWorks from "@/components/MyWorks";
import PageContainer from "@/components/PageContainer";
import React from "react";

export default function page() {
  return (
    <PageContainer>
      <MyWorks isStay={true} />
    </PageContainer>
  );
}
