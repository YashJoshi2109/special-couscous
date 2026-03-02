'use client';

import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Search, Plus, Edit2, Trash2, X } from 'lucide-react';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';

interface EmployeeFormData {
  email: string;
  firstName: string;
  lastName: string;
  employeeId: string;
  department: string;
  hourlyRate: number;
  roles: string[];
}

export default function EmployeesPage() {
  const [search, setSearch] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [editingEmployee, setEditingEmployee] = React.useState<any>(null);
  const [formData, setFormData] = React.useState<EmployeeFormData>({
    email: '',
    firstName: '',
    lastName: '',
    employeeId: '',
    department: '',
    hourlyRate: 15,
    roles: ['FRONT_DESK'],
  });

  const queryClient = useQueryClient();

  const employeesQuery = useQuery({
    queryKey: ['admin-employees', search],
    queryFn: () => api.admin.employees(search),
  });

  const createMutation = useMutation({
    mutationFn: (payload: EmployeeFormData) => api.admin.createEmployee(payload),
    onSuccess: () => {
      toast.success('Employee created successfully');
      queryClient.invalidateQueries({ queryKey: ['admin-employees'] });
      setShowModal(false);
      resetForm();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const updateMutation = useMutation({
    mutationFn: (payload: any) => api.admin.updateEmployee(payload),
    onSuccess: () => {
      toast.success('Employee updated successfully');
      queryClient.invalidateQueries({ queryKey: ['admin-employees'] });
      setShowModal(false);
      resetForm();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.admin.deleteEmployee(id),
    onSuccess: () => {
      toast.success('Employee deactivated successfully');
      queryClient.invalidateQueries({ queryKey: ['admin-employees'] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const resetForm = () => {
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      employeeId: '',
      department: '',
      hourlyRate: 15,
      roles: ['FRONT_DESK'],
    });
    setEditingEmployee(null);
  };

  const handleOpenCreate = () => {
    resetForm();
    setShowModal(true);
  };

  const handleOpenEdit = (employee: any) => {
    setEditingEmployee(employee);
    setFormData({
      email: employee.email,
      firstName: employee.name.split(' ')[0],
      lastName: employee.name.split(' ')[1] || '',
      employeeId: employee.employeeId,
      department: employee.department,
      hourlyRate: employee.hourlyRate,
      roles: employee.roles,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.employeeId) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (editingEmployee) {
      await updateMutation.mutateAsync({
        id: editingEmployee.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        department: formData.department,
        hourlyRate: formData.hourlyRate,
        roles: formData.roles,
      });
    } else {
      await createMutation.mutateAsync(formData);
    }
  };

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
          <Button variant="primary" onClick={handleOpenCreate}>
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
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      emp.status === 'ACTIVE' ? 'bg-success-100 text-success-700' : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => handleOpenEdit(emp)}
                      className="p-2 hover:bg-primary-100 rounded-lg transition text-primary-600"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Deactivate ${emp.name}?`)) {
                          deleteMutation.mutate(emp.id);
                        }
                      }}
                      className="p-2 hover:bg-danger-100 rounded-lg transition text-danger-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <GlassCard className="w-full max-w-md p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-heading-md font-bold text-neutral-900">
                {editingEmployee ? 'Edit Employee' : 'Add New Employee'}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="p-2 hover:bg-neutral-100 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-body-sm font-medium text-neutral-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="John"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Doe"
                />
              </div>

              {!editingEmployee && (
                <div>
                  <label className="block text-body-sm font-medium text-neutral-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
              )}

              <div>
                <label className="block text-body-sm font-medium text-neutral-900 mb-2">
                  Employee ID *
                </label>
                <input
                  type="text"
                  required
                  disabled={editingEmployee ? true : false}
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-neutral-100"
                  placeholder="EMP001"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-900 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Operations"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-900 mb-2">
                  Hourly Rate ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData({ ...formData, hourlyRate: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="15.00"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-900 mb-2">
                  Roles
                </label>
                <div className="space-y-2">
                  {['FRONT_DESK', 'SHUTTLE'].map((role) => (
                    <label key={role} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.roles.includes(role)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, roles: [...formData.roles, role] });
                          } else {
                            setFormData({ ...formData, roles: formData.roles.filter((r) => r !== role) });
                          }
                        }}
                        className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-body-sm text-neutral-600">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="tertiary"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                  disabled={createMutation.isPending || updateMutation.isPending}
                >
                  {editingEmployee ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
