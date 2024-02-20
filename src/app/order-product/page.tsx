"use client"

import { useRouter } from "next/navigation";


export default function OrderProduct() {

	const router = useRouter()

	const handelClick = () => {
		console.log("Placing Your Order");
		router.push("/");
	};

	return (
		<>
			<h1>Order Product</h1>
			<button onClick={handelClick} className="bg-gray-200  text-black border rounded  text-sm font-bold hover:text-white ">Place Order</button>
		</>
	);
}