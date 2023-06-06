import React, { useContext, useState, useEffect } from "react";

import { Form, Modal, Button, Header, Dropdown } from "semantic-ui-react";

import Context from "../config/context";

export default function AddItemForm() {
  const context = useContext(Context);
  const { categories, getCategories, addItem } = context;

  useEffect(() => {
    getCategories();
  }, []);

  const listCategories = categories.map(category => ({
    key: category.id,
    text: category.categoryName,
    value: category.id
  }));

  const [itemName, setName] = useState("");
  const [itemId, setId] = useState("");
  const [itemStatus, setStatus] = useState("");
  const [category, setCategory] = useState("");


  const handleChange1 = (e, { value }) => setName({ value });
  const handleChange2 = (e, { value }) => setId({ value });
  const handleChange3 = (e, { value }) => setStatus({ value });
  const handleChange4 = (e, { value }) => setCategory({ value });

  const handleSubmit = () => {
 
    const item = {
      name: itemName.value,
      id: itemId.value,
      status: itemStatus.value,
      category_id: parseInt(category.value),
    };

    addItem(item);
  };

  return (
    <Modal
      trigger={
        <Button primary fluid>
          Add new Item
        </Button>
      }
    >
      <Modal.Header>Add new Item</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="itemName"
            label="Name"
            placeholder=" name"
            onChange={handleChange1}
            value={itemName.value}
          />
            <Form.Input
            name="itemId"
            label="Id"
            placeholder=" id"
            onChange={handleChange2}
            value={itemId.value}
          />
           <Form.Input
            name="itemStatus"
            label="Status"
            placeholder=" status"
            onChange={handleChange3}
            value={itemId.value}
          />
          <Form.Field>
            <Header as="h5">Category</Header>
            <Dropdown
              name="category"
              placeholder="Category"
              fluid
              selection
              options={listCategories}
              onChange={handleChange4}
              value={category.value}
            />
          </Form.Field>

          <Button type="submit">Add</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}