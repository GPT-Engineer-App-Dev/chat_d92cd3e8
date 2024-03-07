import React, { useState } from "react";
import { Box, VStack, HStack, Text, Avatar, Input, Button, Divider, Heading, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch, FaPaperPlane } from "react-icons/fa";

const contacts = [
  { id: 1, name: "John Doe", lastMessage: "Hey there!", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Jane Smith", lastMessage: "How are you?", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzA5NzMzNTg5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Mike Johnson", lastMessage: "Let's meet up!", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const ChatItem = ({ name, lastMessage, avatar, onClick }) => (
  <Box p={4} borderBottom="1px" borderColor="gray.200" _hover={{ bg: "gray.100", cursor: "pointer" }} onClick={onClick}>
    <HStack>
      <Avatar size="md" name={name} src={avatar} />
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.500">
          {lastMessage}
        </Text>
      </VStack>
    </HStack>
  </Box>
);

const ChatWindow = ({ contact }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // TODO: Implement sending message logic
    setMessage("");
  };

  return (
    <VStack h="100%" spacing={4} p={4}>
      <Flex w="100%">
        <Avatar size="md" name={contact.name} src={contact.avatar} mr={2} />
        <Heading size="lg">{contact.name}</Heading>
        <Spacer />
        <Button>...</Button>
      </Flex>
      <Divider />
      <VStack align="start" spacing={4} overflowY="auto" flex={1}>
        {/* TODO: Render chat messages */}
      </VStack>
      <HStack w="100%">
        <Input placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSendMessage} leftIcon={<FaPaperPlane />}>
          Send
        </Button>
      </HStack>
    </VStack>
  );
};

const Index = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <HStack h="100vh" spacing={0}>
      <Box w="30%" borderRight="1px" borderColor="gray.200">
        <VStack align="start" spacing={4} p={4}>
          <Heading size="xl">Chats</Heading>
          <HStack w="100%">
            <Input placeholder="Search" />
            <Button colorScheme="blue" leftIcon={<FaSearch />}>
              Search
            </Button>
          </HStack>
          <VStack align="start" w="100%" spacing={0}>
            {contacts.map((contact) => (
              <ChatItem key={contact.id} {...contact} onClick={() => setSelectedContact(contact)} />
            ))}
          </VStack>
        </VStack>
      </Box>
      <Box flex={1}>
        {selectedContact ? (
          <ChatWindow contact={selectedContact} />
        ) : (
          <VStack h="100%" justify="center" spacing={4}>
            <Heading size="lg">Select a chat to start messaging</Heading>
          </VStack>
        )}
      </Box>
    </HStack>
  );
};

export default Index;
