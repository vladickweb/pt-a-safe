"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { useUsersPaginated } from "@/hooks/useUsersPaginated";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { Table } from "@/components/ui/Table/Table";
import { UserTableRow } from "@/components/users/UserTableRow";
import { UserSkeletonRow } from "@/components/users/UserSkeletonRow";
import { PageSizeSelector } from "@/components/ui/PageSizeSelector/PageSizeSelector";
import { useMemo, useState, useEffect, useCallback } from "react";

const COLUMNS = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "company", label: "Company" },
  { key: "status", label: "Status" },
  { key: "lastLogin", label: "Last Login" },
];

export default function UsersPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const { data, isLoading } = useUsersPaginated(page, pageSize);
  const users = data?.data ?? [];

  useEffect(() => {
    if (data?.total) {
      setTotal(data.total);
    }
  }, [data?.total]);

  const handlePageSizeChange = useCallback(
    (newPageSize: number) => {
      setPageSize(newPageSize);
      setPage(1);
    },
    [setPageSize, setPage],
  );

  const totalPages = useMemo(
    () => Math.ceil(total / pageSize),
    [total, pageSize],
  );

  return (
    <PageLayout>
      <div className="p-4 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <PageSizeSelector
            pageSize={pageSize}
            setPageSize={handlePageSizeChange}
          />
          <div className="text-sm opacity-70">
            Showing {(page - 1) * pageSize + 1} to{" "}
            {Math.min(page * pageSize, total)} of {total} records
          </div>
        </div>

        <Table columns={COLUMNS} testId="users-table">
          {isLoading
            ? Array.from({ length: pageSize }).map((_, index) => (
                <UserSkeletonRow key={index} />
              ))
            : users.map((user) => <UserTableRow key={user.id} user={user} />)}
        </Table>

        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          isLoading={isLoading}
          pageSize={pageSize}
        />
      </div>
    </PageLayout>
  );
}
