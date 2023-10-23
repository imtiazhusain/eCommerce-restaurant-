import {
  LiaShippingFastSolid,
  LiaMoneyBillWaveSolid,
  LiaGiftSolid,
} from "react-icons/lia";

import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";
const data = [
  {
    id:1,
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
  },
  {
    id:2,
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid />,
  },
  {
    id:3,
    title: "Free Curbside Pickup",
    icon: <LiaGiftSolid />,
  },
  {
    id:4,
    title: "Support 24/7",
    icon: <FiPhoneCall />,
  },
];
const Feature = () => {
  return <div className="container pt-16">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map(el => <FeatureCard key={el.id} title={el.title} icon={el.icon}/>)}
    </div>
  </div>;
};

export default Feature;
