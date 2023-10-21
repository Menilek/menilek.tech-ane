import { Flex, Link } from '@chakra-ui/react'
import ThemeToggle from "./ThemeToggle";

import { routes } from '../router/routes';

const Navbar = () => {
	return (
		<Flex as='nav' w='full'>
			<Flex
                align="centre"
				alignItems='center'
                alignSelf="flex-start"
				justifyContent='space-between'
				p={[6, 8]}
				mx='auto'
				mb={8}
				maxW='1250px'
				w='full'
			>
                {routes.map((item) => (
                    <Link
                        _hover={{ textDecoration: 'none' }}
                        _focus={{ boxShadow: 'none' }}
                        href={item.path}
                        key={item.title}
                    >
                        {item.title}
                    </Link>
                ))}
                <ThemeToggle />
			</Flex>
		</Flex>
	)
}

export default Navbar;