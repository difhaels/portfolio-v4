import Container from "./Container";
import Sosmed from "./Sosmed";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0F172A]">
      <Container>
        <div className="flex flex-col items-center justify-center gap-5 p-5 sm:flex-row sm:justify-between sm:gap-0">
          <Sosmed />
          <h1 className="text-gray-400">
            © 2025, All right reserved{" "}
            <span className="text-white">Difhaels</span>
          </h1>
        </div>
      </Container>
    </footer>
  );
}
