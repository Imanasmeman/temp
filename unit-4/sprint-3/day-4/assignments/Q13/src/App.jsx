import React, { useEffect } from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  CloseButton,
  Drawer,
  Portal,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffees, setSortBy } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const { data: coffees, loading, error } = useSelector(
    (state) => state.coffee
  );
  const [sortOrder, setSortOrder] = React.useState("");

  useEffect(() => {
    dispatch(fetchCoffees(sortOrder));
  }, [dispatch, sortOrder]);

  const handleSortChange = (order) => {
    setSortOrder(order);
    dispatch(setSortBy(order));
  };

  return (
    <Box p={5}>
      <Drawer.Root placement="start">
        <Drawer.Trigger asChild>
          <Button mb={5} colorScheme="blue">
            Open Sort Options
          </Button>
        </Drawer.Trigger>

        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Sort Options</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <VStack spacing={4} align="start">
                  <Button
                    variant={sortOrder === "asc" ? "solid" : "outline"}
                    onClick={() => handleSortChange("asc")}
                    width="100%"
                  >
                    Price: Low to High
                  </Button>
                  <Button
                    variant={sortOrder === "desc" ? "solid" : "outline"}
                    onClick={() => handleSortChange("desc")}
                    width="100%"
                  >
                    Price: High to Low
                  </Button>
                  <Button
                    variant={sortOrder === "" ? "solid" : "outline"}
                    onClick={() => handleSortChange("")}
                    width="100%"
                  >
                    Default
                  </Button>
                </VStack>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  position="absolute"
                  top="1rem"
                  right="1rem"
                />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>

      {loading && <Text>Loading coffees...</Text>}
      {error && <Text color="red.500">Failed to load coffees.</Text>}

      <Box
        display="grid"
        gridTemplateColumns={["1fr", "repeat(3, 1fr)"]}
        gap={6}
        mt={5}
      >
        {coffees?.map((coffee) => (
          <Box
            key={coffee.id}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            boxShadow="sm"
          >
            <Text fontWeight="bold" mb={2}>
              {coffee.title}
            </Text>
            <Text>Price: ₹{coffee.price}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default App;
