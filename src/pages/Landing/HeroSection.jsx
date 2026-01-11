const homeBannerBg = "bg-[url('./assets/imgs/home-banner-bg.png')]";

export default function HeroSection() {
  return (
    <section
      className={`w-full h-135 bg-center bg-cover bg-no-repeat ${homeBannerBg} max-[700px]:h-70`}
    />
  );
}