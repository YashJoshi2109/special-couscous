export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-display-md font-bold text-neutral-900 mb-4">
          HotelShift Pro
        </h1>
        <p className="text-body-lg text-neutral-600 mb-8">
          Premium Employee Management & Time Tracking
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="btn btn-primary"
          >
            Sign In
          </a>
          <a
            href="/admin/login"
            className="btn btn-secondary"
          >
            Admin Portal
          </a>
        </div>
      </div>
    </div>
  );
}
