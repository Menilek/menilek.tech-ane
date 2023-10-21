import { Heading } from '@chakra-ui/react'
import React from 'react'
import '../App.css';

const greetings = ['Hey', 'Ola', 'Salut', 'Selam', 'Ni hao'];

const getGreeting = () => {
	const index = Math.floor(Math.random() * greetings.length);
	return greetings[index];
}

const Home = () => {
	return (
		<div>
			<Heading color='heading' mb={4} className="floating">
				{ getGreeting() }, I&apos;m Menilek Techane
			</Heading>
		</div>
	)
}
export default Home