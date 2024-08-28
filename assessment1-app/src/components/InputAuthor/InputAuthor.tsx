import React, { useState } from 'react';
import { ChakraProvider, VStack, Flex } from '@chakra-ui/react';
import AuthorCard from '../AuthorCard/AuthorCard';
import './InputAuthor.css';

const InputAuthor: React.FC = () => {
    const [author, setAuthor] = useState<string>('');
    const [authorsList, setAuthorsList] = useState<string[]>([]);


    const handleSubmit = () => {
        if (author.trim()) {
            setAuthorsList([...authorsList, author.trim()]);
            setAuthor('');
        }
    };

    return (
        <ChakraProvider>
            <Flex
                direction="column"
                align="center"
                justify="center"
                h="90vh"
                p={5}
                bg="gray.100"
                overflow="hidden"
            >
                <VStack spacing={4} align="center">
                    <input
                        placeholder="Enter Author Name"
                        value={author}
                        className="main-input"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <button onClick={handleSubmit} className="submit-button">
                        Submit
                    </button>
                </VStack>
                <div className="author-container">
                    {authorsList.map((name, index) => (
                        <div className="author-card" key={index}>
                            <AuthorCard title={name} />
                        </div>
                    ))}
                </div>
            </Flex>
        </ChakraProvider>
    );
};

export default InputAuthor;
