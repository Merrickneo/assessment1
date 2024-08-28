import React from 'react';
import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import './AuthorCard.css';

interface CardProps {
  title: string;
  content?: string;
}

interface CardProps {
    title: string;
    content?: string;
  }
  
  const AuthorCard: React.FC<CardProps> = ({ title, content }) => {
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('gray.800', 'white');
  
    return (
      <Box
        className="author-card"
        bg={bg}
        color={color}
      >
        <Flex className="author-card-content">
          <Text className="author-card-title">
            {title}
          </Text>
          {content && (
            <Text className="author-card-text">
              {content}
            </Text>
          )}
        </Flex>
      </Box>
    );
  };
  
  export default AuthorCard;