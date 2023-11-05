import Image from 'next/image'
import ProductCard from "@/app/components/ProductCard";
import AddToCart from "@/app/components/AddToCart";

export default function Home() {
    return (
        <main>
            hello world
            <ProductCard/>
            <AddToCart/>
        </main>
    )
}
