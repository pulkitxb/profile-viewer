import { Box, Text, Link } from '@chakra-ui/react';

const Custom404 = () => {
    return (
        <Box textAlign="center" padding="50px">
            <Text fontSize="2xl" color="red.500">404 - Page Not Found</Text>
            <Text>The page you are looking for doesn't exist.</Text>
            <Link variant="underline" href="/" colorPalette="teal" marginTop="6">Home</Link>
        </Box >
    );
};

export default Custom404;
