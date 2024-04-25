import { useState } from "react";
import { Box, Button, Input, Text, VStack, Link, Icon } from "@chakra-ui/react";
import { FaPlay, FaRandom } from "react-icons/fa";

const Index = () => {
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [isShuffle, setIsShuffle] = useState(false);

  const handleInputChange = (event) => {
    setPlaylistUrl(event.target.value);
  };

  const shufflePlaylist = () => {
    setIsShuffle(true);
  };

  const createShuffledLink = () => {
    if (!playlistUrl) return "";
    const baseUrl = "https://www.youtube.com/playlist?list=";
    const playlistId = playlistUrl.split("list=")[1];
    return `${baseUrl}${playlistId}&shuffle=1`;
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        YouTube Playlist Shuffler
      </Text>
      <Input placeholder="Enter YouTube Playlist URL" value={playlistUrl} onChange={handleInputChange} />
      <Button leftIcon={<FaRandom />} colorScheme="teal" onClick={shufflePlaylist}>
        Shuffle Playlist
      </Button>
      {isShuffle && playlistUrl && (
        <Box>
          <Text mt={2}>Your shuffled playlist is ready:</Text>
          <Link href={createShuffledLink()} isExternal color="teal.500">
            <Button rightIcon={<FaPlay />} colorScheme="teal">
              Play Shuffled Playlist
            </Button>
          </Link>
        </Box>
      )}
    </VStack>
  );
};

export default Index;
