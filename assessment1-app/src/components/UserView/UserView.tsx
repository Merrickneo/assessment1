import React from "react";
import { ChakraProvider, VStack, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import UserCard from "./UserCard";
import User from "./User";

export const UserView: React.FC = () => {
    const [userData, setUserData] = React.useState<User[]>([]);

    React.useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response: any) => {
            setUserData(response.data);
            console.log(response);
        });
    }, []);

    return (
        <ChakraProvider>
            <VStack align="center">
                <Text fontSize="2xl" fontWeight="bold" mb={5}>
                    <u>Users</u>
                </Text>
                <Flex
                    direction="row"
                    wrap="wrap"
                    justify="center" // Center the cards horizontally
                    className="user-container"
                    gap={5} // Adjust spacing between cards
                >
                    {userData.map((user, index) => (
                        <UserCard user={user} key={index} />
                    ))}
                </Flex>
            </VStack>
        </ChakraProvider>


    );
};

