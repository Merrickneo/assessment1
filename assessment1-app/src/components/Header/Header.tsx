import React from 'react';
import { Box, Flex, Heading, Menu, MenuButton, MenuItem, Button, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import './Header.css';
import { Modes } from '../../Modes';

interface HeaderProps {
    mode: Modes;
    setMode: (mode: Modes) => void;
}

const Header: React.FC<HeaderProps> = ({ mode, setMode }) => {
    const modes = Object.values(Modes);
    return (
        <Box as="header" className="header-container">
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Current Mode: {mode}
                </MenuButton>
                <MenuList>
                    {modes.map((mode, index) => (
                        <MenuItem color="black" className="menu-option" key={index} onClick={() => setMode(mode)}>{mode}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
            <Flex alignItems="left">
                <Heading as="h1" className="header-title">
                    Author Repository
                </Heading>
            </Flex>
        </Box>
    );
};

export default Header;
