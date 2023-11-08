import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  Select,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addGalleryItemThunk } from "../../redus/galleryReducer";

const CreateGalleryCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const handleAddGallery = (data) => {
    console.log("Data to be sent:", data);

    dispatch(addGalleryItemThunk(data));

    reset();
  };

  return (
    <>
      <Box bg="white" p="10px" height='100%'>
        <Heading>Create gallery</Heading>

        <form onSubmit={handleSubmit(handleAddGallery)}>
          <FormControl>
            <FormLabel>
              Gallery name:
              <Input
                {...register("name", { required: true })}
                type="text"
                placeholder="For example, Lilia 8 days"
              />
            </FormLabel>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>
              Date of photoshoot
              <Input
                {...register("date")}
                type="date"
                placeholder="Select Date and Time"
                size="md"
              />
            </FormLabel>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>
              Storage life
              <Select placeholder="Pick the duration">
                <option value="option1">Forever</option>
                <option value="option2">1 month</option>
                <option value="option3">3 months</option>
                <option value="option3">1 year</option>
              </Select>
            </FormLabel>
          </FormControl>

          <Button type="submit" colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button type="button">Cancel</Button>
        </form>
        
        <Box>

        </Box>
      </Box>
    </>
  );
};

export default CreateGalleryCard;
