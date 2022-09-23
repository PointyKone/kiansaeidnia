import Button from "./Button"

const Hero = () => {
    return (
        <section className="mt-16">
            <h1 className="text-7xl font-bold">Hi I am Kian</h1>
            <h3 className="text-4xl my-3">I am a backend developer.</h3>
            <p className="gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempora enim sapiente perspiciatis itaque eligendi. Corrupti adipisci doloribus magnam praesentium.</p>
            <Button className="bg-purple-600 text-white px-6" >Hire Me!</Button>
        </section>
    )
}

export default Hero