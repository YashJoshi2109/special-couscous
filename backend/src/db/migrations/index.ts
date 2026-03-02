// All migrations in order — never edit, only add new ones
export default {
  '001_create_employees': `
    CREATE TABLE IF NOT EXISTS employees (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      username VARCHAR(100) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      full_name VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL CHECK (role IN ('employee', 'admin')),
      hourly_rate NUMERIC(10,2) NOT NULL DEFAULT 10.00,
      is_active BOOLEAN NOT NULL DEFAULT true,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_employees_username ON employees(username);
    CREATE INDEX IF NOT EXISTS idx_employees_email ON employees(email);
  `,
  '002_create_shift_sessions': `
    CREATE TABLE IF NOT EXISTS shift_sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
      clock_in TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      clock_out TIMESTAMPTZ,
      shift_type VARCHAR(20) NOT NULL CHECK (shift_type IN ('morning', 'evening', 'night', 'shuttle')),
      role_type VARCHAR(30) NOT NULL CHECK (role_type IN ('front_desk', 'shuttle_driver')),
      tips NUMERIC(10,2) NOT NULL DEFAULT 0,
      notes TEXT,
      is_edited BOOLEAN NOT NULL DEFAULT false,
      edited_by UUID REFERENCES employees(id),
      edited_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_sessions_employee ON shift_sessions(employee_id);
    CREATE INDEX IF NOT EXISTS idx_sessions_clock_in ON shift_sessions(clock_in);
  `,
  '003_create_bonus_events': `
    CREATE TABLE IF NOT EXISTS bonus_events (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
      type VARCHAR(30) NOT NULL CHECK (type IN ('room_upsell', 'meal_voucher', 'sold_out', 'tip')),
      amount NUMERIC(10,2) NOT NULL,
      reference_id UUID,
      description TEXT,
      triggered_by UUID REFERENCES employees(id),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_bonus_employee ON bonus_events(employee_id);
    CREATE INDEX IF NOT EXISTS idx_bonus_type ON bonus_events(type);
    CREATE INDEX IF NOT EXISTS idx_bonus_date ON bonus_events(created_at);
  `,
  '004_create_meal_vouchers': `
    CREATE TABLE IF NOT EXISTS meal_vouchers (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      scanned_by UUID NOT NULL REFERENCES employees(id),
      voucher_code VARCHAR(100) NOT NULL,
      guest_name VARCHAR(255),
      airline_code VARCHAR(50),
      encrypted_card_data TEXT,
      room_number VARCHAR(20) NOT NULL,
      passenger_count INTEGER NOT NULL CHECK (passenger_count > 0),
      voucher_type VARCHAR(50) DEFAULT 'breakfast',
      bonus_credited BOOLEAN NOT NULL DEFAULT false,
      scanned_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_vouchers_scanned_by ON meal_vouchers(scanned_by);
    CREATE INDEX IF NOT EXISTS idx_vouchers_room ON meal_vouchers(room_number);
  `,
  '005_create_voucher_access': `
    CREATE TABLE IF NOT EXISTS voucher_access (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      owner_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
      shared_with_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
      granted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE(owner_id, shared_with_id)
    );
  `,
  '006_create_audit_log': `
    CREATE TABLE IF NOT EXISTS audit_log (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      actor_id UUID REFERENCES employees(id),
      action VARCHAR(100) NOT NULL,
      target_table VARCHAR(100),
      target_id UUID,
      old_values JSONB,
      new_values JSONB,
      ip_address INET,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_audit_actor ON audit_log(actor_id);
    CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_log(created_at);
  `,
};
