import { createFileRoute } from "@tanstack/react-router";
import { SectionOne } from "../Components/section1/section_one";
import { SectionTwo } from "../Components/section2/section_two";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </>
  );
}
