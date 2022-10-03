import Head from "next/head"
import Image from "next/image"

const about = () => {
  	return (
		<div>
			<Head>
				<title>About | PointyKone</title>
				<meta name="og:title" content="About | PointyKone" />
                <meta name="og:url" content="https://www.pointykone.com/about" />
			</Head>
			<h1 className="text-7xl font-bold">About Me</h1>
			<p className="mt-5">
				Hey there! My name is Kian and I am from Australia. I love to code things that have function. My favourite languages are Typescript and Rust.
			</p>
			<div className="w-80 mt-10">
				<h1 className="text-2xl font-semibold mb-2">Friends:</h1>
				<Image src="/Dog.png" layout="responsive" width="1080" height="1084"/>
			</div>
			
		</div>
  	)
}

export default about