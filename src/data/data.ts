// data/data.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description:
      "We provide modern and responsive web design services that ensure your brand stands out in the digital space. Our designs are not only visually appealing but also user-friendly and optimized for all devices.",
    image: "https://picsum.photos/200/300",
    price: 300,
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "We provide modern and responsive web design services that ensure your brand stands out in the digital space. Our designs are not only visually appealing but also user-friendly and optimized for all devices.",
    image: "https://picsum.photos/200/300",
    price: 300,
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "We provide modern and responsive web design services that ensure your brand stands out in the digital space. Our designs are not only visually appealing but also user-friendly and optimized for all devices.",
    image: "https://picsum.photos/200/300",
    price: 300,
  },
  {
    id: 4,
    title: "SEO Services",
    description:
      "We provide modern and responsive web design services that ensure your brand stands out in the digital space. Our designs are not only visually appealing but also user-friendly and optimized for all devices.",
    image: "https://picsum.photos/200/300",
    price: 300,
  },
  {
    id: 5,
    title: "Social Media Marketing",
    description:
      "We provide modern and responsive web design services that ensure your brand stands out in the digital space. Our designs are not only visually appealing but also user-friendly and optimized for all devices.",
    image: "https://picsum.photos/200/300",
    price: 300,
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description:
      "We provide modern and responsive web design services that ensure your brand stands out in the digital space. Our designs are not only visually appealing but also user-friendly and optimized for all devices.",
    image: "https://picsum.photos/200/300",
    price: 300,
  },
];

export default servicesData;