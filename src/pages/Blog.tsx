import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Blogpost from '../components/Blogpost'


const Blog = () => {
	return (
		<div>
			<Heading color='heading' mb={4}>
            	Blog
			</Heading>
			<Text fontSize="lg">
				My thoughts and pieces of work that may help others or things that I simply had fun learning
			</Text>
			<Blogpost />
		</div>
	)
}
export default Blog