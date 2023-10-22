import { Box, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
const fidel = new URL('../assets/fidel-app.gif', import.meta.url).href;
const dictionary = new URL('../assets/dictionary-app.gif', import.meta.url).href;
const flashcards = new URL('../assets/flashcards.gif', import.meta.url).href;

const Project = () => {
    const projects = [
        {
            url: 'https://fidel-keyboard.vercel.app/',
            imagePath: fidel,
            imageAlt: 'Amharic Keyboard app',
            title: 'Amharic Keyboard app',
            description: 'Type your heart out with this simple English-to-Amharic keyboard'
        },
        {
            url: 'https://amharic-dictionary.vercel.app/',
            imagePath: dictionary,
            imageAlt: 'Amharic Dictionary app',
            title: 'Amharic Dictionary app',
            description: "Add, favourite, edit and delete Amharic words to your heart's content with this nifty dictionary"
        },
        {
            url: 'https://basic-amharic.vercel.app/',
            imagePath: flashcards,
            imageAlt: 'Amharic Flashcards app',
            title: 'Amharic Flashcards app',
            description: "A place for you to visit to learn the basics of Amharic"
        }
    ]
  return (
    <>
        {projects.map(project => {
            return (
                <LinkBox as='article' key={project.title}>
                    <Box maxW='m' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={project.imagePath} alt={project.imageAlt} />
                        <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h3'
                        lineHeight='tight'
                        noOfLines={1}
                        >
                            <LinkOverlay href={project.url}>
                                {project.title}
                            </LinkOverlay>
                        </Box>
                        <Box as='p' fontSize='m'>
                            {project.description}
                        </Box>
                    </Box>
                </LinkBox>
            )
        })}
    </>
    );
};

export default Project;