import Image from "next/image"

const about = () => {
  	return (
		<div>
			<h1 className="text-7xl font-bold">About Me</h1>
			<p className="mt-5">
				Hey there! My name is Kian and I am from Australia. I love to code things that have function. My favourite languages are Typescript and Rust.
			</p>
			<div className="w-80 h-80 mt-10">
				<h1 className="text-2xl font-semibold mb-2">Friends:</h1>
				<img src="/Dog.png" alt="" />
			</div>
			
		</div>
  	)
}

export default about