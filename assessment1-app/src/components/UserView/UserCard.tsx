import React from 'react';
import { Text, Card, Divider, CardBody, Stack, Heading } from '@chakra-ui/react';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const UserCard: React.FC<{ user: User }> = ({ user }) => {

    return <Card maxW="sm">
        <CardBody>
            <Stack mt="6" spacing="3">
                <Heading size="md">{user.name}</Heading>
                <Text><strong>id:</strong> {user.id}</Text>
                <Text><strong>email:</strong> {user.email}</Text>
                <Text><strong>phone:</strong> {user.phone}</Text>
                <Text><strong>website:</strong> {user.website}</Text>
                <Divider />
                <Text><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</Text>
                <Divider />
                <Text><strong>Company:</strong> {user.company.name}</Text>
                <Text><em>{user.company.catchPhrase}</em></Text>
                <Text>{user.company.bs}</Text>
            </Stack>
        </CardBody>
    </Card>;
};

export default UserCard;