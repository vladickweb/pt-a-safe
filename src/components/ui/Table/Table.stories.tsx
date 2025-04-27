import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: "object",
      defaultValue: [
        { key: "name", label: "Nombre" },
        { key: "age", label: "Edad" },
        { key: "email", label: "Email" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: [
      { key: "name", label: "Nombre" },
      { key: "age", label: "Edad" },
      { key: "email", label: "Email" },
    ],
    children: (
      <>
        <tr>
          <td className="px-4 py-2">Juan Pérez</td>
          <td className="px-4 py-2">25</td>
          <td className="px-4 py-2">juan@example.com</td>
        </tr>
        <tr>
          <td className="px-4 py-2">María García</td>
          <td className="px-4 py-2">30</td>
          <td className="px-4 py-2">maria@example.com</td>
        </tr>
      </>
    ),
  },
};

export const EmptyTable: Story = {
  args: {
    columns: [
      { key: "name", label: "Nombre" },
      { key: "age", label: "Edad" },
      { key: "email", label: "Email" },
    ],
    children: null,
  },
};

export const CustomColumns: Story = {
  args: {
    columns: [
      { key: "id", label: "ID" },
      { key: "product", label: "Producto" },
      { key: "price", label: "Precio" },
      { key: "stock", label: "Stock" },
    ],
    children: (
      <>
        <tr>
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">Laptop</td>
          <td className="px-4 py-2">$999.99</td>
          <td className="px-4 py-2">15</td>
        </tr>
        <tr>
          <td className="px-4 py-2">2</td>
          <td className="px-4 py-2">Smartphone</td>
          <td className="px-4 py-2">$699.99</td>
          <td className="px-4 py-2">30</td>
        </tr>
      </>
    ),
  },
};
