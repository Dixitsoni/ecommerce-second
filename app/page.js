import DefaultLayout from "./defaultlayout";
import Carousel from "./components/carousel/Carousel";
import WhyChooseUs from "./components/whychooseus/WhyChooseUs";
import Products from "./components/products/Products";

export default function Home() {
  return (
    <DefaultLayout>
      <Carousel />
      <Products />
      <WhyChooseUs />
    </DefaultLayout>
  );
}
