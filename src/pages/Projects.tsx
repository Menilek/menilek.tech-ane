import { Heading } from '@chakra-ui/react'
import React from 'react'
import Project from '../components/Project'

const Projects = () => {
	return (
		<div>
			<Heading color='heading' mb={4}>
				Projects
			</Heading>
			<Project />
		</div>
	)
}
export default Projects