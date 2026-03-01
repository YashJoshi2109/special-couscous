'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Search, Plus } from 'lucide-react';
import { api } from '@/lib/api';

export default function EmployeesPage() {
  const [search, setSearch] = React.useState('');
  const employeesQuery = useQuery({
    queryKey: ['admin-employees', search],
    queryFn: () => api.admin.employees(search),
  });

  const employees = employeesQuery.data?.employees ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />

      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-display-md font-bold text-neutral-900">
              Employees
            </h1>
            <p className="text-body-md text-neutral-600">
              Manage employee accounts and settings
            </p>
          </div>
          <Button variant="primary">
            <Plus className="w-4 h-4" />
            Add Employee
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Employees Table */}
        <GlassCard className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="px-6 py-4 text-left text-body-md font-semibold text-neutral-900">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-body-md font-semibold text-neutral-900">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-body-md font-semibold text-neutral-900">
                  Hourly Rate
                </th>
                <th className="px-6 py-4 text-left text-body-md font-semibold text-neutral-900">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-body-md font-semibold text-neutral-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="px-6 py-4 text-body-md text-neutral-900">
                    {emp.name}
                  </td>
                  <td className="px-6 py-4 text-body-md text-neutral-600">
                    {emp.roles.join(', ') || '-'}
                  </td>
                  <td className="px-6 py-4 text-body-md text-neutral-600">
                    {formatCurrency(emp.hourlyRate)}/h
                  </td>
                  <td className="px-6 py-4">
                    <span className="chip-success">{emp.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="tertiary" size="sm">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
              {!employeesQuery.isLoading && employees.length === 0 && (
                <tr>
                  <td className="px-6 py-8 text-body-md text-neutral-500" colSpan={5}>
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </GlassCard>
      </main>
    </div>
  );
}
