"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { consentOptions, statuses, sourceOptions } from "../data/data";
import { NewsletterSubscriber } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import WorldFlag from "react-world-flags";

export const columns: ColumnDef<NewsletterSubscriber>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subscriber Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");

      if (!createdAt) return null;

      const currentDate = new Date();
      const userCreatedDate = new Date(createdAt as string);
      const differenceInTime =
        currentDate.getTime() - userCreatedDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      const label =
        differenceInDays <= 30
          ? { value: "new", label: "New Subscriber" }
          : { value: "old", label: "Old Subscriber" };

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("email")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => {
      const country: string = row.getValue("country");

      return (
        <div className="flex items-center space-x-2">
          {country && (
            <WorldFlag
              code={country === "UK" ? "GB" : country}
              style={{ width: 20, height: 15 }}
            />
          )}
          <span>{country}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => {
      const city: string = row.getValue("city");
      return <span>{city}</span>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "consent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Consent" />
    ),
    cell: ({ row }) => {
      const consent = consentOptions.find(
        (option) => option.value === row.getValue("consent")
      );

      if (!consent) {
        return null;
      }

      return (
        <div className="flex items-center">
          {consent.icon && (
            <consent.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{consent.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),
    cell: ({ row }) => {
      const source = sourceOptions.find(
        (option) => option.value === row.getValue("source")
      );

      if (!source) {
        return null;
      }

      return (
        <div className="flex items-center">
          {source.icon && (
            <source.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{source.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");

      if (!createdAt) {
        return null;
      }

      const formattedDate = new Date(createdAt as string).toLocaleString();

      return (
        <div className="flex items-center">
          <span>{formattedDate}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "unsubscribedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unsubscribed At" />
    ),
    cell: ({ row }) => {
      const unsubscribedAt = row.getValue("unsubscribedAt");

      if (!unsubscribedAt) {
        return null;
      }

      const formattedDate = new Date(unsubscribedAt as string).toLocaleString();

      return (
        <div className="flex items-center">
          <span>{formattedDate}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
