"use client";

import { z } from "zod";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./components/data-table-pagination";
import { DataTableToolbar } from "./components/data-table-toolbar";
import { Input } from "../input";
import { Button } from "../button";
import { PlusCircle } from "lucide-react";
import { addNewsLetterSubscriber } from "@/server-actions/user.actions";
import { newsletterSubscriberSchema } from "./data/schema";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onNewSubscriberAdded: (subscriber: NewsletterSubscriber) => void;
}

type NewsletterSubscriber = z.infer<typeof newsletterSubscriberSchema>;

export function DataTable<TData, TValue>({
  columns,
  data,
  onNewSubscriberAdded,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [email, setEmail] = React.useState<string>("");

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const addNewSubscriber = async () => {
    try {
      const newSubscriber = await addNewsLetterSubscriber(email);

      onNewSubscriberAdded(newSubscriber);
    } catch (error) {
      console.error("error:", error);
    } finally {
      setEmail("");
    }
  };

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />

      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Add a New Subscriber
        </h2>
        <p className="text-[var(--color-muted-foreground)]">
          Enter an email address below to add someone to your newsletter list.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Burada ekleme işlemi yapılabilir: örneğin API çağrısı
          addNewSubscriber();
          e.currentTarget.reset();
        }}
        className="flex items-center gap-2 mt-4"
      >
        <Input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <Button
          variant="default"
          size="sm"
          className="h-8 data-[state=open]:bg-accent"
        >
          <PlusCircle />
          <span>Add Subscriber</span>
        </Button>
      </form>
    </div>
  );
}
