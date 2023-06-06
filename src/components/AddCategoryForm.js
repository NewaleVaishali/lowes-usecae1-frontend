import React, { useContext, useState } from "react";

import { Form, Modal, Button } from "semantic-ui-react";

import Context from "../config/context";

export default function AddCategoryForm() {
  const context = useContext(Context);
  const { addCategory } = context;

  const [categoryID, setID] = useState("");
  const [categoryName, setName] = useState("");
  const [categoryDescription, setDescription] = useState("");

  const handleChange1 = (e, { value }) => setName({ value });
  const handleChange2 = (e, { value }) => setDescription({ value });

  const handleSubmit = () => {
    const category = {
      id: categoryID.vale,
      name: categoryName.value,
      description : categoryDescription.value,
    };

    addCategory(category);
  };

  return (
    <Modal trigger={<Button fluid primary>Add new Category</Button>}>
      <Modal.Header>Add new Category</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="categoryName"
            label="Name"
            placeholder="Category name"
            onChange={handleChange1}
            value={categoryName.value}
          />
           <Form.Input
            name="categoryDescription"
            label="Description"
            placeholder="Category Description"
            onChange={handleChange2}
            value={categoryDescription.value}
          />
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}