import { Box, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
const flashcard = new URL('../assets/flashcards.webp', import.meta.url).href;

const Blogpost = () => {
    const post = {
        url: 'https://dev.to/menilek/create-a-french-flashcard-carousel-in-an-evening-3hc7',
        imagePath: flashcard,
        imageAlt: 'Flashcard tutorial blogpost',
        title: 'Flashcard Tutorial',
        postDate: '22nd of October, 2023',
        description: 'Learn how to create and deploy a flashcard application using Vue, Vite and Vercel to help you boost your language learning skills!'
    }
  return (
    <LinkBox as='article'>
        <Box maxW='m' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={flashcard} alt={post.imageAlt} />
            <Box
            mt='1'
            fontWeight='semibold'
            as='h3'
            lineHeight='tight'
            noOfLines={1}
            >
                <LinkOverlay href={post.url}>
                    {post.title}
                </LinkOverlay>
            </Box>
            <Box as='p' fontSize='m'>
                {post.description}
            </Box>
            <Box as='p' fontSize='sm'>
                {post.postDate}
            </Box>
        </Box>
    </LinkBox>
  );
};

export default Blogpost;