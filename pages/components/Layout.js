"use client"
import { Flex, Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Layout({ children, showSearch = false }) {
    return (
        <Box>
            {/* Navbar */}
            <Flex
                as="nav"
                p={4}
                bg="teal.500"
                color="white"
                justify="space-between"
                align="center"
            >
                <Button variant="link" color="white">
                    <Link href="/">Home</Link>
                </Button>
                {showSearch && (
                    <Flex gap={4} align="center">
                        {/* The search bar and sort will be shown only if `showSearch` is true */}
                    </Flex>
                )}
            </Flex>
            {/* Page Content */}
            <Box p={4}>{children}</Box>
        </Box>
    );
}
