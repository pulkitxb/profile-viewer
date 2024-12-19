import { Box, Text } from '@chakra-ui/react';

const Custom404 = () => {
    return (
        <Box textAlign="center" padding="50px">
            <Text fontSize="2xl" color="red.500">404 - Page Not Found</Text>
            <Text>The page you are looking for doesn't exist.</Text>
        </Box>
    );
};

export default Custom404;
