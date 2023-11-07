import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../redus/gallerySelectors";

const GalleryCard = ({ item }) => {
  const items = useSelector(selectItems)
  return (
    <Card maxW="300px">
      <CardBody>
        <Image
          src="https://static-cdn4-2.vigbo.tech/u32916/46153/blog/3673346/2168993/27149264/1000-aleksandrova_marina-2c03cddceeee915ec853670fdbbc7f37.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.name}</Heading>

          <Text color="blue.600" fontSize="2xl">
            {items.length}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justify="center">
        <Button colorScheme="orange">Go to Gallery</Button>
      </CardFooter>
    </Card>
  );
};

export default GalleryCard;
