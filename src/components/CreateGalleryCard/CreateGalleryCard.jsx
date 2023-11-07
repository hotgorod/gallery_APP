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
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addGalleryItemThunk } from "../../redus/galleryReducer";

const CreateGalleryCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

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
      <Box bg="white" maxW="300px" p="30px">
        <Button onClick={onOpen} type="button" colorScheme="orange">
          Create gallery
        </Button>

        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create gallery</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSubmit(handleAddGallery)}>
                <FormControl>
                  <FormLabel>
                    Gallery name:
                    <Input
                      {...register("name", { required: true })}
                      type="text"
                      ref={initialRef}
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
                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Save
                  </Button>
                  <Button type="button" onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default CreateGalleryCard;
