import { Flex, Box, Button, Input, createListCollection, Text } from "@chakra-ui/react";
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select";
import Link from "next/link";
import { useState, useCallback, useMemo } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function Layout({ children, showSearch = false, setFilteredData, userData, filteredData }) {
    const [searchTerm, setSearchTerm] = useState("");
    const filters = useMemo(
        () =>
            createListCollection({
                items: [
                    { label: "Name", value: "name" },
                    { label: "Email", value: "email" },
                ],
            }),
        []
    );

    const handleSearch = useCallback(
        (e) => {
            console.log(e.target.value);
            const search = e.target.value;
            setSearchTerm(search);
            const filtered = userData.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(filtered);
        },
        [userData, setFilteredData]
    );

    const handleSort = useCallback(
        (e) => {
            const sortValue = e.value[0];
            const sorted = [...filteredData].sort((a, b) => {
                if (sortValue === "name") return a.name.localeCompare(b.name);
                if (sortValue === "email") return a.email.localeCompare(b.email);
                return 0;
            });
            setFilteredData(sorted);
        },
        [filteredData, setFilteredData]
    );

    return (
        <Box>
            <Flex padding="8px 16px" bg="teal.500" color="white" justify="space-between" align="center" minHeight="75px">

                {showSearch ? <Text paddingLeft="16px" fontWeight="semibold" color="white" fontSize="22px">Welcome</Text> : <Link href="/"><Button fontWeight="semibold" variant="link" color="white" fontSize="22px" ><FaChevronLeft />Home</Button></Link>}

                {showSearch && (
                    <Flex align="center" gap={4}>
                        <Box padding="8px">
                            <Input
                                placeholder="Search users"
                                value={searchTerm}
                                onChange={handleSearch}
                                bg="white"
                                color="black"
                                maxWidth="200px"
                            />
                        </Box>

                        <SelectRoot
                            color="gray.950"
                            variant="outline"
                            width="100px"
                            bg="white"
                            borderRadius="md"
                            onValueChange={handleSort}
                            collection={filters}
                        >
                            <SelectTrigger>
                                <SelectValueText placeholder="Sort By" />
                            </SelectTrigger>
                            <SelectContent>
                                {filters.items.map((filter) => (
                                    <SelectItem item={filter} key={filter.value}>
                                        {filter.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </SelectRoot>
                    </Flex>
                )}
            </Flex>
            {children}
        </Box>
    );
}
