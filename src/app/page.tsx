
import Hero from "@/app/components/Hero"
import Image from "next/image";
import { Herr_Von_Muellerhoff } from "next/font/google";
import Features from "./components/Features";
import Listings from "./components/Listings";
import Email from "./components/Email";
import Features1 from "./components/Features1";
import Link from "next/link";
import Listings2 from "./components/Listings2";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
 
    <Header/>
    <Hero/>
    <Features />
    <Listings/>
    <Listings2/>
        <Email/>
    <Features1/>
    <Footer/>
    <br />
   </div>
  );  
}